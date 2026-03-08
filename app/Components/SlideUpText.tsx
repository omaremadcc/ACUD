"use client";
import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../utils/utils";

type SlideUpTextProps = {
  children: string;
  className?: string;
  once?: boolean;
  delayStep?: number;
  duration?: number;
  delay?: number;
  mode?: "char" | "word";
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
  if (mode === "word") {
    const words = children.split(" ");

    return (
      <span className={className}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                verticalAlign: "bottom",
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
                {word}
              </motion.span>
            </span>

            {i !== words.length - 1 && (
              <span style={{ whiteSpace: "pre" }}> </span>
            )}
          </span>
        ))}
      </span>
    );
  }

  const words = children.split(" ");
  let globalIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {word.split("").map((char) => {
            const index = globalIndex++;
            return (
              <span
                key={`${char}-${index}`}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  lineHeight: 1,
                  verticalAlign: "bottom",
                }}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once }}
                  transition={{
                    duration,
                    delay: index * delayStep + delay,
                    ease: CUBIC_BEIZER,
                  }}
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                  }}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}

          {wordIndex !== words.length - 1 && (
            <span style={{ whiteSpace: "pre" }}> </span>
          )}
        </span>
      ))}
    </span>
  );
}
