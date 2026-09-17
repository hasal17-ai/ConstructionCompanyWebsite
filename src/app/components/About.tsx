import image_7bd3f42e_569e_4341_a220_bb6320533e2a_1 from '@/imports/7bd3f42e-569e-4341-a220-bb6320533e2a-1.jpg'
import image_8c817039_71fc_4e24_90fc_82de0fccac4a from '@/imports/8c817039-71fc-4e24-90fc-82de0fccac4a.jpg'
import image_7bd3f42e_569e_4341_a220_bb6320533e2a from '@/imports/7bd3f42e-569e-4341-a220-bb6320533e2a.jpg'
import { Pencil, Gem, Wallet, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, cardVariant, viewportConfig } from "./animations";

const pillars = [
  { icon: Pencil, title: "Customized Designs", desc: "Every solution is tailored to your land, lifestyle, budget, and specific construction requirements." },
  { icon: Gem, title: "Modern & Elegant", desc: "Contemporary architectural styles combined with practical functionality and comfortable living spaces." },
  { icon: Wallet, title: "Budget-Conscious", desc: "Practical design solutions that balance quality, aesthetics, and cost at every stage of planning." },
  { icon: HeartHandshake, title: "Client-Focused", desc: "Close communication throughout the planning process to ensure your vision is properly understood." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <motion.div className="relative" variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <div className="grid grid-cols-2 gap-3">
              <motion.img
                src={image_7bd3f42e_569e_4341_a220_bb6320533e2a}
                alt="Engineers on site"
                className="col-span-1 row-span-2 w-full object-cover rounded-sm m-[0px]"
                style={{ height: "370px" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              <motion.img
                src={image_8c817039_71fc_4e24_90fc_82de0fccac4a}
                alt="Blueprint review"
                className="w-full object-cover rounded-sm"
                style={{ height: "178px" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
              />
              <motion.img
                src={image_7bd3f42e_569e_4341_a220_bb6320533e2a_1}
                alt="Construction crane"
                className="w-full object-cover rounded-sm"
                style={{ height: "178px" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
              />
            </div>
            <motion.div
              className="absolute -bottom-5 -right-5 text-white p-6 rounded-sm shadow-2xl hidden sm:flex flex-col items-center justify-center"
              style={{ background: "#0d6b6a" }}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08, rotate: 3 }}
            >
              <span style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}>1+</span>
              <span style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.14em", lineHeight: 1.5 }}>YEARS OF<br />EXCELLENCE</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <motion.div className="flex items-center gap-3 mb-3" variants={fadeUp}>
              <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
              <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">About Us</span>
            </motion.div>
            <motion.h2 className="text-[#0b1a2d] mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em" }} variants={fadeUp}>
              Your Trusted Engineering & Design Partner
            </motion.h2>
            <motion.p className="text-gray-600 mb-4" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
              Founded in 2026, Titan Engineering is a professional engineering and construction consultancy dedicated to providing reliable, innovative, and practical solutions for modern residential and construction projects across Sri Lanka.
            </motion.p>
            <motion.p className="text-gray-600 mb-8" style={{ lineHeight: 1.9, fontSize: "0.93rem" }} variants={fadeUp}>
              From initial site consultation and concept development to detailed architectural drawings, 3D visualization, and full technical documentation — we provide a complete range of services to support the successful planning and development of your project.
            </motion.p>

            <motion.div className="grid sm:grid-cols-2 gap-5" variants={staggerContainer(0.1, 0.2)} initial="hidden" whileInView="show" viewport={viewportConfig}>
              {pillars.map((p) => (
                <motion.div key={p.title} className="flex gap-3.5" variants={cardVariant} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <motion.div
                    className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ background: "rgba(13,107,106,0.12)" }}
                    whileHover={{ background: "#0d6b6a", scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: "#0d6b6a" }} />
                  </motion.div>
                  <div>
                    <p className="text-[#0b1a2d]" style={{ fontWeight: 700, fontSize: "0.87rem" }}>{p.title}</p>
                    <p className="text-gray-500 mt-0.5" style={{ fontSize: "0.78rem", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
