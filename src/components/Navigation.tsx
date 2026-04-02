import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`page-wrap transition-all duration-300 ${
          isScrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div className="paper-strip rounded-[2rem] px-5 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-6">
            <Link to="/" className="min-w-0">
              <p className="mono text-[0.68rem] text-[color:var(--muted)]">
                Portfolio
              </p>
              <div className="mt-2 flex items-baseline gap-4">
                <span className="text-3xl leading-none text-[color:var(--ink)]">
                  {profile.initials}
                </span>
                <span className="text-lg text-[color:var(--ink)]">
                  {profile.name}
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 pt-2 md:flex">
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
                className="button-outline px-5 py-2.5"
              >
                GitHub
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] md:hidden"
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
