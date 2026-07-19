import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "./animations";

const testimonials = [
  {
    name: "Eng. Pradeep Wijesinghe",
    role: "Director General, Road Development Authority",
    text: "Titan Engineering delivered our Northern Highway Connector 3 weeks ahead of schedule with exceptional quality. Their engineering team maintained international standards throughout — a reliable partner for critical national infrastructure.",
    stars: 5,
    logo: "RDA",
  },
  {
    name: "Mr. Ravi Mendis",
    role: "COO, ColomboProperties PLC",
    text: "We've partnered with Titan Engineering on four commercial towers in Colombo. Their attention to structural detail, seamless MEP coordination, and proactive project management make them our go-to contractor for high-rise developments.",
    stars: 5,
    logo: "CP",
  },
  {
    name: "Ms. Sanduni Ranawaka",
    role: "Director, LankaHomes Developers Ltd",
    text: "The Kandy Hill Villas project was completed on time and within budget. Titan's team handled complex hill-country terrain with remarkable skill. Every villa exceeded our client expectations — we're already planning two more developments.",
    stars: 5,
    logo: "LH",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">Client Testimonials</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer(0.15, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative bg-[#f4f5f7] p-7 rounded-sm border-b-4"
              style={{ borderColor: "#0d6b6a" }}
              variants={cardVariant}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.09)" }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8" style={{ color: "rgba(13,107,106,0.2)" }} />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <motion.div key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportConfig} transition={{ delay: i * 0.1 + j * 0.07 + 0.2, type: "spring", stiffness: 400 }}>
                    <Star className="w-4 h-4" style={{ color: "#0d6b6a", fill: "#0d6b6a" }} />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 mb-7" style={{ fontSize: "0.86rem", lineHeight: 1.85, fontStyle: "italic" }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                  style={{ background: "#0b1a2d" }}
                  whileHover={{ background: "#0d6b6a", scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white" style={{ fontSize: "0.6rem", fontWeight: 800 }}>{t.logo}</span>
                </motion.div>
                <div>
                  <p className="text-[#0b1a2d]" style={{ fontWeight: 800, fontSize: "0.87rem" }}>{t.name}</p>
                  <p className="text-gray-400 mt-0.5" style={{ fontSize: "0.75rem" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
