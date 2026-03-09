"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { CUBIC_BEIZER } from "@/app/utils/utils";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RevealItem } from "@/app/Components/RevealItem";
import { IconType } from "react-icons";
import {
  FaBus,
  FaMapMarkedAlt,
  FaPray,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { BsHouse, BsTreeFill } from "react-icons/bs";
import { GiCeilingLight, GiEgyptianWalk, GiObelisk } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";
import { MdFilterVintage, MdWater } from "react-icons/md";
import { LuTheater } from "react-icons/lu";
import { GrFlagFill } from "react-icons/gr";
import Link from "next/link";

const zoomOrigin = [
  0,
  "60% 5%",
  "55% 0%",
  "25% 5%",
  "38% 0%",
  "46% 52%",
  "30% 47%",
  "2% 43%",
  "15% 43%",
  "90% 17%",
  "90% 0%",
  "90% 45%",
  "80% 40%",
  "96% 30%",
  "5% 18%",
  "30% 30%",
  "70% 99%",
  "90% 95%",
  "100% 80%",
  "66% 15%",
  "78% 18%",
  "76% 30%",
  "1% 95%",
  "99% 32%",
  // "82% 44%",
  "60% 33%",
];

const baseClassName = "cursor-pointer transition-colors stroke-[1px]";
const resdentialClassName =
  "stroke-yellow-500/50 fill-yellow-500/10 hover:fill-yellow-500/50";
const govClassName =
  "stroke-blue-500/50 fill-blue-500/10 hover:fill-blue-500/50";
const servicesClassName =
  "stroke-green-500/50 fill-green-500/10 hover:fill-green-500/50";
const commercialClassName =
  "stroke-red-500/50 fill-red-500/10 hover:fill-red-500/50";

type SlideContent = {
  heading: string;
  subHeading?: string;
  facts?: { Icon: IconType; sub: string; main: string }[];
  images?: string[];
};

type SlideProps = SlideContent & {
  close: (index: number) => void;
};

type District = { id: string; d: string; className: string };

const districts: District[] = [
  {
    id: "R3",
    d: "M420.94,117.41s4.08-17.62,4.61-19.87,5.82-18.31,7.46-21.31,6.97-13.5,6.97-13.5c0,0,8.4-11.06,12.22-14.26s13.56-5.71,16.88-5.91,24.21-.53,24.21-.53c0,0,13.88-.03,16.18.94s9.97,6.26,11.65,10.06,3,11.65-.44,22.06-10.15,27.97-10.15,27.97c0,0-9.97,17.38-12.88,20.74s-7.32,9.18-9,15.09c0,0-24-5.21-33.62-9.26s-31.68-10.15-34.94-10.15c0,0,1.01-1.82.86-2.06Z",
    className: clsx(baseClassName, resdentialClassName),
  },
  {
    d: "M429.71,53.82s1.94,1.06,5.59,0,19.71-7.59,22.82-9,11.65-2.88,15.59-3.12h28.09s1.38.35,1.5-1.15,0-10.44,0-10.44c0,0,1.06-1.35-2.47-1.18s-35.53.09-36.94-.02-5.35.9-7.59,1.02-10.06.06-13.41-.06-3.82-.47-4.29.71-3.12,13.29-7.41,16.82-1.47,6.41-1.47,6.41Z",
    className: clsx(baseClassName, servicesClassName),
    id: "Sports-Club",
  },
  {
    id: "R1",
    d: "M208.65,118.18c.76-3.04,1.94-8.06,1.88-9.65s.53-12.71,0-15.47-.59-7.82-2.24-11.59-7.94-17.65-7.82-21.24,1.76-12.59,8.18-15.59,11.06-3.06,21.06-3.24,23.47,0,23.47,0c0,0,8.06.18,10.59,2.47s3.88,5.47,3.24,10.94-3.29,10.35-4.24,13.59-1.65,10.29-1.82,15-.12,8,.94,12.59,2.18,11.82,1.24,18.65-6.59,15.94-6.59,15.94c0,0-.82,1.76-3.56,1.85s-22.01-1.99-26.43-3.22-16.41-5.03-18.93-6.66c0,0,.25-1.26,1.03-4.38Z",
    className: clsx(baseClassName, resdentialClassName),
  },
  {
    id: "R2",
    className: clsx(baseClassName, resdentialClassName),
    d: "M307.06,128.18c5.67-.33,23.06-3,28.35-3.82s27.47-3.65,31.06-4.12,13-1.41,16.41-1.88,5.12-9.18,5.82-11.76,7.71-28.06,9.47-31.88,2.65-12,2.65-14.82-3.47-8.76-4.82-10.88-6-5-9.47-5.94-23.88-1.06-23.88-1.06c0,0-20.24-.29-26.41.47s-21.35,8.41-24.82,11.82-11.18,13.12-12.65,15.71-3.18,7.59-3.65,11.65-.59,10.18,0,12.24.71,12.18,1,14.18-.35,11.82-.35,11.82c0,0-.88,9,11.29,8.29Z",
  },
  {
    id: "R6",
    className: clsx(baseClassName, resdentialClassName),
    d: "M384.71,293.47s-33.97-24.79-35.47-31.15-2.65-13.41-.44-20.21,10.5-30.26,10.5-30.26c0,0-.35-4.5,4.15-4.59s21.18,1.76,28.06,4.68,22.15,10.76,26.91,18.09,3.74,9.35,2.53,12.09-15.94,25.5-15.94,25.5c0,0-18.62,26.12-20.29,25.85Z",
  },
  {
    id: "R5",
    className: clsx(baseClassName, resdentialClassName),
    d: "M230.94,198.82s-1.93,13.82-2.59,19.43-.79,9.93-1.06,11.34-1.32,8.21-1.32,10.15-.97,10.32-1.24,12.09,1.62,3.79,3.1,4.5,14.9,0,14.9,0l34.76.31s32.38-.57,35.29,0,5.91,1.98,8.21,2.25,4.15.79,4.85-.79,1.94-5.03,1.76-7.15-.94-3.71.02-5.03,2.28-1.76,3.34-3.97,3.35-10.59,3.35-10.59l6.44-18.97s.71-1.94,0-4.24,0-2.65-2.38-3.26-7.85-1.06-12.44-1.5-39.88-4.06-39.88-4.06c0,0-47.82-5.74-48.97-5.74s-3.18,1.94-4.41,3.44-1.74,1.79-1.74,1.79Z",
  },
  {
    id: "Lavista",
    className: clsx(baseClassName, resdentialClassName),
    d: "M60.71,232.94s-18.71-5.29-19.59-16.94,15.71-24.71,19.59-27,13.24-8.12,31.06-7.94,33.88,2.82,33.88,2.82c0,0,9.35-.35,7.06,7.59s-7.94,20.47-8.29,23.29,1.06,12-.18,16.41-2.12,7.76-7.94,8.12-55.59-6.35-55.59-6.35Z",
  },
  {
    id: "R4",
    className: clsx(baseClassName, resdentialClassName),
    d: "M151.24,186.35s-8.65,3-12.09,9.79-7.32,16.68-7.68,20.12-3.97,13.06,2.21,21.62,52.79,7.06,58.21,7.29,16-8,17.88-16,5.18-32.82,5.18-35.59-59.18-8.41-63.71-7.24Z",
  },
  {
    id: "People-Park",
    className: clsx(baseClassName, servicesClassName),
    d: "M618.71,136.76s-4.19,1.01-4.41-1.63,1.15-12.75,1.76-15.4,2.82-3.4,3.75-4.5,10.1-1.06,12.22-1.1,38.21.4,40.06,1.01,13.06,2.91,15.53,3.71,10.24,1.32,14.21,1.41,8.12,0,11.74-.97,16.24-3.97,19.15-3.97,29.47.53,33.18.35,12.09-.09,13.59.53,3.79.97,3.62,6,1.5,11.03,1.94,11.91,1.06,3.53-1.41,4.06-11.38.35-14.56,0-42.97-.35-42.97-.35l-38.21-.44-44.38-.18-24.79-.44Z",
  },
  {
    id: "Palace",
    className: clsx(baseClassName, govClassName),
    d: "M676.85,112.15s-1.85.88-1.41-9.26.18-44.12.18-44.12c0,0-.35-14.74,5.29-20.12s12.09-11.47,25.32-9.18,18,15.97,18,15.97c0,0,1.59,6.18,1.15,20.38s.08,43.94.08,43.94c0,0-.96,3.35-4.4,3.26s-44.21-.88-44.21-.88Z",
  },
  {
    id: "Misr-Mosque",
    className: clsx(baseClassName, servicesClassName),
    d: "M692.12,248.65s-.53-30.18,0-35.82,1.41-9.79,1.5-12.44,0-8.38,0-8.38c0,0-1.06-1.32,1.32-1.32s9.44-.53,10.5,0,1.24.09.97,3c0,0-1.1,8.21.11,11.74s1.39,9.09,1.39,10.68.35,18.79,0,19.32-15.26,13.5-15.79,13.24Z",
  },
  {
    id: "CGD",
    className: clsx(baseClassName, govClassName),
    d: "M598.35,250.12s14,15.53,23.76,18.94,24.47,6.35,34.71,2.35,22.12-10.12,33.18-21.29c0,0,.59-27.53.59-31.18s-.15-12.03.56-14.06.88-2.65.93-3l.04-.35s.19-9.79-.24-10.37.47-9.57.59-13.81.29-19.53.29-20.53,1-16.29-1.29-16.29h-74.18s-2.24.65-3.65,2.76-2.94,5.88-2.94,9.29-1.65,12.47-2,15.41-3.53,14.71-3.53,17.29-1.65,10.24-1.65,10.24c0,0-5.29,25.65-5.18,27.65s-2.35,17.76-2.35,18.24,3.29,1.76,2.94,4.59-.59,4.12-.59,4.12Z",
  },
  {
    id: "Paralmaint",
    className: clsx(baseClassName, govClassName),
    d: "M710.88,170.41s-3.29.65-3.35-1.29l-.06-1.94v-7.53s-.88-1.12,2.71-1.47,21.65,0,21.65,0c0,0,1.24-.53,1.71.59s.53,1.12.47,1.29-.24,10.12-.24,10.12l-22.88.24Z",
  },
  {
    id: "Fatah-Mosque",
    className: clsx(baseClassName, servicesClassName),
    d: "M91.06,150.94s-8.35.35-6-3.65,8.82-7.41,10.94-9.29,13.18-12.71,14.71-14.71,7.88-7.88,9.06-9.41,3.29-4.24,4.35-2.59.59,7.18.59,10,.71,7.83.82,11.15-2.71,5.91-5.76,8.97-5.41,5.76-7.53,7.53-6.12,3.06-6.12,3.06c-2.82.47-15.06-1.06-15.06-1.06Z",
  },
  {
    id: "Green-River",
    className: clsx(baseClassName, servicesClassName),
    d: "M114.88,156.66s-3.97-1.63-5.12-1.68-.35-.57,1.28-1.63,8.25-6.49,10.46-8.51,8.87-7.37,9.09-10.68-1.24-15.53-1.5-16.59-.26-.44-.26-1.06.31-8.21.97-8.43,3.53,1.28,4.37,2.91,8.29,5.65,8.65,6.35,3.09,3.44,4.99,3.57,3.57.97,4.5,1.59,8.56,4.94,9.09,5.38,21.79,10.72,23.91,12.49,18.62,5.65,18.62,5.65c0,0,19.76,5.38,26.12,6.26s19.24,2.03,30,1.94,14.12-.53,17.74-1.24,23.82-2.74,23.82-2.74c0,0,37.06-4.24,41.56-5.21s24.09-2.82,28.06-3.26,33.44-4.32,61.85,3.62,61.06,20.65,79.76,22.06,15.88,6.53,15.88,6.53c0,0-12.97,26.21-13.85,28.24s-10.85,21-10.85,21c0,0-17.03-11.74-19.24-12.97s-20.21-12.18-31.59-14.82-7.41-4.24-28.15-5.74-39.26-3.53-42.26-3.97-28.24-2.65-28.24-2.65l-40.15-4.32s-35.21-4.06-43.76-5.12-34.59-3.18-34.59-3.18c0,0-40.15-4.08-42.26-4.82s-40.24-5.42-40.24-5.42c0,0-38.56-3.35-38.65-3.57Z",
  },
  {
    id: "R7",
    className: clsx(baseClassName, resdentialClassName),
    d: "M526.94,340.15s-21.09,13.94-27.53,27-7.5,16.68-7.5,16.68c0,0,1.32,2.03.88,3.79s-2.03,2.74-2.47,3.44-3,2.65-3.18,6.26-.62,16.59,0,20.47,7.5,21.26,10.15,29.74,10.41,26.03,10.41,26.03h16.41s22.06,1.67,44.12-4.68,72.71-15.88,72.71-15.88c0,0-1.53-40.97-1.29-46.05s.24-31.19.24-31.19c0,0-60.94,13.71-112.94-35.62Z",
  },
  {
    id: "Diplomatic",
    className: clsx(baseClassName, govClassName),
    d: "M642.35,375s-.82-.82-.82,7.18v26.12c0,1.06.82,39.76,1.88,41.71s8.12,1.59,11.82,0,46.06-12.53,55.41-17.29,52.06-18.71,58.24-21,9-4.59,7.06-6-11.82-19.41-11.82-19.41c0,0-14.65-26.47-15.88-28.76s-20.65-35.12-21.71-35.47-9.18,7.59-13.59,11.82-32.29,26.12-40.76,30.18-29.82,10.94-29.82,10.94Z",
  },
  {
    id: "R8",
    className: clsx(baseClassName, resdentialClassName),
    d: "M782.07,404.78s-4.19-1.5-7.41-6.4-20.31-33.91-20.31-33.91l-20.82-34.71s-6.82-7.65-3.76-10.35,28.82-24.59,28.82-24.59c0,0,15.94-15.91,18.41-16.35s17.94-15.29,18.29-15.65,27.18-24.12,41.06-24.47l5.54,11.88v130s-46.57,24.62-59.82,24.54Z",
  },
  {
    id: "Knowledge",
    className: clsx(baseClassName, servicesClassName),
    d: "M491.12,139.1s-1.41-.79-.44-2.56,5.03-7.9,7.01-10.68,5.82-8.07,5.82-8.07c0,0,2.07-1.9,2.47-3.04s4.1-6.93,4.46-8.07.88-2.21,1.85-4.41.79-5.38,2.29-7.15,5.38.35,6.62.71,10.06,2.38,13.32,2.65,6.26.71,6.97,2.03-1.41,6.18-1.41,6.18c0,0-6,18.71-6.35,19.5s-5.91,14.74-5.91,14.74c0,0,.35,1.76-2.65,2.03s-32.52-.96-34.06-3.84Z",
  },
  {
    id: "Bus-Station",
    className: clsx(baseClassName, servicesClassName),
    d: "M563.65,141.29s-2.38.19-2.65-.78.79-5.6.93-6.09,3.4-7.28,6.13-10.81,8.03-10.68,8.12-12.35c0,0,1.59-.09,2.74-1.24s7.59-.35,8.56,1.41,0,26.56,0,26.56c0,0-4.32,3.27-9.62,3.31s-14.21-.02-14.21-.02Z",
  },
  {
    id: "Art-City",
    className: clsx(baseClassName, servicesClassName),
    d: "M564.82,188s-3.73.75-3.87-3.27.69-8.49.69-10.61,1.65-10.47,1.24-13.76-1.35-12.82-1.94-13.88.47-2.71,2.7-2.47,6.59.66,12.12-.02,8-2.65,8-2.65v18.91s.94,25.06.82,26.24-.71,1.4-3.18,1.58-16.59-.06-16.59-.06Z",
  },
  {
    id: "Military-Academy",
    className: clsx(baseClassName, govClassName),
    d: "M65.74,410.74s-1.59.53-1.5-2.51.31-9.22.31-9.22c0,0,.04-18.44.04-20.74s.61-24.97.4-27.35-1.01-4.68.75-5.21,7.15-.44,9-.44,2.82,1.15,4.41,1.94.44,2.38,2.82.79,1.59-1.68,3.79-2.12,23.03.09,23.03.09l52.85.79s8.21-1.5,8.47,1.9.35,12.35.35,12.35c0,0,1.15,27.84.97,29.96s-1.15,14.03-1.24,15.44,1.41,4.22-2.12,4.36-18,0-18,0c0,0-21.79.85-25.5.67s-7.15.02-7.15.02c0,0-1.32-2.41-3.62-2.23s-3.53,2.23-3.53,2.23l-6.53.42s-16.94-.53-18.44-.62-1.68.09-3.09-.88-1.76-1.85-2.91-1.41-2.03.97-2.65,1.76c0,0-1.44.75-4.21.97-3,.24-6.74-.97-6.74-.97Z",
  },
  {
    id: "People-Square",
    className: clsx(baseClassName, servicesClassName),
    d: "M696.71,188.94s-3.18.5-3.41-.56-.31-7.53-.31-7.53l.64-22.83s.09-10.84.09-12.17-.35-3.97.26-4.41,10.15,0,10.15,0c0,0,2.38-.79,2.29,1.41s0,36.09,0,36.09v6.97s.26,1.85-2.38,2.12-7.32.91-7.32.91Z",
  },
  // {
  //   id: "Diamond-Hotel",
  //   className: clsx(baseClassName, servicesClassName),
  //   d: "M590.35,223.12s2.41,2.53,3.82,3.06,2.24.12,2.65-.76,1.12-7.41,1.12-7.41c0,0,2.41-13.06,3-16.06s1.29-9.24,1.29-9.76-.53-2.18-2.53-2-19.29-.14-23.06-.01-7.88,1.01-9.06.9-.12,2.35.76,3.71,11.71,16.24,12.82,17.41,9.18,10.94,9.18,10.94Z",
  // },
  {
    id: "CBD",
    className: clsx(baseClassName, commercialClassName),
    d: "M454.24,184.06s.62-5.65,1.85-8.91,4.15-14.82,5.47-16.24,3.88-2.56,6.97-1.59,16.5,4.85,20.47,6.53,11.56,5.56,13.5,9.18,4.32,9.53,3.62,10.59-14.74.26-23.47.44-26.21,1.41-28.41,0Z",
  },
];
// I can later add a video, and external links
const slides: SlideContent[] = [
  {
    heading: "RESDENTIAL 3",
    subHeading: "R3 — Where the Capital Begins to Live.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        sub: "Area (acre)",
        main: "1000",
      },
      {
        Icon: FaUsers,
        sub: "Capacity",
        main: "100k",
      },
    ],
    images: ["r31.jpg", "r32.webp"],
  },
  {
    heading: "THE CLUB",
    subHeading: "The New Capital Club",
    facts: [],
  },
  {
    heading: "RESDENTIAL 1",
    subHeading: "The Capital’s First Address",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "1,000",
        sub: "Area (acre)",
      },
    ],
  },
  {
    heading: "RESDENETIAL 2",
    subHeading: "Balanced Living.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "1,169",
        sub: "Area (acre)",
      },
      {
        Icon: BsHouse,
        main: "24,000",
        sub: "Housing units",
      },
    ],
    images: ["r21.jpg"],
  },
  {
    heading: "RESDENETIAL 6",
    subHeading: "Where the Future Lives.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "650",
        sub: "Area (acre)",
      },
    ],
  },
  {
    heading: "NEW GARDEN CITY",
    subHeading: "Where Classic Cairo Lives Again.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "1,000",
        sub: "Area (acre)",
      },
      {
        Icon: MdFilterVintage,
        main: "Recreating the Aesthetics of historic Cairo",
        sub: "",
      },
    ],
    images: ["r51.jpg", "r52.webp"],
  },
  {
    heading: "LAVISTA",
    subHeading: "",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "910",
        sub: "Area (acre)",
      },
    ],
  },
  {
    heading: "RESDENTIAL 4",
    subHeading: "High standards of living",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "910",
        sub: "Area (acre)",
      },
    ],
  },
  {
    heading: "PEOPLE'S PARK",
    subHeading: "The Capital’s Playground.",
    facts: [],
    images: ["peoplepark1.jpg", "peoplepark2.jpg"],
  },
  {
    heading: "THE PALACE",
    subHeading: "Where the Nation Is Led.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "600",
        sub: "Area (acre)",
      },
      {
        Icon: GiEgyptianWalk,
        main: "Inspired by a Timeless Civilization.",
        sub: "",
      },
      {
        Icon: FaUniversity,
        main: "10x The size of the white house",
        sub: "",
      },
    ],
    images: ["palace1.webp", "palace2.jpg"],
  },
  {
    heading: "EICC",
    subHeading: "Egypt's Islamic Cultural Center (Masjid Misr)",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "115",
        sub: "Area (acre)",
      },
      {
        Icon: FaPray,
        main: "137,000",
        sub: "Capacity",
      },
      {
        Icon: GiCeilingLight,
        main: "The Biggest Chandelier in The World",
        sub: "",
      },
    ],
    images: ["masjidmisr1.jpg", "masjidmisr2.jpg"],
  },
  {
    heading: "Gov. District",
    subHeading: "The Center of National Administration.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "400",
        sub: "Area (acre)",
      },
      {
        Icon: RiGovernmentFill,
        main: "37",
        sub: "Ministry",
      },
    ],
    images: ["gov1.jpg", "gov2.jpeg"],
  },
  {
    heading: "PARLIAMENT",
    subHeading: "The Voice of the People.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "37",
        sub: "Area (acre)",
      },
      {
        Icon: FaUsers,
        main: "1,000",
        sub: "Members Capacity",
      },
    ],
    images: ["parliament1.jpeg", "parliament2.jpeg"],
  },
  {
    heading: "FATAH. MOSQUE",
    subHeading: "Masjid Al-Fattah al-Aleem",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "106",
        sub: "Area (acre)",
      },
      {
        Icon: FaPray,
        main: "17,000",
        sub: "Capacity",
      },
    ],
    images: ["fatah1.jpg", "fatah2.jpg"],
  },
  {
    heading: "GREEN RIVER",
    subHeading: "The Green Spine of the Capital.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "6200",
        sub: "Area (acre)",
      },
      {
        Icon: BsTreeFill,
        main: "7",
        sub: "Gardens",
      },
      {
        Icon: MdWater,
        main: "Flows Through the Entire Capital",
        sub: "Like The Nile Flows Through Cairo",
      },
    ],
    images: ["greenriver1.jpg"],
  },
  {
    heading: "RESDENETIAL 7",
    subHeading: "",
    facts: [],
    images: ["r71.jpg"],
  },
  {
    heading: "EMBASSIES DISTRICT",
    subHeading: "Where Nations Meet.",
    facts: [],
  },
  {
    heading: "RESIDENTIAL 8",
    subHeading: "",
    facts: [],
  },
  {
    heading: "KNOWLEDGE CITY",
    subHeading: "Where Innovation Begins.",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "250",
        sub: "Area (acre)",
      },
      {
        Icon: FaUniversity,
        main: "EUI",
        sub: "Egypt's University of Informatics",
      },
    ],
    images: ["knowledgecity1.jpg", "knowledgecity2.jpg"],
  },
  {
    heading: "BUS STATION",
    subHeading: "Transportation Hub",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "100",
        sub: "Area (acre)",
      },
      {
        Icon: FaBus,
        main: "2400",
        sub: "Vehicles",
      },
    ],
    images: ["bus1.jpg", "bus2.jpg"],
  },
  {
    heading: "ART CITY",
    subHeading: "Transportation Hub",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "127",
        sub: "Area (acre)",
      },
      {
        Icon: LuTheater,
        main: "The Largest Opera House in the Middle East",
        sub: "2,000 Capacity",
      },
    ],
    images: ["art1.jpg", "art2.jpg"],
  },
  {
    heading: "MILITARY ACADEMY",
    subHeading: "",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "850",
        sub: "Area (acre)",
      },
    ],
    images: ["military1.jpg", "military2.jpg"],
  },
  {
    heading: "PEOPLE SQUARE",
    subHeading: "",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "16",
        sub: "Area (acre)",
      },
      {
        Icon: GrFlagFill,
        main: "Tallest Flagpole in the World",
        sub: "200m high",
      },
    ],
    images: ["peoplesquare1.jpg"],
  },
  {
    heading: "CBD",
    subHeading: "Central Business District",
    facts: [
      {
        Icon: FaMapMarkedAlt,
        main: "200",
        sub: "Area (acre)",
      },
      {
        Icon: GiObelisk,
        main: "Tallest Tower in Africa",
        sub: "Iconic Tower",
      },
    ],
    images: ["cbd1.jpg", "cbd2.jpg"],
  },
];

