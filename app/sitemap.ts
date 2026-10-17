import type { MetadataRoute } from "next";
import { projects } from "@/config/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.SITE_URL ?? "http://localhost:3000";
  return ["", "/work", "/resume", ...projects.map((project) => `/work/${project.slug}`)]
    .map((path) => ({ url: new URL(path || "/", origin).toString() }));
}
