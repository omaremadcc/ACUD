import { AiFillFlag } from "react-icons/ai";
import SectionHeading from "../sectionHeading";
import { FaFileSignature, FaRoad } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { FiCpu } from "react-icons/fi";

const milestones = [
  {
    year: "2016",
    title: "Foundation",
    description: "ACUD established to lead the New Capital development",
    side: "right",
    Icon: FaFileSignature,
  },
  {
    year: "2017",
    title: "Construction Begins",
    description: "Ground-breaking ceremony for Phase 1",
    side: "left",
    Icon: LuConstruction,
  },
  {
    year: "2020",
    title: "Major Milestones",
    description: "Key infrastructure projects completed",
    side: "right",
    Icon: FaRoad,
  },
  {
    year: "2023",
    title: "Government Relocation",
    description: "Ministries begin moving to the New Capital",
    side: "left",
    Icon: FaUniversity,
  },
  {
    year: "2024",
    title: "Phase 1 Completion",
    description: "70% of Phase 1 development complete",
    side: "right",
    Icon: MdLocationCity,
  },
  {
    year: "2025",
    title: "Smart City Evolution",
    description:
      "Deployment of advanced IoT and AI systems across the New Capital",
    side: "left",
    Icon: FiCpu,
  },
] as const;
export default function Milestones() {
  return (
    <div className="my-20">
      <SectionHeading
        text="Key Milestones"
        subText="Our Journey"
        Icon={AiFillFlag}
      />
      <div className="relative responsive-container my-20">
        <div className="absolute hidden md:block left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-white/60 via-semi-muted-text/60 to-transparent" />

        <div className="space-y-10">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-1 md:gap-6"
            >
              {item.side === "left" ? (
                <>
                  <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                    <item.Icon className="text-primary text-5xl" />
                    <div className="text-center md:text-right">
                      <h3 className="text-2xl font-bold text-white">
                        {item.year}
                      </h3>
                      <p className="text-xl font-medium text-semi-muted-text">
                        {item.title}
                      </p>
                      <p className="text-xl leading-relaxed text-muted-text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative hidden md:block z-10 h-4 w-4 rounded-full bg-semi-muted-text" />

                  <div />
                </>
              ) : (
                <>
                  <div />

                  <div className="relative hidden md:block z-10 h-4 w-4 rounded-full bg-primary" />

                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <item.Icon className="text-5xl text-primary" />
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white">
                        {item.year}
                      </h3>
                      <p className="text-xl font-medium text-semi-muted-text">
                        {item.title}
                      </p>
                      <p className="text-xl leading-none text-muted-text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
