---
title: "Bland AIとは？電話AIのPathways・使い方・料金をわかりやすく解説"
displayTitle: "Bland AI"
subtitle: "電話AIのPathways・使い方・料金をわかりやすく解説"
description: "Bland AIは、企業の電話対応をAIへ任せるためのVoice AIプラットフォームです。"
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
slug: "bland-ai-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/bland-ai-review/"
ogTitle: "Bland AIとは？電話AIのPathways・使い方・料金をわかりやすく解説"
ogDescription: "Bland AIは、企業の電話対応をAIへ任せるためのVoice AIプラットフォームです。"
targetKeyword: "Bland AI"
searchIntent: "review"
serviceName: "Bland AI"
officialUrl: "https://www.bland.ai/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Bland AI公式サイト"
    href: "https://www.bland.ai/"
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
categoryTags: ["AI音声エージェント", "Bland AI", "AI"]
---
# Bland AIとは？電話AIのPathways・使い方・料金をわかりやすく解説

Bland AIは、企業の電話対応をAIへ任せるためのVoice AIプラットフォームです。

着信対応やアウトバウンド発信を自動化するだけでなく、会話の流れをPathwaysで設計し、途中でKnowledge Baseを参照したり、Webhookを実行したり、人間へ電話を転送したりできます。

この記事では、2026年8月24日時点の公式情報をもとに、Bland AIが普通の「プロンプトだけで話す電話AI」と何が違うのか、Pathwaysをどう使うのか、現在の料金、どんな規模の電話業務で導入する意味があるのかまで整理します。

## Bland AIはどんなサービス？

Bland AIは、AIによる電話対応を、実際の業務フローに合わせてかなり細かく制御できるサービスです。

Voice Agentでは、長いPromptを一つ書いて「状況に応じて全部うまく対応して」と任せる方法もあります。しかし、予約、本人確認、契約説明、サポートなどでは「必ずこの情報を聞く」「この条件なら人間へ転送する」といった手順が重要になります。

Blandで中心になるのがConversational Pathwaysです。

Pathwayは会話をNodeと分岐で組み立てます。たとえばレストラン予約なら、最初に日付・時間・人数を確認するNodeを置き、8人未満なら予約処理、8人以上ならスタッフへTransferする、といった流れを作れます。

各Nodeでは、AIにその場で自然な返答を生成させるPromptと、必ず同じ文章を読むStatic Textを使い分けられます。柔軟に話してよい部分と、法的説明など一字一句を変えたくない部分を同じ電話内に置けます。

NodeにはWebhook、Knowledge Base、Transfer Call、End Call、Wait for Responseなどがあります。現在のAPIではSMS、Custom Code、Press Button、Schedulingなどさらに多くのNode Typeも扱えます。

この構造によって、会話を自然にするAIの自由度を残しながら、業務上絶対に通すべきポイントはフローで固定できます。

Blandは大量発信にも力を入れています。Batch CallsではCSVへ電話番号と顧客情報を入れ、同じPathwayを使って多数の相手へ発信できます。各行の氏名やサービス名を変数として会話へ入れられるので、予約リマインド、リード選別、顧客への確認などを個別化できます。

つまりBland AIは、**電話で自由に会話するAIというより、企業の電話業務を「会話できる業務フロー」として設計して大量に動かすための基盤**と見ると特徴が分かりやすいです。

## Pathwaysはどうやって作る？

DashboardからPathwayを作成し、会話の開始地点から必要なNodeをつないでいきます。

まず「何を完了すればこの電話は成功なのか」を決めます。予約なら日付・時間・人数の取得、営業なら条件確認と商談予約などです。

次に、その成功までに必要な会話をNodeへ分けます。

AIに自然に質問させたい場所はDefault Node、会社のFAQを参照する場所はKnowledge Base Node、外部システムへ予約を送る場所はWebhook、スタッフ対応が必要ならTransfer Call Nodeというように役割を分けます。

PathwayにはConditionを設定できるため、「必要な情報が揃うまで次へ進まない」といった制御もできます。

作成後はText ChatとVoice Chatでテストできます。会話の途中から別の返答へBranchさせ、「ここで顧客が違うことを言ったらどのNodeへ行くか」を確認できます。実際の電話を発信してProductionと同じ動作を試すこともできます。

BlandにはCLIもあり、PathwayをYAMLとして管理し、validate、diff、test、simulate、promoteなどをターミナルから実行できます。企業で複数人が変更する場合は、画面上だけでなく開発フローに近い形で管理できます。

## Bland AIの料金について

Bland AIのセルフサービス料金は、2025年12月5日から現在のプラン別料金へ変わっています。

