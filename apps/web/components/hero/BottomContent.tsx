"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@xf402/ui/components/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import content from "./content.json";

export default function BottomContent() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((prev) => (prev + 1) % content.length);
  const prev = () =>
    setIdx((prev) => (prev - 1 + content.length) % content.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % content.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-between max-w-7xl mx-auto h-full px-8">
      <div className="relative h-[180px] w-full">
        {content.map((text, i) => {
          const isActive = idx === i;
          return (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center text-center"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 26,
                filter: isActive ? "blur(0px)" : "blur(3px)",
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p className="text-xl md:text-3xl font-bold text-white max-w-2xl">
                {text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col items-center gap-8">
        {/* Pagination */}
        <div className="flex items-center gap-6 text-white/80">
          <span className="text-3xl md:text-5xl font-light">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="opacity-50 text-lg">/</span>
          <span className="opacity-50 text-2xl">
            {String(content.length).padStart(2, "0")}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl bg-background/40 backdrop-blur-md border-border/40 hover:bg-background/70"
            onClick={prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-xl bg-background/40 backdrop-blur-md border-border/40 hover:bg-background/70"
            onClick={next}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-2.5">
          {content.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: idx === i ? 28 : 8,
                opacity: idx === i ? 1 : 0.4,
              }}
              className="h-2 rounded-full bg-white"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          ))}
        </div>
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="text-muted-foreground text-sm mt-4"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
