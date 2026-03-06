import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="px-3 py-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img src="/Logo.svg" alt="logo" className="h-20 cursor-pointer" />
        </Link>
        <div className="text-2xl flex items-center gap-10 pr-10 font-medium transition-all">
          <Link
            className="cursor-pointer hover:text-white transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer hover:text-white transition-all"
            href="/about"
          >
            About ACUD
          </Link>
          <Link
            className="cursor-pointer hover:text-white transition-all"
            href="/newcapital"
          >
            New Capital
          </Link>
          <Link
            className="cursor-pointer hover:text-white transition-all"
            href="/parteners"
          >
            Parteners
          </Link>
          <Link
            className="cursor-pointer hover:text-white transition-all"
            href="/contact"
          >
            Contact Us
          </Link>
          <CiGlobe className="cursor-pointer hover:text-white transition-all" />
        </div>
      </div>
      <div className="w-[98vw] h-0.5 bg-muted-text mx-auto my-3"></div>
    </div>
  );
}
