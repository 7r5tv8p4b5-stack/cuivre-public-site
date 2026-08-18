export const siteNav = [
  { label: "記事", href: "/articles/" },
  { label: "比較ガイド", href: "/articles/#comparison" },
  { label: "カテゴリー", href: "/categories/" },
  { label: "運営者情報", href: "/about/" },
];

export const hiddenStatuses = new Set([
  "draft",
  "review",
  "fact_check",
  "ready_to_publish",
  "superseded",
  "superseded_draft",
  "archived",
]);

export const genericCategoryTags = [
  "AIサービス",
  "AI議事録",
  "AIミーティングアシスタント",
  "AI文字起こし",
  "転職サービス",
  "ITエンジニア転職",
  "フリーランス",
  "就職・転職",
  "その他（仕事情報）",
  "Zoom",
  "Google Meet",
  "Microsoft Teams",
  "Webex",
  "比較",
  "ランキング",
  "料金",
  "無料",
  "口コミ",
  "評判",
];

export const purposeCards = [
  { label: "無料で使いたい", icon: "gift", href: "/articles/ai-meeting-minutes-tools/", description: "無料プランの違いから探す" },
  { label: "日本語で使いたい", icon: "language", href: "/articles/meetgeek-review/", description: "日本語対応の確認から探す" },
  { label: "Botなしで録音したい", icon: "bot", href: "/articles/meetgeek-review/", description: "会議の記録方法から探す" },
  { label: "チームで利用したい", icon: "team", href: "/articles/ai-meeting-minutes-tools/", description: "共有や管理を重視して探す" },
  { label: "スマホアプリが欲しい", icon: "phone", href: "/articles/meetgeek-review/", description: "外出先や対面録音も見る" },
  { label: "外部連携を重視したい", icon: "connect", href: "/articles/fireflies-ai-review/", description: "連携先の広さから探す" },
];

export const categoryVisuals = {
  "AIサービス": { icon: "mic", label: "AIサービス" },
  "AI議事録": { icon: "mic", label: "AI議事録ツール" },
  "AI文字起こし": { icon: "language", label: "AI文字起こし" },
  "転職サービス": { icon: "briefcase", label: "転職サービス" },
};

export function slugFromPath(path) {
  return path.split("/").pop().replace(".md", "");
}

export function isPublicArticle(frontmatter) {
  return frontmatter.status === "published" && !frontmatter.noindex && !hiddenStatuses.has(frontmatter.status);
}

export function normalizeArticle(path, mod) {
  const slug = slugFromPath(path);
  return {
    slug,
    frontmatter: mod.frontmatter,
    headings: typeof mod.getHeadings === "function" ? mod.getHeadings() : [],
  };
}

export function publicArticlesFromModules(modules) {
  return Object.entries(modules)
    .map(([path, mod]) => normalizeArticle(path, mod))
    .filter((article) => isPublicArticle(article.frontmatter))
    .sort(sortByNewest);
}

export function sortByNewest(a, b) {
  return String(b.frontmatter.publishedAt || b.frontmatter.updatedAt || "").localeCompare(
    String(a.frontmatter.publishedAt || a.frontmatter.updatedAt || "")
  );
}

export function articleDate(frontmatter) {
  return frontmatter.updatedAt || frontmatter.publishedAt || "";
}

export function articleCategory(frontmatter) {
  return frontmatter.primaryCategory || frontmatter.category || frontmatter.parentCategory || "未分類";
}

export function articleHref(articleOrSlug) {
  const slug = typeof articleOrSlug === "string" ? articleOrSlug : articleOrSlug.slug;
  return `/articles/${slug}/`;
}

export function serviceNameFor(frontmatter, slug = "") {
  if (frontmatter.serviceName) return frontmatter.serviceName;
  const names = serviceNamesFor(frontmatter);
  if (names.length) return names[0];
  const serviceId = Array.isArray(frontmatter.serviceIds) ? frontmatter.serviceIds[0] : "";
  if (serviceId) return labelFromToken(serviceId.replace(/^SRV-\d+-/, ""));
  const title = frontmatter.title || slug;
  const titleLead = title.split("とは")[0].split("を比較")[0].split("おすすめ")[0].trim();
  return titleLead || "Cuivre";
}

export function serviceNamesFor(frontmatter) {
  if (Array.isArray(frontmatter.serviceNames) && frontmatter.serviceNames.length) return frontmatter.serviceNames;
  if (Array.isArray(frontmatter.services) && frontmatter.services.length) {
    return frontmatter.services.map((service) => service.name || service.label).filter(Boolean);
  }
  const fromTags = (frontmatter.categoryTags || []).filter((tag) => !genericCategoryTags.includes(tag));
  const fromIds = (frontmatter.serviceIds || [])
    .map((id) => String(id).replace(/^SRV-\d+-/, ""))
    .filter((id) => id && !/^SRV-\d+$/.test(id))
    .map(labelFromToken);
  return Array.from(new Set([...fromTags, ...fromIds]));
}

