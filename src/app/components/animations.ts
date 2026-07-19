// Shared animation variants for consistent motion across the site

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
};

export const staggerContainer = (stagger = 0.12, delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const eyebrowVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const viewportConfig = { once: true, margin: "-80px" };
