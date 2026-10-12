import { FaBullseye, FaEye } from "react-icons/fa";
import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision-section" aria-labelledby="mission-vision-title">
      <div className="mission-vision-container">
        <header className="mission-vision-heading">
          <span className="mission-vision-eyebrow">OUR PURPOSE</span>
          <h2 id="mission-vision-title">VISION &amp; MISSION</h2>
          <span className="mission-vision-rule" aria-hidden="true" />
        </header>

        <div className="mission-vision-grid">
          <article className="mission-vision-card">
            <div className="mission-vision-icon" aria-hidden="true">
              <FaEye />
            </div>
            <h3>VISION</h3>
            <p>
              To be the premier benchmark in global aviation training—shaping
              operationally elite, safety-first leaders who elevate industry
              standards across airports, airlines, and supply chains.
            </p>
          </article>

          <article className="mission-vision-card">
            <div className="mission-vision-icon" aria-hidden="true">
              <FaBullseye />
            </div>
            <h3>MISSION</h3>
            <p>
              To bridge the gap between aviation theory and real-world execution
              through veteran-led mentorship and practical, simulation-driven
              training—equipping professionals with the compliance, operational
              mastery, and service excellence needed to lead from day one.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
