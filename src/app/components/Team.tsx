import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "./animations";

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

export function Team() {
  return (
    <section id="team" className="py-24 bg-[#f4f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">Our Leadership</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
            The Minds Behind Titan Engineering
          </motion.h2>
          <motion.p className="text-gray-500 max-w-xl mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
            A dedicated team of engineering and technical professionals committed to delivering quality solutions for every client.
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto" variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          {team.map((m) => (
            <motion.div key={m.name} className="bg-white rounded-sm overflow-hidden" variants={cardVariant} whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }} transition={{ duration: 0.3 }}>
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <motion.img src={m.image} alt={m.name} className="w-full h-full object-cover object-center" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2d]/70 to-transparent" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
                <motion.div className="absolute bottom-4 inset-x-0 flex justify-center gap-2" initial={{ opacity: 0, y: 12 }} whileHover={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  <motion.button className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: "#0d6b6a" }} whileHover={{ scale: 1.15, background: "#0d9488" }} whileTap={{ scale: 0.9 }}>
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
  );
}
