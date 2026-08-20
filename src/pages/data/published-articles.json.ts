import { articleCategory, isPublicArticle, serviceNameFor, slugFromPath, sortByNewest } from "../../data/site.js";

const PRODUCTION_SITE_URL = "https://cuivre-public-site.pages.dev";

const socialDisplayNames = {
  "Fireflies.ai": "Fireflies AI",
  "Otter.ai": "Otter AI",
};

function canonicalUrl(frontmatter, slug) {
  const recorded = frontmatter.publishedUrl || frontmatter.published_url || frontmatter.productionUrl || frontmatter.production_url;
  if (recorded) return recorded;
  const canonical = frontmatter.canonical || frontmatter.canonical_path || `/articles/${slug}/`;
  if (/^https?:\/\//.test(canonical)) return canonical;
  return `${PRODUCTION_SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;
}

function serviceIdFor(frontmatter) {
  const ids = frontmatter.serviceIds || frontmatter.service_ids;
  if (Array.isArray(ids) && ids.length) return ids[0];
  return frontmatter.serviceId || frontmatter.service_id || null;
}

function articleEntries() {
  const modules = import.meta.glob("../../content/articles/*.md", { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const frontmatter = mod.frontmatter || {};
      const slug = frontmatter.slug || slugFromPath(path);
      const serviceName = serviceNameFor(frontmatter, slug);
      return {
        slug,
        frontmatter,
        title: frontmatter.title || "",
        published_url: canonicalUrl(frontmatter, slug),
        published_at: frontmatter.publishedAt || frontmatter.updatedAt || null,
        category: articleCategory(frontmatter),
        service_name: serviceName || null,
        service_id: serviceIdFor(frontmatter),
        social_display_name: socialDisplayNames[serviceName] || serviceName || null,
      };
    })
    .filter((entry) => isPublicArticle(entry.frontmatter))
    .sort(sortByNewest)
    .map(({ frontmatter, ...entry }) => entry);
}

export function GET() {
  const body = JSON.stringify(articleEntries(), null, 2).replace(/[^\x00-\x7F]/g, (character) =>
    `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`
  );
  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
