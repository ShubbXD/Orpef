import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="px-4 md:px-12 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Image with Overlayed Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto"
      >
        {/* Image */}
        <img
          src="/about.jpg"
          alt="About ORPEF"
          className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-105"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            <span className="text-indigo-300">About ORPEF</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mt-6 max-w-3xl leading-relaxed">
            The{" "}
            <span className="font-semibold text-indigo-300">
              Retired Engineer's Forum
            </span>{" "}
            has always been a beacon of{" "}
            <span className="font-semibold text-blue-200">wisdom</span>,{" "}
            <span className="font-semibold text-blue-200">experience</span>, and{" "}
            <span className="font-semibold text-blue-200">camaraderie</span>. 
            Together, we strive to grow in numbers and in the{" "}
            <span className="font-semibold text-indigo-300">
              value we bring
            </span>{" "}
            to society.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mt-16 px-4 md:px-8">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative shadow-xl shadow-indigo-200 rounded-2xl overflow-hidden"
        >
          <img
            className="max-w-md w-full rounded-2xl object-cover hover:scale-105 transition-all duration-500"
            src="/about.jpg"
            alt="Retired Engineers Forum"
          />
        </motion.div>

        {/* Right Text inside box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-10 max-w-2xl 
                     hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
            My vision is simple: to{" "}
            <span className="font-semibold text-indigo-600">
              enhance the Forum's activities
            </span>
            , provide meaningful{" "}
            <span className="font-semibold text-blue-600">
              opportunities for collaboration
            </span>
            , and ensure that we{" "}
            <span className="font-semibold text-indigo-600">
              continue to grow
            </span>{" "}
            both in numbers and in the{" "}
            <span className="font-semibold text-blue-600">
              value we bring
            </span>{" "}
            to each other.
          </p>

          {/* SCOPE Points */}
          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">S - Strengthening</h3>
              <p className="text-gray-700">Welcoming life members and ensuring steady growth.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">C - Cultivating</h3>
              <p className="text-gray-700">Building stronger bonds via family picnics, social events, and gatherings.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">O - Organizing</h3>
              <p className="text-gray-700">Fundraising initiatives to ensure financial stability and independence.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">P - Promoting</h3>
              <p className="text-gray-700">Addressing consumer issues before the appropriate authority with responsibility.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">E - Expanding</h3>
              <p className="text-gray-700">Encouraging younger retired engineers to participate and benefit from our wisdom.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
