import { SanityDocument } from "next-sanity";

export interface Navigation {
  // _id: string;
  // _type: "navigation";
  // _rev: string;
  // _createdAt: string;
  // _updatedAt: string;
  // internalName: string;
  includeLogo: boolean;
  links: LinkType[];
}

type LinkArray = Page | LinkType;

export interface LinkType extends SanityDocument {
  name?: string;
  anchor?: string;
}
