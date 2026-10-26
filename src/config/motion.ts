import { Transition, Variants } from "motion/react";

/**
 * Standardized easing curves for Magna Odonto
 * Designed for a premium, calm, medical-grade aesthetic:
 * - smoothOut: Natural quintic deceleration, no harsh stop, no overshoot.
 * - smoothInOut: Balanced acceleration and deceleration for structural elements.
 */
export const EASING = {
  smoothOut: [0.16, 1, 0.3, 1] as const,
  smoothInOut: [0.4, 0, 0.2, 1] as const,
};

/**
 * Spring configurations
 * Tuned with high damping to eliminate cartoonish bouncing while maintaining tactile responsiveness.
 */
export const SPRINGS = {
  button: {
    type: "spring",
    stiffness: 400,
    damping: 28,
    mass: 0.6,
  } as Transition,
  card: {
    type: "spring",
    stiffness: 300,
    damping: 26,
    mass: 0.8,
  } as Transition,
  menu: {
    type: "spring",
    stiffness: 350,
    damping: 32,
    mass: 0.7,
  } as Transition,
};

/**
 * Standard Transitions
 */
export const TRANSITIONS = {
  default: {
    duration: 0.4,
    ease: EASING.smoothOut,
  },
  fast: {
    duration: 0.25,
    ease: EASING.smoothOut,
  },
  slow: {
    duration: 0.6,
    ease: EASING.smoothOut,
  },
  accordion: {
    duration: 0.35,
    ease: EASING.smoothOut,
  },
};

/**
 * Staggered Section Entrances
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smoothOut,
    },
  },
};

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASING.smoothOut,
    },
  },
};
