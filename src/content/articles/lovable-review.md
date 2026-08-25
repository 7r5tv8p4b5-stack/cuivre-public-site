---
title: "Lovableとは？AIでWebアプリを作る方法・料金・無料版でどこまで試せるかを解説"
displayTitle: "Lovable"
subtitle: "AIでWebアプリを作る方法・料金・無料版でどこまで試せるかを解説"
description: "Lovableは、作りたいWebサイトやWebアプリを自然な言葉で説明すると、AIがコードを書き、画面・データベース・認証・公開まで進めてくれるAIソフトウェア開発サービスです。"
publishedAt: "2026-08-22"
updatedAt: "2026-08-24"
category: "AIアプリ開発"
parentCategory: "AIアプリ開発"
primaryCategory: "AIアプリ開発"
subcategory: "AIアプリ開発"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "lovable-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/lovable-review/"
ogTitle: "Lovableとは？AIでWebアプリを作る方法・料金・無料版でどこまで試せるかを解説"
ogDescription: "Lovableは、作りたいWebサイトやWebアプリを自然な言葉で説明すると、AIがコードを書き、画面・データベース・認証・公開まで進めてくれるAIソフトウェア開発サービスです。"
targetKeyword: "Lovable"
searchIntent: "review"
serviceName: "Lovable"
officialUrl: "https://lovable.dev/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Lovable公式サイト"
    href: "https://lovable.dev/"
humanWriter: true
affiliate: false
affiliateDisclosure: false
affiliateLinkReady: false
factChecked: true
humanWritten: true
hideHeroDescription: true
serviceIds: []
companyIds: []
affiliateProgramIds: []
categoryTags: ["AIアプリ開発", "Lovable", "AI"]
---
# Lovableとは？AIでWebアプリを作る方法・料金・無料版でどこまで試せるかを解説

Lovableは、作りたいWebサイトやWebアプリを自然な言葉で説明すると、AIがコードを書き、画面・データベース・認証・公開まで進めてくれるAIソフトウェア開発サービスです。

いわゆる「Vibe Coding」系のツールですが、単に画面の見た目を生成するだけではなく、Supabase、GitHub、Stripeなどとつなぎ、実際に使えるWebアプリとして公開できるところまで扱います。

この記事では、2026年8月24日時点の公式情報をもとに、Lovableがどんなサービスなのか、Agent ModeやVisual Editsでどう作るのか、無料版とPro・Businessの違い、どんなアプリ開発ならLovableを使う意味があるのかまで整理します。

## Lovableはどんなサービス？

Lovableは、コードを書けない人でも自然な言葉からWebアプリを作れるAI開発サービスです。

ただし、テンプレートから画面を選ぶだけの従来型ノーコードツールとはかなり違います。

ユーザーが「予約フォーム付きの美容院サイトを作って」「会員登録できるSaaSダッシュボードが欲しい」のように伝えると、LovableがReact / TypeScriptベースのアプリを生成し、その後も会話しながら機能を追加していきます。

画面だけではなく、Supabaseを使ったデータベースや認証、Stripeの決済、外部API連携なども組み込めます。

2026年現在のLovableでは、AIへ一つずつ修正を頼むだけでなく、Agent Mode、Chat Mode、Visual Editsを使い分けられます。

Agent Modeは、コードベースやログ、データベースを調べながら、複数ステップの作業を自律的に進めます。単に「このコードを書いて」と返すだけではなく、必要なファイルを調べ、エラーを確認しながら修正できます。

Chat Modeは、すぐ変更する前に相談したいときに使います。設計やバグの原因を整理したり、実装方針を話し合ったりできます。

Visual Editsでは、画面上のボタン、テキスト、余白などを直接選んで変更できます。小さなデザイン修正まで毎回文章で説明する必要がありません。

GitHub連携も重要です。

Lovableで作ったコードはGitHubへ同期でき、必要なら開発者が通常のコードとして編集できます。Lovable内だけに閉じた独自形式ではなく、一般的なWeb技術として持ち出せることが、長期運用では大きな違いになります。

また、Lovable Cloudによってホスティングまで同じ環境で扱えます。

つまりLovableは、**「AIがプロトタイプを描くツール」ではなく、自然言語からWebアプリを作り、バックエンド・公開・運用まで一つの流れで進めるAIソフトウェアエンジニア**として使うサービスです。

## Lovableではどうやってアプリを作る？

最初は作りたいものを文章で伝えます。

「予約管理アプリ」「社内の問い合わせ管理」「顧客ポータル」など、目的と必要な機能をできるだけ具体的に書くと、Lovableが初期アプリを生成します。

その後、画面を見ながら修正します。

大きな機能追加ならAgent Modeへ「ログイン後にユーザーごとのダッシュボードを追加して」と頼み、細かい色や余白ならVisual Editsで直接変更できます。

データ保存が必要ならSupabaseを接続します。

認証、PostgreSQLデータベース、Storageなどを会話しながら設定できるので、フロントエンドだけのデモから実際にデータを持つアプリへ広げられます。

