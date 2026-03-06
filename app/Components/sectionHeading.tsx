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
      <h2 className="text-6xl font-medium">{text}</h2>
      <p className="text-muted-text text-2xl text-center font-normal">
        {subText}
      </p>
    </div>
  );
}
