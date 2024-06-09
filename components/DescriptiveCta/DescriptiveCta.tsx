import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { SanityDocument, PortableText } from "next-sanity";
import Image from "next/image";
import DescriptiveCtaClient from "./DescriptiveCtaClient";

const DescriptiveCta = async ({ data }: { data: SanityDocument }) => {
  console.log("DescriptiveCta data", data);

  const imageContent =
    data && data.backgroundImage._ref
      ? await client.fetch(
          `*[_type == "imageWrapper" && _id == "${data.backgroundImage._ref}"]{image, alt}[0]`,
        )
      : null;

  const imageUrl =
    imageContent && imageContent.image
      ? urlForImage(imageContent.image.asset._ref)
      : null;

  return (
    <section
      id={data.anchor}
      className="relative w-full text-primary-light text-3xl flex flex-col items-center"
    >
      <DescriptiveCtaClient
        image={{ url: imageUrl, alt: imageContent.alt }}
        content={data.content}
      />
    </section>
  );
};

export default DescriptiveCta;
