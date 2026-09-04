import type { MetadataRoute } from "next";
import { formations, projets } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                  changeFrequency: "monthly",  priority: 1.0 },
    { url: `${SITE_URL}/a-propos`,    changeFrequency: "monthly",  priority: 0.9 },
    { url: `${SITE_URL}/formations`,  changeFrequency: "monthly",  priority: 0.8 },
    { url: `${SITE_URL}/projets`,     changeFrequency: "monthly",  priority: 0.8 },
    { url: `${SITE_URL}/experiences`, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${SITE_URL}/contact`,     changeFrequency: "yearly",   priority: 0.7 },
    ...formations.map((f) => ({
      url: `${SITE_URL}/formations/${f.id}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...projets.map((p) => ({
      url: `${SITE_URL}/projets/${p.id}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
