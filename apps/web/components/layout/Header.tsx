"use client";

import { cn } from "@xf402/ui/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        scale: scrolled ? 1 : 0.98,
        y: scrolled ? 0 : 6,
        boxShadow: scrolled
          ? "0 8px 25px rgba(0,0,0,0.22)"
          : "0 4px 12px rgba(0,0,0,0.08)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        "w-[92%] md:w-[70%] lg:w-[60%]",
        "rounded-2xl border border-border/40",
        "bg-background/70 backdrop-blur-xl"
      )}
    >
      <div className="flex items-center justify-between h-[70px] px-6">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="XF402 Logo"
            className="h-8 w-auto"
            width={100}
            height={100}
          />
        </Link>

        <nav className="flex gap-5 text-sm text-white">
          <Link href="/docs" className="hover:opacity-80 hover:underline">
            Docs
          </Link>
          <Link href="/demo" className="hover:opacity-80 hover:underline">
            Try it out
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};
