---
title: "Memmy Agentとは？Claude Code・Codexなど複数AIで記憶を共有できるサービスを解説"
description: "Memmy Agentとは何かを解説。Claude Code・Codex・Cursorなど複数AIで長期記憶を共有する仕組み、過去履歴の取り込み、Desktop App・CLI・API、BYOK、local-first、使い方や注意点を紹介します。"
publishedAt: "2026-08-17"
updatedAt: "2026-08-17"
category: "AIサービス"
parentCategory: "AIサービス"
primaryCategory: "AIサービス"
categoryTags:
  - "AIサービス"
  - "AIメモリ"
  - "Agent Runtime"
  - "Claude Code"
  - "Codex"
  - "Cursor"
  - "OpenClaw"
  - "Memmy Agent"
articleType: "service_review"
status: "published"
draft: false
slug: "memmy-agent-review"
noindex: false
canonical: "/articles/memmy-agent-review/"
ogTitle: "Memmy Agentとは？Claude Code・Codexなど複数AIで記憶を共有できるサービスを解説"
ogDescription: "Memmy Agentとは何かを解説。Claude Code・Codex・Cursorなど複数AIで長期記憶を共有する仕組み、過去履歴の取り込み、Desktop App・CLI・API、BYOK、local-first、使い方や注意点を紹介します。"
serviceIds:
  - "SRV-000020-memmy-agent"
companyIds: []
affiliateProgramIds: []
targetKeyword: "Memmy Agent"
secondaryKeywords: "Memmy Agentとは, Memmy 使い方, Memmy Codex, Memmy Claude Code, Claude Code 記憶, Codex 記憶, AI 記憶 共有, AI 長期記憶"
searchIntent: "Memmy AgentがどのようなAI向け長期記憶共有サービスで、Claude Code・Codex・Cursorとの連携や使い方、BYOK、local-firstの注意点を確認したい。"
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
    value: "複数AI間の長期記憶共有"
    note: "AIごとの記憶分断を減らす"
  -
    icon: "code"
    label: "対応例"
    value: "Claude Code / Codex / Cursor / OpenClaw"
    note: "既存履歴取り込みも対象"
  -
    icon: "monitor"
    label: "提供形態"
    value: "Desktop App / CLI / API"
    note: "Agent Runtimeもあり"
  -
    icon: "gift"
    label: "料金"
    value: "無料トライアル＋BYOK"
    note: "自分のAPIキー利用に対応"
serviceSummary:
  -
    icon: "brain"
    label: "用途"
    value: "複数AI間の長期記憶共有"
  -
    icon: "code"
    label: "対応例"
    value: "Claude Code / Codex / Cursor / OpenClaw"
  -
    icon: "monitor"
    label: "提供形態"
    value: "Desktop App / CLI / API"
  -
    icon: "gift"
    label: "料金"
    value: "無料トライアル＋BYOK"
officialUrl: "https://memmy.bot/"
---

# Memmy Agentとは？Claude Code・Codexなど複数AIで記憶を共有できるサービスを解説

※この記事の情報は2026年8月17日時点の公式情報・公開情報をもとに整理しています。

ChatGPTには自分の好みを覚えさせている。

Claude Codeにはプロジェクトの構成を説明した。

Codexには開発ルールを伝えてある。

Cursorでは過去に試して失敗した方法も分かっている。

でも、別のAIへ移動すると――

**「また最初から説明しないといけない」**

AIを複数使う人ほど、この問題にぶつかります。

そんな**AIごとに分断された「記憶」を共有する**という発想で登場したのが「Memmy Agent」です。

Memmy Agentは、Claude Code、Codex、Cursor、OpenClawなど複数のAIエージェントから利用できる共通の長期記憶レイヤーです。

過去の会話、プロジェクトの情報、ユーザーの好み、これまでの判断などを長期記憶として構造化し、別のAIエージェントへ移っても再利用できるようにします。さらにMemmy自身もローカルで動くAI Agent Runtimeとしてタスクを実行できます。

2026年7月30日のProduct Huntでは、同日に公開されたSKIに続いて**Product of the Day #2**を獲得しました。