Startはプラットフォーム料金0ドルで、接続時間1分0.14ドル。カード不要で始められ、2クレジットとInbound Numberが含まれます。10 Concurrent Calls、1日100 Calls、10 Knowledge Basesまでです。

Buildは月299ドル＋1分0.12ドル。50 Concurrent Calls、1日2,000 Calls、50 Knowledge Basesへ増えます。

Scaleは月499ドル＋1分0.11ドル。100 Concurrent Calls、1日5,000 Calls、100 Knowledge Basesです。

Blandの料金で分かりやすいのは、1分料金にLLM、Speech-to-Text、Text-to-Speechが含まれていることです。モデルのToken料金を別に足す方式ではありません。

ただしTelephonyは別です。自分のTwilioやSIPを使う場合はCarrier側へ料金を払い、Blandの組み込みTelephonyを使う場合もPass-through Costが加わります。

人間へ転送した時間は、Bland提供番号ならStart 0.05ドル/分、Build 0.04ドル、Scale 0.03ドル。BYOTならBland側のTransfer Feeはかかりません。

Startの0.14ドル/分とBuildの0.12ドル/分を見ると、通話単価を下げるためだけに月299ドルを払うと元を取るにはかなりの利用量が必要です。実際にはBuildを選ぶ理由は単価差だけでなく、Concurrencyが10→50、Daily Capが100→2,000、Knowledge Baseが10→50へ増えることにあります。

つまり少量の開発・検証ならStartで十分です。通話量が増え、同時通話数や1日の発信上限が先に問題になった段階でBuild / Scaleを考える方が自然です。

Enterpriseでは専用インフラ、On-prem / VPC、BAA、SSO、Data Residency、Forward Deployed Engineerなどが用意されます。

## Bland AIは大量発信でどう使える？

BlandはInbound受付だけでなく、まとまった件数へ同じ業務を行うOutbound Callと相性があります。

Batch CallsではCSVをアップロードし、各行を一人の発信先として処理します。`phone_number`に加えて顧客名、契約内容、前回利用日などの列を持たせれば、Pathway内で変数として利用できます。

たとえば「○○さん、前回のクリーニングから時間が経っていますが次回予約はいかがですか」と、顧客ごとに内容を変えながら同じキャンペーンを実行できます。

進行状況はBatch単位で確認でき、Completed、Partial、Failedなどの状態や個別Call Logを追えます。

ただ大量に発信できるからこそ、Pathwayを十分テストしてから規模を上げる必要があります。1件の会話ミスなら影響は小さくても、同じ誤りを数千件へ自動発信すると問題が一気に広がります。

最初は小さなBatchで会話結果と転送率を確認し、条件分岐やKnowledge Baseを直してから件数を増やす方が安全です。

## Bland AIはどんな電話業務に向いている？

予約受付、カスタマーサービス、アウトバウンド営業、リード選別、IVR置き換えなど、電話業務の流れがある程度定義できる用途に向いています。

特に「自然に会話してほしいが、重要な工程は自由に飛ばしてほしくない」業務でPathwaysが効きます。

予約情報を必ず取得する、規制上必要な説明を固定文で読む、特定条件では人間へ転送する、といった処理をNodeとして明示できます。

また、CSVから大量発信する業務ではBatch Callsが使いやすく、Build / Scaleでは同時通話数とDaily Capも大きくなります。

一方、数件の小さな電話受付だけならStartで試せますが、Blandの大規模運用向け機能を使い切らない可能性があります。モデルや音声プロバイダーを自分で細かく選びたい開発者なら、Vapiのような構成自由度を重視するサービスも比較対象になります。

Blandを選ぶポイントは、**モデルを自由に組み替えることより、電話業務の会話フローを制御し、まとまった件数へ安定して展開したいか**です。

## まとめ｜Bland AIは電話業務をPathwayとして設計して規模を広げたい企業向け

Bland AIは、AI電話をConversational Pathwaysとして設計し、Knowledge Base、Webhook、転送、Batch Callsなどを組み合わせられるVoice AIプラットフォームです。

Startはプラットフォーム料金0ドル＋1分0.14ドルなので、小さな検証から始められます。Buildは月299ドル＋0.12ドル/分、Scaleは月499ドル＋0.11ドル/分です。

LLM・STT・TTSは1分料金に含まれますが、Telephonyは別に考える必要があります。

Blandの価値は単純な1分単価だけではありません。会話をNodeと条件分岐で制御し、大量の電話でも同じ業務ルールを通せることにあります。

まずStartで一つのPathwayを作り、実際の会話で分岐が安定するところまで確認する。その後、同時通話数やDaily Capが不足したらBuild / Scaleへ進むのが分かりやすい使い方です。
