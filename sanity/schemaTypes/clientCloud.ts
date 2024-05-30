import { defineField, defineType } from "sanity";

export const clientCloudType = defineType({
  name: "clientCloud",
  title: "Client Cloud",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),

    defineField({
      name: "clients",
      title: "Client List",
      type: "array",
      /* @ts-ignore */
      of: [
        {
          type: "image",
        },
      ],
    }),
  ],
});
