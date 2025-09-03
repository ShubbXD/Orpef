import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Gallery1 from "./components/Gallery1";
import About1 from "./components/About1";
import Legal from "./components/Legal";

// Pages
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";

// ✅ ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // use "smooth" if you want animation
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ✅ Ensure scroll resets on route change */}
      <ScrollToTop />

      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <main className="flex-1 mt-20">
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                
                <About1 />
                <Services />
                <Testimonials />
                <Gallery1 />
                <Newsletter />
                <Contact />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Members Page */}
          <Route path="/members" element={<Members />} />

          {/* FAQ Page */}
          <Route path="/faq" element={<FAQ />} />

          {/* Legal Page */}
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default App;
