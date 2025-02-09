import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Foundations of Music Theory",
      description:
        "Explore the core principles of music theory to strengthen your understanding and creativity.",
      slug: "foundations-of-music-theory",
      isFeatured: true,
    },
    {
      title: "Songwriting Mastery",
      description:
        "Discover the secrets of crafting compelling songs with guidance from industry professionals.",
      slug: "songwriting-mastery",
      isFeatured: true,
    },
    {
      title: "Elevate Your Instrument Skills",
      description:
        "Take your playing to the next level with expert-led techniques and practice strategies.",
      slug: "elevate-your-instrument-skills",
      isFeatured: true,
    },
    {
      title: "Music Production for Beginners",
      description:
        "Kickstart your journey in music production with hands-on insights and essential tools.",
      slug: "music-production-for-beginners",
      isFeatured: true,
    },
    {
      title: "Stage Presence & Live Performance",
      description:
        "Learn how to captivate your audience and refine your stage performance techniques.",
      slug: "stage-presence-live-performance",
      isFeatured: true,
    },
    {
      title: "Music Marketing in the Digital Age",
      description:
        "Master the strategies to grow your audience and promote your music online effectively.",
      slug: "music-marketing-digital-age",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900/5 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-base text-pink-400 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="mt-10">
        <HoverEffect
          key={1}
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: `/`,
          }))}
        />
      </div>
      <div className="mt-10 text-center">
        <Link href="/">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All webinars
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
