import Hero from "@/components/hero/Hero";
import { AboutFeatures } from "@/components/about-features";
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center font-sans">
      <Hero />
      <AboutFeatures />
    </div>
  );
}
