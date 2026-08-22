---
title: "n8n AI Agentとは？AI業務自動化・セルフホスト・500以上連携・料金を解説【2026年版】"
description: "n8nのAI Agent、500以上の連携、Human in the Loop、マルチエージェント、セルフホスト、Starter 20ユーロ〜を整理します。"
publishedAt: "2026-08-23"
updatedAt: "2026-08-23"
category: "AI業務自動化"
parentCategory: "AI業務自動化"
primaryCategory: "AI業務自動化"
subcategory: "AI業務自動化"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "n8n-ai-agent-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/n8n-ai-agent-review/"
ogTitle: "n8n AI Agentとは？AI業務自動化・セルフホスト・500以上連携・料金を解説【2026年版】"
ogDescription: "n8nのAI Agent、500以上の連携、Human in the Loop、マルチエージェント、セルフホスト、Starter 20ユーロ〜を整理します。"
targetKeyword: "n8n AI Agent"
searchIntent: "review"
serviceName: "n8n AI Agent"
officialUrl: "https://n8n.io/ai-agents/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "n8n AI Agent公式サイト"
    href: "https://n8n.io/ai-agents/"
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
categoryTags: ["AI業務自動化", "n8n AI Agent", "AI"]
---
# n8nとは？AIエージェントまで作れる業務自動化ツールは何が強い？料金・使い方・注意点を解説【2026年版】

n8nは、複数のアプリやAPIをつなぎ、業務フローを自動化できるワークフローオートメーションツールです。

もともとは「Aで何か起きたらBを実行する」という自動化に強いサービスでしたが、2026年のn8nはそこへAIを組み込み、LLMに判断させたり、ツールを使わせたりするAIエージェントまで同じワークフロー上で作れるようになっています。

この記事では、2026年8月時点のn8nで何ができるのかを、通常の自動化とAIエージェントの違いから見ていきます。料金の数え方、Cloudとセルフホスト、AI Assistant、1000以上の連携、運用時の注意点まで確認し、GumloopやZapierではなくn8nを選ぶ理由がどこにあるのかを整理します。

## n8nは「自動化ツール」から「AIを含む業務の実行基盤」へかなり広がっている

n8nの基本は、トリガーと処理をつないでワークフローを作ることです。

たとえば、問い合わせフォームが送信されたら内容をSlackへ通知し、顧客情報をCRMへ保存する。

ここまでは従来型の自動化です。

今のn8nでは、その途中にAIを入れられます。

問い合わせ内容をAIに読ませて緊急度を判定する。

営業案件なら商談候補としてスコアリングする。

内容に応じて別の担当部署へ振り分ける。

必要ならAIエージェントに複数のツールを持たせ、状況に応じてどの処理を実行するか判断させる。

つまり、決められた順番を自動で流すだけでなく、「途中で判断が必要な業務」まで自動化しやすくなっています。

## 1000以上の連携先があるので、既存業務を丸ごと置き換えるより“つなぐ”のが得意

n8nは1000以上のインテグレーションを案内しています。

Gmail、Slack、Google Sheets、Notion、HubSpot、Salesforceなど、普段使っているSaaSをつなげられます。

n8nを導入したからといって、今使っているCRMやメールを捨てる必要はありません。

むしろ、

メールはGmail。

顧客管理はHubSpot。

請求はStripe。

社内連絡はSlack。

こうして分散している業務をつなぐのが得意です。

APIが用意されているサービスなら、専用ノードがなくてもHTTP Requestで接続できます。

技術チームが使うと、「連携一覧にあるかどうか」に縛られにくいのも強みです。

## n8nの料金は“ステップ数”ではなくワークフローが何回走ったかで数える

n8nの料金で分かりやすい特徴が、execution単位の課金です。

2026年8月時点では、1回のワークフローが最初から最後まで動けば1 executionとして数えられます。

途中に10ステップあっても100ステップあっても、1回の実行なら1 executionです。

これは、処理一つひとつをtaskやoperationとして数えるサービスとかなり違います。

たとえば、1件の問い合わせを受けて、

AIで分類。

CRMへ保存。

Slackへ通知。

メールを送信。

スプレッドシートへ記録。

という5処理を行っても、n8nでは一つのワークフロー実行として扱えます。

