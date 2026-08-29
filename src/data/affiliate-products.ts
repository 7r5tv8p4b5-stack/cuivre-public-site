export type AffiliateProduct = {
  id: string;
  displayName: string;
  imageUrl: string;
  priceText: string;
  reviewText: string;
  affiliateUrl: string;
  trackingPixelUrl: string;
};

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: "rakuten-tablet-stand-01",
    displayName: "KYOSER タブレット・スマホスタンド",
    priceText: "2,580円",
    reviewText: "539件",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/smilekankyo1/cabinet/09922394/compass1692691086.jpg?_ex=64x64",
    affiliateUrl: "https://rpx.a8.net/svt/ejp?a8mat=4B9VHB+33XJA2+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00tgn84.2bo11388.g00tgn84.2bo12e37%2Fa26080140126_4B9VHB_33XJA2_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fsmilekankyo1%252Fkyoserts%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fsmilekankyo1%252Fi%252F10000103%252F%26rafcid%3Dwsc_i_is_a9f492a7-8ef9-40e2-ab89-4bc43a1ee283",
    trackingPixelUrl: "https://www18.a8.net/0.gif?a8mat=4B9VHB+33XJA2+2HOM+BWGDT",
  },
  {
    id: "rakuten-magsafe-stand-01",
    displayName: "MOFT MagSafeスマホスタンド",
    priceText: "3,880円〜",
    reviewText: "1,379件",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mobilereaderplus/cabinet/products/moftx/08577433/ms007m_sp1.jpg?_ex=64x64",
    affiliateUrl: "https://rpx.a8.net/svt/ejp?a8mat=4B9VHB+33XJA2+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00t8l44.2bo11f7e.g00t8l44.2bo12bb8%2Fa26080140126_4B9VHB_33XJA2_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fmobilereaderplus%252Fms007m%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fmobilereaderplus%252Fi%252F10000072%252F%26rafcid%3Dwsc_i_is_a9f492a7-8ef9-40e2-ab89-4bc43a1ee283",
    trackingPixelUrl: "https://www18.a8.net/0.gif?a8mat=4B9VHB+33XJA2+2HOM+BWGDT",
  },
  {
    id: "rakuten-usbc-charger-01",
    displayName: "Anker Nano Charger 20W",
    priceText: "1,790円",
    reviewText: "1,976件",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/anker/cabinet/daily/point/a2637_p10.jpg?_ex=64x64",
    affiliateUrl: "https://rpx.a8.net/svt/ejp?a8mat=4B9VHB+33XJA2+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00rr094.2bo1171a.g00rr094.2bo12088%2Fa26080140126_4B9VHB_33XJA2_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fanker%252Fa2637%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fanker%252Fi%252F10001037%252F%26rafcid%3Dwsc_i_is_a9f492a7-8ef9-40e2-ab89-4bc43a1ee283",
    trackingPixelUrl: "https://www10.a8.net/0.gif?a8mat=4B9VHB+33XJA2+2HOM+BWGDT",
  },
];

function stableHash(value: string) {
  return [...value].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

export function selectAffiliateProducts(seed: string, maxItems = 3) {
  if (affiliateProducts.length <= maxItems) return affiliateProducts;
  const start = Math.abs(stableHash(seed)) % affiliateProducts.length;
  return Array.from({ length: affiliateProducts.length }, (_, index) => affiliateProducts[(start + index) % affiliateProducts.length]).slice(0, maxItems);
}
