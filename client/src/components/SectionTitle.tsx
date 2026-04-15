import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  number,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <AnimatedSection className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <div className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-sm text-cyan-glow/70 tracking-widest uppercase">
          {number}
        </span>
        <div className="h-px w-12 bg-gradient-to-r from-cyan-glow/60 to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
