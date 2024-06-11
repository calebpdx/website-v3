import { LinkType } from "@/sanity/types/navigation";

export interface MainHeaderProps {
  navigation: {
    includeLogo: boolean;
    links: LinkType[];
  };
}
