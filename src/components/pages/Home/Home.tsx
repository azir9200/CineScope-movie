import HeroSection from "@/components/folders/HeroSection/HeroSection";
import TopMovies from "@/components/folders/TopMovies/TopMovies";

export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <TopMovies />
    </div>
  );
}
