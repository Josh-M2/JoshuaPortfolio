import type { MetadataRoute } from "next";
import { projects } from "@/config/projects";
import { siteUrl } from "@/config/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/resume", ...projects.map((project) => `/work/${project.slug}`)]
    .map((path) => ({ url: new URL(path || "/", siteUrl).toString() }));
}
