import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/image1.jpg",
      title: "Mr Mohapatra & Mrs Manjhari",
      desc: "A memory captured from our journey."
    },
    {
      src: "/image2.jpg",
      title: "Mr & Mrs Rath",
      desc: "Moments of unity and contribution."
    },
    {
      src: "/image3.jpg",
      desc: "Celebrating milestones together."
    }
  ];

  return (
    // 🔥 Added mb-8 for a tiny gap before footer
    <section className="relative w-full mb-8">
      {/* Background Image with Overlayed Text */}
      <div className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src="/people.jpg"
          alt="People"
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Walking through the memories.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-3xl leading-relaxed">
            A visual journey into the life and contributions of our members.
            Every frame tells a story — of service, unity, and commitment.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex items-center gap-6 h-[400px] w-full max-w-6xl mt-16 mx-auto">
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
