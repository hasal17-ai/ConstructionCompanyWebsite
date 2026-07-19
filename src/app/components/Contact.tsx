import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, fadeRight, staggerContainer, cardVariant, viewportConfig } from "./animations";

const info = [
  { icon: MapPin, label: "Head Office", value: "Ganihigama North,\nPepiliyawala, Sri Lanka" },
  { icon: Phone, label: "Phone", value: "+94 77 643 6383\n+94 71 730 0011" },
  { icon: Mail, label: "Email", value: "titanengineering07@gmail.com\nprojects@titanengineering.lk" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 8:00 AM – 1:00 PM" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="py-24 bg-[#f4f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={viewportConfig}>
          <motion.div className="flex items-center justify-center gap-3 mb-3" variants={fadeUp}>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
            <span style={{ color: "#0d6b6a", fontSize: "0.7rem", fontWeight: 700 }} className="uppercase tracking-widest">Get In Touch</span>
            <div className="h-px w-10" style={{ background: "#0d6b6a" }} />
          </motion.div>
          <motion.h2 className="text-[#0b1a2d]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.12 }} variants={fadeUp}>
            Let's Build Something Great Together
          </motion.h2>
          <motion.p className="text-gray-500 max-w-lg mx-auto mt-4" style={{ lineHeight: 1.85, fontSize: "0.92rem" }} variants={fadeUp}>
            Request a free consultation and project quote. Our team will get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div className="lg:col-span-2 space-y-4" variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportConfig}>
            {info.map((item) => (
              <motion.div key={item.label} className="flex gap-4 bg-white p-5 rounded-sm border border-gray-100" variants={cardVariant} whileHover={{ x: 4, borderColor: "rgba(13,107,106,0.35)", boxShadow: "0 8px 25px rgba(0,0,0,0.07)" }} transition={{ duration: 0.25 }}>
                <motion.div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: "rgba(13,107,106,0.12)" }} whileHover={{ background: "#0d6b6a", scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <item.icon style={{ width: "1.1rem", height: "1.1rem", color: "#0d6b6a" }} />
                </motion.div>
                <div>
                  <p className="text-[#0b1a2d]" style={{ fontWeight: 700, fontSize: "0.8rem" }}>{item.label}</p>
                  <p className="text-gray-500 mt-0.5 whitespace-pre-line" style={{ fontSize: "0.8rem", lineHeight: 1.65 }}>{item.value}</p>
                </div>
              </motion.div>
            ))}
            <motion.div className="rounded-sm overflow-hidden border border-gray-100" style={{ height: "180px" }} variants={cardVariant} whileHover={{ scale: 1.01 }}>
              <iframe title="Titan Engineering Office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8986782745097!2d79.8560153!3d6.9108584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591210a3d147%3A0x2e74781eb43e832b!2sColombo%2003%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-3 bg-white p-8 rounded-sm border border-gray-100" variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportConfig}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="success" className="flex flex-col items-center justify-center py-16 text-center" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, type: "spring" }}>
                  <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.1, type: "spring", stiffness: 200 }}>
                    <CheckCircle2 className="w-14 h-14 mb-4" style={{ color: "#0d6b6a" }} />
                  </motion.div>
                  <motion.h3 className="text-[#0b1a2d] mb-2" style={{ fontWeight: 800, fontSize: "1.2rem" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>Message Sent!</motion.h3>
                  <motion.p className="text-gray-500 max-w-sm" style={{ fontSize: "0.88rem", lineHeight: 1.75 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                    Thank you for contacting Titan Engineering. Our team will reach out within 24 hours.
                  </motion.p>
                  <motion.button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }} className="mt-6 text-white px-6 py-2.5 rounded-sm" style={{ fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.08em", background: "#0d6b6a" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} whileHover={{ scale: 1.05, background: "#0d9488" }} whileTap={{ scale: 0.95 }}>
                    SEND ANOTHER
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name *", placeholder: "e.g. Kasun Perera", type: "text", required: true },
                      { name: "email", label: "Email Address *", placeholder: "you@example.com", type: "email", required: true },
                    ].map((f, i) => (
                      <motion.div key={f.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                        <label className="block text-[#0b1a2d] mb-1.5" style={{ fontSize: "0.78rem", fontWeight: 700 }}>{f.label}</label>
                        <input name={f.name} type={f.type} value={(form as any)[f.name]} onChange={update} required={f.required} placeholder={f.placeholder} className="w-full bg-[#f4f5f7] border border-transparent rounded-sm px-4 py-2.5 text-[#0b1a2d] placeholder-gray-400 outline-none transition-colors" style={{ fontSize: "0.875rem" }} onFocus={e => e.target.style.borderColor = "#0d6b6a"} onBlur={e => e.target.style.borderColor = "transparent"} />
                      </motion.div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0b1a2d] mb-1.5" style={{ fontSize: "0.78rem", fontWeight: 700 }}>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={update} placeholder="+94 7X XXX XXXX" className="w-full bg-[#f4f5f7] border border-transparent rounded-sm px-4 py-2.5 text-[#0b1a2d] placeholder-gray-400 outline-none transition-colors" style={{ fontSize: "0.875rem" }} onFocus={e => e.target.style.borderColor = "#0d6b6a"} onBlur={e => e.target.style.borderColor = "transparent"} />
                    </div>
                    <div>
                      <label className="block text-[#0b1a2d] mb-1.5" style={{ fontSize: "0.78rem", fontWeight: 700 }}>Service Required</label>
                      <select name="service" value={form.service} onChange={update} className="w-full bg-[#f4f5f7] border border-transparent rounded-sm px-4 py-2.5 text-[#0b1a2d] outline-none transition-colors" style={{ fontSize: "0.875rem" }} onFocus={e => e.target.style.borderColor = "#0d6b6a"} onBlur={e => e.target.style.borderColor = "transparent"}>
                        <option value="">Select a service</option>
                        <option>Commercial Construction</option>
                        <option>Residential Construction</option>
                        <option>Civil & Structural Engineering</option>
                        <option>Infrastructure & Road Works</option>
                        <option>MEP Engineering</option>
                        <option>Green & Sustainable Building</option>
                        <option>Renovation & Retrofitting</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#0b1a2d] mb-1.5" style={{ fontSize: "0.78rem", fontWeight: 700 }}>Project Details *</label>
                    <textarea name="message" value={form.message} onChange={update} required rows={5} placeholder="Describe your project — location, scope, timeline, and any specific requirements..." className="w-full bg-[#f4f5f7] border border-transparent rounded-sm px-4 py-2.5 text-[#0b1a2d] placeholder-gray-400 outline-none transition-colors resize-none" style={{ fontSize: "0.875rem" }} onFocus={e => e.target.style.borderColor = "#0d6b6a"} onBlur={e => e.target.style.borderColor = "transparent"} />
                  </div>
                  <motion.button type="submit" className="w-full text-white py-3.5 rounded-sm flex items-center justify-center gap-2" style={{ fontWeight: 800, letterSpacing: "0.09em", fontSize: "0.82rem", background: "#0b1a2d" }} whileHover={{ background: "#0d6b6a", scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
