import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Tag Icon",
      type: "reference",
      to: [{ type: "icon" }],
    }),
  ],
});
