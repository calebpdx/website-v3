import {
  Navigation as NavigationType,
  LinkType,
} from "@/sanity/types/navigation";
import Image from "next/image";
import { CustomLink } from "../CustomLink";

const MainNavigation = ({ data }: { data: NavigationType }) => {
  console.log("Navigation data", data);
  return (
    <header className="container mx-auto py-4 flex justify-between dark:text-neutral-200">
      {data.includeLogo && (
        <div>
          <Image
            src="/signature.png"
            height={50}
            width={110}
            alt="Caleb White signature Logo"
          />
        </div>
      )}
      {data.links && data.links.length && (
        <nav className="flex items-center">
          <ul className="flex gap-4">
            {data.links.map((link: LinkType, index: number) => {
              // link type is a reference to a button
              if (!!link._type && link._type.toString() === "button") {
                return (
                  <li key={`${link.title}-${index}`}>
                    <button className="btn">{link.title}</button>
                  </li>
                );
              }

              // link type is a reference to a customUrl (anchor, external link, or page reference)
              if (!!link._type && link._type.toString() === "customUrl") {
                return (
                  <li key={`${link.title}-${index}`}>
                    <CustomLink data={link} />
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainNavigation;
