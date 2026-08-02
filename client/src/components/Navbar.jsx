import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-blue">AVIA</span>
        <span className="logo-orange">EDU4</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/training">Training</Link>
          </li>

          <li>
            <Link to="/consulting">Consulting</Link>
          </li>

          <li>
            <Link to="/faculty">Faculty</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          {/* NEW MENU */}
          <li>
            <Link to="/lms">LMS</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button className="apply-btn">Apply Now</button>

      <div className="menu-icon">
        <FaBars />
      </div>
    </header>
  );
}

export default Navbar;
