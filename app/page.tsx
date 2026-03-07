import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import MainHeader from "@/components/Header/MainHeader";
import { PageTemplate } from "@/components/Page";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const page = await client.fetch<Page>(HOMEPAGE_QUERY);


  if (!page) {
    notFound();
  }

  return (
    <>
      <MainHeader navigation={page.navigation} />
      <PageTemplate page={page} />
      {page.footer && <Footer data={page.footer} />}
    </>
  );
}