決済を入れたい場合はStripeなどを接続できます。

公開するときはLovable Cloudを使えますが、GitHubへ同期して別環境へデプロイすることもできます。

この「最初はAIだけで作り、必要になったら通常の開発へ引き継げる」という流れがLovableの使いやすいところです。

一方、ネイティブiOS・Androidアプリを直接生成するサービスではありません。

Lovableが作るのはWebアプリです。スマホのブラウザで使えるレスポンシブWebアプリは作れますが、XcodeやAndroid Studio用のネイティブアプリパッケージをそのまま出すわけではありません。

App Store / Google Playへのネイティブ配布が前提なら、Lovableだけで完結するかは別途考える必要があります。

## Lovableの料金について

LovableにはFree、Pro、Business、Enterpriseがあります。

Freeは0ドルで、毎日5 build credits、月最大30 build creditsが付与されます。さらに月20 Cloud credits、ユーザーアプリ内AIを試すための4 AI creditsがあります。

クレジットカードなしで始められるため、簡単なWebサイトや小さなアプリを試すには十分です。

Proは月25ドルで、月100 creditsに加え、毎日5 build creditsがあります。Custom Domain、非公開プロジェクト、Lovable brandingの削除など本番公開向けの機能を使えます。

Businessは月50ドルで、Proに加えてSSO、より高度な権限・セキュリティ管理、Design Templatesなど組織向け機能が増えます。

Enterpriseは個別見積もりです。

2026年6月には課金の仕組みが整理され、Build、Cloud、アプリ内AIで使う残高がUnified Creditsへまとめられています。

Buildでは使うモードによって消費が変わります。

Default Modeは作業の複雑さでCredit消費が変わり、Plan Modeは1メッセージ1 Creditです。

公式例では、ボタンの色変更が0.5 Credit、フッター削除が0.9、認証追加が1.2、画像付きLanding Page生成が1.7 Creditなどと案内されています。

そのため「Proは月100回指示できる」という意味ではありません。

簡単な変更なら1 Credit未満、複雑な作業はそれ以上使います。

## 無料版でどこまで使える？

FreeでもLovableの基本的な作り方は確認できます。

毎日5 build creditsがあるため、小さな変更を繰り返しながら簡単なアプリを作れます。

ただし月最大30 build creditsなので、本格的に開発を始めるとすぐ不足しやすくなります。

特に、最初から完成形を一発で作るのではなく、画面を見ながら何度も修正するのがLovableの使い方です。実際の開発では「ここを変える」「やっぱり戻す」「別の機能を追加する」というやり取りが増えるため、FreeのCreditは検証用と考えた方がいいでしょう。

Proへ移る意味が出るのは、アプリを一度試す段階から、実際に公開・継続開発する段階です。

Custom Domain、非公開Project、月100 Creditsなどが必要になり、CloudやAI機能も使うならPaid planの方が管理しやすくなります。

Businessは、開発量を増やすためというより、企業としてアクセス制御やSSOなどを必要とするときに選ぶPlanです。

LovableはSeat課金ではなくWorkspaceのCredit量で料金が決まるため、複数人を招待しても人数だけで月額が増えるわけではありません。チームでは全員が同じCredit Poolを共有します。

## Lovableはどんな開発に向いている？

Lovableが向いているのは、Webアプリを短期間で形にしたい人です。

SaaSのMVP、顧客Portal、予約システム、社内Tool、Landing Pageなど、ブラウザで動くサービスは相性があります。

非エンジニアでも作り始められますが、エンジニアにとっても価値があります。

ログイン、DB接続、基本UIなど毎回書く部分をAIに任せ、必要なところだけGitHub側で細かく修正できます。

特に「まず動くものを作り、利用者の反応を見てから本格開発したい」ケースでは速度が大きなメリットになります。

一方、ネイティブiOS / Androidアプリを直接App Storeへ出したい場合はLovableだけでは目的が違います。

また、非常に複雑な既存コードベースへ少しずつ変更を加える用途なら、CursorやClaude Codeなどコードエディタ・エージェント型ツールの方が自然な場合があります。

Lovableは、既存の巨大システムを保守するより、**新しいWebアプリをゼロから早く立ち上げるところ**で最も特徴が出ます。

## まとめ｜LovableはWebアプリを「考える」から「公開する」まで一気に進めたい人向け

Lovableは、自然な言葉からWebサイト・Webアプリを作り、データベース、認証、決済、公開まで進められるAI開発サービスです。

Agent Modeで複数ステップの開発を任せ、Visual Editsで細かなUIを直接直し、必要になればGitHubへコードを持ち出せます。

Freeは毎日5 build credits、月最大30 credits。Proは月25ドル、Businessは月50ドルです。

無料版はLovableの作り方を試すには十分ですが、継続的に機能追加して本番公開するならProの意味が出やすくなります。

コードを書けないから使うサービスというより、Webアプリの初速を上げ、必要なときだけ人間の開発へ戻れることがLovableの一番大きな価値です。
