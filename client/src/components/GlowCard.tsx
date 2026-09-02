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
    // Glow alpha rides on --glow, so the hover lift stays soft on a light
    // ground rather than blooming like neon.
    cyan: "hover:border-cyan-glow/50 hover:shadow-[0_0_30px_color-mix(in_oklch,var(--cyan-glow)_calc(15%*var(--glow)),transparent)]",
    purple: "hover:border-purple-glow/50 hover:shadow-[0_0_30px_color-mix(in_oklch,var(--purple-glow)_calc(15%*var(--glow)),transparent)]",
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
