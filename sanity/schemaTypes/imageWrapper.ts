import { defineField, defineType } from "sanity";

export const imageWrapper = defineType({
  name: "imageWrapper",
  title: "Image Wrapper",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Internal Name",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alt Text",
    }),
  ],
});
