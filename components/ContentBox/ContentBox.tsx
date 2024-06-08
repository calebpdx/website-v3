import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";

export const ClientCloud = dynamic(
  () => import("@/components/ClientCloud/ClientCloud"),
);

export const BasicHeroCta = dynamic(
  () => import("@/components/BasicHeroCta/BasicHeroCta"),
);

export const DescriptiveCta = dynamic(
  () => import("@/components/DescriptiveCta/DescriptiveCta"),
);

export const Recommendations = dynamic(
  () => import("@/components/Recommendations/Recommendations"),
);

const ContentBox = ({ content }: { content: SanityDocument[] }) => {
  return (
    <>
      {content.map((item) => {
        switch (item._type) {
          case "clientCloud":
            return <ClientCloud key={item._id} data={item} />;
          case "basicHeroCta":
            return <BasicHeroCta key={item._id} data={item} />;
          case "descriptiveCta":
            return <DescriptiveCta key={item._id} data={item} />;
          case "recommendations":
            return <Recommendations key={item._id} data={item} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentBox;
