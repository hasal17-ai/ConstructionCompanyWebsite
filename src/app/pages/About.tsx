import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ChevronRight, Target, Eye, Heart, ShieldCheck, Pencil, Users,
  Wallet, Zap, Cpu, Leaf, HeartHandshake, ArrowRight, Phone, Linkedin, Mail,
} from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "../components/animations";
import logoImg from "../../imports/Red_Black_boxes_Logo_Design_Business_Identity_for_Real_Estate_House_Rent_Sale__2_.png";

/* ─── data ────────────────────────────────────────────────────── */

const pillars = [
  {
    icon: Target,
    label: "Our Mission",
    color: "#0d6b6a",
    heading: "Professional Solutions for Every Client",
    text: "To provide clients with professional engineering, architectural planning, design, and construction-related solutions that meet their individual requirements — understanding their vision and delivering practical, innovative results.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    color: "#0b1a2d",
    heading: "Leading the Future of Construction",
    text: "To be a trusted and innovative engineering partner in the future of construction — a recognised service provider delivering modern, practical, sustainable, and cost-effective solutions across Sri Lanka.",
  },
  {
    icon: Heart,
    label: "Our Values",
    color: "#0d6b6a",
    heading: "Principles That Guide Us",
    text: "Understanding clients. Providing practical and innovative design. Maintaining professional quality. Delivering accurate technical documentation. Offering cost-conscious solutions. Building long-term relationships based on trust.",
  },
];

const timeline = [
  { step: "01", title: "Client Consultation", desc: "We first understand the client's requirements, preferences, lifestyle, budget, and expectations for their project." },
  { step: "02", title: "Site & Requirement Assessment", desc: "We review the available site information and identify important planning considerations for the proposed development." },
  { step: "03", title: "Concept Development", desc: "Our team develops an initial concept based on the client's requirements and available site conditions." },
  { step: "04", title: "Architectural Design", desc: "The selected concept is developed into a detailed architectural plan tailored to the client's vision." },
  { step: "05", title: "3D Visualization", desc: "Where required, 3D exterior and interior designs are developed to help the client clearly visualize the final outcome." },
  { step: "06", title: "Technical Drawings", desc: "Electrical, plumbing, structural, and detailed working drawings are prepared according to the project requirements." },
  { step: "07", title: "Estimation & Documentation", desc: "BOQ, detailed estimates, bank loan documentation, and local authority approval documents are prepared." },
  { step: "08", title: "Final Delivery", desc: "Completed drawings and documents are organized and delivered to the client for the next stage of their project." },
];

const stats = [
  { value: "1+", label: "Year of Excellence" },
  { value: "5+", label: "Projects Completed" },
  { value: "3", label: "Team Members" },
  { value: "11", label: "Services Offered" },
  { value: "3", label: "Design Packages" },
  { value: "8", label: "Step Process" },
];

const strengths = [
  { icon: ShieldCheck, title: "Professional Approach", desc: "We handle each project with attention to detail and a commitment to professional service throughout every stage." },
  { icon: Pencil, title: "Customized Designs", desc: "We do not believe in one design for everyone. Every solution is developed according to your individual land, lifestyle, and budget." },
  { icon: Zap, title: "Modern & Elegant Concepts", desc: "Our designs combine contemporary architectural styles with practical functionality to create comfortable, attractive spaces." },
  { icon: Wallet, title: "Budget-Conscious Solutions", desc: "We consider your budget while developing practical design solutions, balancing quality, aesthetics, and cost at every step." },
  { icon: Cpu, title: "Technical Expertise", desc: "Our team combines engineering knowledge and modern design technologies to provide practical, accurate project solutions." },
  { icon: HeartHandshake, title: "Client-Focused Service", desc: "We maintain close communication throughout the planning process to ensure your vision and requirements are properly understood." },
];

const packages = [
  { code: "BASIC", label: "Architectural Planning Solution", items: ["Architectural house plan", "Initial site consultation", "Basic planning consultation", "Customized floor arrangement"] },
  { code: "STANDARD", label: "Complete House Design Solution", items: ["Architectural house plan", "3D design", "Electrical & plumbing layouts", "BOQ / detailed estimate", "Bank loan documentation", "Local authority approval docs"] },
  { code: "PREMIUM", label: "Complete Professional Design Solution", items: ["Architectural house plan", "High-quality 3D designs", "Electrical & plumbing layouts", "Detailed structural drawings", "Detailed working drawings", "3D walkthrough video", "Complete detailed drawing book"] },
];

