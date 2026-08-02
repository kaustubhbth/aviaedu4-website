import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-blue">AVIA</span>
        <span className="logo-orange">EDU4</span>
      </div>

      <nav className={menuOpen ? "nav-active" : ""}>
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
            <Link to="/lms" onClick={closeMenu}>
              LMS
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li className="mobile-apply">
            <button className="apply-btn">Apply Now</button>
          </li>
        </ul>
      </nav>

      <button className="apply-btn desktop-btn">Apply Now</button>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;
