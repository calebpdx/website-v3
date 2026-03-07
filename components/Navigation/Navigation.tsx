import { LinkType } from "@/sanity/types/navigation";
import NavigationHeader from "./NavigationHeader";

const Navigation = async ({
  data,
}: {
  data: {
    includeLogo: boolean;
    links: LinkType[];
  };
}) => {
  return <NavigationHeader data={data} />;
};

export default Navigation;
