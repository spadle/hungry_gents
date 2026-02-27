import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SectionDivider() {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease }}
    >
      <motion.span
        className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#d4a574]/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        style={{ transformOrigin: "left" }}
      />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#d4a574]/40" />
      <motion.span
        className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#d4a574]/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        style={{ transformOrigin: "right" }}
      />
    </motion.div>
  );
}
