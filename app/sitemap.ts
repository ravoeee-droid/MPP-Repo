import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mpp-recruit.com";
  const routes = [
    "",
    "/recruiting",
    "/performance",
    "/systems",
    "/kontakt",
    "/impressum",
    "/datenschutz"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
