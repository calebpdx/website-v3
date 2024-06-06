import { cn } from "@/utils/cn";
import Link from "next/link";
import { CustomLinkProps } from "./types";

const CustomLink = ({ data, ...props }: CustomLinkProps) => {
  const linkStyle = cn(
    "text-[#232125] opacity-75 text-3xl transition-all duration-200 ease-in-out",
    "hover:text-black hover:opacity-100",
    "dark:text-neutral-600 dark:hover:text-[#fdfdfb] dark:hover:opacity-100",
    props.className,
  );

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
