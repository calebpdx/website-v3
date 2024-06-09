import { defineField, defineType } from "sanity";

export const recommendations = defineType({
  name: "recommendations",
  title: "Recommendations",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Internal Name",
    }),
    defineField({
      name: "anchor",
      title: "Anchor",
      type: "string",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "recommendation" }],
        },
      ],
    }),
  ],
});
