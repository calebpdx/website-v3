import { SanityDocument } from "next-sanity";
import ContentBox from "../ContentBox/ContentBox";
import DescriptiveCta from "../DescriptiveCta/DescriptiveCta";

const PageTemplate = ({ page }: { page: SanityDocument }) => {
  return (
    <main className="w-full flex flex-col flex-1 dark:text-neutral-50 text-neutral-900">
      <DescriptiveCta data={page.descriptiveCta} />
      <ContentBox content={page.content} />
    </main>
  );
};

export default PageTemplate;
