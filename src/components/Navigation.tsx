import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Home, Mail, User } from "lucide-react";
import { profile } from "@/content/site";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Contact", path: "/contact", icon: Mail },
];

function isActive(pathname: string, path: string) {
  return path === "/" ? pathname === "/" : pathname.startsWith(path);
}

export default function Navigation() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="nav-top" data-scrolled={scrolled}>
        <div className="wrap nav-top__inner">
          <Link to="/" className="brand" aria-label={`${profile.name}, home`}>
            <span className="brand__mark">{profile.initials}</span>
            <span className="brand__name">{profile.name}</span>
          </Link>

          <nav className="nav-pill" aria-label="Main">
            {navItems.map((item) => {
              const active = isActive(pathname, item.path);
              return (
                <NavLink key={item.path} to={item.path} className={cn("nav-pill__item", active && "is-active")}>
                  {active && <motion.span layoutId="nav-active" className="nav-pill__bg" transition={spring} />}
                  <span className="relative">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          <a href={`mailto:${profile.email}`} className="nav-status">
            <span className="dot-live" aria-hidden="true" />
            Open to roles
          </a>
        </div>
      </header>

      <nav className="nav-dock" aria-label="Main (mobile)">
        {navItems.map((item) => {
          const active = isActive(pathname, item.path);
          const Icon = item.icon;
          return (
            <NavLink key={item.path} to={item.path} className={cn("nav-dock__item", active && "is-active")} aria-label={item.name}>
              {active && <motion.span layoutId="dock-active" className="nav-dock__bg" transition={spring} />}
              <Icon className="relative" size={19} strokeWidth={1.9} aria-hidden="true" />
              <span className="relative nav-dock__label">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
