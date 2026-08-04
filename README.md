# Cuivre Public Site

Cuivre公開サイトは、Astroで生成する静的サイトです。Cloudflare Pagesへ接続し、無料の `*.pages.dev` URLで公開できます。

## 技術構成

- Framework: Astro
- Output: Static HTML
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: `20.x`

## Cloudflare Pages デプロイ手順

1. GitHubへこのリポジトリをpushします。
2. Cloudflare Dashboardで `Workers & Pages` を開きます。
3. `Create application` を押します。
4. `Pages` → `Connect to Git` を選びます。
5. GitHub Repositoryを選択します。
6. Build settingsを以下にします。

| 項目 | 設定値 |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `outputs/cuivre-public-site` |
| Node.js version | `20` |

7. Environment Variablesを設定します。

| 変数名 | 必須 | 用途 | 例 |
| --- | --- | --- | --- |
| `PUBLIC_SITE_URL` | 推奨 | canonical / OGP / sitemapのURL生成 | `https://your-project.pages.dev` |

8. `Save and Deploy` を押します。

独自ドメインをまだ使わない場合は、Cloudflare Pagesが発行する `https://******.pages.dev` を `PUBLIC_SITE_URL` に設定してください。

## ローカル確認

```bash
npm install
npm run build
npm run preview
```

## 公開前チェックリスト

- [ ] `npm run build` が成功する
- [ ] `dist` が生成される
- [ ] トップページが表示される
- [ ] 記事一覧が表示される
- [ ] カテゴリ一覧が表示される
- [ ] 公開記事だけが表示される
- [ ] `draft` / `review` / `fact_check` / `ready_to_publish` / `archived` / `noindex=true` の記事が表示されない
- [ ] canonicalが `PUBLIC_SITE_URL` ベースになっている
- [ ] OGP画像が表示される
- [ ] Twitter Cardが設定されている
- [ ] `robots.txt` が表示される
- [ ] `sitemap.xml` が表示される
- [ ] 404ページが表示される
- [ ] CTAが公式URLとアフィリエイトURLを混同していない
- [ ] 内部リンクが404になっていない

## 公開後チェックURL

`https://******.pages.dev` はCloudflare Pagesの実URLに置き換えて確認してください。

- トップページ: `https://******.pages.dev/`
- 記事一覧: `https://******.pages.dev/articles/`
- カテゴリ一覧: `https://******.pages.dev/categories/`
- 記事ページ: `https://******.pages.dev/articles/programmer-college-review/`
- 404: `https://******.pages.dev/not-found-test/`
- robots.txt: `https://******.pages.dev/robots.txt`
- sitemap.xml: `https://******.pages.dev/sitemap.xml`
- manifest: `https://******.pages.dev/manifest.webmanifest`
- favicon: `https://******.pages.dev/favicon.svg`
- OGP画像: `https://******.pages.dev/ogp.svg`

RSSは未実装です。追加する場合は、公開記事だけを対象にして生成してください。

## SEO確認

- canonicalは `PUBLIC_SITE_URL` から生成します。
- OGP / Twitter Cardは全ページの共通Layoutで設定します。
- `robots.txt` は全ページのクロールを許可し、`sitemap.xml` を通知します。
- `sitemap.xml` は公開記事と固定ページのみを掲載します。
- 記事ページは `status !== "published"` または `noindex=true` の場合、`noindex,nofollow` を出します。

## Git管理

GitHubにはソースファイルをpushします。以下はGit管理しません。

- `node_modules/`
- `dist/`
- `.astro/`
- `.env`

Cloudflare Pages側で依存関係をインストールし、`npm run build` で `dist` を生成します。