複雑なフローほど、この料金体系は読みやすくなります。

## Starterは年払い換算で月20ユーロ、Proは月50ユーロ相当から

2026年8月時点のn8n Cloudでは、Starterが年払い換算で月20ユーロです。

月2,500 executions、5 concurrent executions、1 shared project、月2,300 AI creditsが含まれます。

Proは年払い換算で月50ユーロからで、月10,000 executions、20 concurrent executions、3 shared projectsなどが利用できます。

上位のPro枠では50,000 executionsや最大13,700 AI creditsの設定もあります。

無料の恒久Cloudプランはありませんが、StarterとProにはクレジットカード不要の無料トライアルがあります。

まず本当に業務へ使えるか確認したいなら、トライアル中に実際のワークフローを1本作り、1週間ほど動かしてexecution数を見るのが一番分かりやすいです。

## AI Assistantのcreditsと、ワークフロー内で使うLLMの料金は同じものではない

n8n CloudにはAI Assistantがあり、ワークフロー作成を手伝ってくれます。

Starterには月2,300 AI credits、Proには5,700または13,700 AI creditsが用意されています。

ここで注意したいのは、このAI creditsが「自分で作ったAIエージェントのLLM料金」そのものではないことです。

AI Assistantはn8n上でワークフローを作る支援です。

一方、実際のワークフローでOpenAIやAnthropicなどのモデルを呼び出す場合は、接続先のモデル側の料金も考える必要があります。

n8nの月額だけでAI利用料が全部含まれるわけではありません。

業務自動化の費用を見る時は、n8nのexecutionと、外部AIの利用料金を分けて考えた方がいいです。

## セルフホストできるのがn8nの大きな違い

n8nはCloudだけでなくセルフホストできます。

これはZapierやLindyと比べる時の大きな違いです。

自社のサーバーやクラウド環境にn8nを置き、ネットワークやデータ保存先を自分で管理できます。

社内DB。

閉じたネットワーク。

独自API。

機密性の高いデータ。

こうしたものと接続したい企業では、セルフホストの価値が大きくなります。

一方で、サーバー運用、更新、バックアップ、セキュリティ対応も自分たちの責任です。

Cloudならn8n側が管理してくれる部分を、自社で持つことになります。

「セルフホストできる＝無料で楽」ではなく、自由度と運用負担の交換だと考えた方がいいです。

## AIエージェントを作れるからといって、全部をAgentにしない方がいい

2026年は、何でもAI Agentにしたくなる流れがあります。

でも、業務自動化では決まった処理の方が安全な場面も多いです。

請求書が来たら保存する。

毎朝8時にレポートを送る。

フォーム送信時にCRMへ登録する。

こうした処理は、AIに考えさせる必要がありません。

n8nの良さは、決め打ちのワークフローとAI判断を同じ場所で混ぜられることです。

固定ルールで済む部分は通常ノード。

文章理解や例外判断が必要な部分だけAI。

この分け方をすると、コストも挙動も安定しやすいです。

## Gumloopよりn8nが向くのは、ワークフローの中身を細かく制御したい人

GumloopもAIを中心に業務自動化できます。

違いは作り方です。

GumloopはAI Agentを作り、自然言語で仕事を渡す方向がかなり強くなっています。

n8nは、ワークフローの各処理を自分で組み、必要な場所へAIを入れる使い方が分かりやすいです。

エラー時の処理。

分岐。

データ変換。

API。

実行順。

ここを細かく制御したいならn8nが強いです。

逆に、「何をしたいか」を自然言語で伝えて、Agent側にかなり考えてほしいならGumloopの方が入りやすいこともあります。

## まとめ

n8nは、単なるSaaS連携ツールではなく、通常の自動化とAIエージェントを同じワークフローで扱える業務自動化基盤です。

1000以上の連携先があり、execution単位の料金なので、複数ステップの複雑なフローも費用を読みやすいです。

さらにセルフホストできるため、技術チームや自社データを細かく管理したい企業には強い選択肢になります。

一方で、自由度が高い分、最初から全部をAIに任せて簡単に作るサービスではありません。

何を固定ルールで処理し、どこだけAIに判断させるか。

そこを設計できる人ほど、n8nの良さを活かしやすいです。
