---
title: "Vapiとは？AI電話エージェントの作り方・料金・どんな開発に向いているかを解説"
displayTitle: "Vapi"
subtitle: "AI電話エージェントの作り方・料金・どんな開発に向いているかを解説"
description: "Vapiは、電話やWeb上で人と会話できる音声AIエージェントを開発するためのプラットフォームです。"
publishedAt: "2026-08-23"
updatedAt: "2026-08-24"
category: "AI音声エージェント"
parentCategory: "AI音声エージェント"
primaryCategory: "AI音声エージェント"
subcategory: "AI音声エージェント"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "vapi-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/vapi-review/"
ogTitle: "Vapiとは？AI電話エージェントの作り方・料金・どんな開発に向いているかを解説"
ogDescription: "Vapiは、電話やWeb上で人と会話できる音声AIエージェントを開発するためのプラットフォームです。"
targetKeyword: "Vapi"
searchIntent: "review"
serviceName: "Vapi"
officialUrl: "https://vapi.ai/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Vapi公式サイト"
    href: "https://vapi.ai/"
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
categoryTags: ["AI音声エージェント", "Vapi", "AI"]
---
# Vapiとは？AI電話エージェントの作り方・料金・どんな開発に向いているかを解説

Vapiは、電話やWeb上で人と会話できる音声AIエージェントを開発するためのプラットフォームです。

AIが電話を受けるサービスそのものを完成品として買うというより、音声認識、LLM、音声合成、電話回線、外部ツールなどを組み合わせ、自社の用途に合うVoice Agentを作るための開発基盤に近いサービスです。

この記事では、2026年8月24日時点の公式情報をもとに、Vapiが何をまとめてくれるのか、AssistantsとSquadsの違い、実際の作り方、1分0.05ドルと表示される料金をどう考えればいいのかまで整理します。

## Vapiはどんなサービス？

音声AIエージェントを自前で作る場合、単にLLMへ音声を渡せば完成するわけではありません。

相手の声をリアルタイムで文字へ変換するSpeech-to-Text、その内容を理解して返答を作るLLM、返答を自然な声へ戻すText-to-Speechが必要です。さらに電話回線、割り込み、応答速度、ツール呼び出し、通話転送なども扱わなければなりません。

Vapiは、この複数の部品をリアルタイムの会話として動かすオーケストレーション層を提供します。

特徴は、音声認識・LLM・音声を特定ベンダーへ固定しないことです。OpenAI、Anthropic、Google、Deepgram、ElevenLabsなど複数のプロバイダーから構成を選べます。自分のAPIキーを接続したり、自前のLLMサーバーを使ったりする構成も可能です。

基本単位になるのがAssistantです。システムプロンプト、モデル、音声、Toolsなどを設定し、カスタマーサポート、予約受付、リード選別など一つの役割を担当させます。

より複雑な電話ではSquadsを使えます。これは専門のAssistantを複数組み合わせ、会話の文脈を保ったまま担当を引き継ぐ仕組みです。たとえばECなら、注文確認、返品、VIP対応を別のAssistantへ分けられます。

Toolsを追加すると、会話するだけでなく実際の処理もできます。通話転送、終了、SMS、キーパッド入力、API Requestといった標準Toolに加え、自社APIをWebhookで呼ぶCustom Tool、Vapi上でTypeScriptを実行するCode Tool、MakeやGoHighLevelとのIntegration Toolがあります。

予約を受けたらカレンダーへ登録する、顧客情報をCRMから取得する、条件に合わなければ人間へ電話を転送する、といったところまで一回の通話の中で動かせます。

つまりVapiは、**「AIに電話させる機能」だけではなく、音声AIに必要なモデル・リアルタイム処理・電話・ツール連携を組み替えられる開発者向け基盤**です。完成済みの電話代行サービスより自由度が高い一方、その分どの構成で動かすかは利用者側で設計します。

## VapiではどうやってVoice Agentを作る？

最初のAssistantはDashboardからコードを書かずに作れます。

Assistantを作成し、役割や会話方針を設定します。現在はBalancedなどのModel Intelligence presetもあり、Transcriber・Model・Voiceを一つずつ選ばず始めることもできます。

次に電話番号を接続します。VapiのQuickstartでは、Assistantを作成して番号を設定し、着信と発信を試すところまで数分で進められる形になっています。

Webサイトやアプリ内の音声会話ならWeb SDK / Server SDKを使えます。電話番号だけでなく、Web上のVoice Widgetとして組み込むこともできます。

実際の業務へ入れる段階ではToolsを追加します。

予約受付なら空き状況を確認するAPIと予約作成Tool、サポートなら顧客情報取得と人間へのTransfer Tool、といった形です。会話が複雑なら一つの巨大なAssistantへ全部書くのではなく、Squadで役割を分ける方法もあります。

