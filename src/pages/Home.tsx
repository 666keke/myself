import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, profile, strengths } from "@/content/site";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function Home() {
  return (
    <div className="pb-8">
      <section className="page-wrap pt-5 sm:pt-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="hero-panel">
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" />
            <span className="orbit-core">HJ<span className="orbit-core-dot" /></span>
            <span className="orbit-node node-one" /><span className="orbit-node node-two" /><span className="orbit-node node-three" />
          </div>
          <motion.div variants={itemVariants} className="hero-content">
            <div className="hero-eyebrow"><span className="status-dot" /> AVAILABLE FOR COLLABORATION <span className="hero-eyebrow-line" /> PORTFOLIO / 2026</div>
            <h1 className="hero-heading">Making AI <em>useful</em><br />beyond the demo.</h1>
            <p className="hero-description">I’m {profile.name}, an AI researcher and builder working across language models, agents, and the systems that bring them into the real world.</p>
            <div className="hero-actions">
              <Link to="/projects" className="hero-button-primary">Explore my work <ArrowUpRight size={18} /></Link>
              <Link to="/about" className="hero-button-text">More about me <ArrowRight size={18} /></Link>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="hero-bottom">
            <span>AI RESEARCH <span className="hero-bottom-separator">/</span> ENGINEERING <span className="hero-bottom-separator">/</span> PRODUCT</span>
            <span>BEIJING, CN <ArrowDownRight size={16} /></span>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap intro-band">
        <div className="intro-label"><span className="section-index">01 / INTRODUCTION</span><span className="intro-rule" /></div>
        <div className="intro-main">
          <h2>Curiosity meets <span>execution.</span></h2>
          <div className="intro-columns">
            <p>I work at the intersection of research and engineering, turning complex AI ideas into clear, dependable products.</p>
            <div className="intro-detail">
              <span className="small-label">CURRENTLY</span>
              <p>Building in the PaddlePaddle ecosystem and exploring reinforcement learning for LLM tool use.</p>
              <Link to="/experience" className="text-link">My experience <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap work-section">
        <div className="section-topline"><span className="section-index">02 / SELECTED WORK</span><Link to="/projects" className="text-link">All projects <ArrowUpRight size={17} /></Link></div>
        <h2 className="work-heading">Ideas made tangible<span>.</span></h2>
        <div className="work-grid">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className={["work-card", "work-card-" + (index + 1)].join(" ")}>
              <div className="work-card-top"><span>0{index + 1} / {project.category}</span><span>{project.date}</span></div>
              <div className="work-card-art" aria-hidden="true"><span className="art-shape art-shape-a" /><span className="art-shape art-shape-b" /><span className="art-shape art-shape-c" /></div>
              <div className="work-card-body">
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="work-card-bottom">
                  <span>{project.tags.slice(0, 2).join(" / ")}</span>
                  {project.link || project.demo ? <a href={project.demo || project.link} target="_blank" rel="noreferrer" aria-label={"View " + project.title}><ArrowUpRight size={20} /></a> : <Link to="/projects" aria-label={"Read about " + project.title}><ArrowUpRight size={20} /></Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap approach-section">
        <div className="section-topline"><span className="section-index">03 / HOW I WORK</span></div>
        <div className="approach-grid">
          <div><h2>Thoughtful by design.<br /><span>Practical by default.</span></h2><Link to="/about" className="button-solid mt-8">More about my approach <ArrowUpRight size={17} /></Link></div>
          <div className="approach-list">
            {strengths.map((strength, index) => <div className="approach-item" key={strength.title}><span>0{index + 1}</span><div><h3>{strength.title}</h3><p>{strength.description}</p></div><ArrowUpRight size={18} /></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
