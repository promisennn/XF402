"use client";

import { motion, MotionConfig } from "motion/react";
import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";

export default function ShiftButton({
  onClick,
  children
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <MotionConfig transition={{ ease: "circOut", duration: 0.25 }}>
      <motion.button
        onClick={onClick}
        initial="initial"
        whileHover="hovered"
        className={twMerge(
          "relative overflow-hidden transition-colors border-none outline-none h-10"
        )}
      >
        <motion.div
          variants={{ initial: { y: "0%" }, hovered: { y: "-100%" } }}
          className="grid h-full place-content-center bg-neutral-900"
        >
          {children}
        </motion.div>

        <motion.div
          variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
          className="absolute inset-0 grid h-full place-content-center bg-neutral-950"
        >
          {children}
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
