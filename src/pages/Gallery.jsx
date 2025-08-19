import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop",
      title: "Prompt Engineers",
      desc: "Bridging the gap between human intent and machine understanding through expert prompt design."
    },
    {
      src: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
      title: "Data Scientists",
      desc: "Transforming raw data into insights that fuel innovation and informed decision-making."
    },
    {
      src: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop",
      title: "Software Engineers",
      desc: "Building reliable systems that connect ideas to real-world impact."
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Walking through the memories.</h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Every project we undertake is a journey of creativity and purpose.
          Explore our gallery to witness the dedication and expertise poured
          into each creation — designed not just to impress, but to inspire.A visual journey into the life and contributions of our members.  
          Every frame tells a story — of service, unity, and commitment.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="flex items-center gap-6 h-[400px] w-full max-w-6xl mt-12 mx-auto">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt={item.title}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
