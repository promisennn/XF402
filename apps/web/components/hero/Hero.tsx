"use client";

import Left from "./Left";
import Right from "./Right";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen grid-cols-12 bg-background text-neutral-50 w-screen">
      <Left />
      <Right />
    </section>
  );
}
