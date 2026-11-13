import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Stage from "@/components/stage/Stage";
import { Reveal, RevealItem } from "@/components/Reveal";
import { DiscoverButton } from "@/components/block/discover-button";
import { TextStream } from "@/components/block/text-stream";
import { DraggableMarquee } from "@/components/block/draggable-marquee";
import { featuredProjects, focusAreas, homeStats, profile, stack, strengths } from "@/content/site";
import { ease } from "@/lib/motion";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <Reveal now className="hero__copy">
          <RevealItem className="eyebrow">
            <span className="dot-live" aria-hidden="true" /> {profile.role} · {profile.location}
          </RevealItem>
          <RevealItem as="h1" className="display hero__title">
            Making AI useful <span className="hero__muted">beyond the demo.</span>
          </RevealItem>
          <RevealItem className="hero__row">
            <p className="lede">
              I’m {profile.name}. I build language-model agents, the RL that teaches them to use tools, and the
              systems that keep them running.
            </p>
            <div className="hero__actions">
              <DiscoverButton to="/projects" label="Explore my work" />
              <Link to="/about" className="link-arrow">
                <span className="u">About me</span> <ArrowUpRight size={16} />
              </Link>
            </div>
          </RevealItem>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: ease.expo, delay: 0.25 }}
        >
          <Stage />
        </motion.div>

        <Reveal className="hero__stats" as="ul">
          {homeStats.map((stat) => (
            <motion.li key={stat.label} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.out } } }}>
              <span className="mono">{stat.label}</span>
              <span>{stat.value}</span>
            </motion.li>
          ))}
        </Reveal>
      </section>

      <section className="stack-band" aria-label="Tools I work with">
        <DraggableMarquee
          items={stack.map((name) => ({ id: name, src: name }))}
          speed={0.5}
          repeatCount={4}
          gapClassName="gap-3"
          itemClassName=""
          pauseOnHover
          label="Tools I work with. Drag, or use the left and right arrow keys."
          renderItem={(item) => <span className="stack-chip">{item.src}</span>}
        />
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="h2">Selected work</h2>
          <Link to="/projects" className="link-arrow">
            <span className="u">All projects</span> <ArrowUpRight size={16} />
          </Link>
        </div>
        <Reveal className="work" as="ol">
          {featuredProjects.map((project, index) => {
            const href = project.demo || project.link;
            const inner = (
              <>
                <span className="work__index mono">0{index + 1}</span>
                <div className="work__main">
                  <h3 className="h3">{project.title}</h3>
                  <p className="body">{project.description}</p>
                </div>
                <div className="work__meta">
                  <span className="mono">{project.category}</span>
                  <span className="mono">{project.date}</span>
                </div>
                <span className="work__go" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </>
            );
            return (
              <motion.li key={project.title} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.expo } } }}>
                {href ? (
                  <a className="work__row" href={href} target="_blank" rel="noreferrer">{inner}</a>
                ) : (
                  <Link className="work__row" to="/projects">{inner}</Link>
                )}
              </motion.li>
            );
          })}
        </Reveal>
      </section>

      <section className="wrap section focus">
        <Reveal className="focus__copy">
          <RevealItem as="h2" className="h2">Research with product taste.</RevealItem>
          <div className="focus__list">
            {strengths.map((s) => (
              <RevealItem key={s.title} className="focus__item">
                <h3>{s.title}</h3>
                <p className="body">{s.description}</p>
              </RevealItem>
            ))}
          </div>
        </Reveal>
        <div className="focus__reel" aria-label={`Focus areas: ${focusAreas.join(", ")}`}>
          <TextStream items={focusAreas} prefix="Currently thinking about" height="100%" fontSize="clamp(1.9rem, 3.4vw, 3rem)" fontWeight={600} />
        </div>
      </section>
    </>
  );
}
