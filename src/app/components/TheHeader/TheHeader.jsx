import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";

function TheHeader() {
  return (
    <header>
      <div className="header_wrapper">
        <MobileMenu></MobileMenu>
        <div className="header-heading">
          <div className="header-heading__head">Explorer</div>
          <p className="header-heading__subhead">Webflow blog template</p>
        </div>
        <Menu></Menu>
      </div>
    </header>
  );
}

export default TheHeader;
