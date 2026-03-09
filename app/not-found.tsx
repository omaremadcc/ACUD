import Link from "next/link";
import "@/app/globals.css";

export default function NotFound() {
  return (
    <div className="w-screen min-h-[100dvh] flex flex-col items-center justify-center px-5">
      <h1 className="font-mono text-[20vw] font-black leading-none">404</h1>
      <h3 className="text-[5vw] font-medium">Urban Expansion In Progress</h3>
      <div className="font-mono text-muted-text font-bold text-xs sm:text-sm md:text-base lg:text-lg upercase">
        <h6>SYSTEM LOGS:</h6>
        <Log
          cord={`30°00'54.4"N 31°41'11.0"E`}
          location="OBLISK SQUARE"
          status="UNDER CONSTRUCTION"
        />
        <Log
          cord={`30°00'45.9"N 31°41'37.6"E`}
          location="ICONIC TOWER"
          status="TOPPED OUT"
        />
        <Log
          cord={`30°00'56.1"N 31°37'21.5"E`}
          location="GREEN RIVER"
          status="UNDER CULTIVATION"
        />
        <Log
          cord={`30°01'08.7"N 31°44'35.2"E`}
          location="GOV. DISTRICT"
          status="OPERATIONAL"
        />
        <p className="text-muted-text font-bold text-lg uppercase">{`// SECTOR 404: DEVELOPMENT QUEUED //`}</p>
      </div>
    </div>
  );
}

function Log({
  cord,
  location,
  status,
}: {
  cord: string;
  location: string;
  status: string;
}) {
  return (
    <p className="">
      [CORD:{" "}
      <Link
        target="_blank"
        href={`https://www.google.com/maps?q=${cord}`}
        className="text-primary"
      >
        {cord}
      </Link>
      ] - {location} - STATUS: {status}]
    </p>
  );
}
