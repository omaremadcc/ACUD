"use client";
import { cubicBezier } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [startImages, setStartImages] = useState(false);
  const [reverse, setReverse] = useState(false);

  const CUBIC_BEIZER = cubicBezier(0.6, 0.05, 0, 0.9);

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
    }, 250);

    return () => clearInterval(interval);
  }, [startImages]);

  return (
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
  );
}
