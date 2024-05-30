import { type SchemaTypeDefinition } from "sanity";
import { schemaTypes } from "./schemaTypes/index";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
