function articleEntries() {
  const modules = import.meta.glob("../content/articles/*.md", { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const frontmatter = mod.frontmatter || {};
      const slug = frontmatter.slug || path.split("/").pop().replace(".md", "");
      return {
        url: `/articles/${slug}/`,
        updatedAt: frontmatter.updatedAt || frontmatter.publishedAt || "",
        published: frontmatter.status === "published" && !frontmatter.noindex,
      };
    })
    .filter((entry) => entry.published);
}

export function GET({ site }) {
  const baseUrl = site?.toString().replace(/\/$/, "") || "https://cuivre-public-site.pages.dev";
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${articleEntries()
    .map((entry) => {
      const loc = `${baseUrl}${encodeURI(entry.url)}`;
      const lastmod = entry.updatedAt ? `\n    <lastmod>${entry.updatedAt}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
    })
    .join("\n")}\n</urlset>\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
