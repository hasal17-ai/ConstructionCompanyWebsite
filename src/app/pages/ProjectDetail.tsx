import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Box, Layers, BedDouble, Bath, Ruler, MapPin, Calendar, Check } from "lucide-react";
import { getProject, projects } from "../components/projectsData";
import { FloorPlan } from "../components/FloorPlan";
import { fadeUp, staggerContainer, viewportConfig } from "../components/animations";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [viewMode, setViewMode] = useState<"3D" | "2D">("3D");

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[#0b1a2d]" style={{ fontSize: "1.6rem", fontWeight: 900 }}>Project not found</h1>
        <p className="text-gray-500 mt-2">The project you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-sm" style={{ background: "#0d6b6a", fontWeight: 700, fontSize: "0.8rem" }}>
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const specs = [
    { icon: BedDouble, label: "Bedrooms", value: `${project.beds}` },
    { icon: Bath, label: "Bathrooms", value: `${project.baths}` },
    { icon: Ruler, label: "Floor Area", value: project.area },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
  ];

  return (
    <section className="bg-white pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-2 mb-8 text-gray-500 hover:text-[#0d6b6a] transition-colors" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Media + toggle */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative w-full rounded-sm overflow-hidden" style={{ height: "440px", backgroundColor: "#e2e8f0" }}>
              <AnimatePresence mode="wait">
                {viewMode === "2D" ? (
                  <motion.div key="2D" className="absolute inset-0 p-4 bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    {project.plan2DImage ? (
                      <img src={project.plan2DImage} alt={`${project.title} floor plan`} className="w-full h-full object-contain" />
                    ) : (
                      <FloorPlan rooms={project.rooms} title={project.planTitle} className="w-full h-full" />
                    )}
                  </motion.div>
                ) : (
                  <motion.img key="3D" src={project.image3D} alt={project.title} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-4">
              <div className="flex bg-[#f1f2f4] p-1 rounded-sm">
                <button onClick={() => setViewMode("3D")} className="flex items-center gap-2 px-5 py-2 rounded-sm transition-all" style={viewMode === "3D" ? { background: "#fff", color: "#0b1a2d", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", fontSize: "0.75rem", fontWeight: 700 } : { color: "#6b7280", fontSize: "0.75rem", fontWeight: 600 }}>
                  <Box className="w-4 h-4" /> 3D RENDER
                </button>
                <button onClick={() => setViewMode("2D")} className="flex items-center gap-2 px-5 py-2 rounded-sm transition-all" style={viewMode === "2D" ? { background: "#fff", color: "#0b1a2d", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", fontSize: "0.75rem", fontWeight: 700 } : { color: "#6b7280", fontSize: "0.75rem", fontWeight: 600 }}>
                  <Layers className="w-4 h-4" /> 2D PLAN
                </button>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="show">
            <motion.span variants={fadeUp} className="inline-block text-white px-2.5 py-1 rounded-sm mb-4" style={{ background: "#0d6b6a", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em" }}>
              {project.category.toUpperCase()}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3" style={{ color: "#0d6b6a", fontSize: "1.4rem", fontWeight: 800 }}>
              {project.value}
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 mt-5" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
              {project.longDesc}
            </motion.p>

            {/* Specs */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {specs.map((s) => (
                <div key={s.label} className="bg-[#f7f8f9] rounded-sm p-4 border border-gray-100">
                  <s.icon className="w-5 h-5 mb-2" style={{ color: "#0d6b6a" }} />
                  <p className="text-gray-400" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em" }}>{s.label.toUpperCase()}</p>
                  <p className="text-[#0b1a2d]" style={{ fontSize: "0.9rem", fontWeight: 700 }}>{s.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeUp} className="mt-8">
              <h3 className="text-[#0b1a2d] mb-3" style={{ fontSize: "0.95rem", fontWeight: 800 }}>Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600" style={{ fontSize: "0.85rem" }}>
                    <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0" style={{ background: "#0d6b6a" }}>
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9">
              <Link to="/#contact" className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-sm transition-transform hover:scale-[1.03]" style={{ background: "#0d6b6a", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.04em" }}>
                REQUEST A QUOTE
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Related projects */}
        <motion.div className="mt-24" variants={staggerContainer(0.12)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.h2 variants={fadeUp} className="text-[#0b1a2d] mb-8" style={{ fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-0.02em" }}>
            More Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link to={`/projects/${p.slug}`} className="group relative block overflow-hidden rounded-sm">
                  <div className="relative w-full overflow-hidden" style={{ height: "220px", backgroundColor: "#e2e8f0" }}>
                    <img src={p.image3D} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/90 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <p className="text-gray-300" style={{ fontSize: "0.7rem" }}>{p.location} · {p.value}</p>
                    <h3 className="text-white flex items-center gap-1" style={{ fontWeight: 800, fontSize: "0.95rem" }}>
                      {p.title} <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