この記事では、Memmy Agentとは何なのか、どんな情報を記憶できるのか、Claude Code・Codexとの連携、過去履歴の取り込み、プライバシー、料金、導入方法まで詳しく解説します。

## Memmy Agentの基本情報

| 項目 | 内容 |
|---|---|
| サービス名 | Memmy Agent |
| 主な用途 | 複数AI間の長期記憶共有 |
| 対応例 | Claude Code / Codex / Cursor / OpenClaw / OpenCode / Hermes Agentなど |
| 提供形態 | Desktop App / CLI / API |
| 過去履歴の取り込み | 対応 |
| ローカル利用 | 対応 |
| BYOK | 対応 |
| オープンソース | あり |
| 無料利用 | トライアルクレジットあり |
| Product Hunt | 2026年7月30日 #2 |

Memmyは単なる「AI用メモ帳」ではありません。

**AIとの過去のやり取りを、次のAIが利用できる長期的なコンテキストへ変えること**が中心機能です。

## Memmy Agentとは？

AIを使っていると、同じ説明を何度もすることがあります。

たとえばCodexへ、

「このプロジェクトでは新しい概念を勝手に追加しないで」

「まず既存の設計文書を確認して」

「変更後はbuildして」

といったルールを伝えたとします。

そのCodexセッションでは理解してくれても、別のAIへ移れば同じ説明が必要になることがあります。

Memmyが目指しているのは、この問題の解消です。

Memmyは、

**会話**

**判断**

**好み**

**プロジェクトのコンテキスト**

**作業経験**

などを長期記憶へ変換します。

そしてClaude CodeからCodexへ移った場合などでも、同じMemmyの記憶を利用できるようにします。

つまり、

**Claude Codeの記憶**

**Codexの記憶**

**Cursorの記憶**

をそれぞれ別々に育てるのではなく、

**自分専用の共通記憶を1つ持ち、複数のAIから使う**

という考え方です。

## なぜAIに「共通の記憶」が必要なのか

AIが1つだけなら、それほど大きな問題ではないかもしれません。

しかし現在は、

調査はChatGPT。

実装はCodex。

大きなコード変更はClaude Code。

エディタではCursor。

自動化にはOpenClaw。

というように、用途によってAIを使い分けることも珍しくなくなってきました。

問題は、**AIを切り替えるたびにコンテキストまで移動してくれるとは限らない**ことです。

Memmyはここに、

**AIとは別に「ユーザーの記憶レイヤー」を持つ**

という考え方を持ち込みます。

AIモデルそのものを乗り換えても、蓄積した自分のコンテキストは持ち続ける。

これがMemmyの面白いところです。

## Memmyは何を覚える？

公式説明では、Memmyは散らばった会話や行動から、

- Knowledge
- Preferences
- Project experience

などを構造化された長期記憶へ変換します。

たとえば開発用途なら、

**このプロジェクトでは何を作っているか**

**以前どんな実装を試したか**

**どんな方法が失敗したか**

**ユーザーがどんな実装方針を好むか**

**どんな判断を以前したか**

といった情報が、将来のAI作業に利用できる可能性があります。

単に会話ログを大量に保存するのではなく、**必要な場面で再利用できる記憶へ整理する**ことが重要です。

## 過去のClaude CodeやCodexの履歴も取り込める

Memmyは、導入した瞬間から記憶を作り始めるだけではありません。

既存AIエージェントの履歴をスキャンして、これまで蓄積してきたコンテキストを長期記憶へ変換する機能があります。

2026年8月17日時点の公式GitHubでは、履歴取り込み対象として、

- Cursor
- Claude Code
- Codex
- OpenCode
- OpenClaw
- Hermes Agent

が案内されています。

これはかなり重要です。

数か月Claude CodeやCodexを使ったあとでMemmyを導入しても、**すべてをゼロから教え直す必要を減らせる**からです。

公式では、既存履歴からプロジェクトのコンテキスト、作業習慣、好みなどを取り込み、パーソナライズされた「First Meeting Report」を作る仕組みも説明されています。

## Claude Codeでどう使われる？

Claude CodeはMemmyの主要な対象の1つです。

ここで重要なのは、Memmyが毎回すべての記憶をClaude Codeへ押し込むわけではないことです。

