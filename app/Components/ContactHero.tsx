import { IconType } from "react-icons";
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function ContactHero() {
  return (
    <section className="flex flex-col justify-end items-start w-screen h-screen gap-10 px-5 py-2">
      <div className="w-fit pl-5 space-y-3">
        <Card
          Icon={AiFillClockCircle}
          text="Sunday - Thursday"
          subText="9:30 AM - 3:30 PM"
        />
        <Card Icon={MdMail} text="Email" subText="info@acud.eg" />
        <Card Icon={AiFillPhone} text="Phone" subText="20293894" />
        <Card
          Icon={FaLocationDot}
          text="Address"
          subText="Building (3A-L2), Government District, New Capital"
        />
      </div>
      <div>
        <h4 className="text-lg md:text-3xl lg:text-4xl font-medium text-muted-text">
          We'd love to hear from you. Reach out to us anytime.
        </h4>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
          Contact US
        </h1>
      </div>
    </section>
  );
}

function Card({
  Icon,
  text,
  subText,
}: {
  Icon: IconType;
  text: string;
  subText: string;
}) {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Icon className="text-primary text-3xl" />
      <div>
        <span className="text-muted-text text-lg uppercase font-medium">
          {text}
        </span>
        <p className="text-lg md:text-3xl font-medium">{subText}</p>
      </div>
    </div>
  );
}
