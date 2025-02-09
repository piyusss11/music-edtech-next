
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const StickySaScroll = () => {
  const musicContent = [
    {
      title: "Unlock Your Musical Potential",
      description:
        "Step into a world where your musical passion meets expert guidance. Whether you're starting fresh or refining your skills, our structured lessons and hands-on practice will elevate your artistry to new heights.",
    },
    {
      title: "Craft Your Unique Sound",
      description:
        "Every musician has a story—let us help you write yours. Explore a variety of styles and techniques, shaping your own signature sound through personalized instruction and immersive practice.",
    },
    {
      title: "From Beginner to Virtuoso",
      description:
        "No matter where you are in your musical journey, we provide the tools and mentorship to help you grow. Master the fundamentals, build confidence, and develop the skills to perform like a pro.",
    },
    {
      title: "Interactive Lessons for Deeper Learning",
      description:
        "Learn by doing with our engaging, hands-on approach. Get instant feedback, collaborate with peers, and refine your technique with real-world applications of music theory and performance.",
    },
    {
      title: "Stay Ahead with Modern Music Trends",
      description:
        "Our curriculum adapts to the latest industry trends and innovations, keeping you at the forefront of music education. From classical fundamentals to contemporary production, we cover it all.",
    },
    {
      title: "Endless Exploration, Infinite Creativity",
      description:
        "With access to an ever-growing collection of courses, workshops, and resources, there’s always something new to discover. Keep pushing boundaries and expanding your musical horizons.",
    },
  ];
  return (
    <div className="h-full">
      <StickyScroll content={musicContent} />
    </div>
  );
};

export default StickySaScroll;