export function labelFromToken(value = "") {
  return String(value)
    .split("-")
    .filter(Boolean)
    .map((part) => (part.length <= 3 ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(" ");
}

export function initialsFor(name = "Cuivre") {
  const ascii = name.replace(/[^a-zA-Z0-9]/g, "");
  if (ascii.length >= 2) return ascii.slice(0, 2).toUpperCase();
  return name.slice(0, 2);
}

export function iconFor(value = "") {
  const text = String(value).toLowerCase();
  if (text.includes("無料") || text.includes("free") || text.includes("gift")) return "gift";
  if (text.includes("日本") || text.includes("言語") || text.includes("language")) return "language";
  if (text.includes("bot")) return "bot";
  if (text.includes("チーム") || text.includes("team")) return "team";
  if (text.includes("料金") || text.includes("price")) return "price";
  if (text.includes("文字") || text.includes("transcript")) return "transcript";
  if (text.includes("時間") || text.includes("time")) return "time";
  if (text.includes("評価") || text.includes("review")) return "star";
  if (text.includes("環境") || text.includes("対応")) return "device";
  if (text.includes("注意")) return "alert";
  if (text.includes("比較")) return "compare";
  return "check";
}

export function quickFactsFor(frontmatter) {
  const explicit = frontmatter.quickFacts || frontmatter.quick_facts;
  if (Array.isArray(explicit) && explicit.length) {
    return explicit
      .map((fact) => ({
        icon: fact.icon || iconFor(fact.label || fact.value || ""),
        label: fact.label || fact.title,
        value: fact.value || fact.text,
        note: fact.note || fact.description,
      }))
      .filter((fact) => fact.label && fact.value)
  }
  const type = frontmatter.articleType || "";
  if (type.includes("comparison") || type.includes("ranking")) {
    return [];
  }
  if (frontmatter.factChecked) {
    return [{ icon: "check", label: "公式情報", value: "確認済み", note: "公開時点の確認済み情報を整理" }];
  }
  return [];
}

export function serviceSummaryFor(frontmatter) {
  if (frontmatter.articleType !== "service_review") return [];
  const explicit = frontmatter.serviceSummary || frontmatter.service_summary;
  if (Array.isArray(explicit) && explicit.length) return explicit;
  if (explicit && typeof explicit === "object") {
    return Object.entries(explicit)
      .map(([label, value]) => ({ icon: iconFor(label), label, value }))
      .filter((item) => item.value);
  }
  return [
    { icon: "price", label: "料金", value: frontmatter.secondaryKeywords?.includes("料金") ? "記事内で整理" : "公式情報を確認" },
    { icon: "transcript", label: "文字起こし", value: frontmatter.categoryTags?.includes("AI文字起こし") ? "対応情報あり" : "記事内で確認" },
    { icon: "device", label: "対応環境", value: frontmatter.secondaryKeywords?.includes("スマホ") ? "スマホ情報あり" : "公式情報を確認" },
    { icon: "star", label: "総合評価", value: frontmatter.factChecked ? "公式情報ベース" : "確認中" },
    { icon: "check", label: "収益化", value: frontmatter.affiliateLinkReady ? "リンク準備済み" : "将来対応" },
  ];
}

export function normalizeImage(image) {
  if (!image) return null;
  if (typeof image === "string") return { src: image, alt: "" };
  if (typeof image === "object" && image.src) {
    return {
      src: image.src,
      alt: image.alt || "",
      source: image.source || image.sourceUrl || "",
      type: image.type || "hero",
      usageStatus: image.usageStatus || image.usage_status || "",
      rightsStatus: image.rightsStatus || image.rights_status || "",
    };
  }
  return null;
}

export function heroImageFor(frontmatter) {
  return normalizeImage(frontmatter.heroImage || frontmatter.hero_image);
}

export function logoImageFor(frontmatter) {
  return normalizeImage(frontmatter.logoImage || frontmatter.logo_image);
}

export function ctaHrefFor(frontmatter) {
  return frontmatter.affiliateUrl || frontmatter.affiliate_url || frontmatter.officialUrl || frontmatter.official_url || "";
}

export function serviceSidebarItemsFor(frontmatter) {
  if (frontmatter.articleType !== "service_review") return [];
  const explicit = frontmatter.serviceSidebar || frontmatter.service_sidebar;
  if (Array.isArray(explicit)) return explicit.filter((item) => item.label && item.value);
  const items = serviceSummaryFor(frontmatter).filter((item) => item.label && item.value);
  if (frontmatter.serviceCompany || frontmatter.companyName) {
    items.push({ icon: "team", label: "運営会社", value: frontmatter.serviceCompany || frontmatter.companyName });
  }
  return items.slice(0, 6);
}

export function comparisonSummaryFor(frontmatter) {
  const type = frontmatter.articleType || "";
  if (!type.includes("comparison")) return null;
  if (frontmatter.comparisonSummary) return frontmatter.comparisonSummary;
  return null;
}

export function rankingSummaryFor(frontmatter) {
  if (frontmatter.articleType !== "ranking") return null;
  if (frontmatter.rankingSummary) return frontmatter.rankingSummary;
  return {
    title: "掲載サービス",
    services: serviceNamesFor(frontmatter),
    note: "順位や推奨理由は本文内の確認済み情報を参照してください。",
  };
}

export function featuredArticleFrom(articles) {
  const featured = articles
    .filter((article) => article.frontmatter.featured === true)
    .sort((a, b) => Number(a.frontmatter.featuredOrder || 999) - Number(b.frontmatter.featuredOrder || 999));
  if (featured.length) return featured[0];
  return articles.find((article) => article.frontmatter.articleType === "ranking") || articles[0];
}

export function categoryCardsFrom(articles) {
  const categories = new Map();
  articles.forEach((article) => {
    const category = articleCategory(article.frontmatter);
    categories.set(category, (categories.get(category) || 0) + 1);
  });
  return Array.from(categories.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ja"))
    .map(([category, count]) => ({
      category,
      count,
      href: `/categories/${category}/`,
      ...(categoryVisuals[category] || { icon: "folder", label: category }),
    }));
}
