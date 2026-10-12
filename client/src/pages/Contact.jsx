import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-banner">
        <div className="container">
          <span>CONTACT US</span>

          <h1>Let's Connect</h1>

          <p>
            Have questions about our training or consulting services? Our team
            is here to help you.
          </p>
        </div>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>Address</h3>

            <p>D-52, Gulmohar Park, Ground Floor, New Delhi-110049</p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>

            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-box">
            <h3>Email</h3>

            <p>info@aviaedu4.com</p>
          </div>

          <div className="info-box">
            <h3>Office Hours</h3>

            <p>
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>

          <form>
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="tel" placeholder="Phone Number" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button>Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=D-52%2C%20Gulmohar%20Park%2C%20Ground%20Floor%2C%20New%20Delhi-110049&output=embed"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
