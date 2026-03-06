import { GiObelisk } from "react-icons/gi";
import SectionHeading from "../sectionHeading";
import { IconType } from "react-icons";
import {
  FaMapMarkedAlt,
  FaChartPie,
  FaGlobeAmericas,
  FaUsers,
  FaGraduationCap,
  FaChartBar,
} from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BiBarChartSquare } from "react-icons/bi";

const facts: {
  Icon: IconType;
  text: string;
  subHeading?: string;
  subText: string;
}[] = [
  {
    Icon: FaMapMarkedAlt,
    text: "40,000",
    subHeading: " Acre",
    subText: "Area Phase 1",
  },
  {
    Icon: FaChartPie,
    text: "70",
    subHeading: "%",
    subText: "Phase 1 Completion",
  },
  {
    Icon: FaGlobeAmericas,
    text: "1300+",
    subHeading: " Acre",
    subText: "Green & Sustainable Space",
  },
  {
    Icon: FaUsers,
    text: "25,000",
    subHeading: "",
    subText: "Families",
  },
  {
    Icon: FaGraduationCap,
    text: "12,000",
    subHeading: "",
    subText: "Students",
  },
  {
    Icon: HiMiniComputerDesktop,
    text: "50,000",
    subHeading: "",
    subText: "Employees",
  },
];

export default function NewCapitalAtGlance() {
  return (
    <div className="w-screen bg-secondary-background py-20">
      <SectionHeading
        text="New Capital At a Glance"
        subText="Facts & Figures"
        Icon={BiBarChartSquare}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-x-20 md:gap-x-20 lg:gap-x-40 gap-y-10 w-fit mx-auto my-20 px-5">
        {facts.map((fact, index) => (
          <Card key={index} {...fact} />
        ))}
      </div>
    </div>
  );
}

function Card({
  Icon,
  text,
  subText,
  subHeading,
}: {
  Icon: IconType;
  text: string;
  subText: string;
  subHeading?: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <Icon className="text-primary text-6xl" />
      <div className="">
        <h4 className="text-semi-muted-text text-2xl md:text-base lg:text-2xl leading-none">
          {subText}
        </h4>
        <h3 className="font-semibold text-[56px] md:text-5xl lg:text-[56px] leading-none">
          {text}
          <span className="text-xl lg:text-2xl text-muted-text">
            {subHeading}
          </span>
        </h3>
      </div>
    </div>
  );
}
