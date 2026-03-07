"use client";
import { motion, cubicBezier } from "framer-motion";

export default function RevealText({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
}) {
  const CUBIC_BEIZER = cubicBezier(0.6, 0.05, 0, 0.9);

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
