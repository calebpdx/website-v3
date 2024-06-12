import { client } from "@/sanity/lib/client";
import Experience from "./ExperienceClient";
import { EXPERIENCE_QUERY } from "@/sanity/lib/queries";

const ExperienceSection = async ({ data }: { data: any }) => {
  const experienceData = data.jobs.length
    ? await client.fetch(EXPERIENCE_QUERY, { id: data._id })
    : [];

  return <Experience data={experienceData} />;
};

export default ExperienceSection;
