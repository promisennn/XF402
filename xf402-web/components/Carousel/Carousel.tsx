"use client";

import { useLayoutEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselCard } from "./CarouselCard";
import FX402_DATA from "./data.json";

const CARD_SIZE_LG = 400;
const CARD_SIZE_SM = 400;
const SECTION_HEIGHT = 600;

export const Carousel = () => {
  const [cardSize, setCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(min-width: 640px)").matches
        ? CARD_SIZE_LG
        : CARD_SIZE_SM;
    }
    return CARD_SIZE_LG;
  });

  const [cards, setCards] = useState<typeof FX402_DATA>(FX402_DATA);

  const handleMove = useCallback(
    (position: number) => {
      const copy = [...cards];

      if (position > 0) {
        for (let i = position; i > 0; i--) {
          const firstEl = copy.shift();
          if (!firstEl) return;
          copy.push({ ...firstEl, tempId: Math.random() });
        }
      } else {
        for (let i = position; i < 0; i++) {
          const lastEl = copy.pop();
          if (!lastEl) return;
          copy.unshift({ ...lastEl, tempId: Math.random() });
        }
      }

      setCards(copy);
    },
    [cards]
  );

  useLayoutEffect(() => {
    // Only update card size in response to a change event, NOT directly in the effect
    const mq = window.matchMedia("(min-width: 640px)");

    const handleSetCardSize = () => {
      setCardSize(mq.matches ? CARD_SIZE_LG : CARD_SIZE_SM);
    };

    // Listen to media query changes for responsive card size
    if (mq.addEventListener) {
      mq.addEventListener("change", handleSetCardSize);
    } else {
      // Fallback for older browsers
      window.addEventListener("resize", handleSetCardSize);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleSetCardSize);
      } else {
        window.removeEventListener("resize", handleSetCardSize);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-white py-48 mb-12"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {cards.map((t, idx) => {
        let position = 0;

        if (cards.length % 2) {
          position = idx - (cards.length + 1) / 2;
        } else {
          position = idx - cards.length / 2;
        }

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
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
