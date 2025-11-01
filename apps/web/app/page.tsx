import Hero from "@/components/hero/Hero";
import { Carousel } from "@/components/carousel/Carousel";
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center font-sans">
      <Hero />
      <Carousel />
    </div>
  );
}
