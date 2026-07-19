import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, staggerContainer, viewportConfig } from "./animations";

const categories = ["All", "Commercial", "Infrastructure", "Residential", "Industrial"];

const projects = [
  {
    title: "Colombo Port City Tower",
    category: "Commercial",
    location: "Colombo 01",
    year: "2024",
    value: "LKR 4.8B",
    desc: "40-storey Grade-A office tower with luxury retail podium, sky lobby, and helipad.",
    image: "https://images.unsplash.com/photo-1742276996766-392f323c2eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Southern Expressway Extension",
    category: "Infrastructure",
    location: "Hambantota – Matara",
    year: "2022",
    value: "LKR 12.3B",
    desc: "48 km expressway with 6 interchanges, 3 major bridges, full drainage infrastructure.",
    image: "https://images.unsplash.com/photo-1496055401924-5e7fdc885742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Kandy Hill Luxury Villas",
    category: "Residential",
    location: "Kandy, Central Province",
    year: "2023",
    value: "LKR 2.1B",
    desc: "Gated community of 120 luxury villas with panoramic views across the Kandy hills.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Katunayake Industrial Park",
    category: "Industrial",
    location: "Katunayake, Western Province",
    year: "2022",
    value: "LKR 3.6B",
    desc: "15-acre industrial campus with warehousing, logistics hub, and administration blocks.",
    image: "https://images.unsplash.com/photo-1644221150167-fb4fafa7f411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Colombo Skyline Twin Towers",
    category: "Commercial",
    location: "Colombo 03",
    year: "2023",
    value: "LKR 8.9B",
    desc: "Twin 32-floor mixed-use towers housing premium office, retail, and hotel floors.",
    image: "https://images.unsplash.com/photo-1742276792267-7c9595e38967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Northern Highway Connector",
    category: "Infrastructure",
    location: "Vavuniya – Jaffna",
    year: "2021",
    value: "LKR 16.5B",
    desc: "85 km strategic highway reconnecting the Northern Province to central Sri Lanka.",
    image: "https://images.unsplash.com/photo-1532201633958-497feb474315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export function Projects() {
  const [filter, setFilter] = useState("All");
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

        {/* Filter tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ duration: 0.5 }}>
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-sm transition-colors duration-200"
              style={filter === cat ? { background: "#0d6b6a", color: "#fff" } : { background: "#f1f2f4", color: "#6b7280" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              {...{ style: filter === cat ? { background: "#0d6b6a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.07em" } : { background: "#f1f2f4", color: "#6b7280", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.07em" } }}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full object-cover"
                  style={{ height: "265px" }}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/95 via-[#0b1a2d]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="text-white px-2.5 py-0.5 rounded-sm" style={{ background: "#0d6b6a", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em" }}>
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/10 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-sm" style={{ fontSize: "0.62rem", fontWeight: 700 }}>
                    {p.value}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5">
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
