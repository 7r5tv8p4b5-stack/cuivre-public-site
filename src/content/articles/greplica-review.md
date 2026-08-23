---
title: "Greplicaとは？使い方・料金・AIコーディングで何が変わるかをわかりやすく解説"
description: "Greplicaは、CodexやClaude CodeなどのAIコーディングエージェントが、過去の開発セッションやコードベースの文脈を毎回ゼロから調べ直さなくて済むようにする「開発メモリ」ツールです。"
publishedAt: "2026-08-17"
updatedAt: "2026-08-23"
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
ogTitle: "Greplicaとは？使い方・料金・AIコーディングで何が変わるかをわかりやすく解説"
ogDescription: "Greplicaは、CodexやClaude CodeなどのAIコーディングエージェントが、過去の開発セッションやコードベースの文脈を毎回ゼロから調べ直さなくて済むようにする「開発メモリ」ツールです。"
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
officialUrl: "https://autoloops.ai/"
---
# Greplicaとは？使い方・料金・AIコーディングで何が変わるかをわかりやすく解説

Greplicaは、CodexやClaude CodeなどのAIコーディングエージェントが、過去の開発セッションやコードベースの文脈を毎回ゼロから調べ直さなくて済むようにする「開発メモリ」ツールです。

長く続くプロジェクトでは、AIへ同じ説明を何度もしたり、毎回大量のファイルを読ませて構造を理解させたりすることがあります。Greplicaは、コード構造、過去セッション、設計判断などを検索可能なメモリとして保持し、エージェントが必要なときに関連情報だけ取り出せるようにします。

この記事では、2026年8月23日時点の公式情報をもとに、Greplicaがどんなツールなのか、CodexやClaude Codeへどう組み込むのか、無料でどこまで使えるのか、そのうえでどんなプロジェクトに向いているのかまで整理します。

## Greplicaとはどんなサービス？

Greplicaの目的は、AIコーディングエージェントへ「過去の記憶」を持たせることです。

通常、CodexやClaude Codeは新しいセッションを始めると、その会話の外にある過去判断を自動では知りません。AGENTS.mdやCLAUDE.mdに重要事項を書く方法もありますが、プロジェクトが大きくなるほど全部を一つのMarkdownへ詰め込むのは難しくなります。

Greplicaでは、開発中に得られたコンポーネント構造、処理フロー、設計判断、制約などをグラフ化されたメモリとして保存します。次のセッションでは、エージェントが質問に関連する部分だけを検索して取得できます。

ローカルモードではメモリは`~/.greplica/graph.db`へ保存され、クラウドへ送信しません。公式では「Fully Local」「No telemetry」と案内されており、ローカル埋め込みを使えばAPIキーも不要です。

現在はCodex、Claude Code、OpenCodeのほか、Copilot CLI、Cursor、OpenHandsなど複数のエージェント環境へ対応しています。

つまりGreplicaは、**コードを書くAIそのものではなく、AIが同じプロジェクトを長く担当するときの記憶層**です。

## Greplicaはどうやって使う？

公式の推奨方法は、CLIをインストールし、対象リポジトリでGreplicaを初期化する方法です。

まずNode.js 22〜26の環境で`npm install -g greplica`を実行します。その後、たとえばCodexなら`greplica install --platform codex --embedding local`のように、使用するエージェントと埋め込み方法を指定します。

初回はリポジトリの構造や既存情報からメモリを作ります。作業中にエージェントが過去情報を確認したい場合は、`greplica graph context "<question>"`で関連コンテキストを取得できます。

セッションの終わりには、そのセッションで決まった設計、変更されたフロー、制約、次にやることなどをworking memoryへ反映します。これを繰り返すことで、プロジェクトのメモリが更新されていきます。

ローカルモード以外にmanaged modeもあり、チームメンバーが異なるcloneやforkから共通のリポジトリメモリを利用する構成も用意されています。

## Greplicaの料金について

現在のGreplicaは、ローカル利用について公式に「Open Source・Fully Local・Fully Free」と案内されています。

ローカル埋め込みを使えば、Greplica自体の利用料金だけでなく新しいAPIキーも必要ありません。既存のCodexやClaude Codeの契約と組み合わせて利用できます。

OpenAI embeddingsを使う構成も選べますが、その場合は利用するAPI側の費用が別途発生する可能性があります。

managed modeも実装されていますが、公開されている公式ページではローカル版のような明確な一般料金表を確認できません。チーム向けmanaged利用を検討する場合は、実装時点の公式案内を確認する必要があります。

そのため個人開発者が試す場合、まず無料のローカルモードで十分です。Greplicaへお金を払うかどうかではなく、**導入・運用の手間に対して、AIが同じ探索を繰り返す時間やトークンをどれだけ減らせるか**で判断するツールです。

公式の2026年7月ベンチマークでは、選定した10タスクで平均49％少ないトークン、36％少ないツール呼び出し、26％短い時間、43％低い推定コストという結果を報告しています。ただし単一ラン中心の限定的なベンチマークなので、すべてのプロジェクトで同じ改善率になるとは考えない方がいいでしょう。

## Greplicaはどんな人に向いている？

Greplicaが向いているのは、数週間・数か月以上続くコードベースでAIコーディングを日常的に使う人です。

毎回「このプロジェクトではこの設計にした」「このファイルは触らない」「前回ここまで実装した」と説明しているなら、Greplicaのメモリが役立つ可能性があります。

大規模リポジトリや、複数のサブシステムがあるプロジェクトとも相性があります。エージェントが毎回repo全体をgrep・readして文脈を再構築するコストが大きいほど、過去メモリを使う意味が出やすくなります。

逆に、数ファイルだけの小さなプロジェクトや、一回きりのコード生成では導入メリットは小さいでしょう。Greplicaの価値は「記憶が蓄積するほど効いてくる」タイプです。

また、メモリを更新しないと古い判断が残る可能性があります。導入しただけで自動的に完璧なプロジェクト知識になるわけではなく、セッション終盤で重要情報を反映する運用が必要です。

## まとめ｜GreplicaはAIに毎回プロジェクトを説明し直している人向け

Greplicaは、AIコーディングエージェント向けに、コード構造や過去セッション、設計判断を検索可能なメモリとして保存するオープンソースツールです。

ローカルモードは無料で、データをローカルへ保持し、ローカル埋め込みなら新しいAPIキーも必要ありません。

小さな一回きりの開発より、CodexやClaude Codeと同じコードベースを長期間育てる人ほど価値が出ます。毎回の探索や説明を減らし、AIが「前回までのプロジェクト」を思い出しやすくするための補助レイヤーと考えると分かりやすいでしょう。
