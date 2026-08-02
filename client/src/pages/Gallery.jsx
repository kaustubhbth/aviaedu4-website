import "./Gallery.css";

function Gallery() {
  return (
    <>
      <section className="gallery-banner">
        <div className="container">
          <span>OUR GALLERY</span>

          <h1>Moments of Learning & Excellence</h1>

          <p>
            Explore our training sessions, workshops, industry interactions,
            airport visits and professional development programmes.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filter">
            <button>All</button>
            <button>Training</button>
            <button>Workshops</button>
            <button>Airport Visits</button>
            <button>Corporate</button>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?1" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?2" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?3" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?4" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?5" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?6" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?7" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?8" alt="" />
            </div>

            <div className="gallery-card">
              <img src="https://picsum.photos/500/350?9" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
