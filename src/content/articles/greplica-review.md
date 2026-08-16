---
title: "Greplicaとは？Codex・Claude Codeに「リポジトリの記憶」を持たせるAI開発ツールを解説"
description: "Greplicaとは何かを解説。Codex・Claude CodeなどのAIコーディングエージェントにリポジトリの長期記憶を持たせる仕組み、Local Mode、Managed Mode、料金、公式ベンチマーク、Memmy Agentとの違いを紹介します。"
publishedAt: "2026-08-17"
updatedAt: "2026-08-17"
category: "AIサービス"
parentCategory: "AIサービス"
primaryCategory: "AIサービス"
categoryTags:
  - "AIサービス"
  - "AIメモリ"
  - "Engineering Memory"
  - "Codex"
  - "Claude Code"
  - "OpenCode"
  - "Greplica"
articleType: "service_review"
status: "published"
draft: false
slug: "greplica-review"
noindex: false
canonical: "/articles/greplica-review/"
ogTitle: "Greplicaとは？Codex・Claude Codeに「リポジトリの記憶」を持たせるAI開発ツールを解説"
ogDescription: "Greplicaとは何かを解説。Codex・Claude CodeなどのAIコーディングエージェントにリポジトリの長期記憶を持たせる仕組み、Local Mode、Managed Mode、料金、公式ベンチマーク、Memmy Agentとの違いを紹介します。"
serviceIds:
  - "SRV-000021-greplica"
companyIds: []
affiliateProgramIds: []
targetKeyword: "Greplicaとは"
secondaryKeywords: "Greplica, Greplica 使い方, Greplica Codex, Greplica Claude Code, Codex 記憶, Claude Code 記憶, AI コーディング メモリ, AI リポジトリ 記憶"
searchIntent: "GreplicaがどのようなAIコーディングエージェント向けEngineering Memoryで、Codex・Claude Codeとの使い方、Local Mode、Managed Mode、料金、公式ベンチマークを確認したい。"
affiliateDisclosure: false
factChecked: true
affiliateLinkReady: false
humanWritten: true
humanWriter: "CuivreWorks Gen2 Package"
researchBriefId:
articleBlueprintId:
articleBlueprintVersion:
goldStandardCandidate: false
quickFacts:
  -
    icon: "brain"
    label: "主な用途"
    value: "AI coding agent向けリポジトリ記憶"
    note: "設計判断・制約・失敗した方法を保存"
  -
    icon: "code"
    label: "対応例"
    value: "Codex / Claude Code / OpenCode"
    note: "公式Quick Startで確認"
  -
    icon: "database"
    label: "ローカル利用"
    value: "対応（SQLite）"
    note: "Local Mode"
  -
    icon: "gift"
    label: "料金"
    value: "Local Mode無料"
    note: "Greplica用API Key不要"
serviceSummary:
  -
    icon: "brain"
    label: "用途"
    value: "AI coding agent向けリポジトリ記憶"
  -
    icon: "code"
    label: "対応例"
    value: "Codex / Claude Code / OpenCode"
  -
    icon: "database"
    label: "ローカル"
    value: "SQLiteで保存"
  -
    icon: "gift"
    label: "料金"
    value: "Local Mode無料"
officialUrl: "https://autoloops.ai/"
---

# Greplicaとは？Codex・Claude Codeに「リポジトリの記憶」を持たせるAI開発ツールを解説

※この記事の情報は2026年8月17日時点の公式情報・公開情報をもとに整理しています。

CodexやClaude Codeに開発を任せていると、こんな場面があります。

「前のセッションで、このコード調べたよね？」

「その実装方法、前に試してダメだったはず……」

「また同じファイルをgrepしてる……」

AIコーディングエージェントは新しいセッションになると、必要なコードや設計をもう一度調べ直すことがあります。

そこで面白いのが、**コードベースそのものに長期的な“記憶”を持たせる**という考え方です。

それを実現しようとしているオープンソースツールが**Greplica**です。

Greplicaは、過去のAIコーディングセッションやコードから、設計上の判断、制約、処理の流れ、注意点、過去に失敗した方法などを保存します。そして次のCodexやClaude Codeが作業するときに、必要な情報だけを検索できるようにします。

公式では「Persistent, searchable engineering memory for AI coding agents」と説明されています。

2026年7月30日にはProduct Huntで公開され、Day Rank #7となりました。

