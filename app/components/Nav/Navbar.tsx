import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import CartIcon from "./CartIcon";
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
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
