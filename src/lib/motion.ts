import type { BezierDefinition, Transition, Variants } from "framer-motion";

export const ease: Record<"out" | "expo" | "inOut", BezierDefinition> = {
  out: [0.22, 1, 0.36, 1],
  expo: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
};

/** Quick settle with no overshoot; used for anything the pointer drives. */
export const spring: Transition = { type: "spring", stiffness: 520, damping: 42, mass: 0.8 };
/** Slower settle for things flying into place. */
export const softSpring: Transition = { type: "spring", stiffness: 260, damping: 32 };

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.expo },
  },
};

export const page: Variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ease.out } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: ease.inOut } },
};
