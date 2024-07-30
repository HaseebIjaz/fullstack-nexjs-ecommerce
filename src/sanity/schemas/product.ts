import { ComposableOption, ConfigContext, SchemaTypeDefinition } from "sanity";

const productSchema: SchemaTypeDefinition = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    },
    {
      name: "sex",
      type: "string",
      title: "sex",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Children", value: "children" },
          { title: "All", value: "all" },
        ],
        layout: "radio",
      },
    },
    {
      name: "categoery",
      type: "string",
      title: "Categoery",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Sweater", value: "sweater" },
          { title: "Jacket", value: "female" },
          { title: "Hat", value: "hat" },
        ],
        layout: "radio",
      },
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      validation: (rule) => rule.required(),
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    },
  ],
};

export default productSchema;
