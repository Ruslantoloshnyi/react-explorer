import Link from "next/link";

function MobileMenu() {
  return (
    <div className="header-holder">
      <div className="search-mobile" style={{ display: "block" }}>
        <a rel="nofollow">
          <i className="icon_search" />
        </a>
      </div>

      <nav className="header-nav">
        <div className="header-nav__inner">
          <ul className="header-menu-list">
            <li header-menu-item>
              <Link href="/">Home</Link>
            </li>
            <li header-menu-item>
              <Link href="/Blog">Blog</Link>
            </li>
            <li header-menu-item>
              <Link href="/Categories">Categories</Link>
            </li>
            <li header-menu-item>
              <Link href="AboutUs">About Us</Link>
            </li>
            <li header-menu-item>
              <Link href="ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <a href="/" className="logo" />
        <a href="#" className="device-menu">
          <div className="device-menu__inner">
            <span />
            <span />
            <span />
          </div>
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
