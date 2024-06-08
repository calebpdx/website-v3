import { SanityDocument } from "next-sanity";
import ContentBox from "../ContentBox/ContentBox";

const PageTemplate = ({ page }: { page: SanityDocument }) => {
  return (
    <main className="w-full h-screen flex flex-col flex-1 dark:text-neutral-50 text-neutral-900">
      <ContentBox content={page.content} />
    </main>
  );
};

export default PageTemplate;
