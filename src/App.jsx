import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// Pages
import FAQ from "./pages/FAQ";

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
                <About />
                <Services />
                <Gallery />
                <Testimonials />
                <Newsletter />
                <Contact />
              </>
            }
          />

          {/* FAQ Page */}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default App;
