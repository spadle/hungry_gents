import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[#a09080] text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <p>&copy; {new Date().getFullYear()} All Rights Reserved By The Hungry Gentleman Inc.</p>
        <a
          href="https://www.instagram.com/thehungrygentleman/"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-widest uppercase text-xs hover:text-[#d4a574] transition-colors"
        >
          @thehungrygentleman
        </a>
      </motion.div>
    </footer>
  );
}
