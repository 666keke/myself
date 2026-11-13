import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, Github, Search, X } from "lucide-react";
import PageHead from "@/components/PageHead";
import { featuredProjects, labProjects } from "@/content/site";
import { ease, spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const archive = [
  ...featuredProjects,
  ...labProjects.map((project) => ({ ...project, category: "Research", link: "", demo: "" })),
];
const categories = ["All", ...new Set(archive.map((item) => item.category))];

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = archive.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))),
  );

  return (
    <>
      <PageHead eyebrow="Projects" title="Selected work, built to be useful.">
        <p className="lede">AI systems, research experiments, and applied analysis, each shaped by a practical problem.</p>
      </PageHead>

      <section className="wrap filters" aria-label="Filter projects">
        <LayoutGroup id="filters">
          <div className="seg" role="tablist" aria-label="Category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={cn("seg__item", category === c && "is-active")}
              >
                {category === c && <motion.span layoutId="seg-active" className="seg__bg" transition={spring} />}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
        <label className="search">
          <Search size={16} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, topic, or stack"
            aria-label="Search projects"
          />
          <AnimatePresence>
            {query && (
              <motion.button
                type="button"
                className="search__clear"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.16 }}
              >
                <X size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </label>
      </section>

      <section className="wrap projects">
        <p className="mono projects__count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
        <motion.ul layout className="projects__grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => (
              <motion.li
                layout
                key={p.title}
                className="project"
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18, ease: ease.inOut } }}
                transition={{ layout: spring, duration: 0.4, ease: ease.out }}
              >
                <div className="project__top">
                  <span className="mono">{p.category}</span>
                  <span className="mono">{p.date}</span>
                </div>
                <h2 className="h3">{p.title}</h2>
                <p className="body">{p.description}</p>
                <div className="project__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="project__links">
                  {p.link && (
                    <a className="link-arrow" href={p.link} target="_blank" rel="noreferrer">
                      <Github size={15} /> <span className="u">Repository</span>
                    </a>
                  )}
                  {p.demo && (
                    <a className="link-arrow" href={p.demo} target="_blank" rel="noreferrer">
                      <span className="u">Live demo</span> <ArrowUpRight size={15} />
                    </a>
                  )}
                  {!p.link && !p.demo && <span className="mono project__private">Not public yet</span>}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div className="empty" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <p className="h3">Nothing matches “{query}”.</p>
              <button type="button" className="btn btn-line" onClick={() => { setQuery(""); setCategory("All"); }}>
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
