---
title: "Gumloopとは？AIエージェントとワークフローの違い・使い方・料金を解説"
description: "Gumloopは、AIを使った業務自動化を、ワークフローとAIエージェントの両方から作れるサービスです。"
publishedAt: "2026-08-23"
updatedAt: "2026-08-24"
category: "AI業務自動化"
parentCategory: "AI業務自動化"
primaryCategory: "AI業務自動化"
subcategory: "AI業務自動化"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "gumloop-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/gumloop-review/"
ogTitle: "Gumloopとは？AIエージェントとワークフローの違い・使い方・料金を解説"
ogDescription: "Gumloopは、AIを使った業務自動化を、ワークフローとAIエージェントの両方から作れるサービスです。"
targetKeyword: "Gumloop"
searchIntent: "review"
serviceName: "Gumloop"
officialUrl: "https://www.gumloop.com/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Gumloop公式サイト"
    href: "https://www.gumloop.com/"
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
categoryTags: ["AI業務自動化", "Gumloop", "AI"]
---
# Gumloopとは？AIエージェントとワークフローの違い・使い方・料金を解説

Gumloopは、AIを使った業務自動化を、ワークフローとAIエージェントの両方から作れるサービスです。

以前は「AIを組み込めるノーコード自動化ツール」という捉え方が分かりやすいサービスでしたが、現在は自分で処理手順を組むWorkflowsに加えて、目的を伝えると必要な作業を考えて進めるAgentsが大きな柱になっています。

この記事では、2026年8月24日時点の公式情報をもとに、Gumloopが現在どんなサービスになっているのか、AgentsとWorkflowsをどう使い分けるのか、実際の使い方、月37ドルのProへ移る意味まで整理します。

## Gumloopはどんなサービス？

Gumloopは、会社で行っている繰り返し作業をAIへ渡すための自動化プラットフォームです。

特徴は、すべてを一種類の自動化方法へ押し込まないことです。処理手順が決まっている仕事はWorkflowsで組み、手順そのものをAIに考えさせたい仕事はAgentsへ任せられます。

Workflowsでは、入力、AI処理、外部サービス、条件分岐などをキャンバス上でつなぎます。たとえば「新しい問い合わせを取得→内容を分類→CRMから顧客情報を取得→返信案を生成→Slackへ送る」のように、仕事の流れがある程度決まっている場合に向いています。

Agentsはもっと目的ベースです。「今週の競合動向を調べて営業チーム向けのレポートを作る」と伝えると、接続されたツールや会社情報を使いながら必要な作業を進めます。2026年3月にはAgent Tasksが追加され、エージェントを毎朝8時に動かしたり、新しいメールやフォーム回答をきっかけに自動実行したりできるようになりました。チャットで頼むだけでなく、エージェントを定常業務へ組み込めます。

さらにGumloopのAgentsにはSkillsがあります。これは特定の仕事を行うための詳しい手順、スクリプト、資料などをまとめたもので、営業、分析、CRM管理といった専門的なやり方をエージェントへ持たせる仕組みです。毎回巨大な指示文へ全部詰め込むのではなく、必要になったときに適切なSkillを参照できます。

2026年5月にはsubagentsも導入され、エージェントが自分のコピーを作って仕事を並列化したり、別の専門エージェントへ一部を任せたりできるようになっています。

Company Brainには会社の情報源をまとめられ、Agentsが社内の文脈を使って仕事を進められます。Gongなどの情報源も同期でき、権限のあるデータだけを参照する仕組みが拡張されています。

つまり現在のGumloopは、**「自動化フローを自分で組むツール」と「仕事の進め方からAIへ任せるエージェント」を同じ環境で使い分けるサービス**です。ここが、単純なZapier代替やAIチャットとして見るだけでは分かりにくい一番の特徴です。

## WorkflowsとAgentsはどう使い分ける？

毎回ほぼ同じ手順を通るならWorkflowsの方が向いています。

たとえばフォームから来た情報を整形してスプレッドシートへ保存する、決まった条件でSlackへ通知する、といった仕事です。手順を固定できるため、どこで何が起きるか追いやすくなります。

一方、競合調査、営業先のリサーチ、複数の資料を読んでレポートを作るといった仕事は、入力によって必要な手順が変わります。こうした仕事ではAgentsの方が自然です。

Gumloopではこの二つを完全に分ける必要もありません。Agentsをworkflowへ組み込んだり、決定的な処理をworkflow側へ残したりできます。

判断基準は「AIを使いたいか」ではなく、**仕事の手順を先に人間が決められるか**です。