Product Hunt上で開発チームが説明した現在の挙動では、新しいClaude Codeセッションを開始しただけでは、検索された記憶を最初から読み込ませません。

ユーザーが最初のプロンプトを送ったあと、その内容を分類して関連する記憶を検索し、選択された情報を追加コンテキストとして渡します。

会話終了後には、そのターンを再び記憶側へ取り込みます。

つまりイメージとしては、

**ユーザーがClaude Codeへ依頼**

↓

**Memmyが依頼内容に関連する記憶を探す**

↓

**必要な記憶をClaude Codeへ渡す**

↓

**Claude Codeが作業**

↓

**新しく得られた経験をMemmyへ保存**

という循環です。

## Codexでも同じ記憶を使える

Codexも公式に対応対象として案内されています。

たとえば昨日Claude Codeで、

「この実装方法は問題があったので採用しない」

という判断をしたとします。

翌日にCodexへ切り替えた場合でも、その経験をMemmy側の長期記憶として持っていれば、関連する作業で再利用できる可能性があります。

これが、

**「AIを変えても同じ自分を覚えている」**

というMemmyのコンセプトです。

特定のAIサービスに記憶を閉じ込めないという意味でも興味深い設計です。

## Memmyは記憶ツールだけではない

ここは名前から少し分かりにくい部分です。

MemmyはMemory Layerだけでなく、**Local Agent Runtime**でもあります。

つまりMemmy自身へタスクを渡して作業させることもできます。

公式GitHubでは、

| 役割 | 内容 |
|---|---|
| Memory Layer | 長期コンテキストの保存・検索 |
| Agent Runtime | AIエージェントとしてタスクを実行 |
| Desktop App | GUIからMemmyを利用 |
| CLI | ターミナルから利用 |
| API | 他のツールからMemmyを利用 |

という複数の使い方が用意されています。

そのため、

**「Claude Codeに記憶を追加するプラグイン」**

だけだとMemmyの説明としては不十分です。

より正確には、

**「複数AIが共有できる記憶ハブ＋ローカルAIエージェント環境」**

に近いサービスです。

## Desktop Appから使える

最も分かりやすい導入方法はDesktop Appです。

公式のQuick Startでは、

1. Memmy Desktop Appを起動
2. Account ModeまたはAPI Key Modeを選択
3. 必要に応じてモデルを設定
4. メイン画面からタスクを送信
5. Toolsから外部ツールを接続
6. Memoryから既存Agent履歴をスキャン

という流れが案内されています。

プログラミングに詳しくなくても、まずDesktop Appから試せる構成になっています。

## CLIからも利用できる

開発者向けには`memmy` CLIがあります。

CLIでは初期設定、状態確認、単発のAgent実行、対話型利用、APIサーバー起動などができます。

さらに別途`memmy-memory` CLIも用意されており、

**記憶を検索する**

**新しい記憶を追加する**

**特定の記憶を取得する**

といった操作を外部Agentやスクリプトから行えます。

そのためGUIアプリとして使うだけでなく、既存のAI開発環境へ組み込むことも想定されています。

## BYOKにも対応

Memmyは自分のモデルAPIキーを使うBYOK（Bring Your Own Key）に対応しています。

公式GitHubの設定例ではOpenAIが掲載されていますが、Memmy側でproviderとmodelを設定する構造になっています。

アカウントモードでは登録時にAgentタスク用のトライアルTokenが提供され、残量や使用状況はアプリ内で確認できます。

トライアルを使い切ったあとは、自分のAPIキーを利用するBYOKモードへ切り替えて継続できます。

## Memmy Agentの料金は？

2026年8月17日時点では、**固定の月額料金表を前提に紹介するのは避けたほうがよさそうです**。

公式GitHubでは、登録するとAgentタスク用の無料トライアルTokenが提供されること、その後BYOKで自分のモデルAPIを利用できることが案内されています。

一方、Product Huntでは「Free」として掲載されています。

そのため現時点では、

**まず無料トライアルで開始**

↓

**必要なら自分のAPIキーで継続**

という理解が分かりやすいでしょう。

サービスがまだ新しいため、料金体系は今後変わる可能性があります。

