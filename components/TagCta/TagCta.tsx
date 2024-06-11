import { SanityDocument } from "next-sanity";
import Tag from "./Tag";
import {
  SiContentful,
  SiCss3,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedwoodjs,
  SiSanity,
  SiSass,
  SiStorybook,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "JavaScript", icon: <SiJavascript size={24} /> },
  { name: "React", icon: <SiReact size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  { name: "GraphQL", icon: <SiGraphql size={24} /> },
  { name: "Node.js", icon: <SiNodedotjs size={24} /> },
  { name: "Nest.js", icon: <SiNestjs size={24} /> },
  { name: "CSS", icon: <SiCss3 size={24} /> },
  { name: "SASS", icon: <SiSass size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "MongoDB", icon: <SiMongodb size={24} /> },
  { name: "Svelte", icon: <SiSvelte size={24} /> },
  { name: "Redwood.js", icon: <SiRedwoodjs size={24} /> },
  { name: "Storybook", icon: <SiStorybook size={24} /> },
  { name: "Sanity", icon: <SiSanity size={24} /> },
  { name: "Contentful", icon: <SiContentful size={24} /> },
  { name: "Github", icon: <SiGithub size={24} /> },
  { name: "Git", icon: <SiGit size={24} /> },
  { name: "OpenAI", icon: <SiOpenai size={24} /> },
];

const TagCta = async ({ data }: { data: SanityDocument }) => {
  return (
    <section
      id={data.anchor}
      className="w-full text-primary-light text-3xl flex flex-col items-center py-12 xl:px-0 px-8 dark:bg-black bg-primary-dark"
    >
      <div className="container flex flex-col items-center gap-4  max-w-7xl">
        {data.title && (
          <h2 className="text-4xl w-full text-center text-primary-light font-montserrat font-semibold dark:text-white">
            {data.title}
          </h2>
        )}
        {data.description && (
          <p className="dark:text-primary-dark text-primary-light/50  xl:px-0 px-8 max-w-4xl text-center text-2xl">
            {data.description}
          </p>
        )}
        <ul className="flex pt-4 max-w-5xl gap-4 flex-wrap justify-center xl:px-0 px-8">
          {skills.map((tag: any, index: number) => (
            <li key={index}>
              <Tag data={tag} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TagCta;
