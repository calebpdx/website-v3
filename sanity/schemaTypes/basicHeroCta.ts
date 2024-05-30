import { defineField, defineType } from "sanity";

export const basicHeroCtaType = defineType({
  name: "basicHeroCta",
  title: "Basic Hero CTA",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "subHeader",
      title: "Sub Header",
      type: "string",
    }),
    defineField({
      name: "callToAction",
      title: "Call to Action",
      type: "string",
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      /* @ts-ignore */
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
