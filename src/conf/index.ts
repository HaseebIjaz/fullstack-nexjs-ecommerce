const conf = {
  stripeSecretKey: String(process.env.STRIPE_SECRET_KEY) || "",
  stripePublicShareableKey:
    String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) || "",
  projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) || "",
  dataset: String(process.env.NEXT_PUBLIC_SANITY_DATASET) || "",
  apiVersion: String(process.env.NEXT_PUBLIC_SANITY_API_VERSION) || "",
};

export default conf;
