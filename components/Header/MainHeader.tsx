"use client";

import { cn } from "@/utils/cn";
import { Navigation } from "../Navigation";
import { MainHeaderProps } from "./types";
import { GradientHoverLink } from "../ui";

const MainHeader = ({ navigation }: MainHeaderProps) => {
  return (
    <header className="w-full bg-primary-light dark:bg-black flex flex-col items-center">
      <Navigation data={navigation} />
      <div
        className={cn(
          "container my-16 px-4 w-full flex flex-col items-center",
          "lg:px-0 lg:my-40",
          "xl:max-w-7xl",
        )}
      >
        <p
          className={cn(
            "text-5xl text-primary-dark dark:text-primary-light font-montserrat leading-relaxed",
            "xl:text-8xl xl:leading-[95pt]",
          )}
        >
          Hey, I&apos;m{" "}
          <GradientHoverLink href="#about">Caleb</GradientHoverLink>. I&apos;m a{" "}
          <GradientHoverLink href="#experience">
            Software Engineer
          </GradientHoverLink>{" "}
          from the Pacific Northwest{" "}
          <GradientHoverLink href="#about">building</GradientHoverLink> web
          experiences, applications, and{" "}
          <GradientHoverLink href="#blog">more</GradientHoverLink>.
        </p>
      </div>
    </header>
  );
};

export default MainHeader;
