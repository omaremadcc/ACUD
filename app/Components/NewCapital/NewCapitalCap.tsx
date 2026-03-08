import { RiTaxiWifiLine } from "react-icons/ri";
import { Link005 } from "@/components/ui/skiper-ui/skiper40";
import SlideUpText from "../SlideUpText";
export default function NewCapitalCap() {
  return (
    <div className="flex flex-col md:flex-row responsive-container items-start justify-center gap-10 py-20">
      <div>
        <RiTaxiWifiLine className="text-primary text-6xl" />
        <Link005
          href={
            "https://play.google.com/store/apps/details?id=com.capitalTaxiApp&pcampaignid=web_share&pli=1"
          }
          className="font-medium text-5xl py-2 underline w-fit"
        >
          <SlideUpText once duration={2} delayStep={0.04}>
            New Capital Cap
          </SlideUpText>
        </Link005>
        <h5 className="text-semi-muted-text text-2xl">
          <SlideUpText
            once
            duration={1}
            delayStep={0.02}
            mode="word"
            delay={0.8}
          >
            Introducing a safe, smart, green & sustainable transportation way.
          </SlideUpText>
        </h5>
        <p className="text-muted-text text-xl">
          <SlideUpText
            once
            duration={1}
            delayStep={0.02}
            mode="word"
            delay={1.3}
          >
            You are safe with us during your journey in the New Capital, as each
            taxi is equipped with internal surveillance cameras and tracking
            devices, and trips are monitored by a team in the central control
            room.
          </SlideUpText>
        </p>
      </div>
      <img
        src="/capital/new-capital-taxi.webp"
        alt="New Capital Taxi"
        className="md:max-w-[50%]"
      />
    </div>
  );
}
