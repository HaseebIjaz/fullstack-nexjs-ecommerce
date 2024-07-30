import { ComposableOption, ConfigContext, SchemaTypeDefinition } from "sanity";
import productSchema from "@/sanity/schemas/product";
const schemaTypes:
  | SchemaTypeDefinition[]
  | ComposableOption<
      SchemaTypeDefinition[],
      Omit<
        ConfigContext,
        "schema" | "currentUser" | "getClient" | "client" | "i18n"
      >
    > = [productSchema];
export default schemaTypes;
