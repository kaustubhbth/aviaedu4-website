import HeroSlider from "../components/HeroSlider";
import MissionVision from "../components/MissionVision";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";

import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <HeroSlider />

      <MissionVision />

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

          <Link className="home-btn" to="/training">
            View All Training Programs
          </Link>
        </div>
      </section>

      <section className="home-consulting">
        <div className="container">
          <h2>Aviation Consulting Services</h2>

          <p>
            Strategic support for aviation organizations and institutions looking
            for operational excellence and workforce development.
          </p>

          <Link className="home-btn" to="/consulting">
            Explore Consulting
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2>Ready To Build Your Aviation Career?</h2>

          <p>
            Join AVIAEDU4 and learn from experienced aviation professionals.
          </p>

          <Link className="home-btn" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
