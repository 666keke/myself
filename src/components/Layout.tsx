import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
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
      <footer className="page-wrap pb-8">
        <div className="rounded-[22px] bg-[color:var(--ink)] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <p className="mono text-[0.65rem] text-[#bfe1b0]">HAVE SOMETHING IN MIND?</p>
          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-[clamp(2.4rem,5vw,5rem)] leading-[1.04]">Let’s build what’s next.</h2>
            <Link to="/contact" className="inline-flex w-fit items-center gap-5 rounded-full bg-[#c6e5a9] px-6 py-4 text-sm font-bold text-[color:var(--ink)] transition hover:-translate-y-1">
              Get in touch <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs text-[#bacbc0] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {profile.name}. Built with care.</span>
            <div className="flex gap-6">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="hover:text-white">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
