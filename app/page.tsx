import { client } from "@/sanity/lib/client";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import MainHeader from "@/components/Header/MainHeader";
import { PageTemplate } from "@/components/Page";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const page = await client.fetch<Page>(HOMEPAGE_QUERY);

  // console.log("PAGE QUERY", page);

  return (
    <>
      <MainHeader navigation={page.navigation} />
      {page?.title && <PageTemplate page={page} />}
      {page?.footer && <Footer data={page.footer} />}
    </>
  );
}
