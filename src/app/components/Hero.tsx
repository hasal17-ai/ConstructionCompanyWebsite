import { Phone, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Done" },
  { value: "12+", label: "Skilled Team" },
  { value: "25+", label: "Districts Served" },
];

export function Hero() {
  const goto = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://uhhjoewirdiqwagr.public.blob.vercel-storage.com/322549_small.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2d]/96 via-[#0b1a2d]/80 to-[#0b1a2d]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/60 via-transparent to-transparent" />

      {/* Teal left stripe */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: "#0d6b6a" }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-20">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            className="h-px w-12"
            style={{ background: "#0d9488" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
          <span style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">
            Est. 2026 · Colombo, Sri Lanka
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6" style={{ maxWidth: "660px" }}>
          <motion.h1
            className="text-white"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            BUILDING SRI LANKA'S{" "}
            <motion.span
              style={{ color: "#0d9488" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              FUTURE
            </motion.span>
            <br />
            ONE STRUCTURE AT A TIME
          </motion.h1>
        </div>

        <motion.p
          className="text-gray-300 mb-10"
          style={{ fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "520px" }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.65 }}
        >
          Titan Engineering Pvt Ltd delivers world-class construction, civil engineering, and infrastructure solutions across Sri Lanka with 1+ years of proven excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 mb-16"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.button
            onClick={() => goto("#projects")}
            className="text-white px-8 py-3.5 rounded-sm"
            style={{ fontWeight: 800, letterSpacing: "0.08em", fontSize: "0.82rem", backgroundColor: "#0d6b6a" }}
            whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            VIEW OUR PROJECTS
          </motion.button>
          <motion.a
            href="tel:+94717300011"
            className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-sm"
            style={{ fontWeight: 700, fontSize: "0.82rem" }}
            whileHover={{ borderColor: "#0d9488", color: "#0d9488", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-4 h-4" />
            +94 71 730 0011
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
            >
              <div style={{ color: "#0d9488", fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
              <div className="text-gray-400 mt-1" style={{ fontSize: "0.72rem", letterSpacing: "0.04em" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => goto("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
        style={{ color: "rgba(255,255,255,0.4)" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        whileHover={{ color: "#0d9488" }}
        transition={{ delay: 1.8, duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
