---
title: "Retell AIとは？AI電話エージェントの作り方・料金・本番運用しやすい理由を解説"
displayTitle: "Retell AI"
subtitle: "AI電話エージェントの作り方・料金・本番運用し、すい理由を解説"
description: "Retell AIは、自然な電話対応を行うAI Voice Agentを作成し、テスト、公開、監視まで行えるプラットフォームです。"
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
slug: "retell-ai-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/retell-ai-review/"
ogTitle: "Retell AIとは？AI電話エージェントの作り方・料金・本番運用しやすい理由を解説"
ogDescription: "Retell AIは、自然な電話対応を行うAI Voice Agentを作成し、テスト、公開、監視まで行えるプラットフォームです。"
targetKeyword: "Retell AI"
searchIntent: "review"
serviceName: "Retell AI"
officialUrl: "https://www.retellai.com/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Retell AI公式サイト"
    href: "https://www.retellai.com/"
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
categoryTags: ["AI音声エージェント", "Retell AI", "AI"]
---
# Retell AIとは？AI電話エージェントの作り方・料金・本番運用しやすい理由を解説

Retell AIは、自然な電話対応を行うAI Voice Agentを作成し、テスト、公開、監視まで行えるプラットフォームです。

電話を受けたり発信したりするだけでなく、会話フローの設計、Knowledge Base、外部API連携、シミュレーションテスト、通話分析まで一つの環境にまとめています。現在はVoice Agentに加えてAI Chat Agentも提供しています。

この記事では、2026年8月24日時点の公式情報をもとに、Retell AIがどんなサービスなのか、実際にどうAgentを作るのか、1分0.07〜0.31ドルという料金の内訳、本番運用でどこに強みがあるのかまで整理します。

## Retell AIはどんなサービス？

Retell AIは、電話業務を担当するAIエージェントを「作って終わり」にせず、テストして実運用し、その結果を改善するところまで扱うVoice AIプラットフォームです。

基本的な用途は、カスタマーサポート、予約受付、営業電話、リード選別などです。AIが自然な会話を行い、必要に応じて外部システムの情報を取得したり、人間へ引き継いだりできます。

Agentの会話設計には、柔軟な会話を作るSingle / Multi Prompt型と、より構造化して細かく制御するConversation Flow型があります。単純なFAQならPrompt中心で始め、予約や本人確認のように通るべき手順がある電話ではConversation Flowで制御できます。

Knowledge BaseにはWebサイトのURL、PDFやWord、CSV、Excelなどさまざまな資料を登録できます。Agentは通話中に必要な情報を検索して回答できるため、巨大なFAQをすべてPromptへ書く必要はありません。

電話番号はRetell側で購入できるほか、自社のTelephonyをSIPで接続することもできます。着信と発信の両方に対応しています。

Retell AIで特に目立つのがTestingです。

LLM Playgroundでは電話をかけなくてもテキストで会話やFunction Callを確認できます。さらにSimulation Testingでは「怒っている顧客」「予約変更を希望する人」のような利用者側をAIで再現し、成功条件を設定して自動テストできます。複数ケースをBatchで繰り返し実行することもできます。

Voice Agentは、デモで一度うまく会話できても本番で同じように動くとは限りません。LLMは入力によって挙動が変わるため、Promptを変更するたびに代表的なケースを回帰テストできることは実運用ではかなり重要です。

つまりRetell AIは、**音声AIを作る部品だけでなく、電話業務として安定させるためのテスト・分析まで含めたプラットフォーム**として見ると特徴が分かりやすいです。

## Retell AIではどうやってAgentを作る？

最初のAgentはテンプレートから作れます。

DashboardのAgentsから用途に近いTemplateを選び、会話内容を調整します。Web上のTest機能ですぐ会話できるため、最初から電話番号を購入する必要はありません。

実際の電話へ出す場合はBillingへ支払い方法を追加し、Phone Numberを購入してAgentを割り当てます。その番号へ電話すれば着信Agentとして動き、Dashboardから番号を指定してOutbound Callを発信することもできます。

業務データが必要ならKnowledge BaseやFunctionを追加します。たとえば予約システムへ空き状況を問い合わせる、CRMから顧客情報を取得する、会話結果をWebhookで送るといった処理です。

ここからが本番運用向けの工程です。

まずLLM Playgroundで会話とFunction Callを確認し、次にSimulation Testingへ代表的な利用者パターンを登録します。「正しい部署へ転送できた」「予約日を聞き取れた」など評価条件を決め、変更後も同じケースを通るか自動で確認します。

実際の通話を始めた後はCall AnalysisやAI QAを使い、通話結果を確認します。

AI電話はPromptを一度書いて完成ではありません。実際の利用者は想定外の言い方をするので、**作る→シミュレーションする→実通話を見る→失敗例をテストケースへ戻す**というサイクルで改善する方がRetellの機能を活かせます。

