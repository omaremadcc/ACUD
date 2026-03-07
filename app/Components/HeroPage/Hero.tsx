"use client";
import { motion, cubicBezier } from "framer-motion";
import { useEffect, useState } from "react";
import RevealText from "../RevealText";

const images = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Hero() {
  const CUBIC_BEIZER = cubicBezier(0.6, 0.05, 0, 0.9);
  const [index, setIndex] = useState(0);
  const [startImages, setStartImages] = useState(false);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!startImages) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= images.length - 1) {
          clearInterval(interval);
          setReverse(true); // trigger reverse animation
          return prev;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [startImages]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { y: "-100%", opacity: 1, pointerEvents: "none" },
        }}
        animate={reverse ? "hidden" : ""}
        transition={{ delay: 0.2, duration: 0.8, ease: CUBIC_BEIZER }}
        className="bg-secondary-background w-screen h-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={reverse ? "hidden" : "visible"}
          transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
          className="flex justify-between items-center text-muted-text font-medium text-sm w-[200px]"
        >
          <span>NEW CAPITAL</span>
          <span>ACUD</span>
        </motion.div>

        <div className="size-[200px]">
          <motion.div
            className="w-[200px] overflow-hidden"
            variants={{
              open: { height: 200 },
              closed: { height: 0 },
            }}
            initial="closed"
            animate={reverse ? "closed" : "open"}
            transition={{ duration: 0.6, ease: CUBIC_BEIZER }}
            onAnimationComplete={() => {
              if (!startImages) setStartImages(true);
            }}
          >
            <img
              src={`/loading/ready/${images[index]}.webp`}
              className="size-[200px] object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
      {reverse && (
        <div className="min-h-screen w-screen flex flex-col items-center lg:items-start justify-end ">
          <div className="absolute inset-0 z-[-2] overflow-hidden text-white">
            <video
              src={"/hero.webm"}
              autoPlay
              muted
              loop
              className="object-cover brightness-30 bg-white h-screen w-screen"
            />
          </div>
          <div className="absolute z-[-1] inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,transparent_50%,transparent_50%,rgba(0,0,0,1)_100%)]"></div>
          <div className="px-5 text-center lg:text-left">
            {/*<RevealText delay={0.6} duration={0.6}>
              <p className="text-base md:text-2xl text-semi-muted-text lg:max-w-[40%]">
                <span className="text-white">ACUD</span>, founded in{" "}
                <span className="text-white">2016</span>, leads the development
                of <span className="text-white">Egypt's New Capital</span>. A
                smart, sustainable city built on innovation, technology, and
                green design.
              </p>
            </RevealText>*/}
            <RevealText delay={0.4} duration={0.6}>
              <h4 className="hero-subheading">
                Welcome to The Future of Egypt
              </h4>
            </RevealText>
            <RevealText delay={0.2} duration={0.6}>
              <h1 className="hero-heading">CAPITAL RISING</h1>
            </RevealText>
          </div>
        </div>
      )}
      <div className="py-20 w-screen">
        <h4 className="text-muted-text text-xl md:text-xl font-medium mx-auto text-center md:max-w-1/2">
          ADMINSTRATIVE CAPITAL FOR URBAN DEVELOPMENT
        </h4>
        <p className="text-base md:text-4xl text-semi-muted-text lg:max-w-[40%] text-center mx-auto">
          <span className="text-text">ACUD</span>, founded in{" "}
          <span className="text-text">2016</span>, leads the development of{" "}
          <span className="text-text">Egypt's New Capital</span>. A smart,
          sustainable city built on innovation, technology, and green design.
        </p>
      </div>
    </>
  );
}
