import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

const title = "The Hungry Gentleman.";
const words = title.split(" ");

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background carousel with subtle zoom */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={heroImages[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease }}
          draggable={false}
        />
      </AnimatePresence>

      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Title */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="text-[2rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-wide text-[#f5f0eb]"
          style={{ fontFamily: "Georgia, serif" }}
          aria-label={title}
        >
          {words.map((word, wi) => {
            const charOffset = words.slice(0, wi).reduce((sum, w) => sum + w.length + 1, 0);
            return (
              <span key={wi}>
                <span className="inline-block whitespace-nowrap">
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={ci}
                      className="inline-block"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (charOffset + ci) * 0.04, ease }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                {wi < words.length - 1 && " "}
              </span>
            );
          })}
        </h1>

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-6 mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 + title.length * 0.04 + 0.2, ease }}
        >
          <span className="h-px w-12 bg-[#d4a574]/60" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#d4a574]/80" />
          <span className="h-px w-12 bg-[#d4a574]/60" />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-[#d4a574] mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8 + title.length * 0.04 + 0.3,
            ease,
          }}
        >
          Chef Kevin Thai
        </motion.p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-20 z-10 flex gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "bg-[#d4a574] scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f5f0eb"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
