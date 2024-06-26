import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";

const ChangeLog = dynamic(() => import("@/components/ChangeLog/ChangeLog"));

const ClientCloud = dynamic(
  () => import("@/components/ClientCloud/ClientCloud"),
);

const BasicHeroCta = dynamic(
  () => import("@/components/BasicHeroCta/BasicHeroCta"),
);

const DescriptiveCta = dynamic(
  () => import("@/components/DescriptiveCta/DescriptiveCta"),
);

const Experience = dynamic(() => import("@/components/Experience/Experience"));

const Recommendations = dynamic(
  () => import("@/components/Recommendations/Recommendations"),
);

const TagCta = dynamic(() => import("@/components/TagCta/TagCta"));

const ContentBox = ({ content }: { content: SanityDocument[] }) => {
  return (
    <>
      {content.map((item) => {
        switch (item._type) {
          case "changeLog":
            return <ChangeLog key={item._id} data={item} />;
          case "clientCloud":
            return <ClientCloud key={item._id} data={item} />;
          case "basicHeroCta":
            return <BasicHeroCta key={item._id} data={item} />;
          case "descriptiveCta":
            return <DescriptiveCta key={item._id} data={item} />;
          case "experience":
            return <Experience key={item._id} data={item} />;
          case "recommendations":
            return <Recommendations key={item._id} data={item} />;
          case "tagCta":
            return <TagCta key={item._id} data={item} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentBox;