## Retell AIの料金について

Retell AIは月額固定の基本料金ではなく、Pay as you goが中心です。登録すると10ドル分の無料クレジットがあり、年間契約なしで試せます。

AI Voice Agentは構成によって1分0.07〜0.31ドルが目安として表示されています。AI Chat Agentは1メッセージ0.002ドル以上です。

ただしVoice Agentの料金は一枚岩ではありません。

基本となるRetell Voice Infraが1分0.055ドル。そこへText-to-Speech、LLM、Telephony、必要なAdd-onが加わります。

たとえばRetell Platform Voiceは0.015ドル/分、ElevenLabs Voiceは0.040ドル/分。LLMもモデルごとに違い、軽量モデルと高性能モデルでは通話単価がかなり変わります。

公式Pricingの初期例では、Voice Infra 0.055ドル、TTS 0.015ドル、LLM 0.04ドルの組み合わせで合計0.11ドル/分と表示されています。実際には選ぶモデルや電話回線で変わるため、0.07ドルだけを前提に予算を組まない方がいいでしょう。

Knowledge BaseとAdvanced Denoising、Safety Guardrailsはそれぞれ+0.005ドル/分、PII Removalは+0.01ドル/分、AI Quality Assuranceは最初の100分無料で、その後0.10ドル/分です。

Retellの電話番号は1番号月2ドル。最初の20 Concurrent Callsは含まれ、それを超えるConcurrencyは1枠月8ドルです。最初の10 Knowledge Basesは無料で、それ以降は1つ月8ドルです。

この料金体系の良いところは、少量なら大きな月額固定費を払わず本番に出せることです。一方、通話量が増えるとモデル・音声・Add-onの選択がそのまま月額へ効いてきます。

Enterpriseは個別料金で、Dedicated Stable Server、SSO、RBAC、高いConcurrency、専任サポートなどが加わります。

## Retell AIは「テストしやすさ」をどう使う？

Voice Agentで難しいのは、会話ができることより、さまざまな相手に対して事故なく同じ仕事を完了できることです。

予約Agentなら、普通に予約する人だけでなく、日付を途中で変える人、必要情報を答えない人、関係ない質問をする人、人間を要求する人などがいます。

RetellのSimulation Testingでは、こうした利用者側のシナリオを作り、Agentとの会話をAIでシミュレーションできます。成功条件を評価し、複数ケースをまとめて実行できます。

Promptやモデルを変更した後に同じTest Suiteを再実行すれば、「一つのケースを直したら別のケースが壊れた」という問題も見つけやすくなります。

Knowledge Baseも、取得するChunk数やSimilarity Thresholdを調整できます。資料を入れれば終わりではなく、必要な情報を適切に取得できているか確認できます。

このためRetell AIは、数本のデモ電話を作るだけより、顧客へ公開して継続的に改善するVoice Agentで機能の価値が出やすいです。

## Retell AIはどんな用途に向いている？

カスタマーサポート、予約、受付、営業など、電話件数があり、対応品質も確認したい業務に向いています。

特に、Agentの変更を頻繁に行うチームにはSimulation Testingが役立ちます。PromptやFunctionを変えるたびに人間が何十回も電話して確認するより、代表ケースを自動で回せます。

Pay as you goなので、まず少量の電話で検証したい会社にも入りやすい料金です。月額数百ドルの固定プランへ入らず、10ドル分の無料クレジットから実際の通話単価を確認できます。

一方、モデル・音声・インフラを一つずつ自由に組み替える開発基盤そのものを最優先するなら、Vapiのようなオーケストレーション寄りサービスも比較対象になります。

Retellは、**Voice Agentを素早く作ることに加え、テスト・分析・QAまで含めて本番運用したいか**で判断すると分かりやすいでしょう。

## まとめ｜Retell AIはAI電話を本番で「安定して動かす」ところまで考えたいチーム向け

Retell AIは、AI Voice Agentを作成し、電話番号へ公開し、テストと分析まで行えるプラットフォームです。

Knowledge BaseやFunctionで業務システムへつなぎ、LLM PlaygroundとSimulation Testingで会話を検証できます。単に音声AIのデモを作るより、本番電話として品質を改善していく使い方に向いています。

料金はPay as you goで、Voice Agentは構成により1分0.07〜0.31ドル。10ドル分の無料クレジットがあり、20 Concurrent Callsまで含まれます。

安い表示単価だけを見るのではなく、使いたいLLM、Voice、Telephony、Knowledge BaseやQAなどのAdd-onを含めて1分あたりの実コストを確認することが重要です。

まず一つの電話業務を作り、代表的な失敗ケースまでSimulation Testingへ入れてみると、Retell AIを使う意味を判断しやすくなります。
