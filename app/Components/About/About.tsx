import { AiFillInfoCircle } from "react-icons/ai";
import { RevealItem } from "../RevealItem";
import SectionHeading from "../sectionHeading";
import SlideUpText from "../SlideUpText";

export default function About() {
  return (
    <div>
      <SectionHeading
        text="About ACUD"
        subText="Adminstrative Capital for Urban Development"
        Icon={AiFillInfoCircle}
      />
      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-10 responsive-container py-20">
        <div>
          <SlideUpText className="text-4xl font-semibold">
            Our Mission
          </SlideUpText>
          <SlideUpText
            className="text-muted-text text-xl"
            delay={0.2}
            mode="word"
          >
            To shape a dynamic urban ecosystem that enhances quality of life,
            attracts global partnerships, and drives national progress. Through
            visionary planning and strategic execution, ACUD is redefining the
            urban landscape of Egypt - a dream come true.
          </SlideUpText>
        </div>
        <RevealItem delay={0.9} duration={0.8}>
          <img src="about/2.webp" alt="Egypt Flag" className="" />
        </RevealItem>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 responsive-container py-20">
        <img
          src="about/3.webp"
          alt="Egypt Flag"
          className="md:max-w-[50%] h-auto"
        />
        <div>
          <h3 className="text-4xl font-semibold">Our Vision</h3>
          <p className="text-muted-text text-xl">
            To pioneer the integration of advanced technology and human-centric
            design, creating an environment where sustainability, innovation,
            and prosperity thrive for both residents and investors.
          </p>
        </div>
      </div>
    </div>
  );
}
