import { defineField, defineType } from "sanity";

export const icon = defineType({
  name: "icon",
  title: "Icon",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Internal Name",
    }),
    defineField({
      name: "svgCode",
      type: "text",
      title: "Svg Code",
    }),
  ],
});
