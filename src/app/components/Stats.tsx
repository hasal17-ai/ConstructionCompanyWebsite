import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { staggerContainer, fadeUp, viewportConfig } from "./animations";

const stats = [
  { value: 5, suffix: "+", label: "Projects Completed", sub: "Residential designs delivered" },
  { value: 3, suffix: "", label: "Expert Team Members", sub: "Engineering professionals" },
  { value: 11, suffix: "", label: "Services Offered", sub: "End-to-end design solutions" },
  { value: 8, suffix: "", label: "Step Project Process", sub: "Structured & transparent" },
  { value: 3, suffix: "", label: "Design Packages", sub: "Basic, Standard & Premium" },
  { value: 1, suffix: "+", label: "Year of Excellence", sub: "Est. 2026, Sri Lanka" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = value / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20 bg-[#0b1a2d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#0d6b6a" }} />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(13,107,106,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,0.07) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">Numbers Don't Lie</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
            Committed to Quality at Every Stage
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="text-center"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={{ color: "#0d9488", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 900, lineHeight: 1 }} className="mb-1.5">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-white mb-0.5" style={{ fontSize: "0.77rem", fontWeight: 700 }}>{s.label}</div>
              <div className="text-gray-500" style={{ fontSize: "0.67rem" }}>{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
