import { ArrowRight } from "lucide-react";
import type { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import "./discover-button.css";

export interface DiscoverButtonProps {
  label?: string;
  /** In-app route, rendered with react-router so the basename is respected. */
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function DiscoverButton({
  label = "Discover Components",
  to,
  href,
  onClick,
  className,
}: DiscoverButtonProps) {
  const buttonFace = (
    <>
      <span className="obsidian-discover-button__fill" aria-hidden="true" />
      <span className="obsidian-discover-button__icon" aria-hidden="true">
        <ArrowRight size={22} strokeWidth={2.25} />
      </span>
      <span className="obsidian-discover-button__text">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link className={cn("obsidian-discover-button", className)} to={to}>
        {buttonFace}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={cn("obsidian-discover-button", className)} href={href}>
        {buttonFace}
      </a>
    );
  }

  return (
    <button className={cn("obsidian-discover-button", className)} type="button" onClick={onClick}>
      {buttonFace}
    </button>
  );
}

export default DiscoverButton;
