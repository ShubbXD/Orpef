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
      className="pt-28 px-4 sm:px-10 overflow-hidden bg-blue-100"
    >
      <main className="relative flex items-center justify-center max-w-8xl mx-auto w-full">
        {/* Background Image */}
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08 }}
          src="/powerline.jpg"
          alt="ORPEF Powerline"
          className="rounded-[40px] h-[32rem] w-full object-cover shadow-lg transition duration-500 hover:brightness-110 hover:shadow-2xl"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10 z-10">
          {/* Top Badge */}
          <button
            className="mb-6 flex items-center space-x-2 border border-white text-white text-xs rounded-full px-4 pr-1.5 py-1.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
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
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl max-w-3xl leading-tight drop-shadow-lg">
            Together we can
            <span className="text-blue-650">
              {" "}
              boost Odisha’s energy future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-white/90 max-w-xl text-sm sm:text-base leading-relaxed drop-shadow-md">
            We are the Odisha Retired Power Engineers Forum (ORPEF). A community
            of experienced engineers offering voluntary support, disaster
            relief, and technical advice for a stronger tomorrow.
          </p>

          {/* CTA Button */}
          <a
            href="/about"
            className="mt-8 bg-blue-500 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-blue-600 transition shadow-md"
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
        </div>
      </main>
    </section>
  );
};

export default Home;
