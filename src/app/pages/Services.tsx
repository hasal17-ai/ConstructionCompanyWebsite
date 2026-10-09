import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import heroImg from "../../imports/scott-blake-1GW45VDkFI0-unsplash.jpg";
import bankLoanImg from "../../imports/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg";
import walkthroughImg from "../../imports/oleksii-tsaryuk-eaj4KTgQa8Y-unsplash.jpg";
import sustainableImg from "../../imports/steven-council-SFtnLEadLxE-unsplash.jpg";
import {
  HomeIcon, Box, FileText, Zap, Columns3, Calculator, Banknote, Stamp, ClipboardList, Play, Leaf,
  ChevronRight, ArrowRight, Phone, CheckCircle2,
  PenTool, HardHat, PackageCheck, Handshake, BarChart3, Plus, Minus, Users,
} from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "../components/animations";

/* ─── data ────────────────────────────────────────────────────── */

const services = [
  {
    id: "house-plans",
    icon: HomeIcon,
    color: "#0d6b6a",
    title: "Architectural House Plans",
    short: "Customized plans tailored to your land and lifestyle.",
    desc: "We prepare customized architectural house plans according to your requirements, land conditions, lifestyle, and budget. Our designs focus on creating comfortable and functional spaces while maintaining a modern architectural appearance — covering single-storey, two-storey, luxury, compact, and investment property designs.",
    tags: ["Single-storey houses", "Two-storey houses", "Modern luxury", "Compact homes", "Investment properties"],
    highlights: [
      "Space utilization and room arrangement planning",
      "Natural lighting and ventilation considered",
      "Accessibility and overall functionality focused",
      "Tailored to your land conditions and budget",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "3d-design",
    icon: Box,
    color: "#0b1a2d",
    title: "3D Exterior & Interior Design",
    short: "Visualize your property before construction begins.",
    desc: "Our 3D design services help clients visualize their future property before construction begins. We create modern exterior concepts covering building appearance, facade, roof, windows, finishes, and landscaping — plus interior design concepts for living rooms, bedrooms, kitchens, bathrooms, and all other spaces.",
    tags: ["Exterior design", "Interior design", "Facade concepts", "Landscaping", "Colour & materials"],
    highlights: [
      "Realistic visualization before committing to construction",
      "Exterior facade and roof design concepts",
      "Complete interior space planning and rendering",
      "Material, colour, and furniture arrangement preview",
    ],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "engineering-drawings",
    icon: FileText,
    color: "#0d6b6a",
    title: "Engineering Drawings",
    short: "Complete technical drawing sets for construction.",
    desc: "A successful construction project requires accurate and properly organized technical drawings. We provide comprehensive technical drawing services covering architectural drawings, floor plans, elevation and section drawings, detailed working drawings, and construction details required for coordination between all professionals involved.",
    tags: ["Floor plans", "Elevation drawings", "Section drawings", "Working drawings", "Construction details"],
    highlights: [
      "Architectural drawings and floor plans",
      "Elevation and section drawings",
      "Door and window schedules",
      "Finishing details and construction specifications",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "electrical-plumbing",
    icon: Zap,
    color: "#0b1a2d",
    title: "Electrical & Plumbing Layouts",
    short: "Coordinated MEP layout plans for your building.",
    desc: "We provide coordinated electrical and plumbing layout plans as part of our building design services. Electrical planning covers lighting points, switch locations, power outlets, distribution boards, air-conditioning, and circuit planning. Plumbing plans cover water supply, bathrooms, kitchen, drainage, and sanitary fixtures.",
    tags: ["Lighting points", "Power outlets", "Water supply", "Drainage", "Distribution boards"],
    highlights: [
      "Complete electrical circuit and layout planning",
      "Water supply and drainage arrangements",
      "Air-conditioning and external lighting points",
      "Minimizes unnecessary modifications during construction",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "structural-drawings",
    icon: Columns3,
    color: "#0d6b6a",
    title: "Structural Drawings",
    short: "Safe and efficient structural documentation.",
    desc: "Structural planning is an important component of safe and efficient construction. Our structural drawing services provide technical documentation covering foundations, columns, beams, slabs, staircases, roof structures, and other structural details — coordinated with the architectural design for a practical building solution.",
    tags: ["Foundations", "Columns & beams", "Slabs", "Staircases", "Roof structures"],
    highlights: [
      "Foundation and substructure design documentation",
      "Column, beam, and slab technical drawings",
      "Staircase and roof structure details",
      "Coordinated with architectural design",
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "boq-estimates",
    icon: Calculator,
    color: "#0b1a2d",
    title: "BOQ & Detailed Estimates",
    short: "Understand your construction costs before you build.",
    desc: "Understanding the expected construction cost is an important part of project planning. We provide BOQ (Bill of Quantities) and detailed estimation services to help clients understand approximate quantities and costs associated with their proposed construction work — enabling better financial decisions before starting construction.",
    tags: ["Material quantities", "Construction costs", "Labour estimates", "Budget planning", "Cost control"],
    highlights: [
      "Itemized bill of quantities for all work",
      "Construction and labour cost estimation",
      "Work item breakdown for budget planning",
      "Supports better financial decision-making",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "bank-loan",
    icon: Banknote,
    color: "#0d6b6a",
    title: "Bank Loan Documentation",
    short: "Technical documentation for construction loan applications.",
    desc: "We assist clients in preparing the necessary technical documentation required for construction-related bank loan processes. Documentation includes relevant house plans, building estimates, BOQ, project details, and supporting technical documents — making the documentation process more organized and convenient for the client.",
    tags: ["House plans", "Building estimates", "BOQ documents", "Project details", "Supporting docs"],
    highlights: [
      "Complete documentation package for bank submission",
      "House plans prepared to bank requirements",
      "Estimates and BOQ included",
      "Organized and professionally presented",
    ],
    image: bankLoanImg,
  },
  {
    id: "local-authority",
    icon: Stamp,
    color: "#0b1a2d",
    title: "Local Authority Approval Drawings",
    short: "Drawings prepared for local authority submission.",
    desc: "Obtaining the necessary approvals is an important stage of any construction project. Titan Engineering provides assistance with preparation of drawings and relevant documentation required for submission to the appropriate local authorities — clear and properly organized to meet the applicable requirements for your project.",
    tags: ["Approval drawings", "Local authority", "Submission documents", "Regulatory compliance"],
    highlights: [
      "Drawings prepared to local authority standards",
      "Properly organized submission documentation",
      "Covers applicable project requirements",
      "Supports the approval process",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "working-drawings",
    icon: ClipboardList,
    color: "#0d6b6a",
    title: "Detailed Working Drawings",
    short: "Comprehensive information for construction teams.",
    desc: "Detailed working drawings provide construction teams with all the information required to properly execute the proposed design. Our working drawings include detailed floor layouts, elevations, sections, construction details, staircases, doors, windows, finishes, electrical arrangements, plumbing arrangements, and structural components.",
    tags: ["Floor layouts", "Construction details", "Staircase drawings", "Door & window schedules", "Finishes"],
    highlights: [
      "Complete set for construction team coordination",
      "Reduces uncertainty during construction",
      "Staircase, door and window details",
      "Electrical, plumbing, and structural included",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "3d-walkthrough",
    icon: Play,
    color: "#0b1a2d",
    title: "3D Walkthrough & Visualization",
    short: "Experience your home before a single brick is laid.",
    desc: "Our 3D visualization services allow clients to experience their proposed property before construction. A 3D walkthrough provides a realistic understanding of exterior appearance, interior spaces, room arrangements, materials and finishes, lighting concepts, furniture arrangements, and overall building atmosphere.",
    tags: ["Walkthrough video", "Exterior view", "Interior spaces", "Material preview", "Lighting concepts"],
    highlights: [
      "Realistic 3D walkthrough video production",
      "Exterior and interior spaces visualized",
      "Materials, finishes, and furniture shown",
      "Ideal for confident construction decisions",
    ],
    image: walkthroughImg,
  },
  {
    id: "sustainable-design",
    icon: Leaf,
    color: "#0d6b6a",
    title: "Sustainable Design Consulting",
    short: "Practical and environmentally conscious design.",
    desc: "We promote practical and environmentally conscious design approaches where appropriate to the project. Our design considerations include natural lighting, natural ventilation, efficient space planning, energy-conscious solutions, practical material selection, landscape integration, and reduced unnecessary construction costs.",
    tags: ["Natural lighting", "Natural ventilation", "Efficient spaces", "Energy conscious", "Eco materials"],
    highlights: [
      "Natural lighting and ventilation optimization",
      "Energy-conscious material selection",
      "Efficient space planning approach",
      "Landscape integration and cost reduction",
    ],
    image: sustainableImg,
  },
];

const process = [
  { icon: Users, step: "01", title: "Client Consultation", desc: "We understand your requirements, preferences, lifestyle, budget, and expectations for your proposed project." },
  { icon: ClipboardList, step: "02", title: "Site & Requirement Assessment", desc: "We review available site information and identify important planning considerations relevant to your land and project." },
  { icon: PenTool, step: "03", title: "Concept Development", desc: "Our team develops an initial concept based on your requirements, site conditions, and architectural preferences." },
  { icon: HardHat, step: "04", title: "Architectural Design", desc: "The selected concept is developed into a detailed architectural plan tailored to your vision and practical needs." },
  { icon: BarChart3, step: "05", title: "3D Visualization", desc: "Where required, 3D exterior and interior designs are developed so you can clearly visualize the final outcome." },
  { icon: Zap, step: "06", title: "Technical Drawings", desc: "Electrical, plumbing, structural, and detailed working drawings are prepared according to your project requirements." },
  { icon: PackageCheck, step: "07", title: "Estimation & Documentation", desc: "BOQ, detailed estimates, bank loan documentation, and local authority approval documents are prepared." },
  { icon: Handshake, step: "08", title: "Final Delivery", desc: "Completed drawings and documents are organized and delivered to you for the next stage of your construction project." },
];

const houseTypes = [
  { label: "Single-Storey Houses", count: "Most popular" },
  { label: "Two-Storey Houses", count: "Widely designed" },
  { label: "Modern Luxury Houses", count: "Premium designs" },
  { label: "Compact Residential", count: "Budget-friendly" },
  { label: "Customized Family Homes", count: "Personalized" },
  { label: "Investment Properties", count: "ROI-focused" },
  { label: "Eco-Friendly Homes", count: "Sustainable" },
  { label: "Renovation Projects", count: "Existing homes" },
];

const faqs = [
  { q: "What types of house plans do you offer?", a: "We design all types of residential house plans — single-storey, two-storey, modern luxury homes, compact residences, customized family homes, and investment properties. Each plan is customized to your land conditions, lifestyle, and budget." },
  { q: "Do you provide 3D visualization as part of the service?", a: "Yes. We offer both 3D exterior and interior design visualizations, as well as full 3D walkthrough videos. These are included in our Standard and Premium packages, and can also be added individually to any project." },
  { q: "Can you help with bank loan documentation?", a: "Yes. We assist clients in preparing all necessary technical documentation for construction-related bank loan applications — including house plans, estimates, BOQ, and other supporting documents required by the bank." },
  { q: "Do you prepare local authority approval drawings?", a: "Yes. We prepare drawings and documentation required for submission to the appropriate local authority for your construction project, organized clearly to meet the applicable requirements." },
  { q: "What is included in the Premium package?", a: "The Premium package includes the architectural house plan, high-quality 3D designs, electrical and plumbing layouts, detailed structural drawings, detailed working drawings, a 3D walkthrough video, and a complete detailed drawing book — everything you need for construction." },
  { q: "How long does it take to receive completed drawings?", a: "Timeline depends on project complexity and the package selected. We discuss delivery expectations during the initial consultation and keep you updated throughout the process. Our goal is to make the planning process clear and convenient for you." },
];

/* ─── sub-components ──────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <motion.div className="flex items-center gap-3 mb-3" variants={fadeUp}>
      <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
      <span className="uppercase tracking-widest" style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }}>{text}</span>
      <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
    </motion.div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-[#0b1a2d]" style={{ fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.4 }}>{q}</span>
        <motion.div
          className="shrink-0 w-8 h-8 rounded-sm flex items-center justify-center"
          style={{ background: open ? "#0d6b6a" : "#f4f5f7" }}
          animate={{ background: open ? "#0d6b6a" : "#f4f5f7" }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="minus" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Minus className="w-4 h-4 text-white" />
              </motion.div>
            ) : (
              <motion.div key="plus" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Plus className="w-4 h-4 text-[#0b1a2d]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 pb-5" style={{ fontSize: "0.86rem", lineHeight: 1.85 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── page ────────────────────────────────────────────────────── */

export default function Services() {
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-white">

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "480px" }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2d]/95 via-[#0b1a2d]/80 to-[#0b1a2d]/50" />
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: "#0d6b6a" }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-28">
          <motion.div className="flex items-center gap-2 mb-5 text-gray-400" style={{ fontSize: "0.75rem" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "#0d9488" }}>Our Services</span>
          </motion.div>

          <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span className="uppercase tracking-widest" style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }}>What We Do</span>
          </motion.div>

          <motion.h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.02em", maxWidth: "700px" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Complete Design & Engineering <span style={{ color: "#0d9488" }}>Services</span>
          </motion.h1>

          <motion.p className="text-gray-300 mb-8" style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78 }}>
            Eleven specialized service lines covering the full construction planning lifecycle — from architectural house plans and 3D design to technical documentation and estimation.
          </motion.p>

          {/* Quick jump pills */}
          <motion.div className="flex flex-wrap gap-2.5" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            {services.map((s) => (
              <motion.button
                key={s.id}
                onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
                className="border px-3.5 py-1.5 rounded-sm text-xs font-bold tracking-wide"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "#d1d5db" }}
                whileHover={{ borderColor: "#0d6b6a", color: "#0d9488", background: "rgba(13,107,106,0.12)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18 }}
              >
                {s.title.split(" ")[0]} {s.title.split(" ")[1]}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Services deep-dive (alternating) ────────────────── */}
      <section className="py-4 bg-white">
        {services.map((svc, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={svc.id} id={svc.id} className={`py-20 ${isEven ? "bg-white" : "bg-[#f4f5f7]"} overflow-hidden`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-14 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>

                  {/* Image */}
                  <motion.div
                    className={`relative overflow-hidden rounded-sm ${isEven ? "" : "lg:col-start-2"}`}
                    variants={isEven ? fadeLeft : fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportConfig}
                  >
                    <motion.img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full object-cover"
                      style={{ height: "420px" }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Number overlay */}
                    <div
                      className="absolute top-5 right-5 text-white flex items-center justify-center rounded-sm"
                      style={{ background: svc.color, width: "48px", height: "48px", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.03em", opacity: 0.92 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Bottom teal strip */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ background: "#0d6b6a" }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={viewportConfig}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
                    variants={isEven ? fadeRight : fadeLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportConfig}
                  >
                    <motion.div className="flex items-center gap-3 mb-3" variants={fadeUp}>
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                        style={{ background: svc.color }}
                      >
                        <svc.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="uppercase tracking-widest" style={{ color: svc.color, fontSize: "0.68rem", fontWeight: 700 }}>Service 0{i + 1}</span>
                    </motion.div>

                    <motion.h2 className="text-[#0b1a2d] mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em" }} variants={fadeUp}>
                      {svc.title}
                    </motion.h2>

                    <motion.p className="text-gray-500 mb-6" style={{ fontSize: "0.88rem", lineHeight: 1.9 }} variants={fadeUp}>
                      {svc.desc}
                    </motion.p>

                    {/* Highlights */}
                    <motion.ul className="space-y-2.5 mb-6" variants={staggerContainer(0.08, 0.1)}>
                      {svc.highlights.map((h) => (
                        <motion.li key={h} className="flex items-start gap-2.5" variants={fadeUp}>
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0d6b6a" }} />
                          <span className="text-gray-600" style={{ fontSize: "0.83rem" }}>{h}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Tags */}
                    <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
                      {svc.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-2.5 py-1 rounded-sm"
                          style={{ fontSize: "0.7rem", fontWeight: 600, background: isEven ? "#f4f5f7" : "#fff", color: "#4b5563" }}
                          whileHover={{ background: "#0d6b6a", color: "#fff" }}
                          transition={{ duration: 0.18 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── 3. Our Process ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0b1a2d] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#0d6b6a" }} />
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "55px 55px" }}
          animate={{ backgroundPosition: ["0px 0px", "55px 55px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
              <span className="uppercase tracking-widest" style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }}>How We Work</span>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            </motion.div>
            <motion.h2 className="text-white" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Our 8-Step Project Process
            </motion.h2>
            <motion.p className="text-gray-400 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Every project follows a structured approach — making the construction planning process simple, clear, and convenient for our clients.
            </motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative bg-white/5 border border-white/8 p-7 rounded-sm overflow-hidden group"
                variants={cardVariant}
                whileHover={{ background: "rgba(13,107,106,0.12)", borderColor: "rgba(13,107,106,0.5)", y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* Large step number watermark */}
                <div
                  className="absolute -top-2 -right-1 select-none pointer-events-none"
                  style={{ fontSize: "5rem", fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: "-0.06em" }}
                >
                  {step.step}
                </div>

                <motion.div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: "#0d6b6a" }}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </motion.div>
                <div style={{ color: "#0d9488", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em" }} className="uppercase mb-1.5">Step {step.step}</div>
                <h3 className="text-white mb-2" style={{ fontWeight: 800, fontSize: "0.95rem" }}>{step.title}</h3>
                <p className="text-gray-400" style={{ fontSize: "0.82rem", lineHeight: 1.8 }}>{step.desc}</p>

                {/* Connector arrow (not on last items in row) */}
                {i < process.length - 1 && (i + 1) % 4 !== 0 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10" style={{ color: "#0d6b6a" }}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Sectors served ──────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewportConfig}>
              <SectionLabel text="House Types" />
              <motion.h2 className="text-[#0b1a2d] mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
                Residential Projects We Design
              </motion.h2>
              <motion.p className="text-gray-500 mb-8" style={{ lineHeight: 1.9, fontSize: "0.92rem" }} variants={fadeUp}>
                We cater to all types of residential construction projects — from compact starter homes to modern luxury residences — each designed with care to match your specific needs and budget.
              </motion.p>
              <motion.div className="grid grid-cols-2 gap-3" variants={staggerContainer(0.07, 0.1)}>
                {houseTypes.map((s) => (
                  <motion.div
                    key={s.label}
                    className="border border-gray-100 rounded-sm p-4 flex items-start gap-3"
                    variants={cardVariant}
                    whileHover={{ borderColor: "#0d6b6a", background: "#f9fffe", y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0d6b6a" }} />
                    <div>
                      <div className="text-[#0b1a2d]" style={{ fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.3 }}>{s.label}</div>
                      <div style={{ color: "#0d6b6a", fontSize: "0.72rem", fontWeight: 800 }}>{s.count}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats side */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportConfig}>
              <motion.div
                className="relative overflow-hidden rounded-sm p-10"
                style={{ background: "#0b1a2d" }}
                whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
              >
                <motion.div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
                />
                <div className="relative">
                  <div className="h-1 w-12 mb-8 rounded-full" style={{ background: "#0d6b6a" }} />
                  <h3 className="text-white mb-2" style={{ fontWeight: 900, fontSize: "1.35rem", lineHeight: 1.2 }}>Complete Design Solutions for Every Home</h3>
                  <p className="text-gray-400 mb-10" style={{ fontSize: "0.83rem", lineHeight: 1.8 }}>
                    Whether you are planning a modest family home or a modern luxury residence, our team provides the complete range of architectural, engineering, and documentation services to bring your vision to life.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "5+", label: "Projects Completed" },
                      { value: "11", label: "Services Offered" },
                      { value: "3", label: "Design Packages" },
                      { value: "8", label: "Step Process" },
                    ].map((s) => (
                      <motion.div key={s.label} whileHover={{ scale: 1.06 }} transition={{ type: "spring", stiffness: 300 }}>
                        <div style={{ color: "#0d9488", fontSize: "1.6rem", fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
                        <div className="text-gray-400 mt-1" style={{ fontSize: "0.72rem", fontWeight: 600 }}>{s.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => navigate("/about")}
                    className="mt-10 flex items-center gap-2 text-white"
                    style={{ fontSize: "0.8rem", fontWeight: 700 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span style={{ color: "#0d9488" }}>Learn more about Titan Engineering</span>
                    <ArrowRight className="w-4 h-4" style={{ color: "#0d9488" }} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f5f7] overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="FAQ" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Frequently Asked Questions
            </motion.h2>
            <motion.p className="text-gray-500 mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Have a question not answered here? Reach out and we'll respond within 24 hours.
            </motion.p>
          </motion.div>

          <div className="bg-white rounded-sm p-2 shadow-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="px-4">
                <FAQItem q={faq.q} a={faq.a} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0b1a2d] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#0d6b6a" }} />
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "55px 55px" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <motion.div className="flex items-center justify-center gap-3 mb-4" variants={fadeUp}>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
              <span className="uppercase tracking-widest" style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }}>Get Started</span>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            </motion.div>
            <motion.h2 className="text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Let's Build Something Exceptional Together
            </motion.h2>
            <motion.p className="text-gray-400 mb-10" style={{ lineHeight: 1.85, fontSize: "0.95rem" }} variants={fadeUp}>
              Tell us about your project — our team will respond with a tailored consultation and no-obligation proposal within 24 hours.
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
