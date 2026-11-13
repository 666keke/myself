import type { ReactNode } from "react";
import { Reveal, RevealItem } from "./Reveal";

export default function PageHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <Reveal now className="wrap page-head">
      <RevealItem className="eyebrow">{eyebrow}</RevealItem>
      <RevealItem as="h1" className="display page-head__title">{title}</RevealItem>
      {children && <RevealItem className="page-head__body">{children}</RevealItem>}
    </Reveal>
  );
}
