import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import "./CourseInterestModal.css";

const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSew9t-zg9DeLcRJgEH-_b9APViTGtERYY0j1dO_ahe6eump6g/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.XXXXX_NAME",
  phone: "entry.XXXXX_PHONE",
  email: "entry.XXXXX_EMAIL",
  course: "entry.XXXXX_COURSE",
  emailConsent: "entry.XXXXX_CONSENT",
};

const COURSE_OPTIONS = [
  "Airport Operations",
  "Aviation Security",
  "Air Cargo Management",
  "Ground Handling",
  "Customer Service",
  "Leadership Development",
];

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  email: "",
  course: COURSE_OPTIONS[0],
  emailConsent: false,
};

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

  const isGoogleFormConfigured = useMemo(() => {
    const hasUrl = GOOGLE_FORM_RESPONSE_URL && !GOOGLE_FORM_RESPONSE_URL.includes("FORM_ID");
    const hasEntryIds = Object.values(GOOGLE_FORM_FIELDS).every(
      (entryId) => typeof entryId === "string" && entryId.startsWith("entry.") && entryId !== "entry.XXXXX_NAME" && entryId !== "entry.XXXXX_PHONE" && entryId !== "entry.XXXXX_EMAIL" && entryId !== "entry.XXXXX_COURSE" && entryId !== "entry.XXXXX_CONSENT",
    );

    return hasUrl && hasEntryIds;
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

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
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
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

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.course.trim()) {
      setFeedback({
        type: "error",
        message: "Please fill in all required fields before submitting.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
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

    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    const formBody = new URLSearchParams({
      [GOOGLE_FORM_FIELDS.name]: formData.fullName.trim(),
      [GOOGLE_FORM_FIELDS.phone]: formData.phone.trim(),
      [GOOGLE_FORM_FIELDS.email]: formData.email.trim(),
      [GOOGLE_FORM_FIELDS.course]: formData.course,
      [GOOGLE_FORM_FIELDS.emailConsent]: formData.emailConsent ? "Yes" : "No",
    });

    try {
      await fetch(GOOGLE_FORM_RESPONSE_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      });

      if (!isActiveRef.current) {
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFeedback({ type: "success", message: "" });
    } catch {
      if (!isActiveRef.current) {
        return;
      }

      setIsSubmitting(false);
      setFeedback({
        type: "error",
        message: "We could not submit your interest right now. Please try again.",
      });
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

        {!isSuccess ? (
          <>
            <div className="modal-header">
              <span className="modal-kicker">AVIAEDU4 Training Programs</span>
              <h2 id="course-interest-title">Start Your Aviation Journey</h2>
              <p id="course-interest-description">
                Share your details and our team will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="course-interest-form">
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
  );
}

export default CourseInterestModal;
