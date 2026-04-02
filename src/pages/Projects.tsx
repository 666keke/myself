import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { featuredProjects, labProjects } from "@/content/site";
import { containerVariants, itemVariants } from "@/lib/motion";

const archive = [
  ...featuredProjects,
  ...labProjects.map((project) => ({
    ...project,
    category: "Research",
    link: "",
    demo: "",
  })),
];

const categories = ["All", ...new Set(archive.map((item) => item.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = archive.filter((project) => {
    const query = searchTerm.trim().toLowerCase();
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      query.length === 0 ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-8 pt-10">
      <section className="page-wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1fr_0.8fr]"
        >
          <motion.div variants={itemVariants}>
            <PageIntro
              eyebrow="Projects"
              title="An archive of systems work, research experiments, and applied analysis."
              description="Less gallery, more index. The useful question is what each project had to solve and how much structure it required."
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="paper-strip rounded-[2rem] p-6 sm:p-8"
          >
            <label className="block">
              <span className="mono text-[0.68rem] text-[color:var(--muted)]">
                Search
              </span>
              <div className="relative mt-4">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Title, topic, or stack"
                  className="w-full rounded-full border border-[color:var(--line)] bg-[rgba(249,244,236,0.72)] py-3 pl-11 pr-4 text-[color:var(--ink)] outline-none transition focus:border-[color:var(--line-strong)]"
                />
              </div>
            </label>
            <div className="mt-6">
              <p className="mono text-[0.68rem] text-[color:var(--muted)]">
                Filters
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "button-solid px-5 py-2.5"
                        : "button-outline px-5 py-2.5"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-wrap mt-20">
        <motion.div
          key={`${selectedCategory}:${searchTerm}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="editorial-list">
            {filteredProjects.length === 0 && (
              <motion.div variants={itemVariants} className="py-10">
                <h2 className="display-line text-[color:var(--ink)]">
                  No matching projects.
                </h2>
                <p className="body-copy mt-4">
                  Try a different term or broaden the filter.
                </p>
              </motion.div>
            )}

            {filteredProjects.map((project, index) => (
              <motion.article
                key={`${project.title}-${project.date}`}
                variants={itemVariants}
                className="grid gap-6 py-8 lg:grid-cols-[90px_220px_1fr_auto]"
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
                  <h2 className="display-line max-w-4xl text-[color:var(--ink)]">
                    {project.title}
                  </h2>
                  <p className="body-copy mt-4 max-w-4xl">
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
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  ) : (
                    <span className="tag">Archive only</span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="button-solid"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