この記事では、Greplicaとは何なのか、CodexやClaude Codeで何が変わるのか、仕組み、導入方法、料金、ローカル利用、公式ベンチマーク、そしてMemmy Agentとの違いまで詳しく解説します。

## Greplicaの基本情報

| 項目 | 内容 |
|---|---|
| サービス名 | Greplica |
| 主な用途 | AIコーディングエージェント向けの永続的なリポジトリ記憶 |
| 対応例 | Codex / Claude Code / OpenCodeなど |
| 保存する情報 | 設計判断・制約・処理フロー・注意点・失敗した方法など |
| ローカル利用 | 対応 |
| ローカル保存 | SQLite |
| チーム共有 | Managed Modeで対応 |
| 過去セッション取り込み | 対応 |
| オープンソース | 対応 |
| ローカル版料金 | 無料 |
| Node.js | 22〜26 |
| Product Hunt | 2026年7月30日 #7 |

Greplicaの目的は、単純にAIとの会話ログを保存することではありません。

**「このリポジトリについて、過去の開発で何が分かったのか」**

を、次のAIが検索できる知識として残すことが中心です。

## Greplicaとは？

AIコーディングエージェントは、コードを書く前にかなりの量の「調査」をしています。

たとえば、

「認証処理はどこ？」

「この画面を作っているファイルは？」

「このデータはどこから取得している？」

「変更すると影響する場所は？」

といったことを、grepやファイル読み込みなどを使って調べます。

これは最初のセッションなら当然です。

問題は、**以前のセッションですでに調べたことまで、新しいセッションで再び調べる場合があること**です。

Greplicaは、ここを改善しようとしています。

過去のAIセッションやコードから、

- 設計上の判断
- 制約
- ワークフロー
- 関係するファイル
- 注意点
- 過去に失敗した方法

など、後から役立つ情報を抽出して永続的な記憶として保存します。

次のAIはリポジトリ全体を闇雲に探索する前に、Greplicaへ質問できます。

つまり、

**AIが毎回コードベースをゼロから理解する**

のではなく、

**過去のAIが理解したことを次のAIが引き継ぐ**

という仕組みです。

## なぜCodexやClaude Codeに「記憶」が必要なのか

人間の開発者なら、昨日調べたコードを翌日に完全に忘れるわけではありません。

「あの処理はここにある」

「この実装にはこういう事情がある」

「前にこの方法を試したけど問題が出た」

といった経験が残っています。

一方、AIコーディングエージェントは新しいセッションになると、そうした背景情報を常にすべて持っているわけではありません。

そのため再びコードを探索します。

公式は、AGENTS.mdなどのリポジトリ単位の指示ファイルも有用だとしながら、手動で更新する必要があり、タスクごとの検索や過去の設計判断・失敗などの履歴保存には向いていないと説明しています。

Greplicaは、

**「AIへ渡す説明書」ではなく「AIが検索できる開発経験」**

を作るところが特徴です。

## Greplicaは何を覚える？

Greplicaでは、過去のAgentセッションから得られた情報を、永続的な構造として保存します。

公式GitHubでは主に、

**components**

**flows**

**claims**

として保持する仕組みが説明されています。

たとえば、

「認証処理はこのコンポーネントが担当している」

「この機能ではこのファイル群が関係する」

「この実装にはこの制約がある」

「以前この方法を試したが問題があった」

といった情報です。

これによって、新しいタスクが来たときに必要な情報だけを検索できます。

## 新しいAIはGreplicaに質問してから調査できる

Greplicaの考え方が分かりやすく現れているのが、`graph context`です。

たとえば新しいタスクについて、

`greplica graph context "<質問>"`

のように問い合わせると、そのタスクに関連する過去の記憶を取得できます。

公式GitHubでは、

**Past sessions → Greplicaが保存 → New agentが質問 → Agentが利用 → Memoryを更新**

という流れで説明されています。

つまり、

**依頼を受ける**

↓

**Greplicaから関連する過去情報を取得**

↓

**必要なコードを調査**

↓

**実装**

↓

**今回新しく分かったことも記憶する**

という循環です。

使うほど、そのリポジトリについての「開発経験」が蓄積されていく設計です。

## 過去のセッションも取り込める

「今からGreplicaを入れても、それ以前の開発経験は使えないの？」

という疑問もあります。

Greplicaには、古いセッションを取り込むための仕組みがあります。

