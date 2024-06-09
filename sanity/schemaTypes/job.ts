import { defineField, defineType } from "sanity";

export const job = defineType({
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Internal Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "reference",
      to: [{ type: "imageWrapper" }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "current",
      title: "Current",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      /* @ts-ignore */
      of: [
        {
          type: "tag",
        },
      ],
    }),
  ],
});
