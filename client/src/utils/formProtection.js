const MINIMUM_FILL_TIME_MS = 3000;
const FORM_COOLDOWN_MS = 30_000;
const DUPLICATE_COOLDOWN_MS = 5 * 60_000;

function readReservation(key) {
  try {
    return window.localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function readTimestamp(key) {
  const timestamp = Number(readReservation(key).split(":")[0]);
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function writeReservation(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The form's in-memory guard remains active when browser storage is unavailable.
  }
}

function removeReservation(key, expectedValue) {
  try {
    if (window.localStorage.getItem(key) === expectedValue) {
      window.localStorage.removeItem(key);
    }
  } catch {
    // The form's in-memory guard remains active when browser storage is unavailable.
  }
}

function removeExpiredReservations(prefix, now) {
  try {
    const expiredKeys = [];
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (!key?.startsWith(`${prefix}:duplicate:`)) {
        continue;
      }
      if (now - readTimestamp(key) >= DUPLICATE_COOLDOWN_MS) {
        expiredKeys.push(key);
      }
    }
    expiredKeys.forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // Expired-key cleanup is best effort; timestamp checks still enforce the limit.
  }
}

function countUrls(value) {
  return value.match(/(?:https?:\/\/|www\.)\S+/gi)?.length || 0;
}

function hasSuspiciousText(value, maxUrls) {
  const controlCharacters = Array.from(value).some((character) => {
    const codePoint = character.codePointAt(0);
    return (codePoint < 32 && ![9, 10, 13].includes(codePoint)) || codePoint === 127;
  });

  return (
    controlCharacters ||
    /<[^>]*>|javascript\s*:|data\s*:\s*text\/html|on\w+\s*=/i.test(value) ||
    countUrls(value) > maxUrls ||
    /([\p{L}\p{N}])\1{11,}/iu.test(value)
  );
}

function normalizeField(value, rule) {
  if (rule.maxLength && value.length > rule.maxLength) {
    return { valid: false, value: value.trim() };
  }

  let normalized = value.trim();
  if (rule.type === "message") {
    normalized = normalized.replace(/\r\n?/g, "\n").replace(/[ \t]+/g, " ");
  } else {
    normalized = normalized.replace(/\s+/g, " ");
  }

  if (rule.type === "phone" || rule.type === "indianPhone") {
    if (!/^\+?[0-9\s().-]+$/.test(normalized)) {
      return { valid: false, value: normalized };
    }
    const digits = normalized.replace(/\D/g, "");
    if (rule.type === "indianPhone") {
      const nationalNumber =
        digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
      if (!/^[6-9]\d{9}$/.test(nationalNumber)) {
        return { valid: false, value: normalized };
      }
      return { valid: true, value: nationalNumber };
    }
    return {
      valid: digits.length >= 7 && digits.length <= 15,
      value: digits,
    };
  }

  if (rule.type === "email") {
    return {
      valid:
        normalized.length <= rule.maxLength &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized),
      value: normalized.toLowerCase(),
    };
  }

  if (normalized.length > rule.maxLength) {
    return { valid: false, value: normalized };
  }

  if (rule.type === "name" && !/\p{L}/u.test(normalized)) {
    return { valid: false, value: normalized };
  }

  if (rule.type === "course" && !rule.options.includes(normalized)) {
    return { valid: false, value: normalized };
  }

  if (rule.type === "choice" && !rule.options.includes(normalized)) {
    return { valid: false, value: normalized };
  }

  return {
    valid: !hasSuspiciousText(normalized, rule.maxUrls ?? 0),
    value: normalized,
  };
}

export function normalizeAndValidate(values, rules) {
  const normalizedValues = { ...values };

  for (const [field, rule] of Object.entries(rules)) {
    const result = normalizeField(String(values[field] ?? ""), rule);
    if (!result.valid || (rule.required && !result.value)) {
      return { valid: false, values: normalizedValues };
    }
    normalizedValues[field] = result.value;
  }

  return { valid: true, values: normalizedValues };
}

async function fingerprint(values) {
  const email = String(values.email ?? "").trim().toLowerCase();
  const phone = String(values.phone ?? "").replace(/\D/g, "");
  const source = `${email}|${phone}`;
  if (!window.crypto?.subtle) {
    return "";
  }

  try {
    const digest = await window.crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(source),
    );
    return Array.from(new Uint8Array(digest), (byte) =>
      byte.toString(16).padStart(2, "0"),
    ).join("");
  } catch {
    return "";
  }
}

export function createFormProtection(formId) {
  const prefix = `aviaedu4:${formId}`;
  const rateLimitKey = `${prefix}:last-submit`;
  const duplicateMemory = new Map();
  let memoryLastSubmission = 0;

  return {
    async reserve(values, openedAt) {
      const now = Date.now();
      removeExpiredReservations(prefix, now);
      for (const [key, timestamp] of duplicateMemory) {
        if (now - timestamp >= DUPLICATE_COOLDOWN_MS) {
          duplicateMemory.delete(key);
        }
      }
      const digest = await fingerprint(values);
      const duplicateKey = digest ? `${prefix}:duplicate:${digest}` : "";
      const duplicateMemoryKey =
        digest || `${String(values.email ?? "").trim().toLowerCase()}|${String(values.phone ?? "").replace(/\D/g, "")}`;
      const lastSubmissionAt = Math.max(
        memoryLastSubmission,
        readTimestamp(rateLimitKey),
      );
      const lastDuplicateAt = Math.max(
        duplicateMemory.get(duplicateMemoryKey) || 0,
        duplicateKey ? readTimestamp(duplicateKey) : 0,
      );

      if (
        now - openedAt < MINIMUM_FILL_TIME_MS ||
        now - lastSubmissionAt < FORM_COOLDOWN_MS ||
        now - lastDuplicateAt < DUPLICATE_COOLDOWN_MS
      ) {
        return null;
      }

      const reservation = `${now}:${Math.random()}`;
      memoryLastSubmission = now;
      duplicateMemory.set(duplicateMemoryKey, now);
      writeReservation(rateLimitKey, reservation);
      if (duplicateKey) {
        writeReservation(duplicateKey, reservation);
      }

      return {
        release() {
          if (memoryLastSubmission === now) {
            memoryLastSubmission = 0;
          }
          if (duplicateMemory.get(duplicateMemoryKey) === now) {
            duplicateMemory.delete(duplicateMemoryKey);
          }
          removeReservation(rateLimitKey, reservation);
          if (duplicateKey) {
            removeReservation(duplicateKey, reservation);
          }
        },
      };
    },
  };
}
