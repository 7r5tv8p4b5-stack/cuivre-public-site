---
title: "OpenAI Codexとは？使い方・料金・CLIやアプリで何ができるかを解説"
displayTitle: "OpenAI Codex"
subtitle: "使い方・料金・CLI、アプリで何ができるかを解説"
description: "OpenAI Codexは、コードについて質問するだけでなく、Repositoryを調べ、ファイルを編集し、CommandやTestを実行しながら開発作業そのものを進めるCoding Agentです。"
publishedAt: "2026-08-22"
updatedAt: "2026-08-24"
category: "AIコーディングエージェント"
parentCategory: "AIコーディングエージェント"
primaryCategory: "AIコーディングエージェント"
subcategory: "AIコーディングエージェント"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "openai-codex-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/openai-codex-review/"
ogTitle: "OpenAI Codexとは？使い方・料金・CLIやアプリで何ができるかを解説"
ogDescription: "OpenAI Codexは、コードについて質問するだけでなく、Repositoryを調べ、ファイルを編集し、CommandやTestを実行しながら開発作業そのものを進めるCoding Agentです。"
targetKeyword: "OpenAI Codex"
searchIntent: "review"
serviceName: "OpenAI Codex"
officialUrl: "https://openai.com/codex/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "OpenAI Codex公式サイト"
    href: "https://openai.com/codex/"
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
categoryTags: ["AIコーディングエージェント", "OpenAI Codex", "AI"]
---
# OpenAI Codexとは？使い方・料金・CLIやアプリで何ができるかを解説

OpenAI Codexは、コードについて質問するだけでなく、Repositoryを調べ、ファイルを編集し、CommandやTestを実行しながら開発作業そのものを進めるCoding Agentです。

現在はTerminalのCodex CLIだけではありません。Codex App、IDE Extension、Web / Cloud、GitHub Code Review、ChatGPT Mobileなど複数の場所から同じ開発作業へアクセスできます。

この記事では、2026年8月24日時点のOpenAI公式情報をもとに、現在のCodexが何をするサービスなのか、CLI・App・Cloudをどう使い分けるのか、料金とCredit消費をどう考えるべきか、どんな開発で使う意味があるのかまで整理します。

## Codexはどんなサービス？

Codexは、プログラムの一部分を補完するAIより一段広い範囲を担当します。

「この関数を書いて」と頼むだけでなく、「このBugの原因を調べて修正して」「この仕様をRepositoryへ実装して」「Testを追加して」「このPull RequestをReviewして」といったTask単位で仕事を任せられます。

AgentはRepository内のFileを読み、必要な変更を行い、Terminal CommandやTestを実行して結果を確認します。そのため、人間が毎回「次にこのFileを開いて、この行を直して」と指示する必要がありません。

Codexの特徴は、同じAgentを複数の場所から使えることです。

Codex CLIならTerminalでLocal Repositoryと一緒に作業できます。

IDE ExtensionならVS CodeやCursorなどのEditor内で、開いているFileや選択したCodeをContextとして使いながら変更できます。

Codex CloudではTaskをRemote Environmentへ渡し、自分のPCで別の作業をしている間に進めてもらえます。

Codex Appは、こうした複数Agentをまとめて管理するCommand Centerです。macOSに加えて2026年3月からWindowsでも利用できます。

AppではTaskをThreadごとに分け、複数Agentを並列で動かせます。Worktreeにも対応しているため、同じRepositoryに対して複数の変更を隔離環境で進められます。

さらにGitHubではPull RequestのCode ReviewをCodexへ任せられます。PRの意図とDiff、Repository全体を見ながら問題を探し、必要ならTestを実行します。

つまり現在のCodexは、**コードを生成するAIというより、Local・Cloud・GitHubをまたいで開発Taskを任せられるSoftware Engineering Agent**です。

## Codexはどうやって使う？

一番直接的なのはCodex CLIです。

TerminalからCodexを起動し、現在のRepositoryでやってほしいことを伝えます。

たとえば「Login後にこのErrorが出る原因を調べて修正して」と頼むと、関連Fileを探し、変更し、TestやCommandを実行しながら進めます。

普段VS Code系Editorを使うならIDE Extensionでも同じように作業できます。Editorでは開いているFileや選択範囲をContextにできるため、小さな修正やコード相談はCLIより直感的なことがあります。

時間のかかるTaskはCloudへ渡せます。

Cloud Agentは隔離されたEnvironmentでRepositoryを扱い、Taskを進めます。完了後にDiff、Terminal Log、Test Resultなどを確認し、Localへ取り込めます。

Codex Appを使うと、こうしたTaskを複数並行で管理できます。一つのAgentへBackend修正、別のAgentへTest追加、別のAgentへUI改善を任せ、それぞれのDiffを確認できます。

2026年5月からはChatGPT MobileでもCodex Taskを確認・操作できるようになっています。PCを離れていても進行中Taskへ返答したり、方向を変えたりできます。

