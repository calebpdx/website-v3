import { cn } from "@/utils/cn";
import Link from "next/link";
import { CustomLinkProps } from "./types";

const CustomLink = ({ data, className, ...props }: CustomLinkProps) => {
  const linkStyle = cn(
    "text-[#232125] opacity-75 text-3xl transition-all duration-200 ease-in-out",
    "hover:text-black hover:opacity-100",
    "dark:text-neutral-600 dark:hover:text-[#fdfdfb] dark:hover:opacity-100",
    className,
  );

  if (data.anchor) {
    return (
      <a href={data.anchor} className={linkStyle} {...props}>
        {data.name}
      </a>
    );
  } else if (data.internal) {
    return (
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/${data.internal.slug.current}`}
        className={linkStyle}
        {...props}
      >
        {data.name}
      </Link>
    );
  } else {
    return (
      <a href={data.external} className={linkStyle} {...props}>
        {data.name}
      </a>
    );
  }
};

export default CustomLink;
