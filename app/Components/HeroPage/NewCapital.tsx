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

const facts: {
  Icon: IconType;
  text: string;
  subHeading?: string;
  subText: string;
}[] = [
  {
    Icon: FaMapMarkedAlt,
    text: "230,000",
    subHeading: " Acre",
    subText: "Total New Capital Area",
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
    text: "8~10",
    subHeading: " Million",
    subText: "Expected Population",
  },
  {
    Icon: FaGraduationCap,
    text: "20+",
    subHeading: "",
    subText: "Education Institutions",
  },
  {
    Icon: FaChartBar,
    text: "100+",
    subHeading: "",
    subText: "Smart Services",
  },
];

export default function NewCapital() {
  return (
    <div className="w-screen bg-secondary-background py-20">
      <SectionHeading
        text="New Capital"
        subText="New Capital. New Start"
        Icon={GiObelisk}
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
    <div className="flex items-center gap-5 responsive-container">
      <Icon className="text-primary text-6xl" />
      <div className="">
        <h4 className="text-semi-muted-text text-2xl md:text-base lg:text-2xl leading-none">
          {subText}
        </h4>
        <h3 className="font-semibold text-4xl md:text-5xl lg:text-[56px] leading-none">
          {text}
          <span className="text-xl lg:text-2xl text-muted-text">
            {subHeading}
          </span>
        </h3>
      </div>
    </div>
  );
}
