import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import RevealText from "./RevealText";

export default function Navbar() {
  return (
    <div className="px-3 py-5 fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between">
        <RevealText delay={4.2} duration={0.6}>
          <Link href="/">
            <img src="/Logo.svg" alt="logo" className="h-20 cursor-pointer" />
          </Link>
        </RevealText>
        <div className="text-2xl flex items-center gap-10 pr-10 font-medium transition-all">
          <RevealText delay={4.4} duration={0.6}>
            <Link
              className="cursor-pointer hover:text-white transition-all"
              href="/"
            >
              Home
            </Link>
          </RevealText>
          <RevealText delay={4.6} duration={0.6}>
            <Link
              className="cursor-pointer hover:text-white transition-all"
              href="/about"
            >
              About ACUD
            </Link>
          </RevealText>
          <RevealText delay={4.8} duration={0.6}>
            <Link
              className="cursor-pointer hover:text-white transition-all"
              href="/newcapital"
            >
              New Capital
            </Link>
          </RevealText>
          <RevealText delay={5.0} duration={0.6}>
            <Link
              className="cursor-pointer hover:text-white transition-all"
              href="/parteners"
            >
              Parteners
            </Link>
          </RevealText>
          <RevealText delay={5.2} duration={0.6}>
            <Link
              className="cursor-pointer hover:text-white transition-all"
              href="/contact"
            >
              Contact Us
            </Link>
          </RevealText>
          <RevealText delay={5.4} duration={0.6}>
            <CiGlobe className="cursor-pointer hover:text-white transition-all" />
          </RevealText>
        </div>
      </div>
      {/*<div className="w-[98vw] h-0.5 bg-muted-text mx-auto my-3"></div>*/}
    </div>
  );
}
