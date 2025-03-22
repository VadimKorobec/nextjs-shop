"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="bg-slate-400  ">
        <ul className="flex items-center gap-40 mr-8 ml-14 pt-2 pb-2">
          <li>
            <Link href="/" className={pathname === "/" ? "text-amber-50" : ""}>
              Home Page
            </Link>
          </li>
          <div className="flex gap-3.5">
            <li>
              <Link
                href="/products/puma"
                className={pathname === "/products/puma" ? "text-amber-50" : ""}
              >
                Puma
              </Link>
            </li>
            <li>
              <Link
                href="/products/nice"
                className={pathname === "/products/nice" ? "text-amber-50" : ""}
              >
                Nice
              </Link>
            </li>
            <li>
              <Link
                href="/products/adidas"
                className={
                  pathname === "/products/adidas" ? "text-amber-50" : ""
                }
              >
                Adidas
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
