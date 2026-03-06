import { FaParking, FaUniversity } from "react-icons/fa";
import SectionHeading from "../sectionHeading";
import { AiFillSun, AiOutlineWifi } from "react-icons/ai";
import {
  BiBuildingHouse,
  BiRecycle,
  BiShield,
  BiSolidData,
  BiSolidTrain,
  BiSolidTrashAlt,
} from "react-icons/bi";
import { BsPersonWalking, BsPhoneFill } from "react-icons/bs";
import { IoWater } from "react-icons/io5";
import { MdArchitecture, MdDirectionsBike } from "react-icons/md";
import { WiSnowflakeCold } from "react-icons/wi";
import { FaBottleWater, FaRoad } from "react-icons/fa6";
import { IoIosBicycle } from "react-icons/io";
import { TbTrain } from "react-icons/tb";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { BrainCircuit } from "lucide-react";

export default function CapitalPillars() {
  return (
    <div className="py-20">
      <SectionHeading
        text="New Capital Pillars"
        subText="Discover the four pillars that make our city unique"
        Icon={FaUniversity}
      />
      <div className="responsive-container mt-10 py-10 flex flex-col-reverse md:flex-row items-start justify-center gap-10">
        <img
          src="/capital/1.webp"
          alt="New Capital"
          className="md:max-w-[50%]"
        />
        <div>
          <div className="flex items-center gap-4">
            <BrainCircuit className="text-primary text-4xl" />
            <h3 className="text-4xl font-medium">Smart City</h3>
          </div>
          <h6 className="text-2xl font-medium text-muted-text">
            Where innovation and technology create a truly smart and connected
            urban experience
          </h6>
          <ul className="my-3">
            <PillarItem
              Icon={AiOutlineWifi}
              title="Connectivity"
              description="Infrastructure seamlessly linked through optical fibers using cutting-edge FTTX technology."
            />
            <PillarItem
              Icon={BiShield}
              title="Security"
              description="Entire city equipped with CCTV network connected to central Security Control Center."
            />
            <PillarItem
              Icon={BiSolidData}
              title="Smart Data"
              description="Data integrated from all city corners into certified Uptime data center."
            />
          </ul>
        </div>
      </div>
      <div className="responsive-container py-10 flex flex-col md:flex-row-reverse items-start justify-center gap-10">
        <img
          src="/capital/2.webp"
          alt="New Capital"
          className="md:max-w-[30%]"
        />
        <div>
          <span className="text-semi-muted-text text-xl">
            Every Citizen has 15m of green area
          </span>
          <div className="flex items-center gap-4">
            <PiTreeEvergreenFill className="text-primary text-4xl" />
            <h3 className="text-4xl font-medium">Green City</h3>
          </div>
          <h6 className="text-2xl font-medium text-muted-text">
            A Green Oasis of Ingenuity where sustainability converges with
            innovation
          </h6>
          <ul className="my-3 grid grid-cols-2">
            <PillarItem
              Icon={BiRecycle}
              title="Smart Waste Management"
              description="Advanced system ensures efficient recycling and safe disposal."
            />
            <PillarItem
              Icon={BiSolidTrain}
              title="Eco-Friendly Transport"
              description="Electric and natural gas vehicles with extensive charging network."
            />
            <PillarItem
              Icon={AiFillSun}
              title="Clean Energy"
              description="Solar panels installed on 50% of rooftops reducing carbon footprint."
            />
            <PillarItem
              Icon={BsPhoneFill}
              title="Digital Governance"
              description="Paperless electronic administrative system in government ministries."
            />
            <PillarItem
              Icon={IoWater}
              title="Sewage Treatment"
              description="State-of-the-art plant ensures sustainable wastewater management."
            />
            <PillarItem
              Icon={MdArchitecture}
              title="Green Architecture"
              description="Buildings utilize natural air currents for energy efficiency."
            />
          </ul>
        </div>
      </div>
      <div className="responsive-container py-10 flex flex-col-reverse md:flex-row items-start justify-center gap-10">
        {/*<img
          src="/capital/3.webp"
          alt="New Capital"
          className="md:max-w-[20%]"
        />*/}
        <div>
          <div className="flex items-center gap-4">
            <BiRecycle className="text-primary text-4xl" />
            <h3 className="text-4xl font-medium">Sustainable City</h3>
          </div>
          <h6 className="text-2xl font-medium text-muted-text">
            Where sustainability meets modernity in perfect harmony
          </h6>
          <ul className="my-3 grid grid-cols-2">
            <PillarItem
              Icon={WiSnowflakeCold}
              title="District Cooling Plant"
              description="Largest in Egypt and Africa with 64,000 tons initial capacity. Expanding to 300,000 tons over five years."
            />
            <PillarItem
              Icon={MdDirectionsBike}
              title="Pedestrian & Bike Paths"
              description="Network of walkways and dedicated bike paths encouraging eco-friendly transportation and healthier lifestyle."
            />
            <PillarItem
              Icon={FaBottleWater}
              title="Water Conservation"
              description="Advanced technologies and sustainable systems ensuring efficient water usage and long-term environmental sustainability."
            />
            <PillarItem
              Icon={BiSolidTrashAlt}
              title="Smart Waste Management"
              description="IoT-powered system optimizing resource allocation and reducing operational costs through real-time monitoring."
            />
            <PillarItem
              Icon={BiBuildingHouse}
              title="Smart Building Management"
              description="Continuous monitoring optimizing energy consumption and enabling predictive maintenance."
            />
            <PillarItem
              Icon={FaParking}
              title="Smart Parking"
              description="Real-time detection of available spaces reducing traffic congestion and search time."
            />
          </ul>
        </div>
      </div>
      <div className="responsive-container mt-10 py-10 flex flex-col-reverse md:flex-row items-start justify-center gap-10">
        <img
          src="/capital/4.webp"
          alt="New Capital"
          className="md:max-w-[50%]"
        />
        <div>
          <div className="flex items-center gap-4">
            <FaRoad className="text-primary text-4xl" />
            <h3 className="text-4xl font-medium">Connected City</h3>
          </div>
          <h6 className="text-2xl font-medium text-muted-text">
            Where connectivity meets sustainability in seamless fusion
          </h6>
          <ul className="my-3">
            <PillarItem
              Icon={BsPersonWalking}
              title="Pedestrian Walkways"
              description="Expansive open spaces as living museums of culture and history."
            />
            <PillarItem
              Icon={IoIosBicycle}
              title="Bicycle Paths"
              description="Dedicated paths promoting healthy and eco-friendly lifestyle."
            />
            <PillarItem
              Icon={TbTrain}
              title="Light Train Transit"
              description="Fast and convenient access to key destinations across the city."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
interface PillarItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function PillarItem({ Icon, title, description }: PillarItemProps) {
  return (
    <li className="flex gap-2 items-start">
      <Icon className="text-primary text-4xl" />
      <div>
        <span className="text-2xl text-semi-muted-text font-medium">
          {title}
        </span>
        <p className="text-sm text-muted-text">{description}</p>
      </div>
    </li>
  );
}
