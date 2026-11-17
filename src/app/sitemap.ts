import type { MetadataRoute } from "next";
import { site, navigation } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [...navigation.map(([path]) => path), "/privacidade"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
