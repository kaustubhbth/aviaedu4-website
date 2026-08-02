import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="section-tag">ABOUT US</span>

        <h2>About AVIAEDU4 Aviation Academy</h2>

        <p>
          AVIAEDU4 is a premier Aviation Training & Consulting Academy committed
          to developing industry-ready professionals through practical,
          competency-based learning.
        </p>

        <p>
          Our trainers have decades of experience in Airport Operations,
          Aviation Security, Ground Handling, Cargo, Customer Service and
          Leadership Development.
        </p>
      </div>

      <div className="about-right">
        <div className="box">
          <h3>40+</h3>
          <p>Years Combined Experience</p>
        </div>

        <div className="box">
          <h3>4</h3>
          <p>Industry Experts</p>
        </div>

        <div className="box">
          <h3>100%</h3>
          <p>Practical Training</p>
        </div>

        <div className="box">
          <h3>India</h3>
          <p>Training & Consulting</p>
        </div>
      </div>
    </section>
  );
}

export default About;
