import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import logoImg from "../../imports/Red_Black_boxes_Logo_Design_Business_Identity_for_Real_Estate_House_Rent_Sale__2_.png";

const links = [
  { label: "Home", href: "#home", route: "/" },
  { label: "About", href: "/about", route: "/about" },
  { label: "Services", href: "/services", route: "/services" },
  { label: "Projects", href: "/projects", route: "/projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (link: typeof links[0]) => {
    setOpen(false);
    // Route links (About page, etc.)
    if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
      navigate(link.href);
      return;
    }
    // Anchor links — if not on home, navigate there first then scroll
    const anchor = link.href;
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isAboutActive = location.pathname === "/about";
  const isServicesActive = location.pathname === "/services";
  const isProjectsActive = location.pathname === "/projects" || location.pathname.startsWith("/projects/");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1a2d] shadow-2xl" : "bg-[#0b1a2d]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            className="bg-white rounded-sm flex items-center justify-center overflow-hidden"
            style={{ width: "44px", height: "44px", padding: "4px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={logoImg} alt="Titan Engineering Logo" className="w-full h-full object-contain" />
          </motion.div>
          <div className="text-left leading-none">
            <p className="text-white tracking-wide" style={{ fontSize: "0.92rem", fontWeight: 800 }}>TITAN ENGINEERING</p>
            <p className="text-[#0d9488]" style={{ fontSize: "0.58rem", letterSpacing: "0.2em", fontWeight: 600 }}>PVT LTD · SRI LANKA</p>
          </div>
        </motion.button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l, i) => {
            const isActive = (l.href === "/about" && isAboutActive) || (l.href === "/services" && isServicesActive) || (l.href === "/projects" && isProjectsActive);
            return (
              <motion.button
                key={l.label}
                onClick={() => handleNav(l)}
                className="relative transition-colors"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: isActive ? "#0d9488" : "#d1d5db",
                }}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                whileHover={{ y: -2, color: "#0d9488" }}
              >
                <span className={isActive ? "text-[#0d9488]" : "text-gray-300 hover:text-[#0d9488]"}>
                  {l.label.toUpperCase()}
                </span>
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "#0d6b6a" }}
                    layoutId="nav-underline"
                  />
                )}
              </motion.button>
            );
          })}
          <motion.button
            onClick={() => handleNav({ label: "Contact", href: "#contact" })}
            className="text-white px-5 py-2 rounded-sm transition-colors"
            style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", backgroundColor: "#0d6b6a" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            whileHover={{ scale: 1.06, backgroundColor: "#0d9488" }}
            whileTap={{ scale: 0.95 }}
          >
            FREE QUOTE
          </motion.button>
        </nav>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-[#0b1a2d] border-t border-white/10 px-4 pb-5 overflow-hidden"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                onClick={() => handleNav(l)}
                className="block w-full text-left py-3.5 border-b border-white/5 transition-colors"
                style={{
                  fontSize: "0.9rem",
                  color: l.href === "/about" && isAboutActive ? "#0d9488" : undefined,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <span className={(l.href === "/about" && isAboutActive) || (l.href === "/services" && isServicesActive) || (l.href === "/projects" && isProjectsActive) ? "text-[#0d9488]" : "text-gray-300"}>
                  {l.label}
                </span>
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNav({ label: "Contact", href: "#contact" })}
              className="mt-4 w-full text-white py-3 rounded-sm"
              style={{ fontWeight: 800, fontSize: "0.85rem", backgroundColor: "#0d6b6a" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              whileTap={{ scale: 0.97 }}
            >
              GET A FREE QUOTE
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
