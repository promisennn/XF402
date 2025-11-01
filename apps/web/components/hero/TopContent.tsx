"use client";

import { Button } from "@xf402/ui/components/button";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function TopContent() {
  return (
    <section className="relative overflow-hidden pb-0 md:pb-10 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto text-center px-6 md:px-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs tracking-widest uppercase font-semibold text-muted-foreground"
        >
          Rentable Smart Assets
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl font-black uppercase leading-[1.1] tracking-tight mt-4"
        >
          <span className="bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(255,255,255,0.2)]">
            XF402
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-2xl md:text-5xl uppercase font-semibold mt-3"
        >
          Rent. Access. Own Less.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto"
        >
          Built on x402 & Solana. Create time-based access rights directly in
          your contracts or APIs — no custodial enforcement. Rent rights, not
          tokens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          <Button
            asChild
            className="gap-1 flex items-center w-fit text-base px-7 py-6 rounded-xl"
          >
            <Link href="/demo">
              Launch Demo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="gap-1 flex items-center w-fit text-base px-7 py-6 rounded-xl"
            onClick={() =>
              document
                .getElementById("carousel-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore More
            <ChevronDown className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
