import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Fixed navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_1px_0_rgba(212,165,116,0.08)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <a
          href="#home"
          className="text-[#f5f0eb] text-xl tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The Hungry Gentleman.
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 w-8 h-6 flex flex-col justify-between cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-[2px] w-full bg-[#f5f0eb] origin-center"
            animate={open ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease }}
          />
          <motion.span
            className="block h-[2px] w-full bg-[#f5f0eb] origin-center"
            animate={open ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease }}
          />
        </button>
      </motion.header>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-[#f5f0eb] text-4xl md:text-5xl tracking-widest uppercase hover:text-[#d4a574] transition-colors"
                  style={{ fontFamily: "Georgia, serif" }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="https://www.instagram.com/thehungrygentleman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a09080] text-sm tracking-widest uppercase hover:text-[#d4a574] transition-colors mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.08, ease }}
              >
                @thehungrygentleman
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
