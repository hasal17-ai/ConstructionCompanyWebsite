import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ChevronRight, Target, Eye, Heart, ShieldCheck, Trophy, Users,
  Clock, Zap, Globe, Leaf, Star, ArrowRight, Phone, Linkedin, Mail,
} from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "../components/animations";
import logoImg from "../../imports/Red_Black_boxes_Logo_Design_Business_Identity_for_Real_Estate_House_Rent_Sale__2_.png";

/* ─── data ────────────────────────────────────────────────────── */

const pillars = [
  {
    icon: Target,
    label: "Our Mission",
    color: "#0d6b6a",
    heading: "Delivering Excellence, Every Project",
    text: "To provide world-class construction and engineering solutions that exceed client expectations, contribute to Sri Lanka's infrastructure development, and set new benchmarks for quality, safety, and sustainability across the industry.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    color: "#0b1a2d",
    heading: "Leading the Future of Construction",
    text: "To be South Asia's most trusted construction and civil engineering company by 2030 — recognised for innovation, sustainability, and a legacy of structures that stand for generations.",
  },
  {
    icon: Heart,
    label: "Our Values",
    color: "#0d6b6a",
    heading: "Principles That Guide Us",
    text: "Integrity in every decision. Excellence in every output. Safety above all else. Sustainability for future generations. Respect for every stakeholder — client, community, and colleague alike.",
  },
];

const timeline = [
  { year: "2005", title: "Company Founded", desc: "Titan Engineering Pvt Ltd established in Colombo with a team of 12 engineers and a mission to redefine construction standards in Sri Lanka." },
  { year: "2007", title: "First Government Contract", desc: "Awarded our first major government infrastructure contract — a 12 km road improvement project in the Western Province." },
  { year: "2010", title: "100 Projects Milestone", desc: "Completed our 100th project, marking rapid growth across residential, commercial, and infrastructure sectors." },
  { year: "2013", title: "ISO 9001 Certification", desc: "Achieved ISO 9001:2008 quality management certification, reinforcing our commitment to world-class standards." },
  { year: "2016", title: "Islandwide Expansion", desc: "Extended operations to all 25 districts of Sri Lanka, becoming a truly national construction company." },
  { year: "2019", title: "ICTAD A1 Rating", desc: "Attained the highest ICTAD Category A1 contractor rating — qualifying us for the largest national infrastructure projects." },
  { year: "2021", title: "ISO 45001 & Green Division", desc: "Launched our dedicated Sustainability & Green Building division and achieved ISO 45001 occupational health & safety certification." },
  { year: "2024", title: "500+ Projects & Growing", desc: "Surpassed 500 completed projects with a total portfolio value exceeding LKR 48 billion. Now Sri Lanka's leading construction group." },
];

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "LKR 48B+", label: "Portfolio Value" },
  { value: "1,200+", label: "Skilled Professionals" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "25", label: "Districts Served" },
];

const strengths = [
  { icon: Zap, title: "Technical Expertise", desc: "Our engineers bring deep domain knowledge across structural, civil, MEP, and geotechnical disciplines — backed by decades of Sri Lankan field experience." },
  { icon: ShieldCheck, title: "Uncompromising Safety", desc: "Zero major safety incidents in five consecutive years. ISO 45001 certified with full-time safety officers and daily site protocols on every project." },
  { icon: Globe, title: "Islandwide Reach", desc: "Active operations across all 25 districts — from Colombo's high-rises to Northern Province highways and Eastern Province coastal infrastructure." },
  { icon: Leaf, title: "Sustainable Building", desc: "LEED-certified projects, solar integrations, and green procurement policies embedded in every project we undertake." },
  { icon: Clock, title: "On-Time, Every Time", desc: "98% on-schedule delivery rate driven by real-time project tracking, proactive risk management, and milestone-based reporting to clients." },
  { icon: Trophy, title: "Award-Winning Quality", desc: "Multiple-time winner of the Sri Lanka Construction Industry Best Contractor Award and recognised by the Ministry of Highways for infrastructure excellence." },
];

