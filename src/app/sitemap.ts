import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts, doctors } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/privacy-policy",
    "/cookies-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.5,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${SITE.url}/medici/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...doctorRoutes, ...blogRoutes];
}
