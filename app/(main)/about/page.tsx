import About from "../../Components/About/About";
import Chairman from "../../Components/About/Chairman";
import Milestones from "../../Components/About/Milestones";
import Subsaidaries from "../../Components/About/Subsaidaries";
import RevealText from "../../Components/RevealText";

export default function Page() {
  return (
    <div>
      <div className="w-screen h-[100dvh] flex justify-center md:justify-start items-end px-3 py-2">
        <div>
          <RevealText delay={0.5} duration={0.6}>
            <h4 className="hero-subheading">Building Egypt's New Capital</h4>
          </RevealText>
          <RevealText delay={0.3} duration={0.6}>
            <h1 className="hero-heading">ABOUT ACUD</h1>
          </RevealText>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-start flex-col-reverse md:flex-row py-20 responsive-container">
        <div className="">
          <h6 className="text-lg md:text-2xl text-semi-muted-text font-semibold">
            Our Story
          </h6>
          <h3 className="font-semibold text-3xl md:text-5xl">
            Leading Egypt's Urban Transformation
          </h3>
          <p className="text-muted-text md:text-xl">
            ACUD, founded in 2016, is the driving force behind Egypt's most
            ambitious urban development project - the New Capital. Our mission
            is to create a world-class, sustainable city that serves as the new
            political and administrative hub of Egypt.
          </p>
          <p className="text-muted-text md:text-xl mt-5">
            We are committed to excellence, innovation, and sustainable
            development, working with global partners to build a city that meets
            the highest international standards.
          </p>
        </div>
        <img src="/about/1.webp" alt="New Capital" className="max-w-[40%]" />
      </div>
      <About />
      <Milestones />
      <Chairman />
      <Subsaidaries />
    </div>
  );
}
