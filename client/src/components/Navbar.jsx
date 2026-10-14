import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import aviaLogo from "../assets/images/logo/aviaedu4-logo.jpeg";

function Navbar({ onApplyClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleApplyClick = (event) => {
    event.preventDefault();
    closeMenu();
    if (onApplyClick) {
      onApplyClick();
    }
  };

  return (
    <header className="navbar">
      <div className="logo" aria-label="AVIAEDU4 Trainers & Consultants logo">
        <img className="logo-image" src={aviaLogo} alt="AVIAEDU4 Trainers & Consultants logo" />
      </div>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={menuOpen ? "nav-active" : ""}
      >
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/training" onClick={closeMenu}>
              Training
            </Link>
          </li>

          <li>
            <Link to="/consulting" onClick={closeMenu}>
              Consulting
            </Link>
          </li>

          <li>
            <Link to="/faculty" onClick={closeMenu}>
              Faculty
            </Link>
          </li>

          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li className="mobile-apply">
            <Link className="apply-btn" to="/contact" onClick={handleApplyClick}>
              Apply Now
            </Link>
          </li>
        </ul>
      </nav>

      <Link className="apply-btn desktop-btn" to="/contact" onClick={handleApplyClick}>
        Apply Now
      </Link>

      <button
        type="button"
        className="menu-icon"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
