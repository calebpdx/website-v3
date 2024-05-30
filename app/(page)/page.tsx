import { SanityDocument } from "next-sanity";

import { PageTemplate } from "@/components";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const page = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
  });

  return <PageTemplate page={page} />;
}
