"use client";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuIcon } from "@/components/ui/skiper-ui/skiper99";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const CUBIC_BEIZER = cubicBezier(0.6, 0.05, 0, 0.9);
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
          "": scrolled,
        },
      )}
    >
      <div className="flex items-center justify-between ">
        <Link href="/">
          <img src="/Logo.svg" alt="logo" className="h-20 cursor-pointer" />
        </Link>
        {/*<div className="text-2xl flex items-center gap-10 pr-10 font-medium transition-all">
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
        </div>*/}
        <button
          onClick={() => setToggle(!toggle)}
          className="fixed top-10 right-10 z-120"
        >
          <MenuIcon isToggled={toggle} />
        </button>
        <motion.div
          className="bg-background fixed inset-0 gap-1 flex flex-col items-center justify-center text-[calc(1.5em+6vw)] text-nowrap font-extrabold"
          variants={{
            hidden: { y: "-100%" },
            visible: { y: "0" },
          }}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: CUBIC_BEIZER }}
        >
          <Link
            href="/"
            className="relative inline-block group"
            onClick={(e) => setToggle(false)}
          >
            <TextRoll duration={0.8}>HOME</TextRoll>
            <p className="hidden md:block absolute left-full transition-all duration-800 group-hover:translate-x-7 ml-2 top-1/2 -translate-y-1/2 font-mono text-2xl font-medium text-muted-text">
              ACUD
            </p>
          </Link>
          <Link
            href="/about"
            className="relative inline-block group"
            onClick={(e) => setToggle(false)}
          >
            <TextRoll duration={0.8}>ABOUT</TextRoll>
            <p className="hidden md:block absolute right-full transition-all duration-800 group-hover:-translate-x-7 ml-2 top-1/2 -translate-y-1/2 font-mono text-2xl font-medium text-muted-text">
              WHO WE ARE
            </p>
          </Link>
          <Link
            href="/new-capital"
            className="relative inline-block group"
            onClick={(e) => setToggle(false)}
          >
            <TextRoll duration={0.8}>NEW-CAPITAL</TextRoll>
            <p className="hidden md:block absolute left-full transition-all duration-800 group-hover:translate-x-7 ml-2 top-1/2 -translate-y-1/2 font-mono text-2xl font-medium text-muted-text">
              MEGA PROJECT
            </p>
          </Link>
          <Link
            href="/parteners"
            className="relative inline-block group"
            onClick={(e) => setToggle(false)}
          >
            <TextRoll duration={0.8}>PARTENERS</TextRoll>
            <p className="hidden md:block absolute right-full transition-all duration-800 group-hover:-translate-x-7 ml-2 top-1/2 -translate-y-1/2 font-mono text-2xl font-medium text-muted-text">
              SUCCESS
            </p>{" "}
          </Link>
          <Link href="/contact" className="" onClick={(e) => setToggle(false)}>
            <TextRoll duration={0.8}>CONTACT-US</TextRoll>
          </Link>
        </motion.div>
        {/*<div className="space-y-0">
          <Link href={"/"} className="px-3 w-full h-fit bg-white">
            <TextRoll className="text-2xl font-bold text-semi-muted-text">
              HOME
            </TextRoll>
          </Link>
          <Link href={"/"} className="px-3">
            <TextRoll className="text-2xl font-bold text-semi-muted-text">
              HOME
            </TextRoll>
          </Link>
          <Link href={"/"} className="px-3">
            <TextRoll className="text-2xl font-bold text-semi-muted-text">
              HOME
            </TextRoll>
          </Link>
          <Link href={"/"} className="px-3">
            <TextRoll className="text-2xl font-bold text-semi-muted-text">
              HOME
            </TextRoll>
          </Link>
          <Link href={"/"} className="px-3">
            <TextRoll className="text-2xl font-bold text-semi-muted-text">
              HOME
            </TextRoll>
          </Link>
        </div>*/}
      </div>
      {/*<div className="w-[98vw] h-0.5 bg-muted-text mx-auto my-3"></div>*/}
    </div>
  );
}
