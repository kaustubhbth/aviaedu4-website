import "./Consulting.css";

function Consulting() {
  return (
    <>
      <section className="consult-banner">
        <div className="container">
          <span>AVIATION CONSULTING</span>

          <h1>Strategic Aviation Consulting Solutions</h1>

          <p>
            Helping aviation organizations improve operational excellence,
            develop people, enhance security and build sustainable growth
            through industry expertise.
          </p>
        </div>
      </section>

      <section className="consult-services">
        <div className="container">
          <h2>Our Consulting Services</h2>

          <div className="consult-grid">
            <div className="consult-card">
              <h3>Airport Operations Consulting</h3>

              <p>
                Improve airport operational efficiency, passenger experience and
                process management.
              </p>
            </div>

            <div className="consult-card">
              <h3>Aviation Security Advisory</h3>

              <p>
                Guidance on aviation security awareness, compliance and
                operational best practices.
              </p>
            </div>

            <div className="consult-card">
              <h3>Air Cargo Consultancy</h3>

              <p>
                Cargo operations, warehouse management, logistics and supply
                chain optimisation.
              </p>
            </div>

            <div className="consult-card">
              <h3>Corporate Training Solutions</h3>

              <p>
                Customized learning programmes for aviation organisations and
                institutions.
              </p>
            </div>

            <div className="consult-card">
              <h3>Leadership Development</h3>

              <p>
                Executive coaching, leadership capability building and team
                development.
              </p>
            </div>

            <div className="consult-card">
              <h3>Operational Excellence</h3>

              <p>
                SOP development, process improvement and quality enhancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <h2>Industries We Serve</h2>

          <div className="industry-grid">
            <div>Airports</div>

            <div>Airlines</div>

            <div>Educational Institutions</div>

            <div>Training Academies</div>

            <div>Government Organisations</div>

            <div>Corporate Sector</div>
          </div>
        </div>
      </section>

      <section className="consult-process">
        <div className="container">
          <h2>Our Consulting Approach</h2>

          <div className="process-grid">
            <div>
              <h3>01</h3>
              <p>Understand</p>
            </div>

            <div>
              <h3>02</h3>
              <p>Assess</p>
            </div>

            <div>
              <h3>03</h3>
              <p>Recommend</p>
            </div>

            <div>
              <h3>04</h3>
              <p>Implement</p>
            </div>

            <div>
              <h3>05</h3>
              <p>Review</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consult-cta">
        <h2>Looking for Aviation Consulting?</h2>

        <button>Request Consultation</button>
      </section>
    </>
  );
}

export default Consulting;
