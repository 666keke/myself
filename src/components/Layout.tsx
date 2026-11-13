import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { DiscoverButton } from "@/components/block/discover-button";
import FlipText from "@/components/block/flip-text";
import { profile } from "@/content/site";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navigation />
      <main id="main">{children}</main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer__cta">
            <p className="eyebrow">Have something in mind?</p>
            <h2 className="display footer__title">
              Let’s build{" "}
              <FlipText className="footer__flip" duration={4.2}>
                what’s next.
              </FlipText>
            </h2>
            <DiscoverButton to="/contact" label="Start a conversation" className="discover--dark" />
          </div>
          <hr className="rule" />
          <div className="footer__meta">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <div className="footer__links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
