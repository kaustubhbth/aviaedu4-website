import { Link } from "react-router-dom";
import "./About.css";

function PrivacyPolicy() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Privacy Notice</h1>
          <p>How information submitted through this website is handled.</p>
        </div>
      </section>

      <main className="about-company">
        <div className="container">
          <h2>Information you provide</h2>
          <p>
            The course-interest form asks for your name, phone number, email
            address and course of interest. The contact form asks for your name,
            email address, phone number, subject and message. Please do not
            include sensitive personal information in these forms.
          </p>

          <h2>How submissions are processed</h2>
          <p>
            Form submissions are sent to a Google Form and its associated
            spreadsheet so AVIAEDU4 Trainers &amp; Consultants can respond to
            enquiries. Google processes the submission as part of providing
            Google Forms and Sheets. The optional email-updates choice is
            included with the course-interest submission.
          </p>

          <h2>Third-party services</h2>
          <p>
            This website loads the Inter font from Google Fonts and embeds a
            Google Map on the Contact page. Those services may receive
            connection information when your browser requests their content.
            Their handling of that information is governed by Google's privacy
            information.
          </p>

          <h2>Questions about your information</h2>
          <p>
            For questions about an enquiry you submitted, contact{" "}
            <a href="mailto:info@aviaedu4.com">info@aviaedu4.com</a>.
          </p>

          <p>
            For information about training or the organization, visit{" "}
            <Link to="/about">About AVIAEDU4</Link> or{" "}
            <Link to="/contact">Contact us</Link>.
          </p>
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
