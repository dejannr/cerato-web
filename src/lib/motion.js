export const motionTokens = {
  duration: { xs: 0.1, sm: 0.16, md: 0.28, lg: 0.4 },
  ease: {
    out: [0.25, 0.46, 0.45, 0.94],
    emphasized: [0.22, 1, 0.36, 1],
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: motionTokens.duration.lg, ease: motionTokens.ease.out } },
};
