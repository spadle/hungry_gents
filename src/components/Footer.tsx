import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-2">
          <span className="h-px w-12 bg-[#d4a574]/20" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#d4a574]/30" />
          <span className="h-px w-12 bg-[#d4a574]/20" />
        </div>

        {/* Brand name */}
        <p
          className="text-[#f5f0eb] text-lg tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The Hungry Gentleman.
        </p>

        <a
          href="https://www.instagram.com/thehungrygentleman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a09080] tracking-widest uppercase text-xs hover:text-[#d4a574] transition-colors"
        >
          @thehungrygentleman
        </a>

        <p className="text-[#a09080]/60 text-xs tracking-wide mt-2">
          &copy; {new Date().getFullYear()} The Hungry Gentleman Inc. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
