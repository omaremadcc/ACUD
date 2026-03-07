"use client";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={clsx(
        "px-3 py-5 fixed top-0 left-0 w-full transition-all duration-400 z-100",
        {
          "bg-secondary-background/50 duration-800": scrolled,
        },
      )}
    >
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
            href="/new-capital"
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
      {/*<div className="w-[98vw] h-0.5 bg-muted-text mx-auto my-3"></div>*/}
    </div>
  );
}
