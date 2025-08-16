import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home"; 
import About from "./components/About";
import Services from "./components/Services";  
import Lenis from "@studio-freight/lenis";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    // ✅ Initialize Lenis smooth scrolling once in App
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
      {/* ✅ Navbar fixed at top */}
      <Navbar />

      {/* ✅ Main content below navbar */}
      {/* Removed space-y-20, let each section handle its own padding */}
      <main className="flex-1 mt-20">
        <Home />
        <About />
        <Services />
        <Contact />
        <Gallery />
        <Testimonials/>
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
