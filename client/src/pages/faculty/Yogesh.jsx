import yogesh from "../../assets/images/faculty/yogesh-bhandari.jpeg";
import "./FacultyProfile.css";

function Yogesh() {
  return (
    <div className="faculty-profile">
      <section className="faculty-hero">
        <div className="faculty-image">
          <img src={yogesh} alt="Yogesh Bhandari" />
        </div>

        <div className="faculty-content">
          <span className="faculty-tag">AIR CARGO TRAINING LEADER</span>

          <h1>Yogesh Bhandari</h1>

          <h3>Air Cargo Training Leader & Aviation Operations Strategist</h3>

          <p>
            Accomplished Air Cargo Training Specialist and Aviation Operations
            Professional with extensive experience in airline operations, cargo
            handling, documentation and Dangerous Goods Regulations (DGR).
            Recognized for designing practical, placement-focused training
            programs that transform graduates into industry-ready aviation
            professionals.
          </p>

          <div className="faculty-stats">
            <div className="stat-box">
              <h2>30+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>IATA</h2>
              <p>Standards Based Training</p>
            </div>

            <div className="stat-box">
              <h2>Industry</h2>
              <p>Expert Trainer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Executive Summary</h2>

        <p>
          Yogesh Bhandari is an accomplished Air Cargo Training Specialist with
          extensive experience in airline operations, cargo handling,
          documentation, Dangerous Goods Regulations and airport operations.
        </p>

        <p>
          His expertise lies in creating simulation-driven, competency-based
          learning environments where students gain practical exposure before
          entering the aviation industry. Through structured training
          methodologies aligned with IATA and BCAS standards, he prepares
          candidates for immediate employability.
        </p>
      </section>

      <section className="profile-section">
        <h2>Core Competencies</h2>

        <div className="expertise-grid">
          <div>✔ Aviation Regulations & Compliance</div>

          <div>✔ Dangerous Goods Regulations (DGR)</div>

          <div>✔ BCAS Security Standards</div>

          <div>✔ Cargo Operations</div>

          <div>✔ Air Waybill Documentation</div>

          <div>✔ Unit Load Device (ULD)</div>

          <div>✔ Cargo Acceptance Procedures</div>

          <div>✔ Curriculum Development</div>

          <div>✔ Simulation-Based Training</div>

          <div>✔ Mock Acceptance Checks</div>

          <div>✔ Interview Preparation</div>

          <div>✔ Employability & Placement Strategy</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Institutional Training Experience</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Rajiv Gandhi National Aviation University (RGNAU)</h3>

            <p>
              Facilitator and Subject Matter Expert delivering comprehensive Air
              Cargo Operations & Management programs in collaboration with GMR
              and the Logistics Sector Skill Council (LSSC).
            </p>
          </div>

          <div className="timeline-card">
            <h3>Symbiosis Skills & Professional University</h3>

            <p>
              Guest Faculty delivering practical aviation operations and cargo
              management modules focused on enhancing student employability and
              industry readiness.
            </p>
          </div>

          <div className="timeline-card">
            <h3>GMR Group & Industry Partners</h3>

            <p>
              Collaborated on curriculum alignment, competency frameworks,
              aviation skill development initiatives and workforce readiness
              programs.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Training Methodology</h2>

        <div className="expertise-grid">
          <div>Airport Simulation Exercises</div>

          <div>Scenario-Based Learning</div>

          <div>Mock Cargo Acceptance</div>

          <div>Operational Documentation Practice</div>

          <div>Industry Case Studies</div>

          <div>Live Demonstrations</div>

          <div>Competency Assessments</div>

          <div>Placement Readiness</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Mission</h2>

        <p>
          Committed to building competent, compliant and performance-driven
          aviation professionals capable of meeting global aviation standards
          while contributing to the growth of India's aviation industry.
        </p>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="contact-box">
          <p>
            <strong>Email :</strong>
            yogeshbhandari52@gmail.com
          </p>

          <p>
            <strong>Phone :</strong>
            +91 96509 25585
          </p>

          <p>
            <strong>Location :</strong>
            India
          </p>
        </div>
      </section>
    </div>
  );
}

export default Yogesh;
