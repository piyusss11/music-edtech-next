import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";
import webinarsData from "@/data/dance_webinars.json";

const UpcomingWebinars = () => {
  const featuredWebinars = webinarsData.data;
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
