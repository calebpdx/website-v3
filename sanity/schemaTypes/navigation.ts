import { defineField, defineType } from "sanity";

export const navigationType = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
    }),
    defineField({
      name: "includeLogo",
      title: "Include Logo",
      type: "boolean",
    }),

    defineField({
      name: "links",
      title: "Links",
      type: "array",
      /* @ts-ignore */
      of: [
        {
          type: "reference",
          to: [{ type: "customUrl" }],
        },
      ],
    }),
  ],
});
