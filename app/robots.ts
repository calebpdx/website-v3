import type { MetadataRoute } from "next";
import { pageInfo } from "@/utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: `${pageInfo.url}/sitemap.xml`,
  };
}
