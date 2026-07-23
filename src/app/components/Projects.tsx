import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Layers, Box } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, staggerContainer, viewportConfig } from "./animations";
import { projects, categories } from "./projectsData";
import { FloorPlan } from "./FloorPlan";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"3D" | "2D">("3D");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">Portfolio</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
            Featured Projects
          </motion.h2>
        </motion.div>

        {/* Controls: Filter & View Mode */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-5 py-2 rounded-sm transition-colors duration-200"
                style={filter === cat ? { background: "#0d6b6a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.07em" } : { background: "#f1f2f4", color: "#6b7280", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.07em" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.toUpperCase()}
              </motion.button>
            ))}
          </div>

          <div className="flex bg-[#f1f2f4] p-1 rounded-sm">
            <button
              onClick={() => setViewMode("3D")}
              className="flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-200"
              style={viewMode === "3D" ? { background: "#fff", color: "#0b1a2d", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", fontSize: "0.75rem", fontWeight: 700 } : { color: "#6b7280", fontSize: "0.75rem", fontWeight: 600 }}
            >
              <Box className="w-4 h-4" />
              3D RENDER
            </button>
            <button
              onClick={() => setViewMode("2D")}
              className="flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-200"
              style={viewMode === "2D" ? { background: "#fff", color: "#0b1a2d", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", fontSize: "0.75rem", fontWeight: 700 } : { color: "#6b7280", fontSize: "0.75rem", fontWeight: 600 }}
            >
              <Layers className="w-4 h-4" />
              2D PLAN
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
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <Link to={`/projects/${p.slug}`} className="absolute inset-0 z-20" aria-label={`View ${p.title}`} />
                <div className="relative w-full overflow-hidden" style={{ height: "265px", backgroundColor: "#e2e8f0" }}>
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
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/95 via-[#0b1a2d]/40 to-transparent pointer-events-none"
                  style={{ opacity: viewMode === "2D" ? 0.75 : 1 }}
                />

                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="text-white px-2.5 py-0.5 rounded-sm" style={{ background: "#0d6b6a", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em" }}>
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-4 right-4 pointer-events-none">
                  <span className="bg-white/10 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-sm" style={{ fontSize: "0.62rem", fontWeight: 700 }}>
                    {p.value}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 pointer-events-none">
                  <p className="text-gray-400 mb-1" style={{ fontSize: "0.7rem" }}>{p.location} · {p.year}</p>
                  <h3 className="text-white mb-2" style={{ fontWeight: 800, fontSize: "0.97rem" }}>{p.title}</h3>
                  <p className="text-gray-300 overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20" style={{ fontSize: "0.78rem", lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#0d9488" }}>
                    <span style={{ fontSize: "0.73rem", fontWeight: 700 }}>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
