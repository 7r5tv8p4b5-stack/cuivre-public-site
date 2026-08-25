---
title: "Sierra AIとは？Agent OSで何ができる？使い方・料金・企業向けAIエージェントの特徴を解説"
displayTitle: "Sierra"
subtitle: "Agent OSで何ができる？使い方・料金・企業向けAIエージェントの特徴を解説"
description: "Sierraは、企業が顧客対応用のAIエージェントを構築し、チャット・電話・メール・SMSなど複数の窓口へ展開するためのAgent OSです。"
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
slug: "sierra-ai-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/sierra-ai-review/"
ogTitle: "Sierra AIとは？Agent OSで何ができる？使い方・料金・企業向けAIエージェントの特徴を解説"
ogDescription: "Sierraは、企業が顧客対応用のAIエージェントを構築し、チャット・電話・メール・SMSなど複数の窓口へ展開するためのAgent OSです。"
targetKeyword: "Sierra"
searchIntent: "review"
serviceName: "Sierra"
officialUrl: "https://sierra.ai/jp"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Sierra公式サイト"
    href: "https://sierra.ai/jp"
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
categoryTags: ["AIカスタマーサポート", "Sierra", "AI"]
---
# Sierra AIとは？Agent OSで何ができる？使い方・料金・企業向けAIエージェントの特徴を解説

Sierraは、企業が顧客対応用のAIエージェントを構築し、チャット・電話・メール・SMSなど複数の窓口へ展開するためのAgent OSです。

問い合わせへ答えるだけのチャットボットではなく、返品処理、契約変更、予約、本人確認など、企業のシステムへ接続して実際の処理まで進めることを前提にしています。現在は顧客との過去のやり取りを記憶するAgent Data Platformや、エージェントそのものを作るGhostwriterなども加わり、単発のサポート自動化より広い顧客体験基盤へ発展しています。

この記事では、2026年8月24日時点のSierra公式情報をもとに、Agent OSがどんな仕組みなのか、Agent StudioとAgent SDKをどう使い分けるのか、料金をどう考えるべきか、どんな企業で導入する意味があるのかまで整理します。

## Sierraはどんなサービス？

Sierraの中心にあるのはAgent OSです。

企業がAIエージェントを作る場合、回答用のナレッジを渡すだけでは実務になりません。顧客が「注文をキャンセルしたい」と言ったときに本人情報を確認し、注文システムから状態を取得し、ポリシーに従ってキャンセル可能か判断し、必要なら実際に変更処理を行うところまでつなげる必要があります。

Sierraでは、こうした顧客の目的をJourneyとして設計し、GoalとGuardrailを持たせます。外部システムやナレッジへ接続し、必要なToolを使いながら目的を達成させます。

特徴は「答えを生成するAI」より「企業のルールに従って仕事を完了するAI」を作ろうとしていることです。

同じエージェントをチャット、電話、メール、SMS、メッセージングなどへ展開できるため、窓口ごとに別々のボットを作る必要もありません。顧客がAIだけでは解決できない場合は、会話の内容をまとめてコンタクトセンターの担当者へ引き継げます。

2025年11月にはAgent OS 2.0とAgent Data Platformが発表されました。

Agent Data Platformは、チャット・メール・通話などの非構造化データと、CRM、請求、取引などの構造化データを顧客単位の文脈としてまとめます。これにより、前回の会話を忘れて毎回ゼロから対応するのではなく、過去のやり取りや好みを踏まえて応対できます。

2026年にはGhostwriterも前面に出ています。既存のSOP、通話ログ、録音、ホワイトボードの写真などを取り込んだり、「こういう顧客対応をしたい」と自然な言葉で説明したりすると、エージェントの構築や変更を支援します。

さらにHorizonでは、一回の問い合わせで終わらず、日・週・月をまたいで顧客との関係を継続する長期的なエージェントへ広げています。

つまり現在のSierraは、**カスタマーサポート用チャットボットを作る製品というより、顧客との会話・記憶・業務処理を一つのAIエージェントへまとめる企業向け基盤**として見る方が実態に近くなっています。

## Agent StudioとAgent SDKはどう使い分ける？

Sierraでは、非エンジニア向けのAgent Studioと、開発者向けのAgent SDKの両方からエージェントを作れます。

Agent Studioはノーコード寄りです。

CXやオペレーション担当者がJourneyを作り、目標、ガードレール、ナレッジ、ブランドのトーン、外部連携などを設定できます。既存の業務手順からAIにJourneyを生成させることもできます。

重要なのは、非エンジニアでも本番エージェントの改善へ直接参加できることです。

サポート現場では、顧客がどこでつまずくかを最も理解しているのが必ずしも開発者とは限りません。Agent Studioなら、CX担当者が会話を確認し、Journeyやナレッジを調整し、Simulationでテストできます。

一方のAgent SDKは、複雑なロジックや開発ライフサイクルへ組み込みたい場合に使います。

GoalとGuardrailを宣言的に定義し、triage、respond、confirmなどのSkillを組み合わせ、システム連携を実装できます。コードとして管理できるため、CI/CD、バージョン管理、デバッグなど既存の開発フローへ乗せやすくなります。

