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
          <span className="faculty-tag">Air Cargo Training Leader</span>

          <h1>Yogesh Bhandari</h1>

          <h3>Air Cargo Training Leader & Aviation Operations Strategist</h3>

          <p>
            Accomplished Air Cargo Training Specialist, Aviation Operations
            Professional, and training leader with hands-on experience in airline
            operations, cargo handling, documentation and Dangerous Goods
            Regulations (DGR). He is recognized for designing high-impact,
            placement-focused programmes that transform fresh graduates into
            Day-1 employable frontline professionals for Ground Handling Agencies
            (GHAs), freight forwarders and global airlines.
          </p>

          <div className="faculty-stats">
            <div className="stat-box">
              <h2>30+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>IATA</h2>
              <p>BCAS & IATA Standard Training</p>
            </div>

            <div className="stat-box">
              <h2>Industry</h2>
              <p>Simulation-Based Trainer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Overview</h2>

        <p>
          Yogesh Bhandari bridges the gap between classroom education and
          high-performance ground handling by combining operational knowledge,
          compliance understanding and practical simulation-based learning. His
          teaching approach is grounded in IATA standards, BCAS standards and
          real operational insights drawn from the aviation and cargo ecosystem.
        </p>

        <p>
          He has developed and delivered outcome-oriented training that helps
          students and young professionals build confidence, operational
          discipline and employability for the demanding realities of air cargo
          and ground handling operations.
        </p>
      </section>

      <section className="profile-section">
        <h2>Core Competencies & Training Expertise</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>Aviation Regulations & Compliance</h3>
            <ul className="info-list">
              <li>Dangerous Goods Regulations (DGR)</li>
              <li>BCAS Security Compliance</li>
              <li>IATA Standards</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Cargo & Ground Operations</h3>
            <ul className="info-list">
              <li>Air Waybill (AWB) Accuracy</li>
              <li>Unit Load Device (ULD) Operations</li>
              <li>Cargo Acceptance Procedures</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Pedagogy & Talent Transformation</h3>
            <ul className="info-list">
              <li>Simulation-Based Training</li>
              <li>Mock Acceptance Checks</li>
              <li>Scenario Assessments</li>
              <li>Curriculum Development</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Employability & Placement Strategy</h3>
            <ul className="info-list">
              <li>Workforce Readiness</li>
              <li>Corporate Partner Alignment</li>
              <li>Talent Ecosystem Bridging</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>High-Impact Institutional Training Experience</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Rajiv Gandhi National Aviation University (RGNAU), Amethi</h3>
            <p>
              <strong>Role:</strong> Facilitator & Subject Matter Expert
            </p>
            <p>
              Delivered Air Cargo Operations and Air Cargo Management learning
              experiences in collaboration with GMR and the Logistics Sector
              Skill Council (LSSC). The programmes strengthened the industrial
              relevance of aviation education and supported the creation of a
              future-ready, audit-ready cargo workforce.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Symbiosis Skills and Professional University, Pune</h3>
            <p>
              <strong>Role:</strong> Guest Faculty / Corporate Trainer
            </p>
            <p>
              Worked with graduate cohorts through practical training modules in
              aviation operations and air cargo management, focusing on market
              readiness, industry-aligned learning and employability outcomes.
            </p>
          </div>

          <div className="timeline-card">
            <h3>GMR Group & Industry Partners</h3>
            <p>
              <strong>Role:</strong> Industry Collaborator
            </p>
            <p>
              Contributed to curriculum alignment, competency frameworks and
              skill development initiatives designed to help institutions and
              employers build capable aviation professionals for the evolving
              cargo and ground handling ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Operational Focus & Training Philosophy</h2>

        <p>
          Yogesh’s approach emphasizes high-urgency training, scenario-based
          operational learning and building competent, confident professionals who
          are ready for real-world airline and cargo environments. He integrates
          practical insights from operational contexts, including the standards and
          practices associated with global airline operations and the aviation
          industry ecosystem.
        </p>

        <div className="profile-grid compact-grid">
          <div className="profile-card">
            <h3>Training Methodology</h3>
            <ul className="info-list">
              <li>Simulation-driven pedagogy</li>
              <li>Scenario-based operational training</li>
              <li>Mock acceptance checks</li>
              <li>Competency assessments</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Mission</h3>
            <ul className="info-list">
              <li>Build competent aviation professionals</li>
              <li>Build confident aviation professionals</li>
              <li>Build an audit-ready aviation workforce</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="contact-box">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:yogeshbhandarid52@gmail.com">yogeshbhandarid52@gmail.com</a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919650925585">+91 96509 25585</a>
          </p>

          <p>
            <strong>Location:</strong> India
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/yogeshbhandari"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/yogeshbhandari
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Yogesh;
