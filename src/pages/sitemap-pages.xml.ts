const staticPaths = [
  "/",
  "/articles/",
  "/categories/",
  "/about/",
  "/editorial-policy/",
  "/affiliate-policy/",
  "/privacy/",
  "/contact/",
];

function publishedCategories() {
  const modules = import.meta.glob("../content/articles/*.md", { eager: true });
  const categories = Object.values(modules)
    .map((mod) => {
      const frontmatter = mod.frontmatter || {};
      return frontmatter.status === "published" && !frontmatter.noindex
        ? frontmatter.category || frontmatter.parentCategory || ""
        : "";
    })
    .filter(Boolean);
  return Array.from(new Set(categories)).map((category) => `/categories/${category}/`);
}

export function GET({ site }) {
  const baseUrl = site?.toString().replace(/\/$/, "") || "https://cuivre-public-site.pages.dev";
  const urls = [...staticPaths, ...publishedCategories()];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url>\n    <loc>${baseUrl}${encodeURI(url)}</loc>\n  </url>`)
    .join("\n")}\n</urlset>\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
