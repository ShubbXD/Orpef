import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="md:grid md:grid-cols-2 max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden mx-auto">
        {/* Left Image */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="newsletter.jpg"
          alt="Newsletter"
          className="hidden md:block w-full h-full object-cover"
        />

        {/* Right Content */}
        <div className="relative flex items-center justify-center p-10">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            >
              Stay Connected With <span className="text-blue-600">ORPEF</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-600 max-w-md mx-auto"
            >
              Subscribe to our newsletter and be the first to receive updates on
              community projects, upcoming events, and insightful articles from
              Odisha’s retired power engineers.
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex shadow-md rounded-lg overflow-hidden max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-900 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 text-white font-semibold transition"
              >
                Join Now
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
