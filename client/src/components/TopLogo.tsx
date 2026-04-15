// TopLogo is no longer used as a fixed element.
// Item logo is now embedded in each section via SectionTitle component.
// This component is kept for special sections (Hero, CompanyIntro) that don't use SectionTitle.

const ITEM_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image8_1a8f9bd6.png";

export default function TopLogo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <img
        src={ITEM_LOGO}
        alt="Item"
        className="h-6 opacity-50"
      />
    </div>
  );
}

export { ITEM_LOGO };
