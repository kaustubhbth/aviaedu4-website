import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseInterestModal from "./components/CourseInterestModal";
import SeoHead from "./components/SeoHead";

import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Consulting from "./pages/Consulting";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function App() {
  const [isCourseInterestOpen, setIsCourseInterestOpen] = useState(false);

  const openCourseInterest = () => {
    setIsCourseInterestOpen(true);
  };

  useEffect(() => {
    const handler = () => {
      openCourseInterest();
    };

    window.addEventListener("open-course-interest-modal", handler);

    return () => {
      window.removeEventListener("open-course-interest-modal", handler);
    };
  }, []);

  return (
    <BrowserRouter>
      <SeoHead />
      <Navbar onApplyClick={openCourseInterest} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/faculty/*" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <CourseInterestModal
        isOpen={isCourseInterestOpen}
        onClose={() => setIsCourseInterestOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;
