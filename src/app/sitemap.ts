import type { MetadataRoute } from "next";
import { serviceCatalog } from "@/lib/services";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/services",
    ...serviceCatalog.map((item) => `/services/${item.slug}`),
    "/services/web-development",
    "/work",
    "/labs",
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
