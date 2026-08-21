export function GET({ site }) {
  const baseUrl = site?.toString().replace(/\/$/, "") || "https://cuivre-public-site.pages.dev";
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${baseUrl}/sitemap.xml`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
