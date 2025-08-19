import React from "react";
import { motion } from "framer-motion";

export default function Legal() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-100 text-gray-800">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900">Legal Information</h1>
        <p className="mt-4 text-base text-slate-700 leading-relaxed">
          Please read our <span className="text-indigo-600 font-semibold">Terms & Conditions</span> 
          and <span className="text-indigo-600 font-semibold">Privacy Policy</span> carefully to understand 
          how ORPEF operates and protects your information.
        </p>
      </motion.div>

      {/* Terms & Conditions */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-md p-8 mb-12"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Terms & Conditions
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>Membership is open to all retired power engineers willing to contribute positively.</li>
          <li>Events, discussions, and publications are conducted with respect and integrity.</li>
          <li>Members are expected to abide by community guidelines and maintain decorum.</li>
          <li>Any misuse of the platform or resources will lead to disciplinary action.</li>
          <li>ORPEF reserves the right to update these terms as needed.</li>
        </ul>
      </motion.div>

      {/* Privacy Policy */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Privacy Policy
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>We collect minimal personal data necessary for membership and communication.</li>
          <li>Your information will never be sold or shared with third parties without consent.</li>
          <li>We use data responsibly to improve member services and activities.</li>
          <li>Event photos/videos may be shared on official platforms with proper consent.</li>
          <li>Members can request correction or removal of personal data at any time.</li>
        </ul>
      </motion.div>
    </section>
  );
}