公式GitHubでは`greplica-fast-session-bootstrap`を使って、既存のセッショントランスクリプトから初期Memoryを構築できると説明されています。

そのため、ある程度CodexやClaude Codeで開発を進めてからGreplicaを導入する場合でも、過去の開発経験を活用できる可能性があります。

## Codexで使える

GreplicaはCodex向けのインストール方法を公式に用意しています。

ローカルモードなら、

`greplica install --mode local --platform codex --embedding local`

という形で導入できます。

公式サイトには、より簡単な導入例として、

`npm install -g greplica`

のあと、

`greplica install --platform codex --embedding local`

とするQuick Startも掲載されています。

面白いのは、公式が**「手動で全部設定するより、使っているcoding agent自身にGreplicaをインストールさせる」**方法を推奨していることです。

Codexを使っているなら、Codex自身にGreplicaの導入を頼む、という使い方ができます。

## Claude Codeにも対応

Claude Code向けにも公式の導入方法があります。

公式サイトでは、

`greplica install --platform claude --embedding local`

というコマンドが案内されています。

つまり同じリポジトリで、

今日はCodex、

明日はClaude Code、

という使い方をしても、Greplica側に蓄積したリポジトリ知識を利用できます。

特定のcoding agentだけに記憶を閉じ込めないのは、大きな特徴です。

## OpenCodeにも対応

公式Quick StartではOpenCode向けのインストールも案内されています。

Codex、Claude Code、OpenCodeなど複数のcoding agentから、同じリポジトリの記憶へアクセスできる構成です。

AIコーディングツールを頻繁に乗り換える人ほど、こうした独立したMemory Layerの価値は大きくなります。

## ローカルモードならAPIキー不要

Greplicaのかなり面白いところです。

公式サイトでは、

**No API Key Needed**

と明記されています。

既存のClaude CodeやCodexのプランを利用でき、Greplica用に新しいAIサービスやAPIキーを契約する必要はありません。

さらにローカルモードでは、Memoryがユーザーのマシン上に保存されます。

公式サイトによれば保存場所は、

`~/.greplica/graph.db`

です。

クラウド同期なし、テレメトリなし、リポジトリのデータをGreplicaのクラウドへ送らずに利用できると説明されています。

## Greplicaは無料？

ローカル版については、公式サイトで、

**Open Source · Fully Local · Fully Free**

と案内されています。

Product Hunt上でもFreeとして掲載されています。

そのため、まず自分のリポジトリでローカル版を試すのであれば、Greplica自体の追加料金なしで始められます。

ただしGreplicaとは別に、CodexやClaude Codeなど利用するAI側の契約・料金は当然別です。

また、チーム向けManaged Modeについてはローカル版とは構成が異なるため、利用時には最新の公式情報を確認した方がいいでしょう。

## チームで記憶を共有するManaged Modeもある

個人開発ならローカルMemoryで十分かもしれません。

しかしチーム開発では、

「AさんのAIが知っていることを、BさんのAIは知らない」

という問題も起きます。

Greplicaには**Shared Managed Memory**があります。

Managed Modeでは、別々の開発者、clone、forkから同じリポジトリMemoryへアクセスできます。

GitHubユーザー単位のアクセス管理なども用意されています。

これはかなり興味深い考え方です。

単なる、

**「自分のCodexの記憶」**

ではなく、

**「開発チーム全体のAIが共有するリポジトリの記憶」**

にできるからです。

## GitHubのコード変更と記憶を同期する仕組みもある

長期Memoryには問題があります。

コードが変わったのに、AIが古い情報を覚え続けてしまう可能性です。

GreplicaのManaged Modeでは、GitHubのdefault branch更新後にMemoryをreconcileする仕組みが用意されています。

公式GitHubでは、push時と定期スケジュールでMemoryをコードの状態と照合するGitHub Actions構成が説明されています。

AIの記憶は多ければいいわけではありません。

**「現在のコードと一致しているか」**

も重要です。

Greplicaが「self updating wiki」と表現されている理由の一つがここにあります。

## 公式ベンチマークではトークン49%削減

Greplicaは、自社でSWE-chatを使ったベンチマークも公開しています。

2026年7月2日に公開された公式ベンチマークでは、選択された10件の高コンテキストなplanning taskについて、

**推定コスト：43%減**

**使用トークン：49%減**

**ツール呼び出し：36%減**

**所要時間：26%減**

という結果になっています。

