"use client";

import { CustomLink } from "../CustomLink";
import { LinkType } from "@/sanity/types/navigation";

const NavLink = ({ link }: { link: LinkType }) => {
  switch (link._type.toString()) {
    case "button":
      return <button className="btn">{link.name}</button>;
    case "customUrl":
      return <CustomLink data={link} />;
    default:
      break;
  }
};

export default NavLink;
