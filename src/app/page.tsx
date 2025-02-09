import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MovingCardContainer from "@/components/MovingCardContainer";
import StickySaScroll from "@/components/StickySaScroll";
import Teachers from "@/components/Teachers";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.8] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        <StickySaScroll/>
        <MovingCardContainer/>
        <UpcomingWebinars/>
        <Teachers/>
        <Footer/>
      </main>
    </>
  );
}
