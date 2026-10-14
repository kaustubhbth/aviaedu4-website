import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import "./HeroSlider.css";

const featuredSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",

    alt: "Airliner flying above the clouds",

    title: "Professional Aviation Training",

    subtitle:
      "Learn from highly experienced aviation professionals and build a successful career in the aviation industry.",

    button: "Explore Programs",

    link: "/training",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1920&q=80",

    alt: "Air cargo and logistics operations",

    title: "Air Cargo & Logistics",

    subtitle:
      "Industry-oriented training programs covering cargo operations, logistics, documentation and supply chain.",

    button: "View Courses",

    link: "/training",
  },

  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",

    alt: "Airliner flying above the clouds",

    title: "Corporate Training & Consulting",

    subtitle:
      "Customized aviation consulting and professional development solutions for institutions and organizations.",

    button: "Contact Us",

    link: "/contact",
  },
];

const folderSlides = Object.entries(
  import.meta.glob("../assets/images/slideshow/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
  })
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, image]) => ({
    image,
    alt: {
      "slide1.jpeg": "AVIAEDU4 aviation professionals and frontline workforce banner",
      "slide2.jpeg": "AVIAEDU4 aviation training programs and faculty overview",
      "slide3.jpeg": "Airport Handling Professional certification program poster",
      "slide4.jpeg": "Aviation operational excellence and soft services poster",
      "slide5.jpeg": "AVIAEDU4 aviation academy vision and mission poster",
    }[path.split("/").pop()] ?? "AVIAEDU4 aviation training poster",
  }));

const slides = [...featuredSlides, ...folderSlides];

function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      className="hero-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={`hero-slide${slide.title ? "" : " image-only"}`}
          >
            <img className="hero-slide-image" src={slide.image} alt={slide.alt} />
            {slide.title && (
              <div className="hero-content">
                {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}

                <p>{slide.subtitle}</p>

                <Link className="home-btn" to={slide.link}>
                  {slide.button}
                </Link>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
