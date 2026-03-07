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
      <div className="flex flex-col md:flex-row items-end justify-center md:justify-between gap-5">
        <div className="w-fit grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-2">
          <Link005 className="w-fit" href="/">
            Home
          </Link005>
          <Link005 className="w-fit" href="/about">
            About ACUD
          </Link005>
          <Link005 className="w-fit" href="/new-capital">
            New Capital
          </Link005>
          <Link005 className="w-fit" href="/careers">
            Careers
          </Link005>
          <Link005 className="w-fit" href="/media-center">
            Media Center
          </Link005>
          <Link005 className="w-fit" href="/parteners">
            Parteners
          </Link005>
          <Link005 className="w-fit" href="/contact">
            Contact Us
          </Link005>
          <Link005 className="w-fit" href="/csr">
            CSR
          </Link005>
          <Link005 className="w-fit" href="/privacy-policy">
            Privacy Policy
          </Link005>
        </div>
        <div className="flex justify-between w-full md:justify-start md:w-fit gap-3">
          <Link
            href="https://maps.app.goo.gl/PzFXSeqAxBDW8ZnF8"
            target="_blank"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <FaLocationDot />
          </Link>
          <Link
            href="https://www.linkedin.com/company/administrative-capital-for-urban-development/"
            target="_blank"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="https://x.com/ACUD_Egypt"
            target="_blank"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <BsTwitterX />
          </Link>
          <Link
            href="https://www.instagram.com/acud.eg/"
            target="_blank"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/ACUDEGY/"
            target="_blank"
            className="text-2xl hover:text-text text-semi-muted-text transition-all"
          >
            <FiFacebook />
          </Link>
          <Link
            href="https://www.youtube.com/@AdministrativeCapital"
            target="_blank"
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
