import { IconType } from "react-icons";
import { RevealItem } from "./RevealItem";
import SlideUpText from "./SlideUpText";

interface InfoSectionProps {
  text: string;
  subText: string;
  Icon: IconType;
}

export default function SectionHeading({
  text,
  subText,
  Icon,
}: InfoSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <RevealItem>
        <Icon className="text-primary text-6xl mb-2" />
      </RevealItem>
      <SlideUpText delay={0.2} className="text-5xl font-medium">
        {text}
      </SlideUpText>
      <SlideUpText
        once
        delay={0.4}
        className="text-muted-text text-2xl text-center font-normal"
      >
        {subText}
      </SlideUpText>
    </div>
  );
}
