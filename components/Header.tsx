import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/products/puma">Puma</Link>
        </li>
        <li>
          <Link href="/products/nice">Nice</Link>
        </li>
        <li>
          <Link href="/products/adidas">Adidas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
