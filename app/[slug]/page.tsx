import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries";
import { PageTemplate } from "@/components/Page";
import { Footer } from "@/components/Footer";
import BasicHeader from "@/components/Header/BasicHeader";
import { pageInfo } from "@/utils/constants";

export async function generateStaticParams() {
  const pages =
    await client.fetch<{ slug: { current: string } }[]>(PAGES_QUERY);

  return pages
    .filter((page) => page.slug?.current && page.slug.current !== "home")
    .map((page) => ({
      slug: page.slug.current,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await client.fetch<Page>(PAGE_QUERY, { slug });

  if (!page) {
    return {};
  }

  const title = page.title || slug.replace(/-/g, " ");

  return {
    title,
    alternates: {
      canonical: `${pageInfo.url}/${slug}`,
    },
    openGraph: {
      title,
      url: `${pageInfo.url}/${slug}`,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = await client.fetch<Page>(PAGE_QUERY, { slug });

  if (!page) {
    notFound();
  }

  return (
    <>
      <BasicHeader navigation={page.navigation} />
      <PageTemplate page={page} />
      {page.footer && <Footer data={page.footer} />}
    </>
  );
};

export default Page;