さらにGitHubでは、個別ケースとしてトークン使用量を40〜50%程度削減した例や、最も大きなケースで**75%削減・約38%高速化**した結果も紹介されています。

ただし、ここは重要です。

これは**Greplica開発元自身が実施・公開したベンチマーク**です。

また公式記事でも、パイロットは選択された10タスクが中心で、今後50件以上への拡大や複数回実行を予定していると説明しています。

したがって、

「Greplicaを入れれば必ずトークンが半分になる」

という意味ではありません。

それでも、AIがコードを再探索するコストをMemoryによって減らせる可能性を示すデータとしては興味深い結果です。

## Greplicaのメリット

### 同じコードを何度も調べる無駄を減らせる

最大のメリットです。

過去のセッションで分かったことを次のAgentが利用できます。

大きなリポジトリほど効果を感じやすいでしょう。

### 「なぜこの実装なのか」を残せる

コードそのものだけでは分からない情報があります。

「なぜこの方式を選んだのか」

「なぜ別の方式をやめたのか」

といった設計判断です。

Greplicaはこうした開発経験をMemoryとして残すことを重視しています。

### 失敗した方法も記憶できる

これはAI開発と相性がいい機能です。

以前のAgentが試して問題が出た方法を次のAgentが知らなければ、同じことを繰り返す可能性があります。

失敗したアプローチまで共有できれば、その無駄を減らせます。

### CodexとClaude Codeを切り替えられる

Memoryが特定のAIだけに閉じていません。

同じリポジトリをCodexとClaude Codeで触る人には特に相性がよさそうです。

### ローカルだけでも使える

個人開発なら、クラウドMemoryを使わずローカルで完結できます。

APIキーも不要です。

### チームのAIにも同じ知識を持たせられる

Managed Modeを使えば、開発者ごとにAIの知識が分断される問題にも対応できます。

## Greplicaの注意点

### まだ新しいツール

Greplicaは2026年に登場した新しいツールです。

Product Huntでのローンチも2026年7月30日です。

仕様や対応Agent、Managed Modeなどが今後変化する可能性があります。

### すべての開発で大幅な削減になるわけではない

公式ベンチマークでは大きな改善例がありますが、タスクによって差があります。

過去の開発経験が重要な複雑なタスクほど、Memoryの効果は大きくなると考えられます。

逆に小規模なリポジトリや単純な変更では、メリットは小さくなるでしょう。

### 古い記憶の扱いが重要

コードベースは変化します。

半年後には正しくない情報もあります。

Managed Modeにはコードとのreconcile機能がありますが、長期的なAI Memoryでは**「何を覚えるか」だけでなく「古くなった知識をどう扱うか」**が重要です。

### 導入するだけでAgentが万能になるわけではない

GreplicaはAIモデル自体を賢くするサービスではありません。

過去のリポジトリ情報を検索できるようにするMemory Layerです。

実装能力そのものは利用するCodexやClaude Codeなどに依存します。

## Memmy AgentとGreplicaの違い

直前に紹介したMemmy Agentと、かなり似て見えるかもしれません。

どちらも「AIに長期記憶を持たせる」サービスだからです。

ただし、中心に置いているものが違います。

| | Memmy Agent | Greplica |
|---|---|---|
| 記憶の中心 | ユーザー・AIとの経験 | リポジトリ・開発経験 |
| 主な用途 | 複数AIでユーザーの長期記憶を共有 | coding agentでコードベース知識を共有 |
| 記憶例 | 好み・過去の会話・プロジェクト経験 | 設計判断・制約・処理フロー・失敗 |
| 対象 | AI Agent全般 | AI Coding Agent |
| ローカル利用 | 対応 | 対応 |
| チーム共有 | 方向性が異なる | Managed Memoryあり |

かなり単純化すると、

**Memmy Agent =「自分を覚えてもらう」**

**Greplica =「リポジトリを覚えてもらう」**

と考えると分かりやすいです。

両者は競合というより、用途によっては組み合わせられる可能性もあります。

Memmy Agentについて詳しく知りたい場合は、[Memmy Agent解説記事](/articles/memmy-agent-review/)も参考にしてください。

## SKI・Heard・CodeRabbit・Memmy・Greplicaを整理すると

ここまで紹介してきたAI開発周辺ツールを並べると、それぞれ役割がかなり違います。

