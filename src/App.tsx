import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";
import { page } from "@/lib/motion";

const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Experience = lazy(() => import("@/pages/Experience"));
const Contact = lazy(() => import("@/pages/Contact"));

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={page} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Suspense key={location.pathname} fallback={<div className="wrap page-fallback" />}>
        <Routes location={location}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/projects" element={<Page><Projects /></Page>} />
          <Route path="/experience" element={<Page><Experience /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <MotionConfig reducedMotion="user">
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </MotionConfig>
    </BrowserRouter>
  );
}
