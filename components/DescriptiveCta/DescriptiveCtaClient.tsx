"use client";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "next-sanity";
import { useRef } from "react";
import { inView, motion, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

type DescriptiveCtaClientProps = {
  image: {
    url: string | null;
    alt: string;
  };
  content: PortableTextBlock[];
};

const DescriptiveCtaClient = ({
  image,
  content,
}: DescriptiveCtaClientProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Style the protable text block for this content type
  const contentBlock = {
    block: ({ children }: any) => (
      <p className="max-w-2xl leading-10 p-0 m-0 text-2xl lg:text-3xl">
        {children}
      </p>
    ),
  };

  return (
    <div className="relative w-full text-primary-light flex flex-col items-center">
      {image && image.url && (
        <Image
          src={image.url}
          fill={true}
          objectFit="cover"
          quality={100}
          className={cn(
            "absolute -z-10 transition-all duration-500 ease-in-out grayscale opacity-40",
          )}
          alt={image.alt}
          priority
        />
      )}
      <motion.div
        ref={ref}
        className="container max-w-7xl px-10 py-20 xl:p-0 lg:min-h-[1000px] flex flex-col gap-y-10 items-start justify-center"
        style={{
          transform: isInView ? "none" : "translateY(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <PortableText value={content} components={contentBlock} />
      </motion.div>
    </div>
  );
};

export default DescriptiveCtaClient;
