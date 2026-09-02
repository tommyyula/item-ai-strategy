import BrandLogo from "@/components/BrandLogo";

/**
 * Thin wrapper kept for sections that want an inline ITEM mark of their own.
 * The artwork itself is `<BrandLogo />`, which swaps per theme; this component
 * only supplies the surrounding box. Page-level branding is `<TopBar />`.
 */
export default function TopLogo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <BrandLogo variant="mark" heightClass="h-6" className="opacity-70" />
    </div>
  );
}