決められるならWorkflow。目的は決まっているが、その都度調査方法や使うツールを変えたいならAgent。この切り分けをするとGumloopを使う意味が分かりやすくなります。

## Gumloopはどうやって使う？

Gumloopはブラウザから利用します。

まずGoogle Drive、Slack、Salesforceなど仕事で使うサービスをConnectorとして接続し、WorkflowsかAgentsのどちらで自動化するかを決めます。

Workflowなら、テンプレートから始めるか、必要な処理をキャンバスへ追加してつなぎます。AIを使う部分だけモデルへ渡し、その前後は通常のデータ取得や条件分岐にすることもできます。

Agentなら、担当させる役割や目的を決め、必要なConnector、Knowledge Source、Skillsなどを与えます。最初はチャットで試し、安定してきた仕事をAgent Taskとしてスケジュールやイベントトリガーへ移す流れが分かりやすいです。

現在はAgentsから成果物をArtifactとして作ったり、専用ページで共有したりする機能もあります。単に裏側でAPIをつなぐだけではなく、調査結果やダッシュボードなど、人がそのまま確認できる成果物まで作らせられます。

いきなり会社全体の業務を一つのAgentへ任せるより、「毎週の競合レポート」「新規リードの調査」のように成果物が明確な仕事から始める方が、精度とクレジット消費を確認しやすいでしょう。

## Gumloopの料金について

現在の中心プランはProで、月37ドルからです。14日間の無料トライアルがあります。

Proには月20,000クレジット相当が含まれ、無制限のSeats、無制限のTeams、無制限のWorkflows、Agents、Skills、Knowledge Sources、5つの同時Workflow実行、25の同時Agent Chatなどが利用できます。

以前のSolo / Teamsのように人数で分ける構成から、現在はProへまとめられています。特に無制限Seatsなので、小さなチームで「人数を増やすたびに基本料金が大きく増える」という料金ではないのが特徴です。

ただし、実際の利用量はクレジットで考える必要があります。AIモデルや処理内容によって消費量が変わるため、月37ドルだけ見て「何回でもAIを動かせる」と考えるのは違います。

GumloopはBring Your Own API Keysにも対応しています。モデル利用の考え方やコストを自分で管理したい場合は、この選択肢もあります。

Proへ移る意味が出るのは、単発で自動化を試す段階より、複数のWorkflowsやAgentsを日常業務として動かしたくなったときです。特に複数人で同じAgentや会社情報を使うなら、無制限Seatsや共有機能の価値が出やすくなります。

大規模組織向けのEnterpriseでは、RBAC、SCIM/SAML、監査ログ、モデルアクセス制御、データ保持設定、VPCなど管理・セキュリティ機能が追加されます。

## Gumloopはどんな業務に向いている？

Gumloopが特に合うのは、「単純な自動化」と「AIに考えさせたい仕事」の両方が同じチーム内にある場合です。

マーケティングなら、データ取得や保存はWorkflowで固定し、競合分析やコンテンツ案の作成はAgentへ任せられます。営業ならCRM更新は決められたフローで行い、見込み客の調査や提案材料の作成はAgentへ渡す、といった分担ができます。

また、ノーコード寄りの画面で始めたいものの、将来的にはAIエージェントをかなり深く業務へ入れたいチームにも向いています。Skills、Company Brain、subagents、Agent Tasksまで使えば、一回のプロンプトに答えるAIより継続的な担当者に近づけられます。

一方、処理が完全に固定されていてAI判断がほとんど必要ないなら、GumloopのAgent機能まで使う必要はありません。逆に、個人的な質問へ答えてくれる汎用AIだけが欲しい場合もChatGPTなどの方が簡単です。

Gumloopを選ぶかは、「AIが賢いか」だけではなく、**会社の仕事をWorkflowとAgentへ分け、同じ基盤で運用したいか**で考えると判断しやすいでしょう。

## まとめ｜Gumloopは決められた自動化とAIエージェントを同じ場所で育てたいチーム向け

Gumloopは、ノーコード寄りのWorkflowsと、自律的に仕事を進めるAgentsを同じ環境で使えるAI自動化サービスです。

現在はAgent Tasks、Skills、subagents、Company Brainなどが加わり、単にAIを一工程へ入れるサービスから、継続して仕事を任せるエージェント基盤へ広がっています。

Proは月37ドルからで、月20,000クレジット相当、無制限Seats。14日間の無料トライアルがあります。

毎回同じ仕事はWorkflow、状況に応じて手順を考える仕事はAgentという使い分けができるため、すでに業務自動化を進めていて、その次にAIへ判断まで任せたいチームほどGumloopの良さが分かりやすくなります。
