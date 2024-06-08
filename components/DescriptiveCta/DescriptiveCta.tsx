import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { SanityDocument, PortableText } from "next-sanity";
import Image from "next/image";

const DescriptiveCta = async ({ data }: { data: SanityDocument }) => {
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

  // Style the protable text block for this content type
  const contentBlock = {
    block: ({ children }: any) => (
      <p className="max-w-2xl leading-10 p-0 m-0">{children}</p>
    ),
  };

  return (
    <>
      <section
        id="about"
        className="relative w-full text-primary-light text-3xl flex flex-col items-center"
      >
        {imageContent && imageUrl && (
          <Image
            src={imageUrl}
            fill={true}
            objectFit="cover"
            quality={100}
            className="absolute -z-10 opacity-40"
            alt={imageContent.alt}
          />
        )}
        <div className="container max-w-7xl min-h-[1000px] flex flex-col gap-y-10 items-start justify-center">
          <PortableText value={data.content} components={contentBlock} />
        </div>
      </section>
    </>
  );
};

export default DescriptiveCta;
