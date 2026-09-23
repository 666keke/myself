import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/content/site";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(247,248,244,0.94)] backdrop-blur-xl">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-wrap"
      >
        <div className={isScrolled ? "py-3 transition-all duration-300" : "py-5 transition-all duration-300"}>
          <div className="flex items-center justify-between gap-6">
            <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Haoran Ji, home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--ink)] font-semibold text-white">
                {profile.initials}
              </span>
              <span className="text-[0.96rem] font-bold tracking-[-0.04em] text-[color:var(--ink)]">
                {profile.name}<span className="text-[color:var(--accent)]">.</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {({ isActive }) => (
                    <span className="nav-link" data-active={isActive}>
                      {item.name}
                    </span>
                  )}
                </NavLink>
              ))}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="button-solid px-5 py-2.5"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] md:hidden"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                id="mobile-menu"
                className="overflow-hidden md:hidden"
              >
                <div className="frame-rule mt-5" />
                <div className="grid gap-3 py-5">
                  {navItems.map((item) => (
                    <NavLink key={item.path} to={item.path}>
                      {({ isActive }) => (
                        <span
                          className="block py-2 text-base"
                          style={{
                            color: isActive ? "var(--ink)" : "var(--muted)",
                          }}
                        >
                          {item.name}
                        </span>
                      )}
                    </NavLink>
                  ))}
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-outline mt-2 w-fit"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
}
