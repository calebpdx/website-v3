import { defineField, defineType } from "sanity";

export const changeLog = defineType({
  name: "changeLog",
  title: "Change Log Component",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "anchor",
      title: "Anchor",
      type: "string",
    }),
    defineField({
      name: "includeComponent",
      title: "Include Component",
      description: "Include the Change Log component on the page",
      type: "boolean",
    }),
  ],
});
