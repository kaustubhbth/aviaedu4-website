import { useEffect, useRef, useState } from "react";
import {
  createFormProtection,
  normalizeAndValidate,
} from "../utils/formProtection";
import HoneypotField from "../components/HoneypotField";
import "./Contact.css";

const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSew9t-zg9DeLcRJgEH-_b9APViTGtERYY0j1dO_ahe6eump6g/formResponse";

const GOOGLE_FORM_ENTRY_IDS = {
  fullName: "entry.480138423",
  email: "entry.899046192",
  phone: "entry.1950697932",
  subject: "entry.1137243014",
  message: "entry.795407273",
};

const CONTACT_FORM_RULES = {
  fullName: { type: "name", required: true, maxLength: 100 },
  email: { type: "email", required: true, maxLength: 254 },
  phone: { type: "phone", required: true, maxLength: 20 },
  subject: { type: "text", required: true, maxLength: 150 },
  message: { type: "message", required: true, maxLength: 2000, maxUrls: 2 },
};
const contactFormProtection = createFormProtection("contact");

const EMPTY_FORM = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const submissionInProgress = useRef(false);
  const formOpenedAt = useRef(0);

  useEffect(() => {
    formOpenedAt.current = Date.now();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submissionInProgress.current) return;

    if (event.currentTarget.elements.companyWebsite.value.trim()) {
      setFeedback({ type: "", message: "" });
      return;
    }

    const validation = normalizeAndValidate(formData, CONTACT_FORM_RULES);
    if (!validation.valid) {
      setFeedback({
        type: "error",
        message: "Please verify your details and try again.",
      });
      return;
    }

    const hasValidConfiguration =
      !GOOGLE_FORM_RESPONSE_URL.includes("FORM_ID") &&
      Object.values(GOOGLE_FORM_ENTRY_IDS).every((entryId) =>
        /^entry\.\d+$/.test(entryId),
      );

    if (!hasValidConfiguration) {
      setFeedback({
        type: "error",
        message:
          "The message form is not connected yet. Add the Google Form response URL and field entry IDs to Contact.jsx.",
      });
      return;
    }

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });
    let reservation;

    try {
      reservation = await contactFormProtection.reserve(
        validation.values,
        formOpenedAt.current,
      );
      if (!reservation) {
        setFeedback({
          type: "error",
          message: "Please verify your details and try again.",
        });
        return;
      }

      const formBody = new URLSearchParams({
        [GOOGLE_FORM_ENTRY_IDS.fullName]: validation.values.fullName,
        [GOOGLE_FORM_ENTRY_IDS.email]: validation.values.email,
        [GOOGLE_FORM_ENTRY_IDS.phone]: validation.values.phone,
        [GOOGLE_FORM_ENTRY_IDS.subject]: validation.values.subject,
        [GOOGLE_FORM_ENTRY_IDS.message]: validation.values.message,
      });

      await fetch(GOOGLE_FORM_RESPONSE_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      });

      setFormData(EMPTY_FORM);
      setFeedback({
        type: "success",
        message:
          "Thank you! Your message has been submitted successfully. We will get back to you shortly.",
      });
    } catch {
      reservation?.release();
      setFeedback({
        type: "error",
        message: "Please verify your details and try again.",
      });
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-banner">
        <div className="container">
          <span>CONTACT US</span>

          <h1>Let's Connect</h1>

          <p>
            Have questions about our training or consulting services? Our team
            is here to help you.
          </p>
        </div>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>Address</h3>

            <p>D-52, Gulmohar Park, Ground Floor, New Delhi-110049</p>
          </div>

          <div className="info-box">
            <h3>Email</h3>

            <p>
              <a href="mailto:info@aviaedu4.com">info@aviaedu4.com</a>
            </p>
          </div>

          <div className="info-box">
            <h3>Office Hours</h3>

            <p>
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>

          <form onSubmit={handleSubmit} noValidate>
            <HoneypotField id="contact-company-website" />
            <label className="visually-hidden" htmlFor="contact-full-name">
              Full Name
            </label>
            <input
              type="text"
              id="contact-full-name"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              maxLength={100}
            />

            <label className="visually-hidden" htmlFor="contact-email">
              Email Address
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
            />

            <label className="visually-hidden" htmlFor="contact-phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={20}
            />

            <label className="visually-hidden" htmlFor="contact-subject">
              Subject
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              maxLength={150}
            />

            <label className="visually-hidden" htmlFor="contact-message">
              Your Message
            </label>
            <textarea
              id="contact-message"
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={2000}
            ></textarea>

            {feedback.message && (
              <p className={`contact-form-feedback ${feedback.type}`} role={feedback.type === "error" ? "alert" : "status"}>
                {feedback.message}
              </p>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=D-52%2C%20Gulmohar%20Park%2C%20Ground%20Floor%2C%20New%20Delhi-110049&output=embed"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
