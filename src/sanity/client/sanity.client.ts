import { createClient, type ClientConfig } from "@sanity/client";
import conf from "@/conf";

const { apiVersion, dataset, projectId } = conf;

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

const client = createClient(config);

export default client;
