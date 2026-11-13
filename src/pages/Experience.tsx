import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PageHead from "@/components/PageHead";
import { Reveal, RevealItem } from "@/components/Reveal";
import { competitions, experience, leadership } from "@/content/site";

export default function Experience() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 50%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <>
      <PageHead eyebrow="Experience" title="A record of building and learning.">
        <p className="lede">Internships, research, competitions, and leadership that shaped how I solve problems and work with others.</p>
      </PageHead>

      <section className="wrap section">
        <ol ref={timelineRef} className="timeline">
          <span className="timeline__rail" aria-hidden="true">
            <motion.span className="timeline__fill" style={{ scaleY: progress }} />
          </span>
          {experience.map((entry) => (
            <Reveal key={entry.company} as="div" className="timeline__entry">
              <RevealItem className="timeline__when">
                <span className="timeline__node" aria-hidden="true" />
                <span className="mono">{entry.duration}</span>
                <span className="mono timeline__type">{entry.type}</span>
              </RevealItem>
              <RevealItem className="timeline__body">
                <h2 className="h3">{entry.role}</h2>
                <p className="timeline__org">{entry.company} · {entry.location}</p>
                <p className="body">{entry.summary}</p>
                <ul className="timeline__bullets">
                  {entry.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="project__tags">
                  {entry.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </RevealItem>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="wrap section xp-split">
        <div>
          <h2 className="h2">Competitions</h2>
          <Reveal as="ul" className="ledger">
            {competitions.map((c) => (
              <RevealItem as="li" key={c.title} className="ledger__row">
                <div className="ledger__head">
                  <h3>{c.title}</h3>
                  <span className={c.award.startsWith("First") ? "chip chip--award" : "chip"}>{c.award}</span>
                </div>
                <p className="mono ledger__sub">{c.date} · {c.role}</p>
                <p className="body">{c.summary}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
        <div>
          <h2 className="h2">Leadership</h2>
          <Reveal as="ul" className="ledger">
            {leadership.map((l) => (
              <RevealItem as="li" key={l.organization} className="ledger__row">
                <div className="ledger__head">
                  <h3>{l.role}</h3>
                  <span className="mono ledger__sub">{l.duration}</span>
                </div>
                <p className="ledger__org">{l.organization}</p>
                <p className="body">{l.impact}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
