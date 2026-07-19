import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/Red_Black_boxes_Logo_Design_Business_Identity_for_Real_Estate_House_Rent_Sale__2_.png";

const TEAL = "#0d6b6a";
const TEAL_LIGHT = "#0d9488";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const intervals = [
      { target: 30, duration: 400 },
      { target: 65, duration: 500 },
      { target: 85, duration: 350 },
      { target: 100, duration: 300 },
    ];

    let current = 0;
    const ids: ReturnType<typeof setTimeout>[] = [];

    const runSegment = (idx: number) => {
      if (idx >= intervals.length) {
        ids.push(setTimeout(() => setPhase("done"), 350));
        return;
      }
      const { target, duration } = intervals[idx];
      const steps = 20;
      const stepTime = duration / steps;
      const increment = (target - current) / steps;
      let step = 0;

      const tick = () => {
        step++;
        current += increment;
        setProgress(Math.min(Math.round(current), 100));
        if (step < steps) {
          ids.push(setTimeout(tick, stepTime));
        } else {
          current = target;
          runSegment(idx + 1);
        }
      };
      ids.push(setTimeout(tick, stepTime));
    };

    ids.push(setTimeout(() => runSegment(0), 200));
    return () => ids.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase === "done") {
      const id = setTimeout(onComplete, 1000);
      return () => clearTimeout(id);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0b1a2d" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${TEAL}0a 1px, transparent 1px), linear-gradient(90deg, ${TEAL}0a 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Radial glow */}
          <motion.div
            className="absolute"
            style={{
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${TEAL}18 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Corner accents */}
          {[
            { top: 0, left: 0, borderTop: `2px solid ${TEAL}`, borderLeft: `2px solid ${TEAL}` },
            { top: 0, right: 0, borderTop: `2px solid ${TEAL}`, borderRight: `2px solid ${TEAL}` },
            { bottom: 0, left: 0, borderBottom: `2px solid ${TEAL}`, borderLeft: `2px solid ${TEAL}` },
            { bottom: 0, right: 0, borderBottom: `2px solid ${TEAL}`, borderRight: `2px solid ${TEAL}` },
          ].map((style, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ ...style, width: "40px", height: "40px", margin: "24px" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
            />
          ))}

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Logo image */}
            <motion.div
              className="bg-white rounded-sm flex items-center justify-center overflow-hidden mb-6"
              style={{ width: "90px", height: "90px", padding: "8px" }}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <img src={logoImg} alt="Titan Engineering" className="w-full h-full object-contain" />
            </motion.div>

            {/* Company name */}
            <motion.div
              className="text-white text-center mb-1"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)", fontWeight: 900, letterSpacing: "0.05em", lineHeight: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              TITAN ENGINEERING
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="flex items-center gap-3 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <div className="h-px w-8" style={{ background: TEAL_LIGHT }} />
              <span style={{ color: TEAL_LIGHT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.25em" }}>
                PVT LTD · SRI LANKA
              </span>
              <div className="h-px w-8" style={{ background: TEAL_LIGHT }} />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="relative"
              style={{ width: "clamp(260px, 40vw, 380px)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full origin-left"
                  style={{ scaleX: progress / 100, background: TEAL_LIGHT }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              </div>

              {/* Glowing dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                style={{ left: `calc(${progress}% - 5px)`, background: TEAL_LIGHT }}
                animate={{ boxShadow: [`0 0 6px ${TEAL_LIGHT}`, `0 0 18px ${TEAL_LIGHT}`, `0 0 6px ${TEAL_LIGHT}`] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />

              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-500 uppercase tracking-widest" style={{ fontSize: "0.6rem", fontWeight: 700 }}>Loading</span>
                <span style={{ color: TEAL_LIGHT, fontSize: "0.75rem", fontWeight: 800 }}>{progress}%</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-gray-500 mt-8 text-center uppercase tracking-widest"
              style={{ fontSize: "0.65rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0.4, 0.7] }}
              transition={{ delay: 1.1, duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
            >
              Leading the Future of Construction
            </motion.p>
          </div>

          {/* Exit curtain */}
          {phase === "done" && (
            <>
              <motion.div
                className="absolute inset-0"
                style={{ background: TEAL }}
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-[#0b1a2d]"
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
