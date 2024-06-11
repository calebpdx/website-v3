"use client";

import { Navigation as NavigationProps } from "@/sanity/types/navigation";
import Image from "next/image";
import NavBar from "./NavBar";

const NavigationHeader = ({ data }: { data: NavigationProps }) => {
  return (
    <div className="container mx-auto pt-8 flex justify-between dark:text-neutral-200">
      {data.includeLogo && (
        <>
          <Image
            src="/signature-v3.png"
            height={80}
            width={195}
            className="dark:hidden"
            alt="Caleb White signature Logo"
          />
          <Image
            src="/signature-v3-darkmode.png"
            height={80}
            width={195}
            className="hidden dark:block"
            alt="Caleb White signature Logo"
          />
        </>
      )}
      {data.links && data.links.length && <NavBar data={data.links} />}
    </div>
  );
};

export default NavigationHeader;
