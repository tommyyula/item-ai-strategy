const ITEM_LOGO = "https://unisco.sfo3.digitaloceanspaces.com/design-item-com/svg/item-logo-fullcolor-whitetxt.svg";

export default function TopLogo() {
  return (
    <div className="fixed top-5 left-5 lg:left-20 z-40">
      <img
        src={ITEM_LOGO}
        alt="Item"
        className="h-7 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
      />
    </div>
  );
}
