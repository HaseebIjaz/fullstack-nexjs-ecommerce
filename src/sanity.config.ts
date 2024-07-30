import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import schemaTypes from "./sanity/schemas";
// import schemaT
const config = defineConfig({
  name: "sanity-nextjs-q2",
  title: "Nextjs Q2 Sanity Backend",
  projectId: "umhyrce5",
  dataset: "production",
  basePath: "/private/studio",
  schema: { types: schemaTypes },
  apiVersion: "2024-06-29",
  plugins: [structureTool()],
});

export default config;
