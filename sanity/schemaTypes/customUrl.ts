import { defineField, defineType } from "sanity";

export const customUrlType = defineType({
  name: "customUrl",
  title: "Custom URL",
  type: "document",
  fields: [
    defineField({
      name: "external",
      type: "url",
      title: "URL",
      hidden: ({ parent, value }) => !value && !!parent?.internal,
    }),
    defineField({
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent, value }) => !value && !!parent?.external,
    }),
  ],
});
