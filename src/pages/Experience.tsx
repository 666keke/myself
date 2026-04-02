import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import { competitions, experience, leadership } from "@/content/site";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function Experience() {
  return (
    <div className="pb-8 pt-10">
      <section className="page-wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1fr_0.82fr]"
        >
          <motion.div variants={itemVariants}>
            <PageIntro
              eyebrow="Experience"
              title="Work that had to function under real constraints, not just read well on a slide."
              description="Professional internships, institute research, competitions, and leadership roles. Different contexts, same preference for clear structure and useful output."
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="paper-strip rounded-[2rem] p-6 sm:p-8"
          >
            <p className="mono text-[0.68rem] text-[color:var(--muted)]">
              Current arc
            </p>
            <div className="editorial-list mt-6">
              <div className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Mode
                </span>
                <span className="text-lg text-[color:var(--ink)]">
                  Product-minded AI and research implementation
                </span>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Focus
                </span>
                <span className="text-lg text-[color:var(--ink)]">
                  RL for LLMs, tooling, and applied ML systems
                </span>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Preference
                </span>
                <span className="text-lg text-[color:var(--ink)]">
                  High-agency work with technical accountability
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div variants={itemVariants}>
            <span className="kicker">Timeline</span>
            <h2 className="section-title mt-6 text-[color:var(--ink)]">
              Professional and research roles
            </h2>
          </motion.div>

          <div className="editorial-list mt-10">
            {experience.map((entry, index) => (
              <motion.article
                key={entry.company}
                variants={itemVariants}
                className="grid gap-6 py-8 lg:grid-cols-[90px_230px_1fr]"
              >
                <p className="mono pt-1 text-[0.64rem] text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="mono text-[0.64rem] text-[color:var(--accent)]">
                    {entry.type}
                  </p>
                  <p className="mt-3 text-lg text-[color:var(--ink)]">
                    {entry.duration}
                  </p>
                  <p className="mt-1 text-base text-[color:var(--muted)]">
                    {entry.location}
                  </p>
                </div>
                <div>
                  <h3 className="display-line text-[color:var(--ink)]">
                    {entry.role}
                  </h3>
                  <p className="mt-2 text-xl text-[color:var(--accent)]">
                    {entry.company}
                  </p>
                  <p className="body-copy mt-4 max-w-3xl">{entry.summary}</p>
                  <div className="mt-5 grid gap-3">
                    {entry.bullets.map((bullet) => (
                      <p key={bullet} className="body-copy">
                        {bullet}
                      </p>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
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
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-10 lg:grid-cols-[1fr_1fr]"
        >
          <motion.div variants={itemVariants}>
            <span className="kicker">Competitions</span>
            <div className="editorial-list mt-8">
              {competitions.map((competition) => (
                <article
                  key={competition.title}
                  className="grid gap-4 py-5 md:grid-cols-[140px_1fr]"
                >
                  <div>
                    <p className="mono text-[0.64rem] text-[color:var(--accent)]">
                      {competition.date}
                    </p>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {competition.award}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl text-[color:var(--ink)]">
                      {competition.title}
                    </h3>
                    <p className="mt-2 text-lg text-[color:var(--accent)]">
                      {competition.role}
                    </p>
                    <p className="body-copy mt-4">{competition.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="kicker">Leadership</span>
            <div className="editorial-list mt-8">
              {leadership.map((item) => (
                <article
                  key={item.organization}
                  className="grid gap-4 py-5 md:grid-cols-[160px_1fr]"
                >
                  <div>
                    <p className="mono text-[0.64rem] text-[color:var(--muted)]">
                      {item.duration}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl text-[color:var(--ink)]">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-lg text-[color:var(--accent)]">
                      {item.organization}
                    </p>
                    <p className="body-copy mt-4">{item.impact}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
