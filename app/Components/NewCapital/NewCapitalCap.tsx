import { RiTaxiWifiLine } from "react-icons/ri";
import { Link005 } from "@/components/ui/skiper-ui/skiper40";
export default function NewCapitalCap() {
  return (
    <div className="flex flex-col md:flex-row responsive-container items-start justify-center gap-10 py-20">
      <div>
        <RiTaxiWifiLine className="text-primary text-6xl" />
        <Link005 href="/" className="font-medium text-5xl py-2 underline w-fit">
          New Capital Cap
        </Link005>
        <h5 className="text-semi-muted-text text-3xl">
          Introducing a safe, smart, green & sustainable transportation way.
        </h5>
        <p className="text-muted-text ">
          You are safe with us during your journey in the New Capital, as each
          taxi is equipped with internal surveillance cameras and tracking
          devices, and trips are monitored by a team in the central control
          room.
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
