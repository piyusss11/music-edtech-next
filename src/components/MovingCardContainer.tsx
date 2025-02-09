import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MovingCardContainer = () => {
  const testimonials = [
    {
      quote:
        "Enrolling in this music academy was the best decision for my growth as a musician. The guidance and expertise of the instructors have truly refined my technique.",
      name: "Daniel Carter",
      title: "Drum Student",
    },
    {
      quote:
        "This school fosters an environment where creativity thrives. I’ve gained invaluable skills, not only in playing the piano but also in composing my own pieces.",
      name: "Sophia Martinez",
      title: "Piano Student",
    },
    {
      quote:
        "I never imagined I could feel so confident in my singing. The personalized coaching here has helped me reach new heights as a vocalist.",
      name: "Ryan Williams",
      title: "Vocal Student",
    },
    {
      quote:
        "The mentorship I received has completely changed the way I approach the violin. My playing has improved dramatically, and I feel more connected to my music.",
      name: "Olivia Bennett",
      title: "Violin Student",
    },
    {
      quote:
        "The music production courses exceeded my expectations! I now have a solid foundation in mixing, mastering, and producing my own tracks.",
      name: "Nathan Roberts",
      title: "Music Production Student",
    },
  ];

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
