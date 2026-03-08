"use client";
import { motion } from "framer-motion";
import { CUBIC_BEIZER } from "../utils/utils";

export const RevealItem = ({
  children,
  duration = 0.5,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  once?: boolean;
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once }}
        transition={{ duration, delay, ease: CUBIC_BEIZER }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};
