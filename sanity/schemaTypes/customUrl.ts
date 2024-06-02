import { defineField, defineType } from "sanity";

export const customUrlType = defineType({
  name: "customUrl",
  title: "Custom URL",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Link Name",
    }),

    defineField({
      name: "external",
      type: "url",
      title: "URL",
      hidden: ({ parent, value }) =>
        (!value && !!parent?.internal) || !!parent?.anchor,
    }),
    defineField({
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent, value }) =>
        (!value && !!parent?.external) || !!parent?.anchor,
    }),
    defineField({
      name: "anchor",
      type: "string",
      hidden: ({ parent, value }) =>
        (!value && !!parent?.internal) || !!parent?.external,
      validation: (Rule) =>
        Rule.regex(/\B(\#[a-zA-Z]+\b)(?!;)/, {
          name: "anchor",
          invert: false,
        }),
    }),
  ],
});
