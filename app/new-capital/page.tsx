import NewCapitalAtGlance from "../Components/About/NewCapitalAtGlance";
import CapitalPillars from "../Components/NewCapital/CapitalPillars";
import NewCapitalCap from "../Components/NewCapital/NewCapitalCap";

export default function NewCapital() {
  return (
    <div>
      <div className="w-screen h-screen flex justify-start items-end px-3 py-2">
        <div>
          <h4 className="text-muted-text text-4xl">
            Egypt's Future City - A World-Class Smart Hub
          </h4>
          <h1 className="text-[112px] font-extrabold leading-none">
            New Capital
          </h1>
        </div>
      </div>
      <NewCapitalAtGlance />
      <NewCapitalCap />
      <CapitalPillars />
    </div>
  );
}
