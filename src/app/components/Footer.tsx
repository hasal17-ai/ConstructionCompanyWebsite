import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { staggerContainer, cardVariant, viewportConfig } from "./animations";
import logoImg from "../../imports/Red_Black_boxes_Logo_Design_Business_Identity_for_Real_Estate_House_Rent_Sale__2_.png";

const serviceLinks = [
  "Architectural House Plans",
  "3D Exterior & Interior Design",
  "Engineering Drawings",
  "Electrical & Plumbing Layouts",
  "Structural Drawings",
  "BOQ & Detailed Estimates",
  "Bank Loan Documentation",
  "3D Walkthrough & Visualization",
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Our Team", to: "/team" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#070f1c] text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>

          {/* Brand */}
          <motion.div variants={cardVariant}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="bg-white rounded-sm flex items-center justify-center overflow-hidden shrink-0" style={{ width: "42px", height: "42px", padding: "4px" }} whileHover={{ rotate: 5, scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }}>
                <img src={logoImg} alt="Titan Engineering" className="w-full h-full object-contain" />
              </motion.div>
              <div className="leading-none">
                <p className="text-white" style={{ fontSize: "0.87rem", fontWeight: 800, letterSpacing: "0.05em" }}>TITAN ENGINEERING</p>
                <p style={{ color: "#0d9488", fontSize: "0.57rem", letterSpacing: "0.18em", fontWeight: 600 }}>PVT LTD · SRI LANKA</p>
              </div>
            </div>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.85 }}>
              Professional engineering and construction consultancy providing reliable, innovative, and practical solutions for modern residential projects across Sri Lanka.
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {["Est. 2026", "Sri Lanka", "Residential"].map((tag) => (
                <motion.span key={tag} className="border text-gray-400 px-2 py-0.5 rounded-sm" style={{ fontSize: "0.62rem", fontWeight: 700, borderColor: "rgba(255,255,255,0.1)" }} whileHover={{ borderColor: "#0d6b6a", color: "#0d9488" }} transition={{ duration: 0.2 }}>
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-2.5 mt-5">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a key={i} href={href} className="w-8 h-8 border rounded-sm flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.1)" }} whileHover={{ background: "#0d6b6a", borderColor: "#0d6b6a", color: "#fff", scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={cardVariant}>
            <h4 className="text-white mb-5" style={{ fontSize: "0.82rem", fontWeight: 800, letterSpacing: "0.08em" }}>OUR SERVICES</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <motion.li key={s} className="flex items-center gap-2 cursor-pointer" style={{ fontSize: "0.78rem", color: "#9ca3af" }} whileHover={{ x: 5, color: "#0d9488" }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-3 h-3 shrink-0" style={{ color: "#0d6b6a" }} />
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={cardVariant}>
            <h4 className="text-white mb-5" style={{ fontSize: "0.82rem", fontWeight: 800, letterSpacing: "0.08em" }}>QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button onClick={() => navigate(link.to)} className="flex items-center gap-2" style={{ fontSize: "0.78rem" }} whileHover={{ x: 5, color: "#0d9488" }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="w-3 h-3 shrink-0" style={{ color: "#0d6b6a" }} />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={cardVariant}>
            <h4 className="text-white mb-5" style={{ fontSize: "0.82rem", fontWeight: 800, letterSpacing: "0.08em" }}>CONTACT INFO</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0d6b6a" }} />
                <span style={{ fontSize: "0.78rem", lineHeight: 1.7 }}>Ganihigama North,<br />Pepiliyawala, Sri Lanka</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0d6b6a" }} />
                <span style={{ fontSize: "0.78rem", lineHeight: 1.7 }}>+94 71 730 0011</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0d6b6a" }} />
                <span style={{ fontSize: "0.78rem", lineHeight: 1.7 }}>titanengineering07@gmail.com<br />projects@titanengineering.lk</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ fontSize: "0.72rem" }}>© {new Date().getFullYear()} Titan Engineering Pvt Ltd. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <motion.a key={l} href="#" style={{ fontSize: "0.72rem" }} whileHover={{ color: "#0d9488" }}>{l}</motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
