import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import members from "../assets/assets";

const MemberCard = ({ name, dob }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showDOB, setShowDOB] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-64 h-40 rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Glow effect */}
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      {/* Card content */}
      <div className="relative z-10 bg-gray-900/75 p-4 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-bold text-white mb-2">{name}</h2>

        {/* Arrow toggle */}
        <button
          onClick={() => setShowDOB(!showDOB)}
          className="text-white text-lg transform transition-transform duration-300"
        >
          {showDOB ? "▲" : "▼"}
        </button>

        {showDOB && <p className="text-sm text-slate-300 mt-2">DOB: {dob}</p>}
      </div>
    </div>
  );
};

const Members = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q")?.toLowerCase() || "";

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery) ||
      m.dob.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero section with background image + parallax */}
      <div
        className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden mb-12 group"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // ✅ parallax effect
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 transition-transform duration-700 group-hover:scale-105"></div>

        {/* Animated text content */}
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our Esteemed Members
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            ORPEF is honored to be guided by the wisdom, service, and
            contributions of our distinguished retired power engineers.
          </motion.p>
        </motion.div>
      </div>

      {/* Intro Section with box + hover effect */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-900/90 text-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-3">
            United by Experience, Driven by Purpose
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Our members are not just retired engineers — they are mentors,
            guides, and lifelong contributors to the field of power engineering.
            Together, they bring decades of knowledge and dedication to support
            the growth of society and the next generation of engineers.
          </p>
        </div>
      </motion.div>

      {/* Members Grid */}
      <div className="px-6 md:px-12">
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} name={member.name} dob={member.dob} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-10">
            No members found matching "{searchQuery}".
          </p>
        )}
      </div>
    </section>
  );
};

export default Members;
