import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useT } from "@/i18n/runtime";

/**
 * Section ids match the `id` attribute on each deck section and must not
 * change. `key` points at the translated label in `common.nav.*`.
 */
const sections = [
  { id: "hero", key: "hero", label: "00" },
  { id: "company", key: "company", label: "01" },
  { id: "evolution", key: "evolution", label: "02" },
  { id: "video", key: "video", label: "03" },
  { id: "agents", key: "agents", label: "04" },
  { id: "agent-examples", key: "agentExamples", label: "05" },
  { id: "physical", key: "physical", label: "06" },
  { id: "journey", key: "journey", label: "07" },
  { id: "architecture", key: "architecture", label: "08" },
  { id: "ontology", key: "ontology", label: "09" },
  { id: "harness", key: "harness", label: "10" },
  { id: "llm", key: "llm", label: "11" },
  { id: "hardware", key: "hardware", label: "12" },
  { id: "future", key: "future", label: "13" },
];

export default function SideNav() {
  const t = useT("common.nav");
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
          setActive(sorted[0].target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-0 h-screen z-50 hidden lg:flex flex-col items-center justify-center w-16 gap-1">
      <div className="flex flex-col items-center gap-1 py-4 px-2 rounded-r-lg bg-deep-space/80 backdrop-blur-md border-r border-t border-b border-border">
        {sections.map(({ id, key, label }) => {
          const title = t(key);
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={title}
              className="group relative flex items-center justify-center w-10 h-10 rounded-md transition-all duration-300"
              title={title}
            >
              {active === id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-md bg-cyan-glow/15 border border-cyan-glow/40"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 text-xs font-mono font-medium transition-colors duration-300 ${
                  active === id
                    ? "text-cyan-glow"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {label}
              </span>
              <span className="absolute left-full ml-3 px-2.5 py-1 rounded bg-panel-bg border border-panel-border text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-body">
                {title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
