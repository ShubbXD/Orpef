import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="flex justify-center items-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white shadow-lg rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Certificate Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
        >
          <img
            src="newsletter.jpg" // change to your certificate image path
            alt="Certification of Registration"
            className="w-[60%] md:w-[70%] rounded-xl shadow-md border hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Certification of Registration – ORPEF
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We are proud to announce that{" "}
            <span className="font-semibold text-indigo-600">ORPEF</span> has
            been officially recognized and registered for its purpose of
            <span className="text-gray-800 font-medium">
              {" "}
              empowering innovation, research, and social impact
            </span>
            . This certification stands as a{" "}
            <span className="text-indigo-600 font-semibold">
              milestone in our journey
            </span>
            , reaffirming our commitment to drive change with{" "}
            <span className="text-gray-800 font-medium">
              authenticity and trust
            </span>
            .
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
