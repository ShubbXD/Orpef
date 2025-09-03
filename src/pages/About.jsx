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
    <section className="px-6 md:px-16 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-gray-900"
      >
        <span className="text-indigo-600">About ORPEF</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg text-slate-700 text-center mt-6 max-w-3xl mx-auto leading-relaxed"
      >
        The <span className="font-semibold text-indigo-600">Retired Engineer's Forum </span> 
         as always been a beacon of{" "}
        <span className="font-semibold text-blue-600">wisdom</span>,{" "}
        <span className="font-semibold text-blue-600">experience</span>, and{" "}
        <span className="font-semibold text-blue-600">camaraderie</span>. 
        Together, we strive to grow in numbers and in the{" "}
        <span className="font-semibold text-indigo-600">value we bring</span> to society.
      </motion.p>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative shadow-xl shadow-indigo-200 rounded-2xl overflow-hidden"
        >
          <img
            className="max-w-md w-full rounded-2xl object-cover hover:scale-105 transition-all duration-500"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop"
            alt="Retired Engineers Forum"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-slate-700 max-w-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
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
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">S - Strengthening</h3>
              <p>Welcoming life members and ensuring steady growth.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">C - Cultivating</h3>
              <p>Building stronger bonds via family picnics, social events, and gatherings.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">O - Organizing</h3>
              <p>Fundraising initiatives to ensure financial stability and independence.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">P - Promoting</h3>
              <p>Addressing consumer issues before the appropriate authority with responsibility.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600">E - Expanding</h3>
              <p>Encouraging younger retired engineers to participate and benefit from our wisdom.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
