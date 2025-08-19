import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael",
      role: "Community Volunteer",
      img: "person.svg",
      quote:
        "ORPEF has been a guiding light in technical and social initiatives. Their voluntary services truly make a difference.",
    },
    {
      name: "James",
      role: "Local Resident",
      img: "person.svg",
      quote:
        "The retired engineers bring unmatched wisdom. Their disaster relief work saved our community during tough times.",
    },
    {
      name: "Emily",
      role: "Student Engineer",
      img: "person.svg",
      quote:
        "Learning from ORPEF mentors has been inspiring. Their legacy continues to empower the next generation of engineers.",
    },
    {
      name: "John",
      role: "Local Business Owner",
      img: "person.svg",
      quote:
        "It’s rare to see such dedication after retirement. ORPEF proves that experience never retires.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center"
      >
        Voices of Trust  
        <span className="block text-blue-600">What People Say About ORPEF</span>
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto mt-14">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full border-4 border-blue-100 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
