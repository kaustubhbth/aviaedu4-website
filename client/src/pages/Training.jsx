import "./Training.css";

function Training() {
  return (
    <>
      <section className="training-banner">
        <div className="container">
          <span>TRAINING PROGRAMS</span>

          <h1>Professional Aviation Training</h1>

          <p>
            Industry-focused aviation training programs designed and delivered
            by experienced aviation professionals.
          </p>
        </div>
      </section>

      <section className="training-section">
        <div className="container">
          <h2>Our Training Programs</h2>

          <div className="training-grid">
            <div className="training-card">
              <h3>Airport Operations</h3>
              <p>Complete airport operational training.</p>
            </div>

            <div className="training-card">
              <h3>Aviation Security</h3>
              <p>Security awareness and BCAS compliance.</p>
            </div>

            <div className="training-card">
              <h3>Air Cargo Management</h3>
              <p>Air cargo operations and logistics.</p>
            </div>

            <div className="training-card">
              <h3>Ground Handling</h3>
              <p>Ramp, baggage and aircraft turnaround.</p>
            </div>

            <div className="training-card">
              <h3>Customer Service</h3>
              <p>Professional passenger service training.</p>
            </div>

            <div className="training-card">
              <h3>Leadership Development</h3>
              <p>Leadership and team management skills.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Training;
