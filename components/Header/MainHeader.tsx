"use client";

import { cn } from "@/utils/cn";
import { HeaderProps } from "./types";
import { GradientHoverLink } from "@/components/GradientHoverLink";
import NavigationHeader from "@/components/Navigation/NavigationHeader";

const MainHeader = ({ navigation }: HeaderProps) => {
  return (
    <header className="w-full bg-primary-light dark:bg-black flex flex-col items-center">
      <NavigationHeader data={navigation} />
      <div
        className={cn(
          "container my-16 px-8 md:px-2 2xl:px-0 w-full flex flex-col items-center",
          "lg:px-0 lg:my-40",
          "lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
        )}
      >
        <p
          className={cn(
            "text-4xl text-primary-dark dark:text-primary-light font-montserrat leading-relaxed lg:text-5xl",
            "2xl:text-8xl lg:leading-relaxed 2xl:leading-normal ",
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
          <GradientHoverLink href="#blog">more</GradientHoverLink>
        </p>
      </div>
    </header>
  );
};

export default MainHeader;
