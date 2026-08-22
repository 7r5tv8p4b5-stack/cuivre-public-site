---
title: "Gumloopとは？AIワークフロー・エージェント・新料金8％オーケストレーションを解説【2026年版】"
description: "GumloopのAIワークフロー・Agent、2026年8月の新料金、token/compute実費＋8% orchestration fee、evals・self-improving agentsを整理します。"
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
slug: "gumloop-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/gumloop-review/"
ogTitle: "Gumloopとは？AIワークフロー・エージェント・新料金8％オーケストレーションを解説【2026年版】"
ogDescription: "GumloopのAIワークフロー・Agent、2026年8月の新料金、token/compute実費＋8% orchestration fee、evals・self-improving agentsを整理します。"
targetKeyword: "Gumloop"
searchIntent: "review"
serviceName: "Gumloop"
officialUrl: "https://www.gumloop.com/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Gumloop公式サイト"
    href: "https://www.gumloop.com/"
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
categoryTags: ["AI業務自動化", "Gumloop", "AI"]
---
# Gumloopとは？AIエージェントで業務をどこまで自動化できる？料金・Agent・n8nとの違いを解説【2026年版】

Gumloopは、AIエージェントとワークフローを使って、営業、マーケティング、調査、オペレーションなどの業務を自動化するプラットフォームです。

以前はノードをつないでAIワークフローを作るサービスとして知られていましたが、2026年はAgentsがかなり前面に出ています。Agentへ目的と使えるツールを渡し、必要に応じて自分で仕事を分解させたり、他のAgentへ委任させたり、スケジュールや外部イベントで自動実行させたりできます。

この記事では、2026年8月時点のGumloopが普通のワークフロー自動化とどう違うのかを中心に、Custom Agents、Agent Tasks、Subagents、料金の考え方、承認フローまで見ていきます。n8nやZapier AgentsよりGumloopが合うのはどんな業務なのかも整理します。

## Gumloopは「手順を全部描く」より「この仕事を任せる」に近づいている

従来の業務自動化は、人間が処理順を決めます。

新しいメールが来る。

本文を取得する。

条件分岐する。

CRMを更新する。

Slackへ送る。

この流れを一つずつ設定します。

Gumloopでは今もワークフローを作れますが、Custom Agentを使うと考え方が変わります。

Agentへ役割、使っていいツール、目的を渡し、「この見込み客について調べてCRMを更新して」のように仕事単位で任せられます。

毎回同じ一本道を通るのではなく、状況に応じて必要なツールを選ぶ。

この部分がGumloopのAIらしさです。

## Custom Agentは、専用の指示とツールを持つ“担当者”として作れる

Gumloopには一般用途の/chatとCustom Agentがあります。

Custom Agentでは専用のsystem promptを設定し、使えるツールや連携先を選び、必要なら既存ワークフローもツールとして持たせられます。

たとえば営業Agentなら、

Salesforce。

HubSpot。

Apollo。

Gmail。

会社情報検索。

など営業に必要なものだけを渡せます。

サポートAgentならZendeskや社内ドキュメントだけに絞る。

こうすると、一つの巨大なAIへ全権限を渡すより扱いやすくなります。

「Agent一人に何を担当させるか」を明確にした方が、出力も権限も管理しやすいです。

## Agent Tasksで、毎回チャットしなくても勝手に仕事を始められる

2026年3月にGumloopはAgent Tasksを追加しました。

これによって、Agentは人間がチャットを送った時だけ動くものではなくなっています。

毎朝8時。

毎週月曜日。

新しいメールが来た時。

フォームが送信された時。

Zendeskチケットが作られた時。

こうした時間やイベントをトリガーにしてAgentを自動実行できます。

たとえば、毎朝CRMを見てリスクの高い案件を調べ、営業チームへレポートする。

新しい問い合わせが入ったら内容を調査し、返信案を作る。

このように、「人間が思い出してAgentへ頼む」作業まで消せます。

## Subagentsで仕事を並列化する発想は、普通のワークフローとはかなり違う

2026年5月にはSubagentsが登場しています。