開発者向けにはVapi CLIもあり、Assistant、電話番号、通話、Webhookなどをターミナルから管理できます。MCP連携やローカルWebhookのテストにも対応しています。

また、自然な言葉で「こういうAgentを作りたい」と伝えて設定を組んでもらうComposerも提供されています。ただし2026年8月現在はAlphaなので、重要な本番設定を完全に任せるより、作成支援として扱うのがいいでしょう。

## Vapiの料金について

セルフサービスのBuildは、月額固定のプラットフォーム料金ではなく利用量ベースです。

Vapi Hostingは通話1分0.05ドル、SMS / Chatは1メッセージ0.005ドルです。通話の同時実行は10回分が含まれ、それを超える追加Concurrencyは1ライン月10ドルです。

ただし、**0.05ドル/分が実際の総通話料金ではありません。**

Vapiは音声認識、LLM、音声合成などのモデル費用を原価で利用者へ渡す方式です。さらに電話網側の費用も構成によって加わります。

たとえば高性能なLLMと高品質な音声を使えば、Vapi Hosting 0.05ドルにモデル費用などが上乗せされます。逆に自分のAPIキーを持ち込む場合、Vapiからそのモデル費用は請求されず、利用している各プロバイダー側で支払います。

そのためVapiの料金を見るときは「月額いくら」より、**1通話あたりの時間 × Vapi Hosting + STT + LLM + TTS + Telephony**で考える必要があります。

Buildでは60分以上の通話枠が含まれる案内があり、小規模な試作から始められます。Call Historyは14日、Chat Historyは30日です。

大規模利用向けのScaleは年間契約で、固定プラットフォーム料金とコミットした利用量に応じた料金になります。SSO、RBAC、SOC 2、データレジデンシー、SLA、専任サポートなどはScale側です。

HIPAAは月2,000ドル、Zero Data Retentionは月1,000ドルのAdd-onとして案内されています。規制業界で使う場合は、単純な1分単価だけではなくこうした固定費も含めて考える必要があります。

## Vapiの自由度はどこで効いてくる？

Vapiを選ぶ理由は、Voice Agentを作れることだけではありません。どの部品を使うか細かく選べることにあります。

たとえば、音声認識は速度重視、LLMは自社の用途で精度が高いモデル、音声はブランドに合うプロバイダーというように組み替えられます。新しいモデルが出たときも、Voice Agent全体を作り直さず一部を変更できます。

Toolsも自社APIへ直接つなげられるので、既製のCRM連携だけに制限されません。

これは開発チームには強みですが、「AI受付を明日から使いたいだけ」という会社には設定項目が多く感じられる可能性があります。完成品型サービスなら、モデル構成を意識せず電話業務だけ設定できるものもあります。

Vapiは、音声AIを自社プロダクトへ組み込みたい、モデルや音声を選びたい、独自APIと深く接続したいといった要求が増えるほど価値が出るタイプです。

## Vapiはどんな開発に向いている？

予約受付、カスタマーサポート、リード選別、アウトバウンド営業など、電話を自動化したい用途が中心です。

特に、自社のシステムへVoice Agentを組み込む開発者に向いています。API、SDK、CLIがあり、モデルや音声も選べるため、既存サービスの一機能として音声AIを追加できます。

複雑なサポートではSquadsで専門Agentへ引き継ぎ、必要なところだけ人間へTransferできます。Web上の音声インターフェースにも使えるため、「電話代行」だけに用途は限定されません。

一方、月に数件の電話を自動応答したいだけで、モデルやAPIを触る予定もない場合は、より完成品に近いサービスの方が導入は簡単なことがあります。

また料金はモデル構成で変わります。Vapiの0.05ドル/分だけで他サービスと比較せず、実際に使いたいSTT・LLM・TTS・電話回線まで入れた総コストを試算した方がいいでしょう。

## まとめ｜VapiはVoice Agentを「使う」より自社向けに「作り込む」人ほど強みが出る

Vapiは、音声認識、LLM、音声合成、電話回線、Toolsをまとめ、リアルタイムのAI Voice Agentを開発できるプラットフォームです。

Assistantなら一つの役割を素早く作れ、複雑な業務ではSquadsで複数の専門Agentを連携できます。APIやCustom Toolを使えば、会話だけでなく予約、CRM更新、通話転送など実際の処理までつなげられます。

BuildのVapi Hostingは通話1分0.05ドルですが、モデルや電話網の費用は別に考える必要があります。

モデル・音声・業務システムを自分で選びながらVoice Agentを作り込みたい開発者には自由度が大きな強みです。逆に、設定をほとんどせず完成済みのAI電話受付を導入したいだけなら、その自由度が必要かを先に考えた方がいいでしょう。
