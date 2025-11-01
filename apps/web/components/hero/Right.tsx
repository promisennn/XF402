"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Buttons from "./Buttons";
import content from "./content.json";

export default function Right() {
  const [idx, setIdx] = useState(0);

  return (
    <div className="flex flex-col justify-between md:col-span-6 col-span-12 min-h-[30vh]">
      <div className="relative h-full overflow-hidden">
        {content.map((text, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              opacity: idx === i ? 1 : 0,
              y: idx === i ? 0 : 24,
              filter: idx === i ? "blur(0px)" : "blur(2px)"
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            style={{ pointerEvents: idx === i ? "all" : "none" }}
            className="absolute inset-0 z-10 flex flex-col justify-start md:justify-center items-center space-y-3 px-6 text-base font-light leading-relaxed text-neutral-400 md:px-12 md:text-lg"
          >
            <p>
              <span className="text-white text-2xl font-black">{text}</span>
            </p>
          </motion.div>
        ))}

        <span className="pointer-events-none absolute right-10 bottom-10 z-0 text-7xl text-white">
          {idx + 1}/{content.length}
        </span>
      </div>

      <Buttons idx={idx} setIdx={setIdx} total={content.length} />
    </div>
  );
}
