import { defineField, defineType } from "sanity";

export const descriptiveCta = defineType({
  name: "descriptiveCta",
  title: "Descriptive CTA",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Internal Name",
    }),
    defineField({
      name: "backgroundImage",
      type: "reference",
      to: [{ type: "imageWrapper" }],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
  ],
});
