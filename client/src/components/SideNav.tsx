import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "01", title: "Opening 开场" },
  { id: "evolution", label: "02", title: "Evolution 演进" },
  { id: "video", label: "03", title: "Demo 实录" },
  { id: "agents", label: "04", title: "Agents Agent化" },
  { id: "journey", label: "05", title: "Lessons 心路" },
  { id: "ontology", label: "06", title: "Ontology" },
  { id: "harness", label: "07", title: "Harness" },
  { id: "llm", label: "08", title: "LLM Strategy 选型" },
  { id: "hardware", label: "09", title: "Hardware 硬件" },
  { id: "physical", label: "10", title: "Physical AI 物理AI" },
  { id: "future", label: "11", title: "Vision 展望" },
];

export default function SideNav() {
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
      <div className="flex flex-col items-center gap-1 py-4 px-2 rounded-r-lg bg-deep-space/80 backdrop-blur-md border-r border-t border-b border-panel-border/30">
        {sections.map(({ id, label, title }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
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
            <div className="absolute left-full ml-3 px-2.5 py-1 rounded bg-panel-bg border border-panel-border text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-body">
              {title}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}
