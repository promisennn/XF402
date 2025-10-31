"use client";

import { motion, MotionConfig } from "motion/react";
import React, {
  Dispatch,
  SetStateAction,
  useState,
  MouseEventHandler,
} from "react";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mx-auto grid min-h-screen grid-cols-12 bg-primary text-neutral-50 w-screen">
      <Left />
      <Right />
    </section>
  );
};

const Left = () => (
  <div className="col-span-12 flex flex-col justify-between border-r border-neutral-700 md:col-span-6 min-h-[50vh]">
    <div className="px-6 py-10 md:px-12 md:py-16 space-y-4">
      <Image
        src="/logo.svg"
        alt="XF402 Logo"
        width={100}
        height={100}
        className="h-auto w-24 mb-14"
      />
      <h1 className="text-4xl uppercase leading-tight md:text-7xl md:leading-tight text-white font-black">
        XF402
      </h1>
      <p className="text-2xl uppercase leading-tight md:text-5xl md:leading-tight font-semibold">
        Rent. Access. Own Less.
      </p>
      <p className="text-lg  leading-relaxed md:text-2xl ">
        Built on x402 and Solana. Define pay-per-duration tiers directly in your
        smart contracts or APIs with no custodial enforcement required. Rent rights,
        not tokens.
      </p>
    </div>
    <SocialButtons />
  </div>
);

const Right = () => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="flex flex-col justify-between md:col-span-6 col-span-12 min-h-[50vh]">
      <div className="relative h-full overflow-hidden">
        {CONTENT.map((c, itemIdx) => {
          return (
            <motion.div
              initial={false}
              animate={{
                opacity: idx === itemIdx ? 1 : 0,
                y: idx === itemIdx ? 0 : 24,
                filter: idx === itemIdx ? "blur(0px)" : "blur(2px)",
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
              }}
              style={{
                pointerEvents: idx === itemIdx ? "all" : "none",
              }}
              className="absolute inset-0 z-10 grid place-content-center space-y-3 px-6 text-base font-light leading-relaxed text-neutral-400 md:px-12 md:text-lg"
              key={itemIdx}
            >
              {c.content}
            </motion.div>
          );
        })}

        <span className="pointer-events-none absolute right-10 bottom-10 z-0 text-7xl text-white">
          {idx + 1}/{CONTENT.length}
        </span>
      </div>

      <Buttons idx={idx} setIdx={setIdx} />
    </div>
  );
};

const Buttons = ({
  idx,
  setIdx,
}: {
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="relative grid h-10 grid-cols-2">
      <ShiftButton
        onClick={() => {
          setIdx((pv) => {
            if (pv === 0) {
              return CONTENT.length - 1;
            } else {
              return pv - 1;
            }
          });
        }}
        topDivClasses="bg-neutral-900"
        bottomDivClasses="bg-neutral-950 h-10"
        btnClasses="h-10"
      >
        <ChevronLeft className="mx-auto text-xl" />
      </ShiftButton>
      <ShiftButton
        topDivClasses="bg-neutral-900"
        btnClasses="h-10"
        bottomDivClasses="bg-neutral-950 h-10"
        onClick={() => {
          setIdx((pv) => {
            if (pv === CONTENT.length - 1) {
              return 0;
            } else {
              return pv + 1;
            }
          });
        }}
      >
        <ChevronRight className="mx-auto text-xl" />
      </ShiftButton>

      <motion.span
        key={idx}
        initial={{
          width: "0%",
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          duration: 12,
          ease: "linear",
        }}
        onAnimationComplete={() => {
          setIdx((pv) => {
            if (pv === CONTENT.length - 1) {
              return 0;
            } else {
              return pv + 1;
            }
          });
        }}
        className="pointer-events-none absolute -top-[1px] bottom-0 z-20 bg-neutral-600/10"
      />
    </div>
  );
};

const SocialButtons = ({}) => {
  return (
    <div className="relative flex items-center justify-center bg-white h-10">
      <h1 className="text-black text-sm">Explore More</h1>
      <ChevronDown className="w-4 h-4 text-black" />
    </div>
  );
};

const ShiftButton = ({
  onClick,
  children,
  btnClasses,
  topDivClasses,
  bottomDivClasses,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  btnClasses?: string;
  topDivClasses?: string;
  bottomDivClasses?: string;
}) => {
  return (
    <MotionConfig
      transition={{
        ease: "circOut",
        duration: 0.25,
      }}
    >
      <motion.button
        initial="initial"
        whileHover="hovered"
        className={twMerge(
          "relative overflow-hidden transition-colors border-none outline-none",
          btnClasses
        )}
        onClick={onClick}
      >
        <motion.div
          variants={{
            initial: {
              y: "0%",
            },
            hovered: {
              y: "-100%",
            },
          }}
          className={twMerge(
            "grid h-full place-content-center bg-neutral-950",
            topDivClasses
          )}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            initial: {
              y: "100%",
            },
            hovered: {
              y: "0%",
            },
          }}
          className={twMerge(
            "absolute inset-0 grid h-full place-content-center",
            bottomDivClasses
          )}
        >
          {children}
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};
const CONTENT = [
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">on-chain subscriptions</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">renting NFTs</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">temporary access rights</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">collectible licensing</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">micro-ownership</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">pay-per-use NFTs</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">time-limited digital assets</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">rentable event tickets</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">agent-to-agent payments</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">AI-driven licensing</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">web-native rentals</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">dynamic NFT utilities</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">creator access passes</span>
          </span>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          <span className="text-white text-2xl">
            The first open protocol for{" "}
            <span className="font-black">permissioned media</span>
          </span>
        </p>
      </>
    ),
  },
];
