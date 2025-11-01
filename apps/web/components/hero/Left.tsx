import Image from "next/image";
import { Button } from "@xf402/ui/components/button";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Left() {
  return (
    <div className="col-span-12 flex flex-col justify-between border-r border-border md:col-span-6 min-h-[50vh]">
      <div className="px-6 py-10 md:px-12 md:py-16 space-y-4 text-foreground">
        <Image
          src="/logo.svg"
          alt="XF402 Logo"
          width={100}
          height={100}
          className="h-auto w-24 mb-14"
        />
        <h1 className="text-4xl uppercase leading-tight md:text-7xl md:leading-tight font-black">
          XF402
        </h1>
        <p className="text-2xl uppercase leading-tight md:text-5xl md:leading-tight font-semibold">
          Rent. Access. Own Less.
        </p>
        <p className="text-lg leading-relaxed md:text-2xl">
          Built on x402 and Solana. Define pay-per-duration tiers directly in
          your smart contracts or APIs with no custodial enforcement required.
          Rent rights, not tokens.
        </p>
        <Button
          asChild
          variant="secondary"
          className="mt-8 gap-1 flex items-center w-fit"
        >
          <Link href="/demo">
            Get Started <ChevronRight className="w-auto h-4" />
          </Link>
        </Button>
      </div>

      <div
        className="relative hidden md:flex items-center justify-center bg-white h-10 cursor-pointer"
        onClick={() => {
          document.getElementById("carousel-section")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <h1 className="text-primary-foreground text-sm">Explore More</h1>
        <ChevronDown className="w-4 h-4 text-primary-foreground" />
      </div>
    </div>
  );
}