Agent自身が、仕事を速く進めるために自分のコピーを作り、複数の作業を並列に進められます。

たとえば競合10社を調査する仕事なら、一つのAgentが10社を順番に見るのではなく、複数のSubagentへ分けて調査し、最後に結果をまとめる。

この発想は従来の自動化より、AIチームに近いです。

さらに、別の専門Agentを呼ぶこともできます。

営業Agentが調査Agentへ競合情報を依頼する。

分析Agentがデータ取得Agentへ仕事を渡す。

人間が最初からすべての処理順を描かなくても、Agent側が仕事を分解できるようになっています。

## 2026年8月から料金の考え方がかなり変わっている

Gumloopは2026年8月に新しい料金モデルを発表しました。

特徴は、AIモデルのtokenコストとcomputeコストを原価で通し、その上に基本8％のorchestration feeを加える考え方です。

以前の「何credits消費するか」を中心とした料金から、実際に使ったAIと計算資源へ近い形へ移っています。

これは大規模利用では分かりやすい変更です。

どのモデルがどれくらい使われているか。

何にcomputeがかかっているか。

その実費とGumloop側のオーケストレーション費を分けて考えられます。

一方、少し試したい個人にとっては、固定creditsだけを見る以前の方が単純に感じることもあります。

料金ページは更新が続いているため、契約前には現在のプランと計算方法を公式で確認した方がいいです。

## Freeでも試せるが、Gumloopは本格運用するほど“インフラ”に近づく

2025年末の改定ではFreeユーザーに月5,000 creditsが用意され、Proでは利用量に応じた複数の枠がありました。

2026年8月にはさらに料金モデルの変更が進んでいます。

この変化を見ると、Gumloopが単なる「AI便利ツール」より、会社の中で大量にAgentを動かす基盤へ寄っていることが分かります。

CRM更新。

営業調査。

広告管理。

会議後処理。

レポート作成。

こうした業務を複数部署で常時動かすようになると、AI利用料の透明性が重要になります。

小さな個人自動化だけで評価するより、会社の仕事そのものをAgentへ移した時に価値が出るサービスです。

## 外部へ書き込む前に承認を挟めるのは、本番業務ではかなり大事

AI Agentが便利になるほど怖いのが、勝手に実行されることです。

間違ったメールを送る。

CRMの商談情報を更新する。

顧客へ誤った返信をする。

Gumloopでは、書き込みや送信前に人間へ確認を出す使い方ができます。

公式のAgent例でも、CRMやメールへ変更する前に内容を見せて承認を求める設計が案内されています。

AI業務自動化では、「何％自動化できたか」より「間違った時にどこで止められるか」の方が重要です。

特に最初の導入では、読み取りは自動。

外部への変更だけ承認。

この形から始めると運用しやすいです。

## n8nよりGumloopが向くのは、仕事の手順より“成果”をAIへ任せたい時

n8nでは、人間がワークフローの構造をかなり細かく決められます。

Gumloopもワークフローを作れますが、2026年はAgentへ仕事そのものを渡す方向が強いです。

「この5ステップを順番に実行して」ならn8n。

「この案件を調べてリスクを整理し、必要ならCRMを更新して」ならGumloop。

この違いで考えると分かりやすいです。

処理の再現性と制御を最優先するならn8n。

状況に応じてAIに考えさせ、人間が手順を全部設計する量を減らしたいならGumloop。

業務によって使い分けるのも自然です。

## まとめ

Gumloopは、AIをワークフローの一部に入れるサービスから、AI Agentへ仕事を任せるプラットフォームへかなり進んでいます。

Custom Agentに役割とツールを持たせ、Agent Tasksで自動的に仕事を始め、必要ならSubagentsへ並列で分解する。

人間がすべての手順を決めなくても、仕事のゴールから逆算して動けるのが特徴です。

一方、自由度が上がるほど、権限、承認、コスト管理が重要になります。

決められた処理を厳密に流したいならn8n。

業務の成果そのものをAgentへ渡したいならGumloop。

後者へ寄せたい会社ほど、Gumloopの方向性は面白くなっています。
