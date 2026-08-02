import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Learn • Train • Fly</p>

          <h1>
            Build Your Career
            <br />
            in Aviation Industry
          </h1>

          <p className="hero-text">
            Professional Aviation Training, Career Guidance and Aviation
            Consulting under one platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Apply Now</button>

            <button className="secondary-btn">Explore Courses</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