const team = [
  {
    name: "Lasantha",
    role: "Head – Surveyor",
    qual: "Site assessment · Project coordination · Client consultation",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Pradeep Lakmal",
    role: "Civil Engineer",
    qual: "Structural & engineering requirements · Construction practicality",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Hasal",
    role: "Technical Support",
    qual: "H.N.D. · Digital planning · Spatial & technical information",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
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

/* ─── page ────────────────────────────────────────────────────── */

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* ── 1. Hero banner ─────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "480px" }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')" }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2d]/95 via-[#0b1a2d]/80 to-[#0b1a2d]/50" />
        <motion.div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "#0d6b6a" }} initial={{ scaleY: 0, originY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.9, delay: 0.3 }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-28">
          {/* Breadcrumb */}
          <motion.div className="flex items-center gap-2 mb-5 text-gray-400" style={{ fontSize: "0.75rem" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "#0d9488" }}>About Us</span>
          </motion.div>

          <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span className="uppercase tracking-widest" style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }}>About Titan Engineering</span>
          </motion.div>

          <motion.h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.02em", maxWidth: "700px" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Your Vision. <span style={{ color: "#0d9488" }}>Our Expertise.</span> A Better Future.
          </motion.h1>

          <motion.p className="text-gray-300" style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78 }}>
            A professional engineering and construction consultancy dedicated to providing reliable, innovative, and practical solutions for modern residential and construction projects.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Our Story ───────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Images */}
            <motion.div className="relative" variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewportConfig}>
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Engineering team"
                  className="col-span-2 w-full object-cover rounded-sm"
                  style={{ height: "240px" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Architect working"
                  className="w-full object-cover rounded-sm"
                  style={{ height: "200px" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Blueprint review"
                  className="w-full object-cover rounded-sm"
                  style={{ height: "200px" }}
                />
              </div>

              {/* Floating logo card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white shadow-2xl p-4 rounded-sm hidden sm:flex items-center gap-3"
                style={{ border: "2px solid rgba(13,107,106,0.2)" }}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="bg-white rounded-sm flex-shrink-0" style={{ width: "48px", height: "48px", padding: "4px", border: "1px solid #e5e7eb" }}>
                  <img src={logoImg} alt="Titan Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[#0b1a2d]" style={{ fontWeight: 800, fontSize: "0.82rem" }}>Est. 2026</div>
                  <div style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 600 }}>Sri Lanka</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportConfig}>
              <motion.div className="flex items-center gap-3 mb-3" variants={fadeUp}>
                <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
                <span className="uppercase tracking-widest" style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }}>Our Story</span>
              </motion.div>
              <motion.h2 className="text-[#0b1a2d] mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em" }} variants={fadeUp}>
                Who We Are
              </motion.h2>
              <motion.p className="text-gray-600 mb-4" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
                Titan Engineering is a professional engineering and construction consultancy established in 2026, dedicated to providing reliable, innovative, and practical solutions for modern residential and construction projects in Sri Lanka.
              </motion.p>
              <motion.p className="text-gray-600 mb-4" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
                We focus on transforming our clients' ideas into well-planned, functional, and aesthetically pleasing spaces. From the initial site consultation and concept development to detailed drawings and technical documentation, our team provides a complete range of services.
              </motion.p>
              <motion.p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
                We understand that every client has different requirements, preferences, land conditions, and budgets. Our goal is to make the construction planning process simple, clear, and convenient while maintaining professional standards throughout every stage of the project.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission / Vision / Values ───────────────────────── */}
      <section className="py-20 bg-[#f4f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Who We Are" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Mission, Vision & Values
            </motion.h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {pillars.map((p) => (
              <motion.div
                key={p.label}
                className="bg-white rounded-sm p-8 overflow-hidden relative"
                variants={cardVariant}
                whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: p.color }} />
                <motion.div
                  className="w-14 h-14 rounded-sm flex items-center justify-center mb-5"
                  style={{ background: p.color }}
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="text-xs uppercase tracking-widest mb-2 font-bold" style={{ color: p.color }}>{p.label}</div>
                <h3 className="text-[#0b1a2d] mb-3" style={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1.3 }}>{p.heading}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.85rem", lineHeight: 1.85 }}>{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Timeline ────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="How We Work" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Our 8-Step Project Process
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Centre line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, #0d6b6a, rgba(13,107,106,0.1))" }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.step}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {/* Card */}
                    <div className="flex-1">
                      <motion.div
                        className="bg-white border border-gray-100 rounded-sm p-6 hover:border-[#0d6b6a]/40 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.015 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-white text-xs font-black px-2.5 py-1 rounded-sm" style={{ background: "#0d6b6a", letterSpacing: "0.08em" }}>STEP {item.step}</span>
                          <h3 className="text-[#0b1a2d]" style={{ fontWeight: 800, fontSize: "0.95rem" }}>{item.title}</h3>
                        </div>
                        <p className="text-gray-500" style={{ fontSize: "0.83rem", lineHeight: 1.75 }}>{item.desc}</p>
                      </motion.div>
                    </div>

                    {/* Centre dot */}
                    <motion.div
                      className="hidden md:flex shrink-0 w-5 h-5 rounded-full border-4 border-white shadow-md z-10"
                      style={{ background: "#0d6b6a" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportConfig}
                      transition={{ delay: i * 0.08 + 0.3, type: "spring", stiffness: 400 }}
                    />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Stats banner ────────────────────────────────────── */}
      <section className="py-16 bg-[#0b1a2d] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#0d6b6a" }} />
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "55px 55px" }}
          animate={{ backgroundPosition: ["0px 0px", "55px 55px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8" variants={staggerContainer(0.09, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {stats.map((s) => (
              <motion.div
                key={s.label}
                className="text-center"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ color: "#0d9488", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1 }} className="mb-1.5">{s.value}</div>
                <div className="text-white" style={{ fontSize: "0.75rem", fontWeight: 700 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. Why Choose Us ───────────────────────────────────── */}
      <section className="py-24 bg-[#f4f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Why Titan" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              What Sets Us Apart
            </motion.h2>
            <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Our commitment to quality, customization, and client service is what sets Titan Engineering apart.
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer(0.09, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {strengths.map((s) => (
              <motion.div
                key={s.title}
                className="bg-white p-7 rounded-sm border border-transparent group"
                variants={cardVariant}
                whileHover={{ y: -6, borderColor: "rgba(13,107,106,0.35)", boxShadow: "0 20px 40px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: "#0b1a2d" }}
                  whileHover={{ background: "#0d6b6a", rotate: 5 }}
                  transition={{ duration: 0.22 }}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-[#0b1a2d] mb-2" style={{ fontWeight: 800, fontSize: "0.95rem" }}>{s.title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.83rem", lineHeight: 1.8 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. Design Packages ─────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Our Packages" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Design Packages
            </motion.h2>
            <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Choose the package that best fits your project requirements and budget.
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.code}
                className="relative bg-[#f4f5f7] rounded-sm p-8 border-2 border-transparent overflow-hidden"
                variants={cardVariant}
                whileHover={{ borderColor: "#0d6b6a", background: "#fff", y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.25 }}
              >
                {i === 2 && (
                  <div className="absolute top-4 right-4 text-white text-xs font-black px-2 py-0.5 rounded-sm" style={{ background: "#0d6b6a", letterSpacing: "0.08em" }}>POPULAR</div>
                )}
                <div className="mb-1" style={{ color: "#0d6b6a", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.14em" }}>{pkg.code}</div>
                <h3 className="text-[#0b1a2d] mb-5" style={{ fontWeight: 900, fontSize: "0.95rem", lineHeight: 1.3 }}>{pkg.label}</h3>
                <ul className="space-y-2.5">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0d6b6a" }} />
                      <span className="text-gray-600" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. Leadership Team ─────────────────────────────────── */}
      <section className="py-24 bg-[#f4f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Our Leadership" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              The Team Behind Titan Engineering
            </motion.h2>
            <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              A dedicated team of engineering and technical professionals committed to delivering quality solutions for every client.
            </motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto" variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {team.map((m) => (
              <motion.div key={m.name} className="bg-white rounded-sm overflow-hidden" variants={cardVariant} whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }} transition={{ duration: 0.3 }}>
                <div className="relative overflow-hidden" style={{ height: "270px" }}>
                  <motion.img src={m.image} alt={m.name} className="w-full h-full object-cover object-center" whileHover={{ scale: 1.07 }} transition={{ duration: 0.5 }} />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/75 to-transparent" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
                  <motion.div className="absolute bottom-4 inset-x-0 flex justify-center gap-2" initial={{ opacity: 0, y: 12 }} whileHover={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <motion.button className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: "#0d6b6a" }} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <Linkedin className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button className="w-9 h-9 bg-white rounded-sm flex items-center justify-center" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <Mail className="w-4 h-4 text-[#0b1a2d]" />
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-5 border-l-4" style={{ borderColor: "#0d6b6a" }}>
                  <p className="text-[#0b1a2d]" style={{ fontWeight: 800, fontSize: "0.97rem" }}>{m.name}</p>
                  <p style={{ color: "#0d6b6a", fontSize: "0.78rem", fontWeight: 600 }} className="mt-0.5">{m.role}</p>
                  <p className="text-gray-400 mt-1" style={{ fontSize: "0.72rem", lineHeight: 1.55 }}>{m.qual}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9. CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0b1a2d] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(13,107,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(13,107,106,1) 1px,transparent 1px)", backgroundSize: "55px 55px" }}
        />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#0d6b6a" }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <motion.div className="flex items-center justify-center gap-3 mb-4" variants={fadeUp}>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
              <span className="uppercase tracking-widest" style={{ color: "#0d9488", fontSize: "0.7rem", fontWeight: 700 }}>Work With Us</span>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            </motion.div>
            <motion.h2 className="text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Ready to Start Your Project?
            </motion.h2>
            <motion.p className="text-gray-400 mb-10" style={{ lineHeight: 1.85, fontSize: "0.95rem" }} variants={fadeUp}>
              Get in touch with our team for a free consultation and project quote. We'll respond within 24 hours.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeUp}>
              <motion.button
                onClick={() => navigate("/#contact")}
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