## ローカルファーストなのも特徴

AIの「記憶」は便利ですが、同時にプライバシーが重要になります。

Memmyが記憶する可能性があるのは、

仕事の内容、

プロジェクト情報、

ユーザーの好み、

過去の判断、

AIとの会話、

といった情報だからです。

Memmyは**local-first**を掲げています。

Product Huntで開発者は、記憶をユーザーが検索・管理・削除でき、端末側に置くことを強調しています。

また公式GitHubでは、MemoryサービスをローカルのSQLiteデータベースで動かす構成も確認できます。

ただし注意したいのは、**「Memmyの記憶がローカルにある」ことと「利用するAIモデルへのデータ送信が一切ない」ことは同じではない**点です。

BYOKで外部モデルを利用する場合などは、選択したモデルプロバイダー側のデータ取り扱いも確認する必要があります。

## オープンソースで公開されている

Memmy AgentのソースコードはGitHubで公開されています。

2026年8月17日時点で、MemTensorの`memmy-agent`リポジトリからDesktop App、Agent Runtime、Memory関連機能などを確認できます。

自分でソースから構築する方法も案内されており、Node.js 22以上が要件として記載されています。

Windows向けのパッケージングコマンドもリポジトリ内に用意されています。

新しいAIサービスでは「内部で何をしているのか」が見えにくいこともありますが、Memmyはコードを確認できる点が特徴です。

## Memmy Agentのメリット

### AIを変えるたびに説明し直す手間を減らせる

Memmyの最大の価値です。

Claude CodeからCodexへ移っても、共通の長期記憶を利用できます。

複数AIを日常的に使う人ほど効果が大きくなります。

### 過去の判断を次のAIへ引き継げる

単なるプロフィールだけでなく、プロジェクト経験や過去の判断も記憶対象になります。

**「以前これを試したけど失敗した」**

という経験まで引き継げれば、別のAIが同じ失敗を繰り返すことを減らせる可能性があります。

### 既存履歴からスタートできる

Claude CodeやCodexなどの履歴取り込みに対応しているため、Memmy導入後にすべてをゼロから覚えさせる必要を減らせます。

### 記憶を自分で管理できる

検索・管理・削除できる記憶として扱う設計になっています。

AI側に完全に任せるのではなく、ユーザー自身が記憶をコントロールする考え方です。

### 特定のAIに依存しにくい

AIモデルそのものではなく、その外側に共通Memory Layerを置きます。

今後メインで使うAIが変わっても、記憶を別資産として持てる可能性があります。

## Memmy Agentの注意点

### まだ非常に新しい

Memmy Agentは2026年に登場したばかりで、Product Huntでのローンチも2026年7月30日です。

対応AI、UI、料金、記憶方式などは今後変わる可能性があります。

### 記憶が増えるほど検索コストも増える

Product Hunt上で開発チーム自身が、ローカルストレージによるコントロール性とのトレードオフとして、**大きなMemory Poolでは現状レイテンシが増える**ことを説明しています。

長期間利用して大量の記憶が蓄積したときの使い勝手は、今後注目したいポイントです。

### 「何を覚えさせるか」が重要になる

AIに長期記憶を持たせれば、便利になるとは限りません。

古くなった情報や間違った判断まで残っていれば、それを次のAIが利用してしまう可能性があります。

今後AIメモリが一般化すると、

**何を記憶するか**

だけでなく、

**何を忘れるか**

も重要になりそうです。

### 外部AIを使う場合は別途プライバシーを確認する

Memmyがlocal-firstでも、外部のLLM APIへ送信する情報については、そのプロバイダーのポリシーが関係します。

仕事や機密プロジェクトで利用する場合は、Memmyだけでなく接続先も含めて確認する必要があります。

## SKI・Heard・CodeRabbit・Memmyは何が違う？

これまで紹介してきたAI開発周辺ツールと並べると、Memmyの立ち位置が分かりやすくなります。

| サービス | AI開発で担当する役割 |
|---|---|
| SKI | AIへ音声で指示する |
| Heard | AIの作業状況を音声で把握する |
| CodeRabbit | AIや人間が書いたコードをレビューする |
| Memmy Agent | 複数AIで長期記憶を共有する |

