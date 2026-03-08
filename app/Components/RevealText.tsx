"use client";
import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../utils/utils";

export default function RevealText({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration, ease: CUBIC_BEIZER, delay }}
        viewport={{ once: true }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
