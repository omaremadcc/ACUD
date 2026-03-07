import { IconType } from "react-icons";
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import RevealText from "./RevealText";

export default function ContactHero() {
  return (
    <section className="flex flex-col justify-end items-center md:items-start w-screen h-[100dvh] gap-10 px-5 py-2">
      <div className="w-fit pl-5 space-y-3 xl:grid xl:grid-cols-2">
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
        <RevealText delay={0.6} duration={0.6}>
          <h4 className="hero-subheading">
            We'd love to hear from you. Reach out to us anytime.
          </h4>
        </RevealText>
        <RevealText delay={0.4} duration={0.6}>
          <h1 className="hero-heading">CONTACT US</h1>
        </RevealText>
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
