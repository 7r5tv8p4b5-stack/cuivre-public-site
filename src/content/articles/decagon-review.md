---
title: "Decagonとは？AOPで作るAIカスタマーサポートの仕組み・料金・Sierraとの違いを考える前に知りたい特徴"
description: "Decagonは、企業のカスタマーサポートや顧客体験を担当するAIエージェントを構築・運用するプラットフォームです。"
publishedAt: "2026-08-23"
updatedAt: "2026-08-24"
category: "AIカスタマーサポート"
parentCategory: "AIカスタマーサポート"
primaryCategory: "AIカスタマーサポート"
subcategory: "AIカスタマーサポート"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "decagon-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/decagon-review/"
ogTitle: "Decagonとは？AOPで作るAIカスタマーサポートの仕組み・料金・Sierraとの違いを考える前に知りたい特徴"
ogDescription: "Decagonは、企業のカスタマーサポートや顧客体験を担当するAIエージェントを構築・運用するプラットフォームです。"
targetKeyword: "Decagon"
searchIntent: "review"
serviceName: "Decagon"
officialUrl: "https://decagon.ai/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Decagon公式サイト"
    href: "https://decagon.ai/"
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
categoryTags: ["AIカスタマーサポート", "Decagon", "AI"]
---
# Decagonとは？AOPで作るAIカスタマーサポートの仕組み・料金・Sierraとの違いを考える前に知りたい特徴

Decagonは、企業のカスタマーサポートや顧客体験を担当するAIエージェントを構築・運用するプラットフォームです。

チャット、メール、音声を一つの仕組みで扱い、問い合わせへ回答するだけでなく、会社のルールに従って返金、アカウント操作、予約変更などの処理まで進められます。

Decagonで特徴的なのが、業務ルールをAgent Operating Procedures（AOPs）として表現する考え方です。AIへ巨大なプロンプトを渡すのではなく、現場が理解できる手順としてエージェントの判断を管理します。

この記事では、2026年8月24日時点の公式情報をもとに、Decagonがどんなサービスなのか、AOPsとDuetが何をするのか、テストと本番改善の流れ、公開されている料金の考え方まで整理します。

## Decagonはどんなサービス？

Decagonは、企業向けのConversational AIを「ブラックボックスのAIへ任せる」のではなく、業務担当者が中身を見ながら育てられる形にしているサービスです。

顧客から「返金してほしい」と問い合わせが来た場合、AIはFAQから返金ポリシーを引用するだけでは十分ではありません。

購入日、商品状態、会員ランクなどを確認し、会社のルールに当てはめ、条件を満たすなら実際の返金処理を行い、満たさない場合は別の対応を案内する必要があります。

Decagonでは、こうした判断と処理をAOPとして定義します。

AOPはAgent Operating Procedureの略で、人間のSOPに近いものです。自然言語で業務ルールを書きながら、APIや外部システムを呼び出す処理を組み込めます。

AOPが重要なのは、AIの自由度を完全になくさずに、会社として守るべきルールを明示できることです。

「顧客の意図を理解して自然に会話する」部分はAIに任せながら、「この条件では返金しない」「このケースは人間へEscalationする」といった部分を業務手順として管理できます。

Decagonはこの仕組みをChatだけに限定していません。現在はChat、Voice、Emailを同じIntelligence Layerで扱い、同じAOPのロジックを複数チャネルへ展開できます。

顧客がチャットで相談した後に電話をしても、窓口ごとに別のAIとして動かすのではなく、一貫した会社のルールと文脈で対応することを目指しています。

つまりDecagonは、**顧客対応AIを「回答モデル」としてではなく、会社の業務手順を実行するオペレーション層として管理するサービス**です。

## AOPsとDuetで何が変わる？

企業向けAIエージェントでは、最初に作ることより、その後に誰が直せるかが重要です。

現場で新しい例外ケースが見つかるたびに、ベンダーやエンジニアへ修正を依頼しなければならないと改善速度が落ちます。

Decagonは、非技術職のCX担当者でもAOPを編集しやすいことを重視しています。

さらにDuetというAIパートナーが、エージェントの構築と改善を支援します。

既存の会話TranscriptをアップロードしてAOPを生成したり、エージェントの実際の会話から改善候補を見つけたりできます。すべてを白紙から手作業でルール化するのではなく、会社がすでに行っている対応からAI用の手順へ変換できます。

一方で、技術チームが不要になるわけではありません。

AOPは外部システムと統合でき、リアルタイムデータの取得やWorkflow実行を行います。技術担当者はIntegration、Guardrail、Versioningなどを管理しながら、現場側は顧客対応のロジックを改善できます。

Decagon自身はこれをGlass Box型の考え方として説明しています。

