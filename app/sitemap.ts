import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${site.brand.domain}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
