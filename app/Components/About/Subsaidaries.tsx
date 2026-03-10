import { FaDatabase, FaSitemap, FaTrain } from "react-icons/fa6";
import SectionHeading from "../sectionHeading";
import { IconType } from "react-icons";
import { MdOutlineElectricalServices } from "react-icons/md";
import { IoWaterSharp } from "react-icons/io5";

export default function Subsaidaries() {
  return (
    <div className="py-20">
      <div className="responsive-container">
        <SectionHeading
          text="ACUD Subsidiaries"
          subText="Due to our wide-ranging responsibilities, we formed strong alliances  with highly experienced and specialized partner companies to guarantee  service continuity and management through smart and sustainable systems  for the long term."
          Icon={FaSitemap}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 responsive-container py-12">
        <Card
          Icon={MdOutlineElectricalServices}
          title="ACES"
          subTitle="Schneider Electric"
          paragraph="Managing electricity, water, gas, and smart metering systems."
          date="Jul 2024 Est."
        />
        <Card
          Icon={IoWaterSharp}
          title="AC Water"
          subTitle="Xylem"
          paragraph="Managing electricity, water, gas, and smart metering systems."
          date="May 2025 Est."
        />
        <Card
          Icon={FaDatabase}
          title="WMC-EF"
          subTitle="Orange Egypt"
          paragraph="Managing the Capital Data Center and cloud services."
          date="Feb 2024 Est."
        />
        <Card
          Icon={FaTrain}
          title="ACTA"
          subTitle="RATP Dev"
          paragraph="Operating the Light Rail Train and transport systems."
          date="Sep 2024 Est."
        />
      </div>
    </div>
  );
}
function Card({
  Icon,
  title,
  subTitle,
  paragraph,
  date,
}: {
  Icon: IconType;
  title: string;
  subTitle: string;
  paragraph: string;
  date: string;
}) {
  return (
    <div className="bg-secondary-background py-8 px-6 space-y-2 ">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <Icon className="text-primary text-4xl" />
          <h3 className="text-3xl font-semibold">{title}</h3>
        </div>
        <p className="self-start text-muted-text text-2xl">{date}</p>
      </div>
      <div>
        <h3 className="font-medium text-2xl text-semi-muted-text">
          {subTitle}
        </h3>
        <p className="text-muted-text text-lg">{paragraph}</p>
      </div>
    </div>
  );
}