Codexは「AIに全部任せて結果だけ受け取る」使い方だけではありません。Localで一緒に細かく作業するPair Programmingと、Cloudへ長いTaskをDelegationする使い方を同じ製品で行き来できます。

## Codexの料金について

CodexはChatGPT Plus、Pro、Business、Enterprise、Eduなど対象Planで利用できます。

利用量はChatGPT Planに含まれる枠に加え、必要に応じてCreditを追加する仕組みです。

2026年4月2日以降、CodexのCredit消費は以前のMessage単位ではなく、API Token Usageに合わせたToken-based pricingへ変更されています。

現在のRate Cardでは、GPT-5.6 Solは100万Input Tokenあたり125 Credits、Cached Inputは12.5 Credits、Outputは750 Creditsです。

GPT-5.6 TerraはInput 50、Cached Input 5、Output 300 Credits。

GPT-5.6 LunaはInput 5、Cached Input 0.5、Output 30 Creditsです。

同じTaskでも使うModelによってCredit消費はかなり変わります。

OpenAIは、GPT-5.6 Solを使う通常のCodex Taskでは1 Taskあたり5〜40 Credits程度になる場合があると案内しています。

もちろんTaskの長さやRepository Contextによって変わるため、「1回○円」と固定して考えることはできません。

また、GPT-5.4とGPT-5.4 miniは2026年8月31日にChatGPT Loginで使うCodexから提供終了予定で、代替としてGPT-5.6 TerraとGPT-5.6 Lunaが案内されています。

Codexを継続的に使う場合は、Message数ではなく、どのModelへどれだけ大きなRepository ContextとOutputを処理させているかを見る必要があります。

## PlusとProではどう考えればいい？

Codexだけに独立した一般個人向け月額Planがあるというより、ChatGPT Planに含まれるCodex利用枠を使う形が基本です。

そのため個人の場合は、CodexだけでなくChatGPT全体をどれくらい使うかでPlus / Proを考えることになります。

軽い修正、数回の実装、コード相談などが中心ならPlusの範囲でも利用できます。

一方、複数Repositoryで毎日のようにAgentへ長いTaskを任せると利用量は増えます。特にCodex Appで複数Agentを並列に動かすと、一人で順番にTaskを投げるより作業量そのものが増えます。

その場合は上位Planや追加Creditを検討することになります。

Team利用ではさらに考え方が変わります。Business / Enterpriseでは管理者向けのControl、Analytics、Environment管理などがあり、Codexを個人の補助ツールではなく組織の開発Workflowへ組み込めます。

2026年4月にはTeam向けのToken消費ベース従量課金も導入されましたが、Businessの新規Codex-only pay-as-you-go Seatは6月24日から停止されています。既存Seatには影響しません。

料金体系が変化しているため、導入時はOpenAIの最新Rate Cardを確認するのが安全です。

## Codexはどんな開発に向いている？

Codexが向いているのは、すでにCode Repositoryがあり、そこへ実際の変更を加えてほしい開発です。

Bug Fix、Refactoring、Test追加、Feature実装、Dependency更新、Code Reviewなど、Repository全体のContextが必要なTaskと相性があります。

新しいProjectをゼロから作ることもできますが、LovableやBolt.newのように「非エンジニアが画面を見ながらWebアプリを作る」ことだけに最適化されたServiceではありません。

CodexはTerminal、IDE、GitHub、Worktree、Testなど、通常のSoftware Development WorkflowへAI Agentを入れる方向が強いです。

そのため、コードを全く見ずにWebサービスを一発生成したい人より、AIへ大きな作業を任せつつDiffやTestを確認して開発を進めたい人に向いています。

また、Code Reviewを自動化したいTeamにも特徴があります。

CodexはPRのDiffだけでなく、RepositoryのContextやDependencyを見て問題を探し、必要に応じてTestも実行します。

ただし、OpenAI自身もAgentが作った変更やCode Reviewを人間が確認することを推奨しています。

Codexを「人間の開発者を完全に置き換えるもの」と考えるより、**調査・実装・Test・Reviewに使う時間をAgentへ移し、人間は仕様判断と最終確認へ集中するための開発基盤**として使う方が現実的です。

## まとめ｜Codexは既存の開発WorkflowそのものへAI Agentを入れたい人向け

OpenAI Codexは、Repositoryを理解し、File編集、Command実行、Test、Code Reviewまで行うCoding Agentです。

CLI、IDE Extension、Cloud、Codex App、GitHub、Mobileから同じ開発作業へアクセスでき、Codex Appでは複数AgentをWorktreeで並列に動かせます。

Codexは対象のChatGPT Planに含まれ、2026年4月以降の追加利用はToken-based Creditで計算されます。

現在のRate CardではGPT-5.6 Sol、Terra、LunaなどでCredit消費が異なるため、単純な「何Messageまで」という料金ではありません。

Webアプリを画面だけ見ながら作りたいならAI App Builderの方が簡単な場合があります。

既存Repositoryへ本格的な変更を加え、TestやReviewまで含めてAIへTaskを任せたいなら、Codexの強みが最も分かりやすくなります。
