import { Pencil, ShieldCheck, Wallet, Layers, Users, Cpu, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "./animations";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional Approach",
    desc: "We handle each project with attention to detail and a commitment to professional service at every stage.",
  },
  {
    icon: Pencil,
    title: "Customized Designs",
    desc: "We do not believe in one design for everyone. Every solution is developed to match your individual requirements.",
  },
  {
    icon: Layers,
    title: "Modern & Elegant Concepts",
    desc: "Our designs combine contemporary architectural styles with practical functionality and comfortable living.",
  },
  {
    icon: Wallet,
    title: "Budget-Conscious Solutions",
    desc: "We consider your budget throughout the design process, delivering quality without unnecessary cost.",
  },
  {
    icon: Users,
    title: "Complete Service",
    desc: "From initial consultation to drawings, estimates, and visualization — a comprehensive range under one roof.",
  },
  {
    icon: Cpu,
    title: "Technical Expertise",
    desc: "Our team combines engineering knowledge and modern design technology to provide practical project solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Service",
    desc: "We maintain close communication throughout planning to ensure your requirements are properly understood.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">Why Choose Us</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
            What Sets Titan Engineering Apart
          </motion.h2>
          <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
            We believe a successful building begins with a well-planned design. Here is why clients choose us.
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" variants={staggerContainer(0.08, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              className="relative bg-[#f4f5f7] p-7 rounded-sm border border-transparent"
              variants={cardVariant}
              whileHover={{ y: -6, borderColor: "rgba(13,107,106,0.35)", background: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                style={{ background: "#0b1a2d" }}
                whileHover={{ background: "#0d6b6a", rotate: 5 }}
                transition={{ duration: 0.25 }}
              >
                <r.icon className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-[#0b1a2d] mb-2" style={{ fontWeight: 800, fontSize: "0.9rem" }}>{r.title}</h3>
              <p className="text-gray-500" style={{ fontSize: "0.82rem", lineHeight: 1.8 }}>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
