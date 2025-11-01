"use client";

import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ShiftButton from "./ShiftButton";

export default function Buttons({
  idx,
  setIdx,
  total
}: {
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
  total: number;
}) {
  return (
    <div className="relative grid h-10 grid-cols-2">
      <ShiftButton onClick={() => setIdx(idx === 0 ? total - 1 : idx - 1)}>
        <ChevronLeft className="mx-auto text-xl" />
      </ShiftButton>

      <ShiftButton onClick={() => setIdx(idx === total - 1 ? 0 : idx + 1)}>
        <ChevronRight className="mx-auto text-xl" />
      </ShiftButton>

      <motion.span
        key={idx}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 12, ease: "linear" }}
        onAnimationComplete={() => setIdx(idx === total - 1 ? 0 : idx + 1)}
        className="pointer-events-none absolute -top-px bottom-0 z-20 bg-neutral-600/10"
      />
    </div>
  );
}
