import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        width="80"
        height="80"
        quality={100}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20"
      ></Image>
    </Link>
  );
}

export default Logo;
