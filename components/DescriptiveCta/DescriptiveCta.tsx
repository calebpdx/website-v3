import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import DescriptiveCtaClient from "./DescriptiveCtaClient";

const DescriptiveCta = async ({ data }: { data: SanityDocument }) => {
  const imageContent =
    data && data.backgroundImage._ref
      ? await client.fetch(
          `*[_type == "imageWrapper" && _id == "${data.backgroundImage._ref}"]{"url": image.asset->url, alt}[0]`,
        )
      : null;

  return (
    <section
      id={data.anchor}
      className="relative w-full text-primary-light text-3xl flex flex-col items-center"
    >
      <DescriptiveCtaClient image={imageContent} content={data.content} />
    </section>
  );
};

export default DescriptiveCta;
