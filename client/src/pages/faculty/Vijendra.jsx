import vijendra from "../../assets/images/faculty/vijendra-verma.jpeg";
import "./FacultyProfile.css";

function Vijendra() {
  return (
    <div className="faculty-profile">
      <section className="faculty-hero">
        <div className="faculty-image">
          <img src={vijendra} alt="Vijendra Singh Verma" />
        </div>

        <div className="faculty-content">
          <span className="faculty-tag">Airport Operations Trainer</span>

          <h1>Vijendra Singh Verma</h1>

          <h3>EX-JetaAirways | AI Airport Services | Trainer & Mentor</h3>

          <p>
            A seasoned aviation professional with nearly 3 decades of experience
            from leading organizations including Jet Airways and AI Airport
            Services. His expertise spans Airport Operations, Customer Service &
            Experience Management, Ground Handling & Airside Operations,
            Training, Mentoring & Skill Development and Team Leadership &
            Performance Excellence.
          </p>

          <div className="faculty-stats">
            <div className="stat-box">
              <h2>30+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>Airport</h2>
              <p>Operations Excellence</p>
            </div>

            <div className="stat-box">
              <h2>Mentor</h2>
              <p>Trainer & Facilitator</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Overview</h2>

        <p>
          Vijendra Singh Verma is a well-established aviation professional whose
          career has centered on service excellence, operational efficiency and a
          customer-first culture in complex airport environments. He combines
          extensive hands-on knowledge with people-centric leadership, enabling
          teams to perform with empathy, trust and accountability.
        </p>

        <p>
          His work is grounded in the belief that strong aviation professionals
          are built through mentoring, confidence-building and practical skill
          development across airport and airline operations.
        </p>
      </section>

      <section className="profile-section">
        <h2>Key Profile Highlights</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>30+ Years</h3>
            <ul className="info-list">
              <li>Rich experience in Airport Operations</li>
              <li>Customer Service</li>
              <li>Airside Operations</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>People-Centric Leadership</h3>
            <ul className="info-list">
              <li>Building teams</li>
              <li>Mentoring teams</li>
              <li>Leading high-performing teams</li>
              <li>Empathy and trust</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Operational Excellence</h3>
            <ul className="info-list">
              <li>Ground Handling</li>
              <li>Safety</li>
              <li>Service Quality</li>
              <li>Process Efficiency</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Trainer & Mentor</h3>
            <ul className="info-list">
              <li>Developing skills</li>
              <li>Developing confidence</li>
              <li>Developing careers in aviation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Mentoring the Future</h2>

        <p>
          Vijendra is committed to nurturing ethical, skilled and future-ready
          aviation professionals. He works with emerging talent across career
          pathways such as Inflight Services, Ground Operations and Airport
          Management, collaborating with institutions, training organizations and
          industry partners to build strong foundations for the next generation
          of aviation professionals.
        </p>
      </section>

      <section className="profile-section">
        <h2>Core Competencies</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>Airport Operations</li>
              <li>Customer Service & Experience Management</li>
              <li>Ground Handling & Airside Operations</li>
              <li>Training, Mentoring & Skill Development</li>
              <li>Team Leadership & Performance Excellence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Focus Areas</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>Service excellence</li>
              <li>Operational efficiency</li>
              <li>Customer-first culture</li>
              <li>Complex airport environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="contact-box">
          <p>
            <strong>Email:</strong> Contact details require verification from the original profile poster before publication.
          </p>

          <p>
            <strong>Phone:</strong> Contact details require verification from the original profile poster before publication.
          </p>

          <p>
            <strong>Location:</strong> India
          </p>
        </div>
      </section>
    </div>
  );
}

export default Vijendra;
