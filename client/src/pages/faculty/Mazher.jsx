import mazher from "../../assets/images/mazher-iqbal.jpeg";
import "./FacultyProfile.css";

function Mazher() {
  return (
    <div className="faculty-profile">
      <section className="faculty-hero">
        <div className="faculty-image">
          <img src={mazher} alt="Mazher Iqbal" />
        </div>

        <div className="faculty-content">
          <span className="faculty-tag">AVIATION • AIR CARGO • LOGISTICS</span>

          <h1>Mazher Iqbal</h1>

          <h3>
            Aviation, Air Cargo & Logistics Veteran | Trainer | Consultant
          </h3>

          <p>
            Distinguished Aviation, Air Cargo and Logistics professional with
            over four decades of global experience in airline operations,
            airport services, cargo management, commercial sales, marketing,
            supply chain logistics and aviation training. Widely recognized for
            building high-performing teams, operational excellence and practical
            industry-oriented training programs.
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
              <h2>Trainer</h2>
              <p>Mentor & Consultant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Summary</h2>

        <p>
          Mazher Iqbal has successfully served globally reputed aviation and
          cargo organizations across airline operations, commercial management,
          airport services and logistics. His experience spans strategic
          leadership, cargo handling, customer relationship management,
          operations planning, supply chain optimization and aviation business
          development.
        </p>

        <p>
          Throughout his career he has consistently delivered operational
          excellence while mentoring aviation professionals and helping
          organizations improve efficiency, customer satisfaction and business
          performance.
        </p>
      </section>

      <section className="profile-section">
        <h2>Core Expertise</h2>

        <div className="expertise-grid">
          <div>✔ Airline Operations</div>

          <div>✔ Air Cargo Operations</div>

          <div>✔ Route Management</div>

          <div>✔ ULD Operations</div>

          <div>✔ Commercial Sales</div>

          <div>✔ Business Development</div>

          <div>✔ Key Account Management</div>

          <div>✔ Supply Chain Logistics</div>

          <div>✔ Freight Management</div>

          <div>✔ Vendor Coordination</div>

          <div>✔ Team Leadership</div>

          <div>✔ Training & Consulting</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Highlights</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Qatar Airways</h3>

            <p>
              Established the Qatar Airways GSA office in Hyderabad,
              strengthening operational capability and creating a strong
              foundation for sustained business growth.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Saudia Cargo</h3>

            <p>
              Successfully led the Hyderabad Cargo Station to achieve the No. 2
              global ranking within the airline's international cargo network.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Ethiopian Cargo</h3>

            <p>
              Played a key leadership role during the COVID-19 pandemic by
              managing ad-hoc cargo flight operations and ensuring uninterrupted
              cargo movement during critical business periods.
            </p>
          </div>
          <div className="timeline-card">
            <h3>Emirates SkyCargo</h3>

            <p>
              Contributed towards strengthening cargo operations, customer
              relationships and commercial performance through efficient cargo
              planning, documentation and service excellence.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Air India</h3>

            <p>
              Built strong expertise in airline operations, passenger service,
              cargo handling and airport coordination while working with India's
              national carrier.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Credentials</h2>

        <div className="expertise-grid">
          <div>British Airways Management College</div>

          <div>IATA Geneva Professional Training</div>

          <div>IATA Singapore Diploma</div>

          <div>Air Cargo Management</div>

          <div>Commercial Airline Operations</div>

          <div>Sales & Marketing</div>

          <div>Leadership & Team Management</div>

          <div>Customer Relationship Management</div>

          <div>Business Development</div>

          <div>Supply Chain & Logistics</div>

          <div>Airport Operations</div>

          <div>Aviation Training & Consulting</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Professional Philosophy</h2>

        <p>
          Strongly believes that aviation education should combine operational
          knowledge with practical industry exposure. His approach focuses on
          preparing professionals who can immediately contribute to airline,
          airport and cargo operations while maintaining global aviation
          standards, customer satisfaction and operational excellence.
        </p>
      </section>

      <section className="profile-section">
        <h2>Industry Focus Areas</h2>

        <div className="expertise-grid">
          <div>Airline Operations</div>

          <div>Airport Management</div>

          <div>Air Cargo Logistics</div>

          <div>Commercial Strategy</div>

          <div>Cargo Sales</div>

          <div>Freight Forwarding</div>

          <div>Operational Excellence</div>

          <div>Corporate Training</div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="contact-box">
          <p>
            <strong>Email :</strong>
            mazher.iqbal@gmail.com
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

export default Mazher;
