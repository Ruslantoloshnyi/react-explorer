import Menu from "./Menu/Menu";

function TheHeader() {
  return (
    <header>
      <div className="header_wrapper">
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
