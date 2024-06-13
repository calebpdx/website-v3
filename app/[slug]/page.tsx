import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { PageTemplate } from "@/components/Page";
import { Footer } from "@/components/Footer";
import BasicHeader from "@/components/Header/BasicHeader";

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await client.fetch<Page>(PAGE_QUERY, { slug: params.slug });

  console.log("PAGE QUERY", page);

  if (!page) {
    throw new Error("Page not found");
  }

  return (
    <>
      <BasicHeader navigation={page.navigation} />
      {page && <PageTemplate page={page} />}
      {page?.footer ? <Footer data={page.footer} /> : null}
    </>
  );
};

export default Page;
