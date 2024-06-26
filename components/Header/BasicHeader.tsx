"use client";

import { HeaderProps } from "./types";
import NavigationHeader from "@/components/Navigation/NavigationHeader";

const BasicHeader = ({ navigation }: HeaderProps) => {
  return (
    <header className="w-full bg-primary-light dark:bg-black flex flex-col items-center pb-10">
      <NavigationHeader data={navigation} />
    </header>
  );
};

export default BasicHeader;
