"use client";

import BottomContent from "./BottomContent";
import TopContent from "./TopContent";
import Particles from "../particles";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background text-neutral-50 w-screen py-32 md:py-40">
      <Particles className="absolute inset-0 h-screen" quantity={50} />
      <TopContent />
      <BottomContent />
    </section>
  );
}
