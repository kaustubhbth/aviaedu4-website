import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>AVIAEDU4</h2>

          <p>
            Professional Aviation Training, Consulting and Leadership
            Development platform committed to developing industry-ready aviation
            professionals.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/training">Training</Link>

          <Link to="/consulting">Consulting</Link>

          <Link to="/faculty">Faculty</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-training">
          <h3>Training</h3>

          <p>Airport Operations</p>

          <p>Aviation Security</p>

          <p>Air Cargo Management</p>

          <p>Ground Handling</p>

          <p>Leadership Development</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Gurugram, Haryana</p>

          <p>📞 +91 XXXXX XXXXX</p>

          <p>📧 info@aviaedu4.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AVIAEDU4. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
