"use client";

import { useLayoutEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import XF402_DATA from "./data.json";
import { CarouselCard } from "./card";
import { Button } from "@xf402/ui/components/button";

const CARD_SIZE_LG = 400;
const CARD_SIZE_SM = 350;
const SECTION_HEIGHT = 700;

export const AboutFeatures = () => {
  const [cardSize, setCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(min-width: 640px)").matches
        ? CARD_SIZE_LG
        : CARD_SIZE_SM;
    }
    return CARD_SIZE_LG;
  });

  const [cards, setCards] = useState<typeof XF402_DATA>(XF402_DATA);

  const handleMove = useCallback((position: number) => {
    setCards((prev) => {
      const copy = [...prev];

      if (position > 0) {
        for (let i = position; i > 0; i--) {
          const el = copy.shift();
          if (!el) break;
          copy.push({ ...el, tempId: Math.random() });
        }
      } else {
        for (let i = position; i < 0; i++) {
          const el = copy.pop();
          if (!el) break;
          copy.unshift({ ...el, tempId: Math.random() });
        }
      }

      return copy;
    });
  }, []);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");

    const handleSetCardSize = () =>
      setCardSize(mq.matches ? CARD_SIZE_LG : CARD_SIZE_SM);

    mq.addEventListener("change", handleSetCardSize);
    return () => mq.removeEventListener("change", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-background py-48 mb-12"
      style={{ height: SECTION_HEIGHT }}
      id="carousel-section"
    >
      {cards.map((t, idx) => {
        const center =
          cards.length % 2 ? (cards.length + 1) / 2 : cards.length / 2;
        const position = idx - center;

        return (
          <CarouselCard
            key={t.tempId}
            text={t.text}
            sub={t.sub}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-xl bg-background/40 backdrop-blur-md border-border/40 hover:bg-background/70"
          onClick={() => handleMove(-1)}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-xl bg-background/40 backdrop-blur-md border-border/40 hover:bg-background/70"
          onClick={() => handleMove(1)}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};
