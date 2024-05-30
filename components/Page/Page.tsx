import { SanityDocument } from "next-sanity";
import ContentBox from "../ContentBox/ContentBox";

const PageTemplate = ({ page }: { page: SanityDocument }) => {
  return (
    <main className="container lg:mx-auto flex flex-col flex-1 dark:text-neutral-50 text-neutral-900 px-10">
      <ContentBox content={page.content} />
    </main>
  );
};

export default PageTemplate;
