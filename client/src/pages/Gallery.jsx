import "./Gallery.css";

const galleryImages = Object.entries(
  import.meta.glob("../assets/images/gallery/*.{jpg,jpeg,png,webp,avif,svg}", {
    eager: true,
    import: "default",
  })
).map(([path, src]) => ({
  src,
  alt: path.split("/").pop().replace(/\.[^.]+$/, "") || "Gallery image",
}));

function Gallery() {
  return (
    <>
      <section className="gallery-banner">
        <div className="container">
          <span>OUR GALLERY</span>
          <h1>Moments of Learning & Excellence</h1>
        </div>
      </section>

      <section className="gallery-page">
        <div className="container">
          {galleryImages.length > 0 ? (
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <div className="gallery-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-blank-box" aria-label="Gallery area placeholder" />
          )}
        </div>
      </section>
    </>
  );
}

export default Gallery;
