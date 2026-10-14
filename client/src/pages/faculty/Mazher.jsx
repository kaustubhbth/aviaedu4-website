import mazher from "../../assets/images/faculty/mazher-iqbal.jpeg";
import "./FacultyProfile.css";

function Mazher() {
  return (
    <div className="faculty-profile">
      <section className="faculty-hero">
        <div className="faculty-image">
          <img src={mazher} alt="Mazher Iqbal" />
        </div>

        <div className="faculty-content">
          <span className="faculty-tag">Air Cargo & Logistics Veteran</span>

          <h1>Mazher Iqbal</h1>

          <h3>Aviation, Air Cargo & Logistics Veteran | Trainer | Consultant</h3>

          <p>
            Distinguished aviation, air cargo and logistics professional with
            over 40 years of global experience spanning airline operations,
            airport services, cargo management, commercial sales, marketing,
            supply chain logistics and training. He has built a substantial
            reputation for operational leadership, team development and practical,
            results-driven solutions for the aviation and logistics ecosystem.
          </p>

          <div className="faculty-stats">
            <div className="stat-box">
              <h2>40+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>Global</h2>
              <p>Industry Exposure</p>
            </div>

            <div className="stat-box">
              <h2>Air Cargo</h2>
              <p>Leadership & Consulting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Overview</h2>

        <p>
          Mazher Iqbal brings a rich and diverse perspective to aviation and
          cargo operations, with experience across major global airlines,
          airport operations and commercial logistics functions. His background
          spans end-to-end operational responsibility, cargo handling, sales,
          route and station management, supply chain process thinking and team
          development.
        </p>

        <p>
          He has held leadership roles with globally renowned organizations and
          has played a key part in business growth, operational excellence and
          capability-building across the aviation value chain.
        </p>
      </section>

      <section className="profile-section">
        <h2>Professional Highlights</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Qatar Airways GSA Office, Hyderabad</h3>
            <p>
              Established the Qatar Airways GSA office in Hyderabad, building a
              strong foundation for growth and operations in a competitive market.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Saudia Cargo, Hyderabad</h3>
            <p>
              Led the station to achieve No. 2 global ranking within the airline&apos;s
              network, reflecting strong operational discipline and performance.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Ethiopian Cargo</h3>
            <p>
              Played a pivotal role during the COVID-19 pandemic in managing ad
              hoc flight operations, ensuring uninterrupted cargo movement during
              critical times.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Leadership Across Renowned Organizations</h3>
            <p>
              Held key leadership positions with globally renowned organizations,
              including positions across Air India, Emirates, Qatar Airways,
              Saudia Cargo and Ethiopian Cargo.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Core Expertise</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>Airline & Air Cargo Operations</h3>
            <ul className="info-list">
              <li>End-to-end operations</li>
              <li>Cargo handling</li>
              <li>Route management</li>
              <li>ULD operations</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Commercial & Business Development</h3>
            <ul className="info-list">
              <li>Sales</li>
              <li>Marketing</li>
              <li>Key accounts management</li>
              <li>Market expansion</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Supply Chain & Logistics</h3>
            <ul className="info-list">
              <li>Freight management</li>
              <li>Vendor coordination</li>
              <li>Process optimization</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Leadership & Training</h3>
            <ul className="info-list">
              <li>Building high-performance teams</li>
              <li>Mentoring</li>
              <li>Capability enhancement</li>
              <li>Practical, results-driven solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Credentials & Training</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>British Airways&apos; College of Marketing & Commercial Training Establishment, London</li>
              <li>Air Cargo Marketing – IATA, Geneva</li>
              <li>Air Cargo Management & Shipping PER Cargo Management – IATA, Singapore</li>
              <li>IATA Diploma</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Industry Experience</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <ul className="info-list">
              <li>Air India</li>
              <li>Emirates</li>
              <li>Qatar Airways</li>
              <li>Saudia Cargo</li>
              <li>Ethiopian Cargo</li>
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

export default Mazher;
