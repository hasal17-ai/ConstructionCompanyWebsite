import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight, ArrowRight, ArrowUpRight, Box, Layers, MapPin,
  BedDouble, Bath, Ruler, Building2, Wallet, Phone,
} from "lucide-react";
import { projects, categories } from "../components/projectsData";
import { FloorPlan } from "../components/FloorPlan";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "../components/animations";

/* ─── helpers ─────────────────────────────────────────────────── */

// Parse "LKR 22M" -> 22 for range display.
function valueOf(v: string) {
  const m = v.match(/([\d.]+)/);
  return m ? parseFloat(m[1]) : 0;
}

function SectionLabel({ text, light }: { text: string; light?: boolean }) {
  return (
    <motion.div className="flex items-center gap-3 mb-3" variants={fadeUp}>
      <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
      <span className="uppercase tracking-widest" style={{ color: light ? "#0d9488" : "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }}>{text}</span>
      <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
    </motion.div>
  );
}

/* ─── page ────────────────────────────────────────────────────── */

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"3D" | "2D">("3D");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const { min, max, locations } = useMemo(() => {
    const vals = projects.map((p) => valueOf(p.value)).filter(Boolean);
    return {
      min: Math.min(...vals),
      max: Math.max(...vals),
      locations: Array.from(new Set(projects.map((p) => p.location))),
    };
  }, []);

  const heroStats = [
    { value: `${projects.length}+`, label: "Homes Designed" },
    { value: `${categories.length - 1}`, label: "Home Styles" },
    { value: `${locations.length}`, label: "Locations" },
    { value: `LKR ${min}–${max}M`, label: "Project Range" },
  ];

  return (
    <div className="bg-white">

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "520px" }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')" }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2d]/95 via-[#0b1a2d]/82 to-[#0b1a2d]/55" />
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: "#0d6b6a" }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-14 pt-28">
          <motion.div className="flex items-center gap-2 mb-5 text-gray-400" style={{ fontSize: "0.75rem" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "#0d9488" }}>Our Projects</span>
          </motion.div>

          <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span className="uppercase tracking-widest" style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }}>Our Portfolio</span>
          </motion.div>

          <motion.h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.02em", maxWidth: "760px" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Homes We Design, <span style={{ color: "#0d9488" }}>Down to Every Detail</span>
          </motion.h1>

          <motion.p className="text-gray-300 mb-9" style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "540px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78 }}>
            Explore our portfolio of residential projects across Sri Lanka — each one shown as a realistic 3D render alongside its matching 2D floor plan, so you can see exactly how the home comes together.
          </motion.p>

          {/* Hero stat row */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", maxWidth: "660px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }}>
            {heroStats.map((s) => (
              <div key={s.label} className="px-5 py-4" style={{ background: "rgba(11,26,45,0.65)" }}>
                <div style={{ color: "#0d9488", fontSize: "1.25rem", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="text-gray-400 mt-1.5" style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.03em" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Portfolio grid ──────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Featured Work" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
              Browse Our Projects
            </motion.h2>
            <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Filter by home style, then toggle between the 3D render and the drafted 2D floor plan for any project.
            </motion.p>
          </motion.div>

          {/* Controls */}
          <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const active = filter === cat;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className="px-5 py-2 rounded-sm transition-colors duration-200 uppercase"
                    style={active
                      ? { background: "#0d6b6a", color: "#ffffff", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em" }
                      : { background: "#f1f2f4", color: "#6b7280", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex bg-[#f1f2f4] p-1 rounded-sm shrink-0">
              <button
                onClick={() => setViewMode("3D")}
                className="flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-200"
                style={viewMode === "3D" ? { background: "#ffffff", color: "#0b1a2d", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", fontSize: "0.72rem", fontWeight: 700 } : { color: "#6b7280", fontSize: "0.72rem", fontWeight: 600 }}
              >
                <Box className="w-4 h-4" /> 3D RENDER
              </button>
              <button
                onClick={() => setViewMode("2D")}
                className="flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-200"
                style={viewMode === "2D" ? { background: "#ffffff", color: "#0b1a2d", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", fontSize: "0.72rem", fontWeight: 700 } : { color: "#6b7280", fontSize: "0.72rem", fontWeight: 600 }}
              >
                <Layers className="w-4 h-4" /> 2D PLAN
              </button>
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative overflow-hidden rounded-sm cursor-pointer border border-gray-100"
                  whileHover={{ y: -6 }}
                >
                  <Link to={`/projects/${p.slug}`} className="absolute inset-0 z-20" aria-label={`View ${p.title}`} />

                  <div className="relative w-full overflow-hidden" style={{ height: "290px", backgroundColor: "#e2e8f0" }}>
                    <AnimatePresence mode="wait">
                      {viewMode === "2D" ? (
                        <motion.div
                          key={`${p.slug}-2D`}
                          className="absolute inset-0 bg-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {p.plan2DImage ? (
                            <img src={p.plan2DImage} alt={`${p.title} floor plan`} className="w-full h-full object-contain" />
                          ) : (
                            <FloorPlan rooms={p.rooms} title={p.planTitle} className="w-full h-full" />
                          )}
                        </motion.div>
                      ) : (
                        <motion.img
                          key={`${p.slug}-3D`}
                          src={p.image3D}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          whileHover={{ scale: 1.07 }}
                        />
                      )}
                    </AnimatePresence>

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/95 via-[#0b1a2d]/35 to-transparent pointer-events-none"
                      style={{ opacity: viewMode === "2D" ? 0.7 : 1 }}
                    />

                    <div className="absolute top-4 left-4 pointer-events-none">
                      <span className="text-white px-2.5 py-0.5 rounded-sm" style={{ background: "#0d6b6a", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em" }}>
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <span className="bg-white/12 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-sm" style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.02em" }}>
                        {p.value}
                      </span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-5 pointer-events-none">
                      <p className="text-gray-300 mb-1 flex items-center gap-1.5" style={{ fontSize: "0.7rem" }}>
                        <MapPin className="w-3 h-3" style={{ color: "#0d9488" }} /> {p.location} · {p.year}
                      </p>
                      <h3 className="text-white mb-2" style={{ fontWeight: 800, fontSize: "1rem" }}>{p.title}</h3>

                      {/* Spec chips */}
                      <div className="flex items-center gap-3 text-gray-200" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                        <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" style={{ color: "#0d9488" }} /> {p.beds}</span>
                        <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" style={{ color: "#0d9488" }} /> {p.baths}</span>
                        <span className="flex items-center gap-1"><Ruler className="w-3.5 h-3.5" style={{ color: "#0d9488" }} /> {p.area}</span>
                      </div>

                      <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#0d9488" }}>
                        <span style={{ fontSize: "0.73rem", fontWeight: 700 }}>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16" style={{ fontSize: "0.9rem" }}>No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── 3. Approach / value band ───────────────────────────── */}
      <section className="py-20 bg-[#f4f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewportConfig}>
              <SectionLabel text="How We Present Work" />
              <motion.h2 className="text-[#0b1a2d] mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
                Every Project, in 3D and 2D
              </motion.h2>
              <motion.p className="text-gray-500 mb-8" style={{ lineHeight: 1.9, fontSize: "0.92rem" }} variants={fadeUp}>
                We believe you should see exactly what you're building before a single brick is laid. That's why every project in our portfolio pairs a photorealistic 3D render with an accurate, drafted 2D floor plan — the same plan our construction teams work from.
              </motion.p>
              <motion.div className="grid sm:grid-cols-2 gap-3" variants={staggerContainer(0.08, 0.1)}>
                {[
                  { icon: Box, title: "Realistic 3D Render", desc: "See the exterior, materials, and form of the finished home." },
                  { icon: Layers, title: "Matching 2D Plan", desc: "Room layouts, dimensions, and flow — drawn to a real sheet." },
                  { icon: Wallet, title: "Transparent Pricing", desc: `Projects from LKR ${min}M to ${max}M, clearly indicated.` },
                  { icon: Building2, title: "Every Home Style", desc: "Villas, cabins, minimalist and eco-homes across the island." },
                ].map((f) => (
                  <motion.div
                    key={f.title}
                    className="bg-white border border-gray-100 rounded-sm p-5"
                    variants={cardVariant}
                    whileHover={{ borderColor: "#0d6b6a", y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-3" style={{ background: "#0d6b6a" }}>
                      <f.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[#0b1a2d] mb-1.5" style={{ fontSize: "0.9rem", fontWeight: 800 }}>{f.title}</h3>
                    <p className="text-gray-500" style={{ fontSize: "0.8rem", lineHeight: 1.7 }}>{f.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Locations card */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportConfig}>
              <motion.div
                className="relative overflow-hidden rounded-sm p-10"
                style={{ background: "#0b1a2d" }}
                whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
                />
                <div className="relative">
                  <div className="h-1 w-12 mb-8 rounded-full" style={{ background: "#0d6b6a" }} />
                  <h3 className="text-white mb-2" style={{ fontWeight: 900, fontSize: "1.35rem", lineHeight: 1.2 }}>Projects Across Sri Lanka</h3>
                  <p className="text-gray-400 mb-8" style={{ fontSize: "0.83rem", lineHeight: 1.8 }}>
                    From the central hills to the coastal south, we design homes suited to each site, climate, and community.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {locations.map((loc) => (
                      <motion.span
                        key={loc}
                        className="flex items-center gap-1.5 border px-3 py-1.5 rounded-sm"
                        style={{ borderColor: "rgba(255,255,255,0.14)", color: "#d1d5db", fontSize: "0.75rem", fontWeight: 600 }}
                        whileHover={{ borderColor: "#0d6b6a", color: "#0d9488", background: "rgba(13,107,106,0.12)" }}
                        transition={{ duration: 0.18 }}
                      >
                        <MapPin className="w-3.5 h-3.5" style={{ color: "#0d9488" }} /> {loc}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => navigate("/services")}
                    className="flex items-center gap-2 text-white"
                    style={{ fontSize: "0.8rem", fontWeight: 700 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span style={{ color: "#0d9488" }}>See our full range of services</span>
                    <ArrowRight className="w-4 h-4" style={{ color: "#0d9488" }} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0b1a2d] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#0d6b6a" }} />
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "55px 55px" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Start Your Home" light />
            <motion.h2 className="text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Have a Plot? Let's Design Your Home.
            </motion.h2>
            <motion.p className="text-gray-400 mb-10" style={{ lineHeight: 1.85, fontSize: "0.95rem" }} variants={fadeUp}>
              Share your land details and vision — we'll come back with a tailored design concept and a no-obligation estimate within 24 hours.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeUp}>
              <motion.button
                onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}
                className="text-white px-8 py-3.5 rounded-sm flex items-center gap-2"
                style={{ background: "#0d6b6a", fontWeight: 800, letterSpacing: "0.08em", fontSize: "0.82rem" }}
                whileHover={{ scale: 1.05, background: "#0d9488" }}
                whileTap={{ scale: 0.97 }}
              >
                GET A FREE QUOTE
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="tel:+94717300011"
                className="flex items-center gap-2 border-2 border-white/25 px-8 py-3.5 rounded-sm"
                style={{ fontWeight: 700, fontSize: "0.82rem", color: "#ffffff" }}
                whileHover={{ borderColor: "#0d9488", color: "#0d9488", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                +94 71 730 0011
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
