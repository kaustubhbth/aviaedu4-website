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
          <span className="faculty-tag">AVIATION SECURITY EXPERT</span>

          <h1>Anoop Kishore Bhatnagar</h1>

          <h3>Aviation Security Specialist | Trainer | Consultant</h3>

          <p>
            Highly accomplished Aviation Security professional with more than
            three decades of experience in airport security, aviation safety,
            regulatory compliance, security audits, risk assessment and AVSEC
            training. Recognized for building robust aviation security systems
            aligned with national and international aviation standards.
          </p>

          <div className="faculty-stats">
            <div className="stat-box">
              <h2>35+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>BCAS</h2>
              <p>Security Standards</p>
            </div>

            <div className="stat-box">
              <h2>AVSEC</h2>
              <p>Expert Trainer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Executive Summary</h2>

        <p>
          Anoop Kishore Bhatnagar possesses extensive expertise in aviation
          security management, airport security operations, regulatory
          compliance and aviation risk mitigation. Throughout his professional
          career he has contributed significantly towards strengthening airport
          security systems while mentoring aviation professionals across
          multiple organizations.
        </p>

        <p>
          His practical understanding of BCAS regulations, ICAO standards, DGCA
          requirements and airport operational security enables him to deliver
          highly effective industry-oriented training programmes.
        </p>
      </section>

      <section className="profile-section">
        <h2>Core Competencies</h2>

        <div className="expertise-grid">
          <div>✔ Aviation Security (AVSEC)</div>

          <div>✔ BCAS Compliance</div>

          <div>✔ ICAO Security Standards</div>

          <div>✔ DGCA Regulations</div>

          <div>✔ Airport Security Audits</div>

          <div>✔ Risk Assessment</div>

          <div>✔ Crisis Management</div>

          <div>✔ Emergency Response Planning</div>

          <div>✔ Security Awareness Training</div>

          <div>✔ Regulatory Compliance</div>

          <div>✔ Airport Operations</div>

          <div>✔ Leadership & Mentoring</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Highlights</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Aviation Security Leadership</h3>

            <p>
              Successfully managed aviation security operations while ensuring
              complete compliance with BCAS regulations, ICAO standards and
              airport security protocols.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Training & Capacity Building</h3>

            <p>
              Conducted professional aviation security training programmes,
              workshops and awareness sessions for airport personnel and
              aviation professionals.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Security Audit & Compliance</h3>

            <p>
              Extensive experience in security audits, operational inspections,
              compliance reviews and implementation of aviation security
              procedures.
            </p>
          </div>
          <div className="timeline-card">
            <h3>Airport Security Operations</h3>

            <p>
              Led and supervised airport security operations with a strong focus
              on passenger safety, access control, threat assessment, screening
              procedures and operational preparedness.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Professional Consulting</h3>

            <p>
              Served as a trusted advisor in aviation security, providing
              guidance on regulatory compliance, operational excellence,
              security management systems and organizational preparedness.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Credentials</h2>

        <div className="expertise-grid">
          <div>BCAS Aviation Security Regulations</div>

          <div>ICAO Aviation Security Standards</div>

          <div>DGCA Regulatory Compliance</div>

          <div>Airport Security Management</div>

          <div>Security Audit & Inspection</div>

          <div>Crisis & Emergency Management</div>

          <div>AVSEC Instructor</div>

          <div>Security Awareness Training</div>

          <div>Operational Risk Assessment</div>

          <div>Leadership Development</div>

          <div>Training & Consulting</div>

          <div>Airport Operations</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Mission</h2>

        <p>
          Dedicated to strengthening aviation security by developing highly
          skilled professionals capable of implementing global security
          standards while ensuring safe, secure and efficient airport
          operations. Passionate about creating awareness, improving compliance
          and building a strong aviation security culture across the industry.
        </p>
      </section>

      <section className="profile-section">
        <h2>Areas of Specialization</h2>

        <div className="expertise-grid">
          <div>Aviation Security</div>

          <div>Airport Operations</div>

          <div>BCAS Compliance</div>

          <div>ICAO Standards</div>

          <div>Security Risk Management</div>

          <div>Emergency Response Planning</div>

          <div>AVSEC Training</div>

          <div>Corporate Consulting</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="contact-box">
          <p>
            <strong>Email :</strong>
            anoop@example.com
          </p>

          <p>
            <strong>Phone :</strong>
            +91 XXXXX XXXXX
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

export default Anoop;
