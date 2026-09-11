import { useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { useScroll, useSpring, motion, AnimatePresence } from "motion/react";
import { Preloader } from "./components/Preloader";
import { router } from "./routes";

function SiteWrapper() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
        style={{ scaleX, background: "#0d6b6a" }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = "349W0KWzdtysGQ0iOCHxt3E22d1Hjb1Ui_WPC2UQPIY";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="site"
            className="min-h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SiteWrapper />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
