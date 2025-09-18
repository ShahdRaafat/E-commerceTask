import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="border-b font-bold border-gray-300 flex justify-between items-center  px-4 py-2 sm:px-6 sm:py-3 max-w-7xl mx-auto">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
