import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Building2, Layers, Truck, Wrench, Leaf, Hammer,
  ChevronRight, ArrowRight, Phone, CheckCircle2,
  ClipboardList, PenTool, HardHat, PackageCheck,
  Handshake, BarChart3, Plus, Minus,
} from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "../components/animations";

/* ─── data ────────────────────────────────────────────────────── */

const services = [
  {
    id: "commercial",
    icon: Building2,
    color: "#0d6b6a",
    title: "Commercial & Residential Construction",
    short: "End-to-end building construction for every sector.",
    desc: "From the foundation pour to the final fit-out, Titan Engineering delivers commercial high-rises, luxury residences, condominium complexes, shopping centres, and corporate campuses. Our in-house design-build capability compresses timelines and maintains single-source accountability for Sri Lanka's most demanding developments.",
    tags: ["High-rise buildings", "Luxury villas", "Shopping malls", "Condominiums", "Corporate campuses", "Hospitality"],
    highlights: [
      "Turnkey design-build delivery",
      "BIM-coordinated construction",
      "LEED-compliant fit-outs available",
      "Post-construction facility management",
    ],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "civil",
    icon: Layers,
    color: "#0b1a2d",
    title: "Civil & Structural Engineering",
    short: "Rigorous engineering for safe, durable structures.",
    desc: "Our structural engineering team delivers geotechnical investigations, foundation design, seismic analysis, and full structural calculations for projects across Sri Lanka. We combine local soil knowledge with international codes — BS, Eurocode, and ACI — to produce structures built for the island's conditions and beyond.",
    tags: ["Structural design", "Foundation works", "Geotechnical analysis", "Seismic assessment", "Retaining structures", "Load testing"],
    highlights: [
      "Comprehensive geotechnical investigations",
      "Seismic-resistant design per latest codes",
      "Finite element analysis (FEA)",
      "Independent peer review services",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "infrastructure",
    icon: Truck,
    color: "#0d6b6a",
    title: "Infrastructure & Road Works",
    short: "National roads, bridges, and drainage systems.",
    desc: "As an ICTAD A1-rated contractor, Titan Engineering qualifies for Sri Lanka's largest infrastructure programs. We design and build expressways, arterial roads, bridges, culverts, and urban drainage systems to RDA, Ministry of Highways, and World Bank standards — connecting communities and enabling commerce.",
    tags: ["Expressways", "Bridge construction", "Drainage systems", "Urban roads", "Culverts", "Retaining walls"],
    highlights: [
      "ICTAD A1 contractor — all national projects",
      "In-house bridge design & construction",
      "Real-time road survey with drone mapping",
      "Asphalt plant and paving fleet on standby",
    ],
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "mep",
    icon: Wrench,
    color: "#0b1a2d",
    title: "MEP Engineering",
    short: "Mechanical, electrical & plumbing — fully integrated.",
    desc: "Our MEP division designs and installs complete building services for commercial, industrial, and infrastructure projects. From low-voltage systems and generator sets to chilled-water HVAC and fire suppression, we coordinate all trades in BIM to eliminate clashes before they reach the site.",
    tags: ["Electrical systems", "Plumbing & drainage", "HVAC & chilled water", "Fire suppression", "BMS integration", "Solar PV"],
    highlights: [
      "BIM-coordinated clash-free installation",
      "Commissioning and testing protocols",
      "Energy audits and system optimisation",
      "24/7 maintenance contracts available",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "green",
    icon: Leaf,
    color: "#0d6b6a",
    title: "Green & Sustainable Building",
    short: "LEED-certified projects and eco-conscious construction.",
    desc: "Titan Engineering's dedicated sustainability division integrates green building principles from the design stage — passive solar orientation, high-performance insulation, rainwater harvesting, solar PV, and green roofing. We guide clients through LEED and GREENSL certification, reducing lifetime energy costs by up to 40%.",
    tags: ["LEED certification", "Solar PV integration", "Rainwater harvesting", "Green roofing", "Passive design", "Carbon reporting"],
    highlights: [
      "LEED AP BD+C certified team",
      "Lifecycle carbon analysis",
      "Renewable energy system design",
      "Sustainable procurement & materials",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    id: "renovation",
    icon: Hammer,
    color: "#0b1a2d",
    title: "Renovation & Retrofitting",
    short: "Upgrading structures to modern standards.",
    desc: "We transform aging buildings into safe, functional, and aesthetically refreshed assets. Our retrofitting expertise covers seismic strengthening, structural remediation, fire safety upgrades, heritage building restoration, and full interior renovations — all while keeping your operations running wherever possible.",
    tags: ["Seismic strengthening", "Interior renovation", "Historic restoration", "Structural remediation", "Fire safety upgrades", "Facade refurbishment"],
    highlights: [
      "Non-invasive structural assessment",
      "Phased construction to minimise disruption",
      "Heritage building sensitive approaches",
      "Post-renovation performance validation",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
];

const process = [
  { icon: ClipboardList, step: "01", title: "Initial Consultation", desc: "We meet to understand your project scope, budget, timeline, and constraints. A dedicated project manager is assigned from day one." },
  { icon: PenTool, step: "02", title: "Design & Engineering", desc: "Our multidisciplinary team produces detailed architectural, structural, and MEP designs coordinated in BIM — with your full review at each stage." },
  { icon: BarChart3, step: "03", title: "Costing & Proposal", desc: "Transparent, itemised bill of quantities. No hidden costs. Fixed-price or cost-plus contracts tailored to your risk appetite." },
  { icon: HardHat, step: "04", title: "Construction & Delivery", desc: "ISO 45001 safety protocols, daily progress reporting, and weekly client briefings keep you informed and in control throughout execution." },
  { icon: PackageCheck, step: "05", title: "Quality Assurance", desc: "Third-party testing, material certifications, and snag lists signed off before handover. Nothing leaves our hands without passing our checks." },
  { icon: Handshake, step: "06", title: "Handover & Support", desc: "Full documentation, as-built drawings, warranties, and optional ongoing maintenance contracts ensure your asset performs for decades." },
];

const sectors = [
  { label: "Government & Public Sector", count: "120+" },
  { label: "Commercial Real Estate", count: "85+" },
  { label: "Hospitality & Tourism", count: "45+" },
  { label: "Industrial & Manufacturing", count: "60+" },
  { label: "Residential Developments", count: "130+" },
  { label: "Healthcare Facilities", count: "30+" },
  { label: "Education Institutions", count: "40+" },
  { label: "Infrastructure", count: "90+" },
];

const faqs = [
  { q: "What is your typical project timeline from contract signing to completion?", a: "It depends on project complexity. A standard mid-size commercial building (5–10 floors) typically takes 18–24 months. Infrastructure projects range from 6 months to 3 years. We provide a detailed master programme with milestones at the proposal stage." },
  { q: "Do you handle design, or only construction?", a: "We offer both. Our design-build teams can take a project from concept to keys. Alternatively, if you already have designs from an external architect, we can act as the pure construction contractor." },
  { q: "Are you qualified for government-tendered projects?", a: "Yes. Titan Engineering holds an ICTAD Category A1 rating — the highest contractor classification in Sri Lanka — which qualifies us to bid on any government or public-sector construction project regardless of value." },
  { q: "Do you offer post-construction maintenance?", a: "Yes. We offer tailored preventive maintenance contracts covering structural, MEP, and facade systems. Our service teams are based in Colombo, Kandy, and Galle for islandwide coverage." },
  { q: "How do you manage cost overruns?", a: "We use detailed pre-construction cost planning and contingency budgets. Any variation that exceeds the approved contingency is submitted to the client as a formal variation order before work proceeds — no surprises." },
  { q: "Can you work on projects outside Colombo?", a: "Absolutely. We have active site teams in all 25 districts of Sri Lanka and have delivered major projects in every province, including remote Northern and Eastern Province locations." },
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')" }}
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
            Engineering Services Built for <span style={{ color: "#0d9488" }}>Every Challenge</span>
          </motion.h1>

          <motion.p className="text-gray-300 mb-8" style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78 }}>
            Six integrated service lines covering the full construction lifecycle — from first site survey to final handover, anywhere in Sri Lanka.
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
              Our Proven 6-Step Process
            </motion.h2>
            <motion.p className="text-gray-400 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Every Titan project follows the same disciplined framework — ensuring predictable delivery, transparent communication, and zero compromise on quality.
            </motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
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
                {i < process.length - 1 && (i + 1) % 3 !== 0 && (
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
              <SectionLabel text="Sectors" />
              <motion.h2 className="text-[#0b1a2d] mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
                Industries We Serve
              </motion.h2>
              <motion.p className="text-gray-500 mb-8" style={{ lineHeight: 1.9, fontSize: "0.92rem" }} variants={fadeUp}>
                Titan Engineering's six service lines serve every major industry sector in Sri Lanka. From government infrastructure programs to private commercial developments, our teams bring specialised knowledge to each vertical.
              </motion.p>
              <motion.div className="grid grid-cols-2 gap-3" variants={staggerContainer(0.07, 0.1)}>
                {sectors.map((s) => (
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
                      <div style={{ color: "#0d6b6a", fontSize: "0.72rem", fontWeight: 800 }}>{s.count} projects</div>
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
                  <h3 className="text-white mb-2" style={{ fontWeight: 900, fontSize: "1.35rem", lineHeight: 1.2 }}>500+ Projects Across 8 Sectors</h3>
                  <p className="text-gray-400 mb-10" style={{ fontSize: "0.83rem", lineHeight: 1.8 }}>
                    Two decades of diversified experience means we understand the unique regulatory, environmental, and logistical challenges of each sector — so your project benefits from solutions, not guesswork.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "25", label: "Districts Active" },
                      { value: "LKR 48B+", label: "Total Portfolio" },
                      { value: "1,200+", label: "Professionals" },
                      { value: "98%", label: "On-Time Rate" },
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
                href="tel:+94112345678"
                className="flex items-center gap-2 border-2 border-white/25 px-8 py-3.5 rounded-sm"
                style={{ fontWeight: 700, fontSize: "0.82rem", color: "#ffffff" }}
                whileHover={{ borderColor: "#0d9488", color: "#0d9488", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                +94 11 234 5678
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
