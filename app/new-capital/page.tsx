import NewCapitalAtGlance from "../Components/About/NewCapitalAtGlance";
import CapitalPillars from "../Components/NewCapital/CapitalPillars";
import NewCapitalCap from "../Components/NewCapital/NewCapitalCap";
import RevealText from "../Components/RevealText";

export default function NewCapital() {
  return (
    <div>
      <div className="w-screen h-[100dvh] flex justify-center md:justify-start items-end px-3 py-2">
        <div>
          <RevealText delay={0.4} duration={0.6}>
            <h4 className="hero-subheading">
              Egypt's Future City - A World-Class Smart Hub
            </h4>
          </RevealText>
          <RevealText delay={0.2} duration={0.6}>
            <h1 className="hero-heading">New Capital</h1>
          </RevealText>
        </div>
      </div>
      <NewCapitalAtGlance />
      <NewCapitalCap />
      <CapitalPillars />
    </div>
  );
}
