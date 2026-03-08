"use client";

import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../utils/utils";

type SlideUpTextProps = {
  children: string;
  className?: string;
  once?: boolean;
  delayStep?: number;
  duration?: number;
  mode?: "char" | "word";
  delay?: number;
};

export default function SlideUpText({
  children,
  className = "",
  once = true,
  delayStep = 0.03,
  duration = 0.5,
  delay = 0,
  mode = "char",
}: SlideUpTextProps) {
  const items =
    mode === "word"
      ? children.split(" ").map((w, i) => (i === 0 ? w : " " + w))
      : children.split("");

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
      }}
    >
      {items.map((item, i) => {
        const isSpace = item === " ";

        return (
          <span
            key={`${item}-${i}`}
            style={{
              display: "inline-block",
              overflow: "hidden",
              lineHeight: 1,
            }}
          >
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once }}
              transition={{
                duration,
                delay: i * delayStep + delay,
                ease: CUBIC_BEIZER,
              }}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
              }}
            >
              {isSpace ? "\u00A0" : item}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
