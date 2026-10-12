import "./About.css";
function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>About AVIAEDU4 Trainers &amp; Consultants</h1>
          <p>
            Building the next generation of aviation professionals through
            practical training, expert mentorship and industry excellence.
          </p>
        </div>
      </section>

      <section className="about-company">
        <div className="container">
          <h2>Who We Are</h2>

          <p>
            AVIAEDU4 Trainers &amp; Consultants is a premier aviation training and consulting organization
            committed to developing industry-ready professionals through
            practical, competency-based learning.
          </p>

          <p>
            Our team consists of experienced aviation leaders from Airport
            Operations, Aviation Security, Air Cargo, Ground Handling, Customer
            Service and Leadership Development.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="card">
            <h3>Our Mission</h3>

            <p>
              To bridge the gap between classroom education and aviation
              industry requirements through practical and globally aligned
              training.
            </p>
          </div>

          <div className="card">
            <h3>Our Vision</h3>

            <p>
              To become India's most trusted aviation education and consulting
              platform for aspiring professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Build Your Aviation Career?</h2>

          <button>Explore Programs</button>
        </div>
      </section>
    </>
  );
}

export default About;
