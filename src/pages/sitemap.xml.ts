export function GET({ site }) {
  const baseUrl = site?.toString().replace(/\/$/, "") || "https://cuivre-public-site.pages.dev";
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${baseUrl}/sitemap-pages.xml</loc>\n  </sitemap>\n  <sitemap>\n    <loc>${baseUrl}/sitemap-articles.xml</loc>\n  </sitemap>\n</sitemapindex>\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
