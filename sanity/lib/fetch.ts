import type { ClientPerspective, QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import { client } from "./client";
import { token } from "./token";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  perspective,
  stega,
}: {
  query: string;
  params?: QueryParams;
  perspective?: Omit<ClientPerspective, "raw">;
  stega?: boolean;
}) {
  const { isEnabled } = await draftMode();
  if (perspective === undefined) {
    perspective = isEnabled ? "previewDrafts" : "published";
  }
  if (stega === undefined) {
    stega =
      perspective === "previewDrafts" || process.env.VERCEL_ENV === "preview";
  }
  if (perspective === "previewDrafts") {
    return client.fetch<QueryResponse>(query, params, {
      stega,
      perspective: "previewDrafts",
      token,
      useCdn: false,
      next: { revalidate: 0 },
    });
  }
  return client.fetch<QueryResponse>(query, params, {
    stega,
    perspective: "published",
    useCdn: true,
    next: { revalidate: 60 },
  });
}