両者は別製品として切り離されているわけではありません。

CXチームがAgent Studioで日常的に改善し、エンジニアがAgent SDKで複雑なIntegrationを作る、といった共同運用ができます。

「ノーコードかコードか」を最初にどちらか一つ選ぶというより、**業務ルールを知る人とシステムを作る人が同じエージェントを別の入口から管理できる**のがSierraの設計です。

## Sierraはどうやって導入する？

Sierraは、一般的なSaaSのように無料アカウントを作ってその場で有料プランへ変更するセルフサービス中心の製品ではありません。

公式サイトではデモや問い合わせから導入を進める形です。

導入では、まずどの顧客JourneyをAIへ任せるかを決めます。FAQを全部AI化するというより、返品、予約変更、解約防止など、完了条件が分かる仕事から設計する方がSierraの考え方に合っています。

次に、FAQ・ポリシー・ドキュメントなどのKnowledgeと、CRM、注文管理、請求など必要なSystemを接続します。

Agent StudioまたはAgent SDKでJourney、Goal、Guardrailを設定し、Simulationでさまざまな顧客パターンを試します。Agent StudioではTool Callや判断をTraceできるため、なぜその返答や処理になったのかを確認しながら修正できます。

本番公開後も終わりではありません。

実際の会話を分析し、どのJourneyで失敗しているか、どんな問い合わせが人間へ引き継がれているかを見ながら改善します。SierraはこのBuild → Test → Deploy → Optimizeのライフサイクル全体をAgent OSとして扱っています。

大企業でAIを顧客へ直接出す場合、「回答できたか」だけでなく、変更を誰が承認したか、どのバージョンを本番へ出すかも重要です。2026年8月にはRelease Governanceも発表され、チェック、承認、段階的なRolloutなどソフトウェア開発に近い統制をエージェント変更へ持ち込んでいます。

## Sierraの料金について

Sierraは、一般ユーザー向けの月額プラン一覧を公開していません。

公式に強く打ち出しているのはOutcome-based pricingです。

これはSeat数や単純な利用時間ではなく、Sierraのエージェントが企業にとって価値のある仕事を完了した「Outcome」を基準に料金を考える方式です。

たとえば問い合わせを解決した、EC購入を完了した、会員の解約を防いだ、といった成果がOutcomeになり得ます。

ただし、すべての企業で同じOutcomeや単価になるわけではありません。Sierra自身もOutcomeは一律ではないと説明しており、公式サイト上に「1解決○ドル」のような共通価格は掲載していません。

そのためCuivre上でも、Sierraの料金を他のセルフサービスAIのように「月○ドルから」と推測して比較するのは避けるべきです。

導入を検討する場合は、どの業務をOutcomeとして扱うのか、何をもって成功と判定するのか、想定件数で年間費用がどうなるのかをSalesとの見積もりで確認する必要があります。

この料金体系は、AIが使われた量ではなく実際の成果へ支払いたい企業には分かりやすい考え方です。一方、小規模な検証で月数十ドルから試したい人には向きません。

## Sierraはどんな企業に向いている？

Sierraが合うのは、顧客対応件数が多く、AIに「回答」だけでなく業務処理まで任せたい企業です。

注文変更、返品、予約、アカウント操作、契約手続きなど、複数システムをまたぐ顧客JourneyがあるほどAgent OSの強みが出ます。

また、チャットだけでなく電話・メール・SMSまで同じ業務ルールで対応したい企業にも向いています。Agent Data Platformまで使えば、窓口をまたいだ顧客の文脈を継続できます。

CX担当者が自分たちで改善したい一方、複雑な連携はエンジニアが管理したい会社にもAgent StudioとAgent SDKの二層構造が合います。

逆に、Webサイトへ簡単なFAQボットを一つ置きたいだけなら、Sierraはかなり大きな仕組みです。

個人や小規模チームが数十ドルでAIサポートを試したい場合も、公開セルフサービス料金のあるサービスの方が始めやすいでしょう。

Sierraを検討する基準は「AIチャットが欲しいか」ではなく、**顧客対応そのものをAIエージェント中心へ作り替え、会社の業務システムと長期的に統合したいか**です。

## まとめ｜Sierraは顧客対応をAIエージェント中心へ再設計する企業向け

Sierraは、顧客向けAIエージェントを構築・管理・改善するAgent OSです。

Agent StudioならCXチームがノーコードでJourneyを管理でき、Agent SDKなら開発者が複雑なIntegrationや開発フローを扱えます。Agent Data Platformによって顧客の記憶と企業データをつなぎ、チャット・電話・メール・SMSなど複数チャネルへ同じエージェントを展開できます。

料金は公開された一律月額ではなく、Outcome-based pricingを中心に個別に設計されます。

簡単なFAQボットを導入するサービスではありません。顧客の問い合わせを理解し、企業システムで実際に処理し、過去の関係まで覚えるAIを本番運用したい企業ほど、Sierraを検討する意味が出てきます。
