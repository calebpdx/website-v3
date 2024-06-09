import { defineField, defineType } from "sanity";

export const tagCta = defineType({
  name: "tagCta",
  title: "Tag CTA",
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
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
