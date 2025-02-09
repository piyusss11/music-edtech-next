import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonialsData from "@/data/dance_testimonials.json";
const MovingCardContainer = () => {
  const testimonials = testimonialsData.data;

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-8 z-10">
        Hear our students speak
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCardContainer;