const certs = [
  { code: "ISO 9001:2015", label: "Quality Management System" },
  { code: "ISO 45001:2018", label: "Occupational Health & Safety" },
  { code: "ISO 14001:2015", label: "Environmental Management" },
  { code: "ICTAD A1", label: "Highest Contractor Rating" },
  { code: "LEED AP", label: "Green Building Certified" },
  { code: "SLS 1402", label: "Sri Lanka Standards" },
];

const team = [
  {
    name: "Arjuna Perera",
    role: "Managing Director & CEO",
    qual: "BSc Civil Eng (Moratuwa) · MBA (PIM Colombo) · 25 yrs exp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Nimalka Jayawardena",
    role: "Chief Structural Engineer",
    qual: "BEng (Hons) Moratuwa · CEng MICE · 18 yrs experience",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Chaminda Rathnayake",
    role: "Director – Infrastructure",
    qual: "MSc Infrastructure Eng · MIESL · 22 yrs experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Sanduni Fernando",
    role: "Head of Sustainability",
    qual: "LEED AP BD+C · MSc Environmental Eng · 14 yrs exp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
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
            Building Sri Lanka's <span style={{ color: "#0d9488" }}>Infrastructure</span> Since 2005
          </motion.h1>

          <motion.p className="text-gray-300" style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78 }}>
            From a 12-person startup in Colombo to one of Sri Lanka's most trusted construction groups — this is the story of Titan Engineering.
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
                  <div className="text-[#0b1a2d]" style={{ fontWeight: 800, fontSize: "0.82rem" }}>Est. 2005</div>
                  <div style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 600 }}>Colombo, Sri Lanka</div>
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
                Two Decades of Building Sri Lanka
              </motion.h2>
              <motion.p className="text-gray-600 mb-4" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
                Titan Engineering Pvt Ltd was founded in 2005 by a group of passionate civil engineers who believed Sri Lanka deserved better — better quality construction, better safety practices, and a contractor that truly partnered with clients to deliver results.
              </motion.p>
              <motion.p className="text-gray-600 mb-4" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
                Starting with a single road improvement contract in the Western Province, we grew rapidly by earning trust through performance. By 2010 we had completed 100 projects. By 2016 our teams were active in all 25 districts. Today, with over 1,200 professionals and a portfolio exceeding LKR 48 billion, we are one of Sri Lanka's most recognised construction groups.
              </motion.p>
              <motion.p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
                Our work spans high-rise commercial towers in Colombo, expressways connecting the Northern Province, green-certified residential communities in Kandy, and industrial parks enabling Sri Lanka's export economy. Every structure we build carries our name — and our commitment.
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
            <SectionLabel text="Our Journey" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Two Decades of Milestones
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
                    key={item.year}
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
                          <span className="text-white text-xs font-black px-2.5 py-1 rounded-sm" style={{ background: "#0d6b6a", letterSpacing: "0.08em" }}>{item.year}</span>
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
              Twenty years of performance have shaped the six qualities that our clients consistently cite as reasons to return.
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

      {/* ── 7. Certifications ──────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <SectionLabel text="Accreditations" />
            <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Certifications & Standards
            </motion.h2>
            <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
              Our operations are governed by the most rigorous international and national quality and safety standards.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" variants={staggerContainer(0.09, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {certs.map((c) => (
              <motion.div
                key={c.code}
                className="flex flex-col items-center justify-center text-center bg-[#f4f5f7] p-5 rounded-sm border border-transparent"
                variants={cardVariant}
                whileHover={{ borderColor: "#0d6b6a", background: "#fff", y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.22 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: "#0d6b6a" }}
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ShieldCheck className="w-5 h-5 text-white" />
                </motion.div>
                <div className="text-[#0b1a2d]" style={{ fontWeight: 800, fontSize: "0.78rem", lineHeight: 1.2 }}>{c.code}</div>
                <div className="text-gray-400 mt-1" style={{ fontSize: "0.68rem", lineHeight: 1.4 }}>{c.label}</div>
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
              Our leadership team combines engineering excellence with strategic vision — driving Titan's growth and upholding its reputation project by project.
            </motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
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
                href="tel:+94112345678"
                className="flex items-center gap-2 border-2 border-white/25 text-white px-8 py-3.5 rounded-sm"
                style={{ fontWeight: 700, fontSize: "0.82rem" }}
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
