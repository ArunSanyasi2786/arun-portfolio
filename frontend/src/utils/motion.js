const premiumEase = [0.22, 1, 0.36, 1];

export const revealViewport = { once: true, amount: 0.2 };

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: premiumEase } }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: premiumEase } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: -38 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.68, ease: premiumEase } }
};

export const slideRight = {
  hidden: { opacity: 0, x: 38 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.68, ease: premiumEase } }
};

export const revealText = {
  hidden: { opacity: 0, y: '0.7em', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: premiumEase }
  }
};

