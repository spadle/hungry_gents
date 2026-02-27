import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutImage, aboutBio, aboutBadges } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.5], isDesktop ? [120, 0] : [0, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Section heading */}
      <motion.h2
        className="text-center text-sm tracking-[0.4em] uppercase text-[#d4a574] mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        The Chef
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Bio text — left */}
        <div className="space-y-6">
          <motion.h3
            className="text-3xl md:text-4xl text-[#f5f0eb] tracking-wide"
            style={{ fontFamily: "Georgia, serif" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Chef Kevin Thai
          </motion.h3>

          {aboutBio.map((para, i) => (
            <motion.p
              key={i}
              className="text-[#a09080] leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1), ease }}
            >
              {para}
            </motion.p>
          ))}

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
          >
            {aboutBadges.map((badge, i) => (
              <motion.span
                key={badge}
                className="px-4 py-1.5 text-xs tracking-widest uppercase border border-[#d4a574]/40 text-[#d4a574] rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Image — right with parallax (desktop only) */}
        <motion.div
          className="relative"
          style={{ x: imageX, opacity: imageOpacity }}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={aboutImage}
              alt="Chef Kevin Thai"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