export default function MapPage() {
  const [selectedDistrict, setSelectedDistrict] = useState<number>(0);
  const [lastSelectedDistrict, setLastSelectedDistrict] = useState<number>(0);

  useEffect(() => {
    function handleChange() {
      if (selectedDistrict != 0) {
        setLastSelectedDistrict(selectedDistrict);
        console.log("selectedDistrict changed", selectedDistrict);
      }
    }
    handleChange();
  }, [selectedDistrict]);

  return (
    <div className="">
      <Link
        href="/"
        className="text-xl border-white border fixed top-10 right-10 z-1001 p-2 flex items-center justify-center rounded-full hover:bg-white hover:text-black cursor-pointer transition-all"
      >
        <RxCross2 />
      </Link>
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          className="relative w-[70vw] max-w-[70vw] h-auto rounded-2xl overflow-hidden border-8 border-secondary-background"
          variants={{
            normal: { scale: 1 },
            zoom: { scale: 3 },
          }}
          animate={selectedDistrict ? "zoom" : "normal"}
          style={{ transformOrigin: zoomOrigin[lastSelectedDistrict] }}
          transition={{ duration: 1, delay: 0.1, ease: CUBIC_BEIZER }}
          onClick={() =>
            setSelectedDistrict(selectedDistrict !== 0 ? 0 : selectedDistrict)
          }
        >
          <img
            src="/map/map.png"
            alt="Map"
            className="block w-full h-auto opacity-40 object-contain select-none pointer-events-none"
          />

          <svg
            className="absolute inset-0 w-full h-full z-20"
            viewBox="0 0 841.89 473.76"
            preserveAspectRatio="xMidYMid meet"
          >
            {districts.map((district, index) => (
              <Path
                key={district.id}
                {...district}
                index={index + 1}
                setSelectedDistrict={setSelectedDistrict}
              />
            ))}
          </svg>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <AnimatePresence>
          {selectedDistrict != 0 && (
            <Slide
              close={() => setSelectedDistrict(0)}
              {...slides[selectedDistrict - 1]}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Path({
  d,
  className,
  id,
  index,
  setSelectedDistrict,
}: {
  d: string;
  className: string;
  id: string;
  index: number;
  setSelectedDistrict: (index: number) => void;
}) {
  return (
    <motion.path
      d={d}
      className={className}
      id={id}
      initial={{ opacity: 0, pathLength: 0 }}
      whileInView={{ opacity: 1, pathLength: 1 }}
      transition={{
        ease: CUBIC_BEIZER,
        duration: 0.8,
        delay: 0.2 + index * 0.1,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedDistrict(index);
      }}
    />
  );
}

function Slide({ heading, close, subHeading, facts, images }: SlideProps) {
  return (
    <motion.div
      variants={{
        initial: { y: "-100%" },
        animate: { y: "0%" },
        exit: {
          y: "100%",
          transition: { delay: 0, ease: CUBIC_BEIZER, duration: 1 },
        },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: CUBIC_BEIZER, delay: 1.1, duration: 1 }}
      className="fixed inset-0 bg-background z-1100 flex px-5"
    >
      <button
        className="fixed top-10 right-10 flex items-center justify-center p-1 border border-muted-text rounded-full cursor-pointer hover:bg-muted-text hover:text-background"
        onClick={() => close(0)}
      >
        <RxCross2 />
      </button>

      <div className="self-end px-3">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex items-center  gap-5">
            {images?.map((image, i) => (
              <RevealItem key={i} duration={0.6} delay={1.8 + i * 0.2}>
                <img
                  src={`/map/districts/${image}`}
                  alt={`Image ${i + 1}`}
                  className="size-[clamp(100px,15vw,400px)] object-cover"
                />
              </RevealItem>
            ))}
          </div>
          <div className="py-5 flex flex-col-reverse gap-5">
            {facts?.map((fact, i) => (
              <RevealItem key={i} duration={0.6} delay={1.4 + i * 0.2}>
                <div className="flex gap-3 items-center">
                  <fact.Icon className="text-primary text-3xl md:text-5xl" />
                  <div>
                    <p className="text-lg lg:text-xl text-muted-text">
                      {fact.sub}
                    </p>
                    <p className="font-semibold text-[clamp(25px,3vw,60px)] leading-none">
                      {fact.main}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
        <h3 className="hero-subheading lg:mt-10">
          <RevealItem duration={0.6} delay={1.1}>
            {subHeading}
          </RevealItem>
        </h3>
        <h1 className="hero-heading" style={{ fontSize: "12vw" }}>
          <RevealItem duration={0.6} delay={0.8}>
            {heading}
          </RevealItem>
        </h1>
      </div>
    </motion.div>
  );
}
