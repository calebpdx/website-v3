import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "internalName",
      },
    }),
    defineField({
      name: "navigation",
      type: "reference",
      to: [{ type: "navigation" }],
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "clientCloud" },
            { type: "basicHeroCta" },
            { type: "descriptiveCta" },
            { type: "recommendations" },
          ],
        },
      ],
    }),

    defineField({
      name: "footer",
      type: "reference",
      to: [{ type: "footer" }],
    }),
  ],
});
