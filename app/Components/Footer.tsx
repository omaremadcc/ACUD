import { Link005 } from "@/components/ui/skiper-ui/skiper40";
import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="w-screen bg-secondary-background px-5 py-5">
      <img src="/Logo.svg" alt="logo" className="w-60 mb-20" />
      <div className="flex items-end justify-between">
        <div className="w-fit grid grid-cols-3 gap-x-4 gap-y-2">
          <Link005 className="w-fit" href="/">
            Home
          </Link005>
          <Link005 className="w-fit" href="/">
            About ACUD
          </Link005>
          <Link005 className="w-fit" href="/">
            New Capital
          </Link005>
          <Link005 className="w-fit" href="/">
            Careers
          </Link005>
          <Link005 className="w-fit" href="/">
            Media Center
          </Link005>
          <Link005 className="w-fit" href="/">
            Parteners
          </Link005>
          <Link005 className="w-fit" href="/">
            Contact Us
          </Link005>
          <Link005 className="w-fit" href="/">
            CSR
          </Link005>
          <Link005 className="w-fit" href="/">
            Privacy Policy
          </Link005>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <FaLocationDot />
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <BsTwitterX />
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <FiFacebook />
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <AiFillYoutube />
          </Link>
        </div>
      </div>
      <div className="w-full h-px bg-muted-text mt-4" />
      <div className="flex justify-between text-muted-text">
        <h6>© 2026. ACUD </h6>
        <h6>ALL RIGHTS RESERVED</h6>
      </div>
    </div>
  );
}
