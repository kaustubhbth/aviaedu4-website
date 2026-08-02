import { Link } from "react-router-dom";

import yogesh from "../../assets/images/yogesh-bhandari.jpeg";
import anoop from "../../assets/images/anoop-bhatnagar.jpeg";
import mazher from "../../assets/images/mazher-iqbal.jpeg";
import vijendra from "../../assets/images/vijendra-verma.jpeg";

import "./FacultyHome.css";

function FacultyHome() {
  return (
    <section className="faculty-home">
      <div className="faculty-heading">
        <span>OUR FACULTY</span>

        <h2>Meet Our Expert Trainers</h2>

        <p>
          Learn from highly experienced aviation professionals with decades of
          industry experience in Aviation, Cargo, Airport Operations and
          Aviation Security.
        </p>
      </div>

      <div className="faculty-grid">
        <div className="faculty-card">
          <img src={yogesh} alt="Yogesh Bhandari" />

          <h3>Yogesh Bhandari</h3>

          <p>Air Cargo Training Leader</p>

          <Link to="/faculty/yogesh">
            <button>View Profile</button>
          </Link>
        </div>

        <div className="faculty-card">
          <img src={anoop} alt="Anoop Kishore Bhatnagar" />

          <h3>Anoop Kishore Bhatnagar</h3>

          <p>Aviation Security Expert</p>

          <Link to="/faculty/anoop">
            <button>View Profile</button>
          </Link>
        </div>

        <div className="faculty-card">
          <img src={mazher} alt="Mazher Iqbal" />

          <h3>Mazher Iqbal</h3>

          <p>Air Cargo & Logistics Veteran</p>

          <Link to="/faculty/mazher">
            <button>View Profile</button>
          </Link>
        </div>

        <div className="faculty-card">
          <img src={vijendra} alt="Vijendra Singh Verma" />

          <h3>Vijendra Singh Verma</h3>

          <p>Airport Operations Trainer</p>

          <Link to="/faculty/vijendra">
            <button>View Profile</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FacultyHome;
