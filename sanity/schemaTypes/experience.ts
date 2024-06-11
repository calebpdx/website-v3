import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Internal Name",
      type: "string",
    }),
    defineField({
      name: "anchor",
      title: "Anchor",
      type: "string",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      options: {
        list: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "jobs",
      title: "Jobs",
      type: "array",
      /* @ts-ignore */
      of: [
        {
          type: "job",
        },
      ],
    }),
  ],
});
