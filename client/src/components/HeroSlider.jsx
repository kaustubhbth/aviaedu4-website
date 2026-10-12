import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import "./HeroSlider.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",

    title: "Professional Aviation Training",

    subtitle:
      "Learn from highly experienced aviation professionals and build a successful career in the aviation industry.",

    button: "Explore Programs",

    link: "/training",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1920&q=80",

    title: "Air Cargo & Logistics",

    subtitle:
      "Industry-oriented training programs covering cargo operations, logistics, documentation and supply chain.",

    button: "View Courses",

    link: "/training",
  },

  {
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1920&q=80",

    title: "Corporate Training & Consulting",

    subtitle:
      "Customized aviation consulting and professional development solutions for institutions and organizations.",

    button: "Contact Us",

    link: "/contact",
  },
];

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
            className="hero-slide"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)), url(${slide.image})`,
            }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>

              <p>{slide.subtitle}</p>

              <Link className="home-btn" to={slide.link}>
                {slide.button}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
