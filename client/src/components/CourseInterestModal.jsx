import { useCallback, useEffect, useRef, useState } from "react";

import {
  createFormProtection,
  normalizeAndValidate,
} from "../utils/formProtection";
import HoneypotField from "./HoneypotField";
import "./CourseInterestModal.css";

const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdvFLDT410UydRAcQeA2CrEGC6qlvTZyFKE1r8xFcdYmBfi6Q/formResponse";

const GOOGLE_FORM_FIELDS = {
  fullName: "entry.1895626701",
  phone: "entry.1433952710",
  email: "entry.341350561",
  course: "entry.412193620",
  emailUpdates: "entry.533525282",
};

const COURSE_OPTIONS = ["Course a", "course b"];
const COURSE_FORM_RULES = {
  fullName: { type: "name", required: true, maxLength: 100 },
  phone: { type: "indianPhone", required: true, maxLength: 20 },
  email: { type: "email", required: true, maxLength: 254 },
  course: { type: "course", required: true, maxLength: 50, options: COURSE_OPTIONS },
};
const courseFormProtection = createFormProtection("course-interest");

async function submitToGoogleForm(values) {
  const formBody = new URLSearchParams({
    [GOOGLE_FORM_FIELDS.fullName]: values.fullName.trim(),
    [GOOGLE_FORM_FIELDS.phone]: values.phone.trim(),
    [GOOGLE_FORM_FIELDS.email]: values.email.trim(),
    [GOOGLE_FORM_FIELDS.course]: values.course,
    [GOOGLE_FORM_FIELDS.emailUpdates]: values.emailConsent ? "Yes" : "No",
  });

  await fetch(GOOGLE_FORM_RESPONSE_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  });
}

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  email: "",
  course: "",
  emailConsent: false,
};

const isGoogleFormConfigured =
  !GOOGLE_FORM_RESPONSE_URL.includes("FORM_ID") &&
  Object.values(GOOGLE_FORM_FIELDS).every((entryId) =>
    /^entry\.\d+$/.test(entryId),
  );

function CourseInterestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const initialFocusRef = useRef(null);
  const successHeadingRef = useRef(null);
  const previousFocusRef = useRef(null);
  const closeTimerRef = useRef(null);
  const isActiveRef = useRef(false);
  const submissionInProgressRef = useRef(false);
  const formOpenedAtRef = useRef(0);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    formOpenedAtRef.current = Date.now();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    isActiveRef.current = false;
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setIsClosing(false);
      setFeedback({ type: "", message: "" });
      setIsSubmitting(false);
      setIsSuccess(false);
      setFormData(EMPTY_FORM);
      onClose();
    }, 180);
  }, [onClose]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    isActiveRef.current = true;
    previousFocusRef.current = document.activeElement;
    const frame = window.requestAnimationFrame(() => {
      initialFocusRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), [href], [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen && isSuccess) {
      successHeadingRef.current?.focus();
    }
  }, [isOpen, isSuccess]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submissionInProgressRef.current) {
      return;
    }

    if (event.currentTarget.elements.companyWebsite.value.trim()) {
      setFeedback({ type: "", message: "" });
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.course.trim()
    ) {
      setFeedback({
        type: "error",
        message: "Please fill in all required fields before submitting.",
      });
      return;
    }

    const validation = normalizeAndValidate(formData, COURSE_FORM_RULES);
    if (!validation.valid) {
      setFeedback({
        type: "error",
        message: "Please verify your details and try again.",
      });
      return;
    }

    if (!isGoogleFormConfigured) {
      setFeedback({
        type: "error",
        message:
          "Course interest form is not connected yet. Add the real Google Form URL and entry IDs in CourseInterestModal.jsx.",
      });
      return;
    }

    submissionInProgressRef.current = true;
    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });
    let reservation;

    try {
      reservation = await courseFormProtection.reserve(
        validation.values,
        formOpenedAtRef.current,
      );
      if (!reservation) {
        setFeedback({
          type: "error",
          message: "Please verify your details and try again.",
        });
        return;
      }

      await submitToGoogleForm(validation.values);

      if (!isActiveRef.current) {
        return;
      }

      setFormData(EMPTY_FORM);
      setIsSuccess(true);
      setFeedback({ type: "success", message: "" });
    } catch {
      reservation?.release();
      if (!isActiveRef.current) {
        return;
      }

      setFeedback({
        type: "error",
        message: "Please verify your details and try again.",
      });
    } finally {
      submissionInProgressRef.current = false;
      if (isActiveRef.current) {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`course-interest-backdrop${isClosing ? " is-closing" : ""}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={`course-interest-modal${isClosing ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-interest-title"
        aria-describedby="course-interest-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="course-interest-modal-content">
          {!isSuccess ? (
            <>
            <div className="modal-header">
              <span className="modal-kicker">AVIAEDU4 Training Programs</span>
              <h2 id="course-interest-title">Start Your Aviation Journey</h2>
              <p id="course-interest-description">
                Share your details and our team will contact you shortly.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="course-interest-form"
              noValidate
            >
              <HoneypotField id="course-interest-company-website" />
              <div className="field-row">
                <label htmlFor="course-interest-name">
                  Full Name
                  <input
                    ref={initialFocusRef}
                    type="text"
                    id="course-interest-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    autoComplete="name"
                  />
                </label>
              </div>

              <div className="field-row two-col">
                <label htmlFor="course-interest-phone">
                  Phone / WhatsApp Number
                  <input
                    type="tel"
                    id="course-interest-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={20}
                    autoComplete="tel"
                  />
                </label>

                <label htmlFor="course-interest-email">
                  Email Address
                  <input
                    type="email"
                    id="course-interest-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className="field-row">
                <label htmlFor="course-interest-course">
                  Course Interested In
                  <select
                    id="course-interest-course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {COURSE_OPTIONS.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  id="course-interest-consent"
                  name="emailConsent"
                  checked={formData.emailConsent}
                  onChange={handleChange}
                />
                <label htmlFor="course-interest-consent">
                  Optional: I agree to receive email updates.
                </label>
              </div>

              {feedback.message && (
                <p className={`form-feedback ${feedback.type}`} role={feedback.type === "error" ? "alert" : "status"}>
                  {feedback.message}
                </p>
              )}

              <div className="modal-actions">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Interest"}
                </button>

                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
            </>
          ) : (
            <div className="success-state">
              <div className="success-icon">✓</div>
              <h2 ref={successHeadingRef} tabIndex={-1}>Thank You!</h2>
              <p>
                Your interest has been submitted successfully. Our team will contact you shortly.
              </p>

              <button type="button" className="btn btn-primary" onClick={handleClose}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseInterestModal;
