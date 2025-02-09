import Link from "next/link";
import coursesData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import { SpotlightNew } from "./ui/spotlight-new";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image?: string;
}
const FeaturedCourses = () => {
  const featuredCourses = coursesData.courses.filter(
    (course: Course) => course.isFeatured
  );
  console.log(cn("text-red-500", "bg-blue-500")); // Should log "text-red-500 bg-blue-500"

  return (
    <div className="py-12 bg-gray-900/5 relative w-full overflow-hidden">
      <SpotlightNew/>
      <div className="text-center">
        <h1 className="text-base text-pink-400 font-semibold tracking-wide uppercase">
          Featured Courses
        </h1>
        <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Muses
        </p>
      </div>
      <div className="mt-10 mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm mb-6   text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link className="border-b-[1px]" href={`/courses/${course.slug}`}>
                 
                    Learn More
                 
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
        >
           <Button
                    borderRadius="1.75rem"
                    className="text-sm md:text-base bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    View All Courses
                  </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
