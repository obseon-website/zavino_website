import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/services",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cancellation-refund-policy",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority:
      path === ""
        ? 1
        : path.includes("policy") || path.includes("terms")
          ? 0.3
          : 0.7,
  }));
}
