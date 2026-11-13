import PageHead from "@/components/PageHead";
import { Reveal, RevealItem } from "@/components/Reveal";
import FlipText from "@/components/block/flip-text";
import { profile, skills, values } from "@/content/site";

const story = [
  "I’m Haoran Ji, an AI researcher-in-training focused on large language models, agents, and systems that still make sense once the prototype phase is over.",
  "I came into this work through mathematics, stayed for the leverage of machine learning, and kept leaning toward projects where research quality and product usefulness have to coexist.",
  "That balance is what I’m after now: technical depth that survives collaboration, deadlines, and real interfaces.",
];

const facts = [
  { term: "Role", value: profile.role },
  { term: "Base", value: profile.location },
  { term: "Next", value: profile.upcoming },
  { term: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <>
      <PageHead eyebrow="About" title="The person behind the projects.">
        <p className="lede">I value precision, clear thinking, and work that holds up under close examination.</p>
      </PageHead>

      <section className="wrap section about">
        <Reveal className="about__story">
          {story.map((paragraph, index) => (
            <RevealItem as="p" key={index} className={index === 0 ? "about__lead" : "lede"}>
              {paragraph}
            </RevealItem>
          ))}
        </Reveal>

        <Reveal as="div" className="facts">
          {facts.map((fact) => (
            <RevealItem key={fact.term} className="facts__row">
              <span className="mono">{fact.term}</span>
              {fact.href ? <a href={fact.href} className="facts__link">{fact.value}</a> : <span>{fact.value}</span>}
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <section className="wrap section skills">
        <h2 className="h2 skills__title">
          What I’m <FlipText className="skills__flip" duration={3.6}>good at.</FlipText>
        </h2>
        <Reveal as="ul" className="skills__list">
          {skills.map((skill) => (
            <RevealItem as="li" key={skill.name} className="skills__item">
              <span>{skill.name}</span>
              <span className="skills__meter" data-level={skill.level} aria-label={skill.level}>
                <i /><i /><i />
              </span>
              <span className="mono">{skill.level}</span>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <section className="wrap section">
        <h2 className="h2">How I work</h2>
        <Reveal className="values">
          {values.map((value, index) => (
            <RevealItem key={value.title} className="values__item">
              <span className="mono values__n">0{index + 1}</span>
              <h3 className="h3">{value.title}</h3>
              <p className="body">{value.description}</p>
            </RevealItem>
          ))}
        </Reveal>
      </section>
    </>
  );
}