AIが何を考えてその処理をしたのかをTraceし、Reasoning、Runtime、Latencyなどを確認できます。「なぜ返金したのか分からない」という状態を避け、AOPのどこを直せばよいか追えるようにします。

## Decagonはどうやってテストして改善する？

AIエージェントは、AOPを書いて公開すれば完成ではありません。

Decagonには、公開前のTestingと公開後のQAを同じ運用へ組み込む仕組みがあります。

Message Replaysは、特定のメッセージに対するAgentの返答を再実行するテストです。

たとえば実際の顧客対応で問題になった一文を保存し、AOPを修正した後に同じ入力で正しく動くか確認できます。ソフトウェアのUnit Testに近い使い方です。

Simulationsは、単発の返答ではなく顧客とAgentの会話全体を再現します。

Brand Tone、Escalation Guardrail、Knowledge Retrieval、AOP Logicなどを確認し、「途中で条件が変わる顧客」「人間対応を要求する顧客」のようなケースを公開前に試せます。

本番公開後はQAで実際の会話を評価します。

ここで見つかった失敗をReplayやSimulationへ戻し、修正後に再テストすることで、エージェントの改善を継続できます。

この流れは、AIカスタマーサポートを本格運用するほど重要になります。

デモで10回うまく話せることと、毎月何万件もの顧客対応で会社のルールを安定して守ることは別だからです。

DecagonのAOP、Trace、Testing、QAは、**AIを一度作るためというより、変更し続けても品質を落とさないための仕組み**として見ると分かりやすくなります。

## Decagonの料金について

Decagonは、一般ユーザーがその場で契約できる月額料金表を公開していません。

公式には、Per-conversationとPer-resolutionの2つの料金方式を提供していると説明しています。

Per-conversationは、AIエージェントが対応した会話ごとに固定料金を支払う方式です。問い合わせ件数に応じて費用が増えるため、予算を計算しやすいのが特徴です。

Per-resolutionは、AIが完全に解決した会話だけに料金を払う方式です。人間へEscalationした場合は課金しない考え方で、1件あたりの料金はPer-conversationより高くなります。

Decagonによると、実際にはPer-conversationを選ぶ顧客が多数とされています。Outcomeの定義で揉めにくく、問い合わせ量から費用を予測しやすいためです。

ただし、公式サイトには全企業共通の「1 conversation ○ドル」という価格は掲載されていません。

通話・チャット・メールなどのChannel、Volume、必要なIntegrationや導入条件によって見積もりが変わる企業向けサービスと考えるべきです。

したがって、Cuivre上でも推測した単価を掲載するより、**料金モデルは公開されているが具体的な単価は要問い合わせ**とするのが正確です。

小規模チームが無料枠から試すサービスというより、一定のサポート量があり、AIによるResolution RateやCSAT、Cost Reductionを測れる企業向けです。

## Decagonはどんな企業に向いている？

Decagonが特に向いているのは、顧客対応の業務ルールが複雑で、それをCXチーム自身が改善していきたい企業です。

単純なFAQならKnowledge BaseをつないだAIでも対応できます。

しかし、返金、旅行予約の変更、金融サービスの本人確認、サブスクリプション変更などは、顧客の状態によって次の処理が変わります。こうした業務をAOPとして明示できるのがDecagonの強みです。

Voice、Chat、Emailを同じロジックで運用したい企業にも向いています。

窓口ごとに別のボットを管理するより、一つの業務手順を複数Channelへ展開した方が、会社としての対応を揃えやすくなります。

また、AIの判断過程を見て、失敗例をReplayし、Simulationを通してから変更を公開したいチームにも合います。

逆に、個人サイトへ簡単なチャットボットを置きたいだけなら大規模すぎます。料金もセルフサービス公開されていないため、小規模な実験を数十ドルで始める用途ではありません。

Decagonを選ぶ基準は、AIモデルの名前より、**会社の顧客対応手順をAOPとして現場が管理し、テストしながら継続的に改善したいか**です。

## まとめ｜Decagonは顧客対応の「業務手順」をAIへ移したい企業向け

Decagonは、Chat・Voice・Emailで顧客対応を行う企業向けAIエージェントプラットフォームです。

中心になるAOPsでは、会社の業務ルールを自然言語で表現しながら、外部システムのデータ取得や実際の処理まで組み込めます。

DuetがAOPの作成と改善を支援し、Message Replays、Simulations、QAによって公開前後の品質を確認できます。

料金はPer-conversationまたはPer-resolutionで、具体的な共通単価は公開されていません。

FAQ回答をAI化するだけではなく、複雑な顧客対応を会社の手順どおりに処理し、そのロジックをCXチーム自身で改善していきたい企業ほどDecagonの特徴が活きます。
