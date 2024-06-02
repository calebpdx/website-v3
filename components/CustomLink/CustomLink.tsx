import { pageInfo } from "@/utils/constants";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const CustomLink = ({ data }: { data: SanityDocument }) => {
  const linkStyle = "text-teal-500 hover:underline";

  if (data.anchor) {
    return (
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/${data.anchor}`}
        className={linkStyle}
      >
        {data.name}
      </Link>
    );
  } else if (data.internal) {
    return (
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/${data.internal.slug.current}`}
        className={linkStyle}
      >
        {data.name}
      </Link>
    );
  } else {
    return (
      <a href={data.external} className={linkStyle}>
        {data.name}
      </a>
    );
  }
};

export default CustomLink;