SKIは**入力**。

Heardは**監督**。

CodeRabbitは**検査**。

Memmyは**記憶**。

という違いがあります。

Memmyは特に、Claude CodeやCodexなどを**複数使い分ける人**に意味のあるサービスです。

SKIについて詳しく知りたい場合は、[SKI解説記事](/articles/ski-ai-review/)を参照してください。

Heardについて詳しく知りたい場合は、[Heard解説記事](/articles/heard-ai-review/)を参照してください。

CodeRabbitについて詳しく知りたい場合は、[CodeRabbit解説記事](/articles/coderabbit-review/)を参照してください。

## Memmy Agentはどんな人に向いている？

特に相性がよさそうなのは、

- Claude CodeとCodexを両方使う
- Cursorも併用している
- AIへ同じ説明を何度もしている
- 長期間同じプロジェクトをAIと開発している
- 過去の判断をAIへ引き継ぎたい
- AIを頻繁に乗り換える
- 自分専用のAI記憶を持ちたい
- ローカルで記憶を管理したい
- AIエージェントを複数並列で使う

という人です。

逆に、1つのAIを短い単発タスクにしか使わない場合は、長期記憶レイヤーを追加するメリットはそれほど大きくないでしょう。

## Memmy Agentについてよくある質問

### Memmy Agentは何をするサービスですか？

Claude Code、Codex、Cursorなど複数のAIエージェントで利用できる共通の長期記憶レイヤーです。

Memmy自身もAgent Runtimeとしてタスクを実行できます。

### Codexに対応していますか？

はい。

Codexは公式に対応対象として案内されています。

### Claude Codeに対応していますか？

対応しています。

過去のClaude Code履歴を取り込む機能もあります。

### Cursorでも使えますか？

Cursorも対応対象です。

Cursorの既存履歴からコンテキストを取り込むこともできます。

### 過去の会話も記憶できますか？

対応Agentでは既存履歴をスキャンし、過去のプロジェクトコンテキストや作業習慣などを長期記憶へ変換できます。

### 無料で使えますか？

無料トライアル用のAgentタスクTokenが提供されています。

その後はBYOKで自分のモデルAPIを利用する方法もあります。Product Hunt上ではFreeとして掲載されています。

### オープンソースですか？

はい。

Memmy AgentのGitHubリポジトリでソースコードが公開されています。

### 記憶はクラウドに保存されますか？

Memmyはlocal-firstを掲げ、ユーザーが記憶を管理できる設計です。ローカルMemoryサービスではSQLiteを利用する構成も公開されています。

ただし、外部LLM APIを利用する場合のデータ送信については別途考える必要があります。

## まとめ｜「どのAIを使うか」ではなく「自分の記憶をどのAIでも使う」

これまでAIサービスを乗り換えると、コンテキストも一緒にリセットされるのが当たり前でした。

Claude CodeにはClaude Codeとの履歴。

CodexにはCodexとの履歴。

CursorにはCursorとの履歴。

しかしMemmyが目指しているのは、その逆です。

**自分の記憶を中心に置く**

↓

**Claude Codeがその記憶を使う**

↓

**Codexも同じ記憶を使う**

↓

**Cursorへ移っても同じ経験を引き継ぐ**

という構造です。

AIがどんどん賢くなっても、自分のプロジェクトや好み、過去の判断を知らなければ、毎回説明が必要になります。

そして複数のAIエージェントを使う人が増えるほど、**「AIそのもの」だけでなく「AIの間を移動できる記憶」**の価値も大きくなっていくはずです。

Memmyはまだ登場したばかりです。Product Huntでは2026年7月30日に#2となり、同週のランキングでもトップ10入りしました。

現時点では完成された定番サービスというより、**これからAIエージェントの共通メモリという領域がどう発展するのかを見るうえでも面白いサービス**だと思います。

Claude CodeとCodexを行き来するたびに、

**「これ前にも説明したんだけどな……」**

と感じている人なら、かなり分かりやすく価値を感じられるサービスでしょう。

Memmy Agent公式サイトを見る:
https://memmy.bot/

━━━━━━━━━━━━━━━━━━━━
