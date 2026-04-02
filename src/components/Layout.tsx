import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { profile } from "@/content/site";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell">
      <Navigation />
      <main>{children}</main>
      <footer className="page-wrap pb-12 pt-16">
        <div className="frame-rule" />
        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono text-[0.68rem] text-[color:var(--muted)]">
              Portfolio
            </p>
            <p className="mt-2 text-lg text-[color:var(--ink)]">
              {profile.name}
            </p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)]">
            Research-oriented AI work presented with the discipline of an
            editorial system instead of a gallery of widgets.
          </p>
        </div>
      </footer>
    </div>
  );
}
