import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, galleryIntro } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-32 px-6 md:px-12">
      {/* Section heading */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <h2
          className="text-4xl md:text-5xl text-[#f5f0eb] tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The Food
        </h2>
      </motion.div>

      <motion.p
        className="text-center text-[#a09080] max-w-xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
      >
        {galleryIntro}
      </motion.p>

      {/* Masonry-style grid */}
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((src, i) => (
          <motion.div
            key={src}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg"
            layoutId={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease }}
            whileHover={{
              scale: 1.05,
              rotate: Math.random() > 0.5 ? 1 : -1,
              boxShadow: "0 20px 40px rgba(212,165,116,0.15)",
            }}
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Dish ${i + 1}`}
              className="w-full h-auto object-cover"
              draggable={false}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Image */}
            <motion.img
              layoutId={selected}
              src={selected}
              alt="Gallery preview"
              className="relative z-10 max-w-full max-h-[85vh] object-contain rounded-lg"
              draggable={false}
            />

            {/* Close hint */}
            <motion.span
              className="absolute top-6 right-6 z-10 text-[#f5f0eb]/60 text-sm tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Click anywhere to close
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
