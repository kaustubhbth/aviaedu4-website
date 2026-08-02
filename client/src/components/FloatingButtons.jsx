import "./FloatingButtons.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a href="tel:+919999999999" className="call-btn">
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default FloatingButtons;
