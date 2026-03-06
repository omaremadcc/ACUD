import { AiFillTrophy } from "react-icons/ai";
import SectionHeading from "../sectionHeading";

export default function Awards() {
  return (
    <div className="my-15">
      <SectionHeading
        text="Awards"
        subText="Celebrating Achievements and International Recognition for ACUD"
        Icon={AiFillTrophy}
      />
      <div className="flex items-center justify-center flex-col gap-5 lg:flex-row lg:gap-20 xl:gap-35 my-20">
        {["Big5.png", "Global.png", "LivCom.png", "Tier3.png"].map(
          (img, index) => (
            <div
              key={index}
              className="size-36 bg-semi-muted-text mask mask-center mask-no-repeat mask-contain"
              style={{ maskImage: `url('/awards/${img}')` }}
            />
          ),
        )}
      </div>
    </div>
  );
}
