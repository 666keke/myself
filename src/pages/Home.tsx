import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  featuredProjects,
  homeStats,
  profile,
  strengths,
} from "@/content/site";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function Home() {
  return (
    <div className="pb-8 pt-8">
      <section className="page-wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <span className="kicker">Research portfolio</span>
            <h1 className="hero-title mt-8 max-w-3xl text-[color:var(--ink)]">
              Research-grade
              <br />
              AI systems with
              <br />
              product discipline.
            </h1>
            <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-[140px_1fr]">
              <p className="mono pt-1 text-[0.64rem] text-[color:var(--accent)] md:pt-2">
                Haoran Ji
              </p>
              <p className="body-large">
                {profile.summary} I care about turning difficult model work into
                systems that can still be understood, evaluated, and shipped.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="button-solid">
                Selected projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="button-outline">
                Start a conversation
              </Link>
            </div>
          </motion.div>

          <motion.aside
            variants={itemVariants}
            className="paper-strip self-start rounded-[2rem] p-6 sm:p-8 lg:col-span-5 lg:mt-16"
          >
            <p className="mono text-[0.68rem] text-[color:var(--muted)]">
              Current note
            </p>
            <p className="mt-5 max-w-sm text-[1.9rem] leading-[1.02] text-[color:var(--ink)] sm:text-[2.35rem]">
              Final-year AI/ML student working across LLMs, agents, tooling,
              and product-facing systems.
            </p>
            <div className="frame-rule mt-8" />
            <dl className="editorial-list mt-6">
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Based
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">
                  {profile.location}
                </dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Moving
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">
                  {profile.upcoming}
                </dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Focus
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">
                  LLMs, agents, retrieval
                </dd>
              </div>
            </dl>
          </motion.aside>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="editorial-list mt-14"
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-4 py-5 lg:grid-cols-[140px_1fr_1fr]"
          >
            <p className="mono text-[0.64rem] text-[color:var(--muted)]">
              Current
            </p>
            <p className="text-lg text-[color:var(--ink)]">
              Improving the PaddlePaddle ecosystem and exploring RL for LLM tool
              use.
            </p>
            <p className="body-copy">
              Interested in research infrastructure, agent workflows, retrieval
              systems, and product-facing AI.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <motion.div variants={itemVariants}>
            <span className="kicker">Method</span>
            <h2 className="section-title mt-6 text-[color:var(--ink)]">
              Not a collection of demos. A point of view on building.
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="editorial-list">
            {strengths.map((strength) => (
              <article
                key={strength.title}
                className="grid gap-4 py-6 md:grid-cols-[220px_1fr]"
              >
                <p className="mono text-[0.64rem] text-[color:var(--accent)]">
                  {strength.title}
                </p>
                <p className="body-large">{strength.description}</p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="kicker">Selected work</span>
              <h2 className="section-title mt-6 max-w-5xl text-[color:var(--ink)]">
                Three projects with enough structure to matter.
              </h2>
            </div>
            <Link to="/projects" className="button-outline w-fit">
              Full project index
            </Link>
          </motion.div>

          <div className="editorial-list mt-10">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="grid gap-6 py-8 lg:grid-cols-[100px_220px_1fr_auto]"
              >
                <p className="mono pt-1 text-[0.64rem] text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="mono text-[0.64rem] text-[color:var(--accent)]">
                    {project.category}
                  </p>
                  <p className="mt-3 text-base text-[color:var(--muted)]">
                    {project.date}
                  </p>
                </div>
                <div>
                  <h3 className="display-line max-w-3xl text-[color:var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button-outline"
                    >
                      Repository
                    </a>
                  ) : (
                    <Link to="/projects" className="button-outline">
                      Project index
                    </Link>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="button-solid"
                    >
                      Live demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="page-wrap mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="paper-strip rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10"
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <div>
              <span className="kicker">Snapshot</span>
              <h2 className="display-line mt-6 text-[color:var(--ink)]">
                A quick read of the current arc.
              </h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-2">
              {homeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-[color:var(--line)] py-5 sm:pr-8"
                >
                  <p className="mono text-[0.64rem] text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl leading-tight text-[color:var(--ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
