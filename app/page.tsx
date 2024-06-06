import { Navigation, Footer, PageTemplate } from "@/components";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import MainHeader from "@/components/Header/MainHeader";

export default async function Home() {
  const page = await client.fetch<Page>(HOMEPAGE_QUERY);

  console.log("page data", page);

  return (
    <>
      {/* {page?.navigation && <Navigation data={page.navigation} />} */}
      <MainHeader navigation={page.navigation} />
      {page?.title && <PageTemplate page={page} />}
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Populate me with Sanity Content
      </main> */}
      {page?.footer && <Footer data={page.footer} />}
    </>
  );
}
