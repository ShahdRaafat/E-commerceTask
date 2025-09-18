import Link from "next/link";
import { ShoppingCart } from "lucide-react";
function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4 md:gap-8 xl:gap-12">
        <li>
          <Link
            href="/"
            className={`hover:text-primary-500 transition-colors 
              }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className={`hover:text-primary-500 transition-colors 
              }`}
          >
            <ShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
