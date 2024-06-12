"use client";

import { PortableText, PortableTextBlock, SanityDocument } from "next-sanity";
import Image from "next/image";
import { tv, TVVariantKeys, TVVariants, VariantProps } from "tailwind-variants";

interface JobProps extends SanityDocument {
  name: string;
  compnay: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  current: boolean;
  content: PortableTextBlock[];
}

const jobStyle = tv({
  slots: {
    list: "flex flex-col gap-2 pl-8 mt-8",
    listItem: "list-disc text-xl",
  },
  variants: {
    color: {
      light: {},
      dark: {
        listItem: "text-primary-light/50 dark:text-white/75",
      },
    },
  },
});

type JobVariants = VariantProps<typeof jobStyle>;

const Job = ({
  data,
  theme,
}: {
  data: JobProps;
  theme: JobVariants["color"];
}) => {
  const { list, listItem } = jobStyle({ color: theme ?? "dark" });

  const contentBlock = {
    block: ({ children }: any) => (
      <p className="max-w-2xl leading-10 p-0 m-0 text-2xl lg:text-3xl">
        {children}
      </p>
    ),
    list: ({ children }: any) => <ul className={list()}>{children}</ul>,
    listItem: ({ children }: any) => <li className={listItem()}>{children}</li>,
  };

  return (
    <article className="job">
      <header className="flex gap-4">
        {data.logo.url && (
          <Image
            src={data.logo.url}
            alt={data.logo.alt}
            width={64}
            height={64}
          />
        )}
        <div>
          <h3 className="font-semibold font-montserrat text-2xl">
            {data.position}
          </h3>
          <h4 className="text-lg opacity-90">
            {data.company}, {data.startDate} -{" "}
            {data.current ? "Present" : data.endDate}
          </h4>
        </div>
      </header>
      {data.content && (
        <PortableText value={data.content} components={contentBlock} />
      )}
    </article>
  );
};

export default Job;
