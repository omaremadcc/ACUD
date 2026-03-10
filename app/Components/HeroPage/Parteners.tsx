import { FaHandshake } from "react-icons/fa6";
import SectionHeading from "../sectionHeading";

const parteners = [
  {
    logo: "dar.png",
    link: "/",
  },
  {
    logo: "dell.png",
    link: "/",
  },
  {
    logo: "dorsch.png",
    link: "/",
  },
  {
    logo: "environics.png",
    link: "/",
  },
  {
    logo: "honeywell.png",
    link: "/",
  },
  {
    logo: "hp.png",
    link: "/",
  },
  {
    logo: "huawei.png",
    link: "/",
  },
  {
    logo: "orange.png",
    link: "/",
  },
  {
    logo: "savills.png",
    link: "/",
  },
  {
    logo: "schneider.png",
    link: "/",
  },
  {
    logo: "siemens.png",
    link: "/",
  },
  {
    logo: "wycombe.png",
    link: "/",
  },
];

export default function Parteners() {
  return (
    <div className="py-20">
      <SectionHeading
        text="Partners"
        subText="Partners in Success"
        Icon={FaHandshake}
      />
      <div className="w-2/3 flex items-center justify-center flex-wrap mx-auto gap-4 py-10">
        {parteners.map((partner, index) => (
          <a key={index} href={partner.link}>
            <div
              className="min-h-15 w-36 bg-semi-muted-text mask mask-center mask-no-repeat mask-contain"
              style={{ maskImage: `url('/parteners/${partner.logo}')` }}
            ></div>
          </a>
        ))}
      </div>
    </div>
  );
}
