import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/Carousel/Carousel";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center font-sans">
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}
