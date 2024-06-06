"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

const GradientHoverLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <motion.a
      href={href}
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileHover={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
        delay: 0.1,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `border-b-4 leading-0 border-dashed border-neutral-300 relative inline-block py-1 px-2 bg-gradient-to-r from-teal-200 to-purple-300 duration-300 transition-transform ease-in-out`,
        "dark:border-neutral-600 dark:from-indigo-500 dark:to-purple-500",
        "hover:rounded-lg hover:border-none",
      )}
    >
      {children}
    </motion.a>
  );
};

export default GradientHoverLink;
