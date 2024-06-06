import {
  Navigation as NavigationProps,
  LinkType,
} from "@/sanity/types/navigation";
import Image from "next/image";
import { CustomLink } from "../CustomLink";

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
      {data.links && data.links.length && (
        <nav className="flex items-center">
          <ul className="flex gap-6">
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
    </div>
  );
};

export default NavigationHeader;
