import HeroSlider from "../components/HeroSlider";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";

import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <>
      <HeroSlider />

      <About />

      <WhyChoose />

      <section className="home-training">
        <div className="container">
          <h2>Our Professional Training Programs</h2>

          <p>
            Industry-oriented aviation programs designed by experienced aviation
            professionals to prepare candidates for successful careers in
            airlines, airports, cargo operations and aviation security.
          </p>

          <div className="home-grid">
            <div className="home-card">
              <h3>Airport Operations</h3>
              <p>
                Passenger services, airport operations and terminal management.
              </p>
            </div>

            <div className="home-card">
              <h3>Aviation Security</h3>
              <p>BCAS compliance, aviation safety and airport security.</p>
            </div>

            <div className="home-card">
              <h3>Air Cargo Management</h3>
              <p>Cargo documentation, logistics and warehouse operations.</p>
            </div>

            <div className="home-card">
              <h3>Ground Handling</h3>
              <p>Ramp operations, baggage handling and aircraft turnaround.</p>
            </div>
          </div>

          <Link to="/training">
            <button className="home-btn">View All Training Programs</button>
          </Link>
        </div>
      </section>

      <section className="home-faculty">
        <div className="container">
          <h2>Learn From Industry Experts</h2>

          <p>
            Our faculty members bring decades of experience from airlines,
            airports, aviation security, cargo operations and airport
            management.
          </p>

          <Link to="/faculty">
            <button className="home-btn">Meet Our Faculty</button>
          </Link>
        </div>
      </section>

      <section className="home-consulting">
        <div className="container">
          <h2>Aviation Consulting Services</h2>

          <p>
            We provide strategic consulting services to aviation organizations,
            educational institutions and corporate clients for operational
            excellence and workforce development.
          </p>

          <Link to="/consulting">
            <button className="home-btn">Explore Consulting</button>
          </Link>
        </div>
      </section>

      <section className="home-stats">
        <div className="container stats-grid">
          <div>
            <h2>30+</h2>
            <p>Years Industry Experience</p>
          </div>

          <div>
            <h2>5000+</h2>
            <p>Professionals Trained</p>
          </div>

          <div>
            <h2>100+</h2>
            <p>Training Sessions</p>
          </div>

          <div>
            <h2>100%</h2>
            <p>Commitment to Excellence</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2>Ready To Build Your Aviation Career?</h2>

          <p>
            Join AVIAEDU4 and learn from experienced aviation professionals.
          </p>

          <Link to="/contact">
            <button className="home-btn">Contact Us</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