| サービス | 主な役割 |
|---|---|
| [SKI](/articles/ski-ai-review/) | AIへ音声で指示する |
| [Heard](/articles/heard-ai-review/) | AIの作業状況を音声で把握する |
| [CodeRabbit](/articles/coderabbit-review/) | コードをレビューする |
| Memmy Agent | AIをまたいで長期記憶を共有する |
| Greplica | リポジトリの開発経験を記憶する |

AIコーディングツール自体を置き換えるというより、

**CodexやClaude Codeを周囲から強化するサービス**

が増えてきています。

この分野は2026年にかなり面白くなってきています。

## Greplicaはどんな人に向いている？

特に相性がよさそうなのは、

- Codexを長期間同じプロジェクトで使っている
- Claude Codeを長期間使っている
- CodexとClaude Codeを併用している
- AIが毎回同じコードを調べているのが気になる
- 大きなリポジトリをAIに触らせている
- 過去の設計判断をAIに覚えていてほしい
- AIに同じ失敗を繰り返してほしくない
- AGENTS.mdだけでは情報管理が大変
- AI開発のトークン消費を減らしたい
- 複数人でAIコーディングを使っている

という人です。

逆に、数ファイルだけの小さなプロジェクトや、一度しか触らないコードであれば、Greplicaを追加するメリットはそれほど大きくないでしょう。

## Greplicaについてよくある質問

### Greplicaは何をするツールですか？

CodexやClaude CodeなどのAIコーディングエージェント向けに、リポジトリの長期的な開発Memoryを提供するツールです。

### Codexで使えますか？

はい。

公式にCodex向けインストール方法が用意されています。

### Claude Codeで使えますか？

はい。

Claude Code向けのインストール方法も公式サイトで案内されています。

### OpenCodeでも使えますか？

対応しています。

公式Quick StartにOpenCode向けのインストール方法があります。

### 無料ですか？

ローカル版は公式サイトでオープンソース・Fully Freeと案内されています。

Product HuntでもFreeとして掲載されています。

### APIキーは必要ですか？

ローカル利用ではGreplica用の新しいAPIキーは不要です。

既存のCodexやClaude Code環境と組み合わせて利用できます。

### データはクラウドへ送られますか？

Local ModeではMemoryをローカルに保存し、公式はクラウド同期なし・テレメトリなしと説明しています。

Managed Modeは共有サーバーを利用する別構成です。

### 過去のAIセッションも使えますか？

古いセッショントランスクリプトを取り込み、初期Memoryを構築する仕組みが用意されています。

### AGENTS.mdとは何が違いますか？

AGENTS.mdは静的な指示として有用ですが、Greplicaは開発中に得た情報を構造化して蓄積し、タスクに応じて必要な情報を検索することを目的としています。

## まとめ｜AIがコードを書く次は「AIが開発経験を覚える」

AIコーディングは急速に進化しました。

CodexやClaude Codeは、かなり大きな実装まで任せられるようになっています。

しかしAIが優秀になるほど、別の問題が目立ってきます。

**「前にもこれ調べたよね？」**

という問題です。

新しいセッションになるたびに、

コードを探す。

構造を理解する。

制約を見つける。

過去の判断を調べる。

そしてようやく実装に入る。

Greplicaは、この「毎回理解し直す」部分を長期Memoryによって減らそうとしています。

**最初のAgentが調べる**

↓

**Greplicaが重要な情報を記憶する**

↓

**次のAgentがその記憶を検索する**

↓

**新しく分かったことをまた記憶する**

という循環です。

これは単なるトークン節約ツールというより、

**「AIにもプロジェクト経験を蓄積させる」**

という発想が面白いところです。

特に、数か月・数年単位で同じプロジェクトをCodexやClaude Codeと一緒に開発するようになれば、AIモデルそのものの性能だけでなく、**「そのAIが自分のコードベースをどれだけ知っているか」**も重要になってくるでしょう。

Greplicaはまだ新しいツールですが、2026年7月30日のProduct Huntで#7となり、開発元による初期ベンチマークでも、Memoryを持つcoding agentが再探索のコストを減らせる可能性が示されています。

Codexに同じコードを何度も読ませていて、

**「昨日調べたことを今日も覚えていてくれたらいいのに」**

と思ったことがあるなら、かなり分かりやすく価値を感じられるツールです。

Greplica公式サイトを見る:
https://autoloops.ai/

━━━━━━━━━━━━━━━━━━━━
