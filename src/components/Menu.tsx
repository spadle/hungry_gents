import { motion } from "framer-motion";
import { menuCourses } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

function Divider() {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 my-12"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
    >
      <span className="h-px w-16 bg-[#d4a574]/30" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#d4a574]/50" />
      <span className="h-px w-16 bg-[#d4a574]/30" />
    </motion.div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative py-32 px-6 md:px-12">
      {/* Section heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <h2
          className="text-4xl md:text-5xl text-[#f5f0eb] tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Tasting Menu
        </h2>
        <p className="text-[#a09080] mt-3 tracking-widest uppercase text-sm">
          A Culinary Journey
        </p>
      </motion.div>

      <Divider />

      <div className="max-w-2xl mx-auto">
        {menuCourses.map((course, ci) => (
          <div key={course.course}>
            {/* Course title */}
            <motion.h3
              className="text-center text-sm tracking-[0.4em] uppercase text-[#d4a574] mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {course.course}
            </motion.h3>

            {/* Dishes */}
            {course.items.map((item, ii) => (
              <motion.div
                key={item.name}
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * (ii + 1), ease }}
              >
                <h4
                  className="text-xl md:text-2xl text-[#f5f0eb] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.name}
                </h4>
                <p className="text-[#a09080] text-sm leading-relaxed max-w-lg mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {ci < menuCourses.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}
