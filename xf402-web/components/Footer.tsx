"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="h-screen bg-primary relative">
      <Copy />
      <WatermarkWrapper />
    </section>
  );
};

const Copy = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999999]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 px-16 pb-16">
        <div>
          <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-white md:text-8xl">
            FX402
          </h1>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-md">
              <Link target="_blank" href="https://github.com/coinbase/x402">
                powered by X402
              </Link>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              <Link href="/docs">Read the Docs</Link>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              <Link target="_blank" href="https://x.com/xf402">
                X
              </Link>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              <Link target="_blank" href="https://github.com/promisennn/XF402">
                Github
              </Link>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              <Link target="_blank" href="https://x.com/xf402">
                Token
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="READ THE DOCS" />
      <Watermark text="GET INSPIRED" reverse />
      <Watermark text="BUILD NOW" />
      <Watermark text="READ THE DOCS" reverse />
    </>
  );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-white/2">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-white/2">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};
