import { BiGlobe } from "react-icons/bi";
import RevealText from "../Components/RevealText";
import { FaIndustry } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function Parteners() {
  return (
    <>
      <div className="w-screen h-[100dvh] flex flex-col justify-end items-center gap-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
          <div className="flex flex-col items-center justify-center">
            <BiGlobe className="text-primary text-2xl md:text-4xl" />
            <h3 className="text-6xl font-semibold">20+</h3>
            <p className="text-muted-text text-2xl">Global Parteners</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaIndustry className="text-primary text-2xl md:text-4xl" />
            <h3 className="text-6xl font-semibold">15+</h3>
            <p className="text-muted-text text-2xl">Industries Covered</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <AiOutlineFundProjectionScreen className="text-primary text-2xl md:text-4xl" />
            <h3 className="text-6xl font-semibold">50+</h3>
            <p className="text-muted-text text-2xl">Joint Projects</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RevealText delay={0.6} duration={0.6}>
            <h3 className="hero-subheading">
              Building the future together with world-class partners
            </h3>
          </RevealText>
          <RevealText delay={0.4} duration={0.6}>
            <h1 className="hero-heading">PARTENERS</h1>
          </RevealText>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 responsive-container text-center">
        <h2 className="text-6xl font-semibold">Interested in Vendorship?</h2>
        <p className="text-4xl text-muted-text font-medium">
          Join us in building Egypt's future. We're always looking for
          innovative partners who share our vision for excellence and
          sustainability.
        </p>
        <button className="my-5 px-5 py-2 rounded-full text-4xl font-medium border-2 border-text cursor-pointer hover:bg-text hover:text-white transition-all duration-300">
          Become a Vendor
        </button>
      </div>
    </>
  );
}
