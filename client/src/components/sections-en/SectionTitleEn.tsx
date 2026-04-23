import AnimatedSection from "../AnimatedSection";

const ITEM_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image8_1a8f9bd6.png";

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  showLogo?: boolean;
}

export default function SectionTitleEn({
  number,
  title,
  subtitle,
  align = "left",
  showLogo = true,
}: SectionTitleProps) {
  return (
    <AnimatedSection className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {showLogo && (
        <div className={`mb-6 ${align === "center" ? "flex justify-center" : ""}`}>
          <img src={ITEM_LOGO} alt="Item" className="h-6 opacity-50" />
        </div>
      )}
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
