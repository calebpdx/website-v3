import { LinkType } from "@/sanity/types/navigation";

export interface HeaderProps {
  navigation: {
    includeLogo: boolean;
    links: LinkType[];
  };
}
