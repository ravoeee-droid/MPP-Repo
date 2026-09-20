import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mpp-recruit.com";
  const routes = [
    "",
    "/recruiting",
    "/performance",
    "/systems",
    "/case-studies",
    "/ueber-mpp",
    "/insights",
    "/kontakt",
    "/impressum",
    "/datenschutz"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
