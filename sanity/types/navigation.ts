import { Slug } from "sanity";

export interface Navigation {
  _id: string;
  _type: "navigation";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  internalName: string;
  includeLogo: boolean;
  links: LinkType[];
}

type LinkArray = Page | LinkType;

export interface LinkType {
  _id: string;
  _rev: string;
  _type: "link";
  _updatedAt: string;
  _createdAt: string;
  title: string;
  slug: Slug;
  internalName: string;
  navigation: {};
}
