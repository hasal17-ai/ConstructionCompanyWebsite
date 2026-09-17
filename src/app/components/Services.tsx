import { HomeIcon, Box, FileText, Zap, Columns3, Calculator, Banknote, Stamp, ClipboardList, Play, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "./animations";

const services = [
  {
    icon: HomeIcon,
    title: "Architectural House Plans",
    desc: "Customized architectural house plans tailored to your requirements, land conditions, lifestyle, and budget — from single-storey to modern luxury homes.",
    tags: ["Single-storey", "Two-storey", "Luxury homes", "Compact designs"],
  },
  {
    icon: Box,
    title: "3D Exterior & Interior Design",
    desc: "Realistic 3D visualizations of your future property — exterior facade, interior spaces, materials, colours, and furniture arrangements — before construction begins.",
    tags: ["Exterior design", "Interior design", "3D rendering", "Colour concepts"],
  },
  {
    icon: FileText,
    title: "Engineering Drawings",
    desc: "Complete set of technical drawings including floor plans, elevation, section, structural, and construction detail drawings for your project.",
    tags: ["Floor plans", "Elevations", "Sections", "Working drawings"],
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing Layouts",
    desc: "Coordinated electrical and plumbing layout plans covering lighting, power outlets, water supply, drainage, and sanitary fixture locations.",
    tags: ["Electrical layout", "Plumbing plan", "Circuit planning", "Drainage"],
  },
  {
    icon: Columns3,
    title: "Structural Drawings",
    desc: "Technical structural documentation covering foundations, columns, beams, slabs, staircases, and roof structures for safe and efficient construction.",
    tags: ["Foundation design", "Columns & beams", "Slabs", "Roof structure"],
  },
  {
    icon: Calculator,
    title: "BOQ & Detailed Estimates",
    desc: "Bill of Quantities and detailed cost estimates to help you understand material quantities, construction costs, and plan your project budget accurately.",
    tags: ["Material quantities", "Cost estimation", "Budget planning", "Work breakdown"],
  },
  {
    icon: Banknote,
    title: "Bank Loan Documentation",
    desc: "Preparation of necessary technical documentation required for construction-related bank loan processes — house plans, estimates, BOQ, and supporting documents.",
    tags: ["House plans", "Estimates", "BOQ", "Technical docs"],
  },
  {
    icon: Stamp,
    title: "Local Authority Approvals",
    desc: "Preparation of drawings and documentation required for submission to the appropriate local authorities for construction approval.",
    tags: ["Approval drawings", "Local authority", "Submission docs", "Compliance"],
  },
  {
    icon: ClipboardList,
    title: "Detailed Working Drawings",
    desc: "Comprehensive working drawings providing construction teams with all information needed — layouts, details, staircases, doors, windows, and finishes.",
    tags: ["Construction details", "Staircase drawings", "Door & window schedules", "Finishes"],
  },
  {
    icon: Play,
    title: "3D Walkthrough & Visualization",
    desc: "Realistic 3D walkthrough videos allowing you to experience your proposed property — interior spaces, materials, lighting, and overall atmosphere — before building.",
    tags: ["Walkthrough video", "Realistic rendering", "Materials preview", "Lighting concepts"],
  },
  {
    icon: Leaf,
    title: "Sustainable Design Consulting",
    desc: "Environmentally conscious design solutions incorporating natural lighting, natural ventilation, efficient space planning, and energy-conscious material selection.",
    tags: ["Natural lighting", "Ventilation", "Efficient spaces", "Eco materials"],
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
            Comprehensive architectural planning, engineering design, and technical documentation services — supporting every stage of your residential construction project.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
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
