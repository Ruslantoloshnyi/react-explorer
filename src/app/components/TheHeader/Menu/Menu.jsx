import Link from "next/link";

function Menu() {
  return (
    <ul className="header-menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Blog">Blog</Link>
      </li>
      <li>
        <Link href="/Categories">Categories</Link>
        <ul>
          <li>
            <Link href="Travel">Travel</Link>
          </li>
          <li>
            <Link href="Stories">Stories</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/AboutUs">About Us</Link>
      </li>
      <li>
        <Link href="/Contacts">Contacts</Link>
      </li>
    </ul>
  );
}

export default Menu;
