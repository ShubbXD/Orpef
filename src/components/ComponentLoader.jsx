import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const rotatingTexts = [
  "Retired but Wired",
  "Powering Memories",
  "Energizing Bonds",
  "The Legacy of Retired Engineers",
  "Welcome to the World of Retired Engineers",
];

export default function ComponentLoader({ children, timeout = 7000 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    // ❌ If not on root, skip loader
    if (location.pathname !== "/") {
      setIsLoading(false);
      return;
    }

    // Rotate subtitle every 2s
    const rotateInterval = setInterval(() => {
      setRotatingIndex((prev) => {
        if (prev < rotatingTexts.length - 1) {
          return prev + 1;
        }
        return prev; 
      });
    }, 1000);

    // End loader after `timeout` ms
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, timeout);

    return () => {
      clearTimeout(endTimer);
      clearInterval(rotateInterval);
    };
  }, [timeout, location.pathname]);

  if (!isLoading) return <>{children}</>;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-green-400 font-mono z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-6">
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
