import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: baseURL ? `${baseURL}/sitemap.xml` : "/sitemap.xml",
  };
}
