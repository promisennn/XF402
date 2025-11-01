"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@xf402/ui/components/card";

const STAGGER = 25; // more dramatic vertical offset
const CENTER_STAGGER = -70; // pull center card upward a little more

interface Props {
  position: number;
  text: string;
  sub: string;
  handleMove: (p: number) => void;
  cardSize: number;
}

export const CarouselCard = ({
  position,
  text,
  sub,
  handleMove,
  cardSize,
}: Props) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className="absolute left-1/2 top-1/2 cursor-pointer"
      animate={{
        width: cardSize,
        height: cardSize *1.1,
        x: `calc(-50% + ${position * (cardSize / 1.1)}px)`, // more spacing between cards
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
      }}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
    >
      <Card
        className={`relative h-full flex flex-col px-4 py-8 transition-colors
          ${isActive ? "bg-background text-primary" : "bg-muted/50 text-muted-foreground/40"}`}
      >
        <CardHeader className="pb-6">
          <Image
            src="/logo.svg"
            alt={sub}
            data-active={isActive}
            className="w-12 h-auto data-[active=false]:opacity-10"
            width={100}
            height={100}

          />
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-8">
          <h3 className="text-base sm:text-xl font-semibold">{text}</h3>

          <p className="text-sm italic opacity-90 mt-auto">— {sub}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
