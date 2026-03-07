import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { PAGES_QUERY } from "@/sanity/lib/queries";
import { pageInfo } from "@/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages =
    await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
      PAGES_QUERY,
    );

  const pageEntries: MetadataRoute.Sitemap = pages
    .filter((page) => page.slug?.current)
    .map((page) => {
      const slug = page.slug.current;
      return {
        url: slug === "home" ? pageInfo.url : `${pageInfo.url}/${slug}`,
        lastModified: page._updatedAt,
        changeFrequency: slug === "home" ? "weekly" : "monthly",
        priority: slug === "home" ? 1 : 0.8,
      };
    });

  return pageEntries;
}
