import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import { profile, skills, values } from "@/content/site";
import { containerVariants, itemVariants } from "@/lib/motion";

const story = [
  "I’m Haoran Ji, an AI researcher-in-training focused on large language models, agents, and systems that still make sense once the prototype phase is over.",
  "I came into this work through mathematics, stayed for the leverage of machine learning, and kept leaning toward projects where research quality and product usefulness have to coexist.",
  "That balance is what I’m after now: technical depth that survives collaboration, deadlines, and real interfaces.",
];

export default function About() {
  return (
    <div className="pb-8 pt-10">
      <section className="page-wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1fr_0.85fr]"
        >
          <motion.div variants={itemVariants}>
            <PageIntro
              eyebrow="About"
              title="The person behind the projects."
              description="I value precision, clear thinking, and work that holds up under close examination."
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="paper-strip rounded-[2rem] p-6 sm:p-8"
          >
            <p className="mono text-[0.68rem] text-[color:var(--muted)]">
              Quick profile
            </p>
            <dl className="editorial-list mt-6">
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Name
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">{profile.name}</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Role
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">{profile.role}</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Base
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">{profile.location}</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="mono text-[0.64rem] text-[color:var(--muted)]">
                  Next
                </dt>
                <dd className="text-lg text-[color:var(--ink)]">{profile.upcoming}</dd>
              </div>
            </dl>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <motion.div variants={itemVariants}>
            <span className="kicker">Narrative</span>
            <h2 className="section-title mt-6 text-[color:var(--ink)]">
              The through-line is rigor, not trend chasing.
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="editorial-list">
            {story.map((paragraph, index) => (
              <div
                key={paragraph}
                className="grid gap-4 py-6 md:grid-cols-[90px_1fr]"
              >
                <p className="mono text-[0.64rem] text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="body-large">{paragraph}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1fr_1fr]"
        >
          <motion.div variants={itemVariants}>
            <span className="kicker">Capabilities</span>
            <div className="editorial-list mt-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="grid gap-2 py-4 sm:grid-cols-[1fr_auto]"
                >
                  <p className="text-2xl text-[color:var(--ink)]">{skill.name}</p>
                  <p className="mono self-end text-[0.64rem] text-[color:var(--muted)]">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="kicker">Working style</span>
            <div className="editorial-list mt-8">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="grid gap-4 py-5 md:grid-cols-[220px_1fr]"
                >
                  <h3 className="text-3xl text-[color:var(--ink)]">
                    {value.title}
                  </h3>
                  <p className="body-copy">{value.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
