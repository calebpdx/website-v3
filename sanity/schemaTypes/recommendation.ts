import { defineField, defineType } from "sanity";

export const recommendation = defineType({
  name: "recommendation",
  title: "Recommendation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Internal Name",
    }),
    defineField({
      name: "referrerImage",
      type: "reference",
      to: [{ type: "imageWrapper" }],
    }),
    defineField({
      name: "referrerName",
      type: "string",
      title: "Referrer Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "referrerTitle",
      type: "string",
      title: "Referrer Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
