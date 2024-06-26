import { defineField, defineType } from "sanity";

export const tagCta = defineType({
  name: "tagCta",
  title: "Tag CTA",
  type: "document",
  initialValue: {
    theme: "light",
    name: "Tag CTA Module",
  },
  fields: [
    defineField({
      name: "name",
      title: "Internal Name",
      type: "string",
      options: {},
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
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
