import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "includeLogo",
      title: "Include Logo",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
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
