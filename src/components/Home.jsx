import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 md:px-12 py-12">
      
      {/* Left Image */}
      <motion.img
        src="/friends3.jpg"
        alt="Friends Reunion"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl rounded-lg shadow-lg object-cover"
      />

      <motion.div
  initial={{ opacity: 0, x: 150 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="absolute right-[-28rem] md:right-[-30rem] bg-gradient-to-r from-green-100 via-blue-100 to-blue-300 p-12 rounded-lg shadow-xl border border-gray-200 max-w-2xl"
>
  <p className="text-gray-800 text-lg leading-relaxed mb-6 font-bold">
    Welcome to the <span className="text-blue-500">Odisha Retired Power Engineers Forum (ORPEF)</span>. 
    We are a group of respected <span className="text-blue-500">retired power engineers</span> from Odisha. 
    We are united by a sense of camaraderie and a <span className="text-blue-500">common goal</span> to help others. 
    With our extensive experience, we are prepared to offer advice to the 
    <span className="text-blue-500"> government</span> on technical issues in the 
    <span className="text-blue-500"> energy sector</span>. 
    We also provide voluntary support during <span className="text-blue-500">natural disasters</span>, free of charge. 
    This work reflects our ongoing commitment to <span className="text-blue-500">public service</span>.
    <br />
    <span className="block mt-2">~ Team Orpef</span>
  </p>

  <a
    href="/about"
    className="inline-block mt-4 px-6 py-3 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition"
  >
    About Us
  </a>
</motion.div>
    </section>
  );
};

export default Home;
