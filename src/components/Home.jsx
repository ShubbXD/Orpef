import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

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
    <section
      id="home"
      className="pt-28 px-4 sm:px-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0f7ff 0%, #f9fcff 50%, #edfaff 100%)",
      }} // ✅ softer light-blue gradient
    >
      <main className="flex flex-col items-center max-w-8xl mx-auto w-full text-center">
        
        {/* Top Badge */}
        <button
          className="mb-6 flex items-center space-x-2 border border-blue-500 text-blue-500 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-blue-50 transition"
          type="button"
        >
          <span>Engineers united for public service</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-blue-500">
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Hero Heading */}
        <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-3xl leading-tight">
          Together for{" "}
          <span className="text-blue-500">Odisha’s energy future</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-xl text-sm sm:text-base leading-relaxed">
          We are the Odisha Retired Power Engineers Forum (ORPEF). A community
          of experienced engineers offering voluntary support, disaster relief,
          and technical advice for a stronger tomorrow.
        </p>

        {/* CTA Button */}
        <a
          href="/about"
          className="mt-8 bg-blue-500 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-blue-600 transition"
        >
          <span>Learn More About Us</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Image Section */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="/friends3.jpg"
          alt="ORPEF Engineers"
          className="rounded-[40px] mt-16 h-96 sm:h-[28rem] md:h-[32rem] w-full object-cover max-w-6xl shadow-lg"
        />
      </main>
    </section>
  );
};

export default Home;
