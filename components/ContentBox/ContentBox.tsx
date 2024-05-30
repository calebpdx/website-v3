import { SanityDocument } from "next-sanity";
import { ClientCloud, BasicHeroCta } from "./ContentImports";

const ContentBox = ({ content }: { content: SanityDocument[] }) => {
  return (
    <>
      {content.map((item) => {
        switch (item._type) {
          case "clientCloud":
            return <ClientCloud key={item._id} data={item} />;
          case "basicHeroCta":
            return <BasicHeroCta key={item._id} data={item} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentBox;
