import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { rise, stagger } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
  /** Reveal on mount instead of on scroll (above-the-fold content). */
  now?: boolean;
}

/** Staggers its `<RevealItem>` children in once, as they scroll into view. */
export function Reveal({ children, className, as = "div", now = false }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={stagger}
      initial="hidden"
      {...(now ? { animate: "visible" } : { whileInView: "visible", viewport: { once: true, margin: "0px 0px -12% 0px" } })}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" | "p" | "h1" | "h2" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={rise}>
      {children}
    </Tag>
  );
}
