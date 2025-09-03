import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Rotating text messages
const rotatingTexts = [
  "Retired but Wired",
  "Powering Memories",
  "Energizing Bonds",
  "The Legacy of Engineers",
];

export default function Intro({ onFinish }) {
  const [showIntro, setShowIntro] = useState(false);
  const [asciiVisible, setAsciiVisible] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    // ✅ Only show intro once per session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      if (onFinish) onFinish();
      return;
    }

    setShowIntro(true);
    sessionStorage.setItem("hasSeenIntro", "true");

    // Show ASCII art after 1s
    const asciiTimer = setTimeout(() => setAsciiVisible(true), 1000);

    // Rotate subtitle every 2s
    const rotateInterval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    // End intro after 7s
    const endTimer = setTimeout(() => {
      setShowIntro(false);
      if (onFinish) onFinish();
    }, 7000);

    return () => {
      clearTimeout(asciiTimer);
      clearTimeout(endTimer);
      clearInterval(rotateInterval);
    };
  }, [onFinish]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-green-400 font-mono z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-6">
            {/* ASCII Art */}
            {asciiVisible && (
              <motion.pre
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-sm md:text-lg leading-tight whitespace-pre"
              >
{String.raw`
   _____      _        _ _           
  |  __ \    | |      | | |          
  | |__) |__ | |_ __ _| | | ___ _ __ 
  |  ___/ _ \| __/ _\` | | |/ _ \ '__|
  | |  | (_) | || (_| | | |  __/ |   
  |_|   \___/ \__\__,_|_|_|\___|_|   

 Retired Electrical Power Engineers Forum
`}
              </motion.pre>
            )}

            {/* Rotating Subtitle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={rotatingIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-yellow-300 text-lg md:text-xl"
              >
                {rotatingTexts[rotatingIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
