const configuredUrl = process.env.SITE_URL?.trim();
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  || process.env.VERCEL_URL?.trim();

export const siteUrl = configuredUrl
  || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
