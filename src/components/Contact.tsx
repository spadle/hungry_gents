import { motion } from "framer-motion";
import { contactFields } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <motion.h2
        className="text-center text-4xl md:text-5xl text-[#f5f0eb] tracking-wide mb-16"
        style={{ fontFamily: "Georgia, serif" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        Contact
      </motion.h2>

      <form
        className="max-w-xl mx-auto space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        {contactFields.map((field, i) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
          >
            <label className="block text-xs tracking-widest uppercase text-[#a09080] mb-2">
              {field.name}
            </label>
            {field.type === "textarea" ? (
              <textarea
                placeholder={field.placeholder}
                rows={5}
                className="w-full bg-white/5 border border-white/10 backdrop-blur rounded-lg px-4 py-3 text-[#f5f0eb] placeholder-[#a09080]/50 outline-none focus:border-[#d4a574]/50 transition-colors resize-none"
              />
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full bg-white/5 border border-white/10 backdrop-blur rounded-lg px-4 py-3 text-[#f5f0eb] placeholder-[#a09080]/50 outline-none focus:border-[#d4a574]/50 transition-colors"
              />
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="w-full py-3 mt-4 bg-[#d4a574] text-[#0a0a0a] font-semibold tracking-widest uppercase text-sm rounded-lg cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: contactFields.length * 0.1, ease }}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(212,165,116,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Submit
        </motion.button>
      </form>
    </section>
  );
}
