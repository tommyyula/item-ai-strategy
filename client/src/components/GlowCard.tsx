import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple";
  hover?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
  hover = true,
}: GlowCardProps) {
  const glowStyles = {
    cyan: "hover:border-cyan-glow/50 hover:shadow-[0_0_30px_oklch(0.82_0.15_195/0.15)]",
    purple: "hover:border-purple-glow/50 hover:shadow-[0_0_30px_oklch(0.55_0.25_290/0.15)]",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={`
        bg-panel-bg/80 backdrop-blur-md border border-panel-border/40 rounded-lg
        transition-all duration-500
        ${hover ? glowStyles[glowColor] : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
