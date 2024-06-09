import { IconType } from "@icons-pack/react-simple-icons";
import { SanityDocument } from "next-sanity";
import Tag from "./Tag";

const TagCta = ({ data }: { data: SanityDocument }) => {
  console.log("TagCta data", data);

  return (
    <section
      id={data.anchor}
      className="w-full text-primary-light text-3xl flex flex-col items-center"
    >
      <div className="container flex flex-col items-center">
        {data.title && <h2>{data.title}</h2>}
        {data.description && <p>{data.description}</p>}
        <ul>
          {data.tags.map(
            (tag: { name: string; simpleIcon: IconType }, index: number) => (
              <li key={index}>
                <Tag data={tag} />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default TagCta;
