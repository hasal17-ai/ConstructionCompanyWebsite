import { Building2, Layers, Truck, Wrench, Leaf, Hammer } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "./animations";

const services = [
  {
    icon: Building2,
    title: "Commercial & Residential Construction",
    desc: "End-to-end construction of high-rise towers, luxury villas, condominiums, shopping complexes, and corporate headquarters.",
    tags: ["High-rise buildings", "Luxury villas", "Shopping malls", "Condominiums"],
  },
  {
    icon: Layers,
    title: "Civil & Structural Engineering",
    desc: "Comprehensive structural design, geotechnical analysis, and engineering ensuring maximum safety, durability, and code compliance.",
    tags: ["Structural design", "Foundation works", "Geotechnical analysis", "Seismic assessment"],
  },
  {
    icon: Truck,
    title: "Infrastructure & Road Works",
    desc: "Expressways, bridges, urban roads, and drainage systems built to government and international standards across all provinces.",
    tags: ["Expressways", "Bridge construction", "Drainage", "Urban roads"],
  },
  {
    icon: Wrench,
    title: "MEP Engineering",
    desc: "Full mechanical, electrical, and plumbing systems — designed, installed, and commissioned seamlessly across every project type.",
    tags: ["Electrical systems", "Plumbing", "HVAC", "Fire suppression"],
  },
  {
    icon: Leaf,
    title: "Green & Sustainable Building",
    desc: "Eco-friendly construction meeting international green building standards including LEED certification and energy optimisation.",
    tags: ["LEED certification", "Solar integration", "Rainwater harvesting", "Green roofing"],
  },
  {
    icon: Hammer,
    title: "Renovation & Retrofitting",
    desc: "Upgrading existing structures to modern safety, seismic, and functional standards while preserving architectural character.",
    tags: ["Seismic upgrades", "Interior renovation", "Historic restoration", "Structural retrofitting"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">What We Do</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
            Our Core Services
          </motion.h2>
          <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
            Comprehensive construction and engineering solutions tailored to Sri Lanka's landscape, climate, and regulatory environment.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              className="bg-white p-7 rounded-sm border border-transparent cursor-default"
              variants={cardVariant}
              whileHover={{ y: -8, borderColor: "rgba(13,107,106,0.4)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                style={{ background: "#0b1a2d" }}
                whileHover={{ background: "#0d6b6a", rotate: 5 }}
                transition={{ duration: 0.25 }}
              >
                <svc.icon className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-[#0b1a2d] mb-3" style={{ fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.35 }}>{svc.title}</h3>
              <p className="text-gray-500 mb-5" style={{ fontSize: "0.83rem", lineHeight: 1.8 }}>{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="bg-[#f4f5f7] text-gray-600 px-2.5 py-0.5 rounded-sm"
                    style={{ fontSize: "0.7rem", fontWeight: 600 }}
                    whileHover={{ background: "#0d6b6a", color: "#fff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
