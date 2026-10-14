import anoop from "../../assets/images/faculty/anoop-bhatnagar.jpeg";
import "./FacultyProfile.css";

function Anoop() {
  return (
    <div className="faculty-profile">
      <section className="faculty-hero">
        <div className="faculty-image">
          <img src={anoop} alt="Anoop Kishore Bhatnagar" />
        </div>

        <div className="faculty-content">
          <span className="faculty-tag">Aviation Security Expert</span>

          <h1>Anoop Kishore Bhatnagar</h1>

          <h3>
            Aviation Security Expert | Master Trainer | Consultant | Former Air
            India Executive
          </h3>

          <p>
            A distinguished Aviation Security Professional with over 32 years of
            experience in aviation security management, training, compliance and
            operational leadership. He is a BCAS-certified instructor and has
            contributed to the development of competent aviation security
            professionals across India through practical, standards-based and
            capability-focused training programmes.
          </p>

          <div className="faculty-stats">
            <div className="stat-box">
              <h2>32+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>BCAS</h2>
              <p>Certified Instructor</p>
            </div>

            <div className="stat-box">
              <h2>AVSEC</h2>
              <p>Security & Training Leadership</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Overview</h2>

        <p>
          Anoop Kishore Bhatnagar is a seasoned aviation security leader with
          a long-standing track record in training, compliance, supervision and
          operational readiness. His professional journey combines public sector
          airline security discipline with contemporary training design and a
          strong emphasis on workforce capability enhancement.
        </p>

        <p>
          His work supports national and international aviation security
          standards while helping organizations build stronger safety culture,
          operational discipline and professional confidence among aviation
          personnel.
        </p>
      </section>

      <section className="profile-section">
        <h2>Professional Snapshot</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>32+ years of experience in Aviation Security, Training & Operations</li>
              <li>Former Head, Training Division (Northern Region), Air India Security Training Centre, New Delhi</li>
              <li>BCAS-Certified Instructor</li>
              <li>Pre-Positioning Officer for VVIP flights of Hon&apos;ble Prime Minister & President of India</li>
              <li>Expert in Security Training</li>
              <li>Passenger Profiling</li>
              <li>Risk Mitigation</li>
              <li>Compliance</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div className="profile-card">
            <ul className="info-list">
              <li>Emotional Intelligence</li>
              <li>Soft Skills Training</li>
              <li>Visiting Faculty at leading Aviation Institutions</li>
              <li>Director – Programs & Training, SAFE ROAD FOUNDATION</li>
              <li>Operational readiness and workforce capability enhancement</li>
              <li>Engaging training style</li>
              <li>Practical insights</li>
              <li>Ability to inspire excellence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Highlights</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Strategic Training Initiatives</h3>
            <p>
              Led strategic aviation security training initiatives at Air India,
              aligning training delivery with national and international security
              standards while keeping operations practical and performance-driven.
            </p>
          </div>

          <div className="timeline-card">
            <h3>International Security Coordination</h3>
            <p>
              Coordinated international security and operational arrangements for
              VVIP flights, ensuring secure, efficient and internationally
              aligned movement and compliance frameworks.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Competency-Based Training</h3>
            <p>
              Designed and delivered competency-based training programmes focused
              on workforce capability enhancement, operational readiness and
              security professionalism.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Engaging Delivery & Leadership</h3>
            <p>
              Known for an engaging training style, practical insights and the
              ability to inspire excellence in aviation professionals while
              reinforcing operational discipline and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Core Expertise</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>Aviation Security Management</li>
              <li>Regulatory Compliance & Audits</li>
              <li>Passenger Profiling & Behavioral Analysis</li>
              <li>Risk Assessment & Threat Mitigation</li>
              <li>Training Design & Delivery</li>
              <li>Leadership & Team Development</li>
            </ul>
          </div>

          <div className="profile-card">
            <ul className="info-list">
              <li>VVIP & Special Flight Security</li>
              <li>Fraud Prevention & Security Awareness</li>
              <li>Emotional Intelligence & Soft Skills</li>
              <li>Customer Service Excellence</li>
              <li>Crisis Management & Business Continuity</li>
              <li>Safety Culture & Professional Growth</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Academic & Professional Credentials</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>Graduate, University of Delhi</li>
              <li>NCC "C" Certificate</li>
              <li>BCAS-Certified Instructor</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Associations</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>Visiting Faculty – GMR Aero Academy</li>
              <li>Visiting Faculty – Rajiv Gandhi National Aviation University</li>
              <li>Visiting Faculty – Adani University for Aviation</li>
              <li>Director – Programs & Training, SAFE ROAD FOUNDATION</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="contact-box">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:anoopbhatnagar56@gmail.com">anoopbhatnagar56@gmail.com</a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919810358404">+91 98103 58404</a>
          </p>

          <p>
            <strong>Location:</strong> New Delhi, India
          </p>
        </div>
      </section>
    </div>
  );
}

export default Anoop;
