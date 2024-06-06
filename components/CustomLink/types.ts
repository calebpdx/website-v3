import { SanityDocument } from "next-sanity";
import { ComponentPropsWithoutRef } from "react";

export interface CustomLinkProps extends ComponentPropsWithoutRef<"a"> {
  data: SanityDocument;
}
