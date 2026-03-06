import React from "react";
import { IconType } from "react-icons";

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
    <div className="flex flex-col items-center justify-center">
      <Icon className="text-primary text-6xl" />
      <h2 className="text-5xl font-bold">{text}</h2>
      <p className="text-muted-text text-lg text-center">{subText}</p>
    </div>
  );
}
