import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to use this website?",
      answer: "Simply navigate using the menu above. Each section has detailed information about ORPEF and its initiatives.",
    },
    {
      question: "Are members only retired engineers?",
      answer: "Yes, our members are retired power engineers, but we welcome collaborations with students and professionals.",
    },
    {
      question: "Is this forum active offline?",
      answer: "Yes, we organize offline meetings, seminars, and technical advisory sessions regularly.",
    },
    {
      question: "How can I contact ORPEF?",
      answer: "You can contact us via the Contact page, email, or our official WhatsApp/Telegram group.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions? We’ve got answers. Click on a question to expand and see more details.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#1D293D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-gray-600 text-sm mt-3"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
