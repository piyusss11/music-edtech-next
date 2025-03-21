"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="pink" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Unleash Your Dance Potential
        </h1>
        <p className="mt-4 font-normal text-sm md:text-lg text-neutral-300 max-w-lg mx-auto">
          Embark on a transformative dance journey with our expertly crafted
          courses. Whether you&apos;re just stepping onto the dance floor or
          refining your technique, explore the movements, rhythms, and styles
          that will elevate your performance.
        </p>
        <div className="mt-10 ">
          <Link href="/courses">
            {" "}
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
