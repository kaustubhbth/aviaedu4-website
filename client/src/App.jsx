import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import CourseInterestModal from "./components/CourseInterestModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Consulting from "./pages/Consulting";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const AUTO_POPUP_KEY = "aviaedu4-course-interest-autopopup-seen";

function App() {
  const [isCourseInterestOpen, setIsCourseInterestOpen] = useState(false);
  const autoPopupTimerRef = useRef(null);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(AUTO_POPUP_KEY) === "true";

    if (alreadySeen) {
      return undefined;
    }

    autoPopupTimerRef.current = window.setTimeout(() => {
      autoPopupTimerRef.current = null;
      setIsCourseInterestOpen(true);
      sessionStorage.setItem(AUTO_POPUP_KEY, "true");
    }, 1200);

    return () => {
      window.clearTimeout(autoPopupTimerRef.current);
      autoPopupTimerRef.current = null;
    };
  }, []);

  const openCourseInterest = () => {
    window.clearTimeout(autoPopupTimerRef.current);
    autoPopupTimerRef.current = null;
    sessionStorage.setItem(AUTO_POPUP_KEY, "true");
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
      <Navbar onApplyClick={openCourseInterest} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/faculty/*" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <FloatingButtons />

      <CourseInterestModal
        isOpen={isCourseInterestOpen}
        onClose={() => setIsCourseInterestOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;
