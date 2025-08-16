import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 px-6 sm:px-12 lg:px-20"
      style={{
        background: "linear-gradient(135deg, #f8fbff 0%, #eef7ff 50%, #f3fbff 100%)",
      }}
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight text-left"
        >
          Capturing Moments,  
          <span className="block text-blue-600">Preserving Legacy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl text-left"
        >
          A visual journey into the life and contributions of our members.  
          Every frame tells a story — of service, unity, and commitment.
        </motion.p>
      </div>

      {/* Image Grid */}
      <div className="flex items-center gap-2 h-[400px] w-full max-w-6xl mt-14 mx-auto">
        {[
          "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop",
        ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={src}
              alt={`Gallery image ${i + 1}`}
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
              ORPEF Moments
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
