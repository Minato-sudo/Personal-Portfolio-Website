import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const withBase = (path: string) => (baseURL ? `${baseURL}${path}` : path);

  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: withBase(`/blog/${post.slug}`),
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: withBase(`/work/${post.slug}`),
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: withBase(route !== "/" ? route : ""),
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
