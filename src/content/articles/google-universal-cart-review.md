---
title: "Google Universal Cartとは？Gemini・検索をまたいで買い物できる新しいAIカートを解説"
displayTitle: "Google Universal Cart"
subtitle: "Gemini・検索をまたいで買い物できる新しいAIカートを解説"
description: "Google Universal Cartは、Google検索やGeminiなどで見つけた商品を一つのカートへ入れ、価格変動や在庫をAIに追跡させながら購入まで進められる新しいショッピング機能です。"
publishedAt: "2026-08-22"
updatedAt: "2026-08-24"
category: "AIショッピング"
parentCategory: "AIショッピング"
primaryCategory: "AIショッピング"
subcategory: "AIショッピング"
articleType: "service_review"
contentType: "TYPE_C"
status: "published"
draft: false
slug: "google-universal-cart-review"
noindex: false
canonical: "https://cuivre-public-site.pages.dev/articles/google-universal-cart-review/"
ogTitle: "Google Universal Cartとは？Gemini・検索をまたいで買い物できる新しいAIカートを解説"
ogDescription: "Google Universal Cartは、Google検索やGeminiなどで見つけた商品を一つのカートへ入れ、価格変動や在庫をAIに追跡させながら購入まで進められる新しいショッピング機能です。"
targetKeyword: "Google Universal Cart"
searchIntent: "review"
serviceName: "Google Universal Cart"
officialUrl: "https://blog.google/intl/ja-jp/products/explore-get-answers/google-shopping-cart/"
officialCtaText: "公式サイトを見る →"
officialLinks:
  - label: "Google Universal Cart公式サイト"
    href: "https://blog.google/intl/ja-jp/products/explore-get-answers/google-shopping-cart/"
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
categoryTags: ["AIショッピング", "Google Universal Cart"]
---
# Google Universal Cartとは？Gemini・検索をまたいで買い物できる新しいAIカートを解説

Google Universal Cartは、Google検索やGeminiなどで見つけた商品を一つのカートへ入れ、価格変動や在庫をAIに追跡させながら購入まで進められる新しいショッピング機能です。

普通のオンラインショッピングでは、Googleで商品を探したあと販売店ごとに商品ページを開き、それぞれのカートへ商品を入れます。

複数の店で買うなら、カートも複数に分かれます。

Universal Cartはこの考え方を変えます。

検索中に見つけた商品。

Geminiと相談して見つけた商品。

今後はYouTubeやGmailで見つけた商品。

これらをGoogle側の一つのカートへまとめ、販売店をまたいで管理できるようにします。

さらに、商品を入れて終わりではありません。

Geminiがバックグラウンドで価格下落や再入荷を確認し、価格履歴を見せ、複数の商品を組み合わせる場合には相性まで考えます。

Googleが目指しているのは、単に「ネット上の商品を保存できるカート」ではなく、**買う候補を覚え、状況を監視し、購入判断まで手伝うAIショッピングの拠点**です。

この記事では、2026年8月24日時点のGoogle公式情報をもとに、Universal Cartで何ができるのか、GeminiやGoogle検索とどうつながるのか、Universal Commerce Protocolとは何が違うのか、日本からすぐ使える機能なのかまで整理します。

## Google Universal Cartはどんな機能？

Universal Cartは、Googleが2026年5月のGoogle I/Oで発表したインテリジェントなショッピングカートです。

最大の特徴は「どの店のカートか」ではなく「User自身のGoogle上のカート」として機能することです。

一般的なECのカートは販売店に紐づきます。

A店の商品はA店のカート。

B店の商品はB店のカート。

Googleで比較していても、購入段階では各販売店へ移動します。

Universal Cartでは、対応する複数Merchantの商品をGoogle上の一つのカートへ追加できます。

しかも入口はGoogle Searchだけではありません。

GoogleはSearch、Gemini、YouTube、Gmailなど複数のServiceから商品を追加できる構想を示しています。

2026年夏はまず米国のSearchとGemini Appから展開し、YouTubeとGmailはその後対応する計画です。

そのためUniversal Cartを単独のShopping Appと考えるより、**GoogleのさまざまなServiceで見つけた「欲しいもの」を一か所へ集める共通Shopping Layer**と考える方が分かりやすいです。

## 商品を入れるとAIがバックグラウンドで動き始める

普通のカートは、商品を入れたあとUserがCheckoutするまでほぼ何もしません。

Universal Cartは商品を入れた瞬間から働きます。

GoogleはGemini Modelを使い、DealやPrice Dropを探し、Price Historyを表示し、Out of Stockの商品が戻ったときに知らせると説明しています。

つまり「今すぐ買う商品」だけを入れる必要はありません。

気になる商品を入れておき、買い時を待つ使い方ができます。

価格追跡自体はGoogle Shoppingにも以前からありました。

Universal Cartでは、それを一つのカート内で複数Merchantの商品と組み合わせ、AIのReasoningまで加えています。

ECサイトのお気に入りListと価格追跡Toolを別々に使うのではなく、購入候補をGoogleへ預けておく感覚に近くなります。

買うか迷っている商品が多い人ほど、単なるCartより「Shopping Manager」としての意味が出てきます。

## PCパーツの相性まで確認するのが普通のカートとの大きな違い

GoogleがUniversal Cartの例として挙げているのが、自作PCです。

初めてPCを組むUserが、複数Retailerから部品をCartへ追加します。

CPU、Motherboard、Memory、Power Supplyなどは、単体では良い商品でも組み合わせられない場合があります。

Universal Cartは、追加された商品同士のCompatibilityに問題があれば事前に指摘し、代替候補を提案できます。

ここが「安くなったら通知するだけ」のCartとの違いです。

AIが一つの商品だけを見るのではなく、**カート全体を一つの目的として理解する**わけです。

この考え方はPCだけではありません。

CameraとLens。

家具と部屋のSize。

旅行用品一式。

料理に必要な道具。

複数の商品を一緒に買う場面では、「それぞれの商品が良いか」だけでなく「組み合わせとして成立するか」が重要になります。

Universal Cartは将来的に、カートへ商品を集めるほどAIがUserの購入目的を理解し、問題を先回りして見つける方向を狙っています。

## Geminiで相談して見つけた商品をそのままカートへ入れられる

AI Shoppingの便利さが途切れやすいのが、商品を決めたあとの移動です。

Geminiへ、

「動画編集用のLaptopを探して」
「予算は20万円」
「持ち運びたいので軽い方がいい」

と相談して候補が見つかっても、そのあと販売店を検索し直し、商品Pageへ移動し、購入する必要があれば手間が残ります。

Universal CartはこのDiscoveryとPurchaseの距離を縮めます。

GeminiとのConversationで見つけた対応商品をCartへ入れ、その後もGoogle上で管理できます。

Google SearchのAI Modeでも同様に、商品を探すConversationから購入へつなげるAgentic Commerceを進めています。

つまりGeminiが「何を買うか考えるAI」で終わらず、Cartが「その候補を保持し、購入まで進める場所」になります。

GoogleのShopping体験では、SearchとGeminiが商品Discovery、Universal Cartが候補管理、UCPがMerchantとの取引を支えるという役割分担が見えてきます。

## Search・Gemini・YouTube・Gmailをまたげる意味

オンラインで商品を知る場所はECサイトだけではありません。

Google検索で比較記事を見る。

YouTubeのReview動画で商品を知る。

GmailにSaleのお知らせが届く。

Geminiへ相談する。

これまでは、気になる商品が見つかるたびに別Tabを開いたりBookmarkしたりしていました。

Universal Cartは、Googleの各Surfaceで見つけた商品を同じ場所へ集めることを目指しています。

2026年8月時点ですべてのSurfaceへの展開が完了しているわけではありません。

Google I/OではSearchとGemini Appから米国で夏にRolloutし、YouTubeとGmailはFollowすると案内されました。

重要なのは現在の対応範囲以上に、GoogleがCartを特定のStoreや特定のAppの機能ではなく、**Google Accountを軸に複数ServiceへまたがるShopping Infrastructureとして作っている**ことです。

## Universal CartとUCPは同じものではない

この二つは名前が似ているため混同しやすい部分です。

Universal CartはUserが触るShopping機能です。

商品を入れ、価格を追い、購入へ進む場所です。

一方、Universal Commerce Protocol、UCPは、AI Agent、Platform、Merchant、Payment ProviderなどがCommerceでやり取りするための共通規格です。

Googleは2026年1月、Shopify、Etsy、Wayfair、Target、Walmartなどと共同でUCPを開発したと発表しました。

UCPはOpen Standardで、商品DiscoveryからCheckout、その後のOrder Supportまで、Agentic Commerce全体でSystem同士が共通の方法で通信できるようにすることを狙っています。

簡単に言えば、

**Universal Cart = 買い物をする人が使うカート**

**UCP = その裏側でGoogleと販売店などをつなぐ共通言語**

です。

Universal Cartを理解するうえでUCPは重要ですが、UserがUCPを設定して使うわけではありません。

## なぜ新しい共通規格が必要なの？

AIが商品をおすすめするだけなら、Web検索で情報を集めればできます。

難しいのはその先です。

現在の在庫を確認する。

正確な送料を計算する。

会員価格を適用する。

配送先を決める。

Paymentを処理する。

注文を作る。

配送状況を更新する。

返品を扱う。

ここまでAI Agentが進めるには、Merchant側のSystemと安全かつ正確にやり取りする必要があります。

AIごと、販売店ごとに個別の接続方法を作れば、組み合わせが増えるほどIntegrationが複雑になります。

UCPはこの部分へ共通のProtocolを用意します。

MerchantがUCPへ対応すれば、対応AgentやPlatformが同じCommerce機能へ接続しやすくなります。

Google自身も、UCPを「Platforms、Agents、Businessesの共通言語」と説明しています。

Googleだけの閉じた購入規格ではなく、Agentic Commerce全体で使えるOpen Standardとして設計している点が重要です。

## Google上でそのままCheckoutできる商品も出てくる

UCPへ対応したMerchantでは、Google SearchのAI ModeやGeminiなどからNative Checkoutへ進める仕組みがあります。

Userが商品を選び「Buy now」や「Checkout on Google」へ進むと、Google側のUIで配送・支払い情報を入力し、注文を完了できます。

Google PayをPayment Credentialとして利用する仕組みも用意されています。

ただしGoogleが商品を販売するわけではありません。

MerchantはMerchant of Recordのままです。

販売主体、Customer Relationship、Orderの責任などはMerchant側に残ります。

またすべてのMerchantがNative Checkoutに対応するわけでもありません。

対応していない場合は、Universal CartからMerchantのSiteへ商品を入れた状態で引き渡し、そこでCheckoutする方式もあります。

Google Developersの2026年8月時点の資料では、Cart APIの初期ReleaseはCart CreationとTransferが中心で、GoogleとMerchant間でCart内容を完全同期するUpdate/DeleteなどはまだSupportされていません。

そのため「Googleのカートに世界中の商品を入れれば、すべて一括決済できる」と考えるのは現時点では正確ではありません。

## 複数の販売店の商品を一度に決済できるの？

Universal Cartは複数Merchantの商品を一つのCartで管理できます。

ただし「一つの決済で、どの店の商品でも完全にまとめて買える」と単純化しない方がいいでしょう。

MerchantごとにUCPやNative Checkoutへの対応状況が違います。

Google上でCheckoutできる商品もあれば、Merchant Siteへ移動して購入する商品もあります。

GoogleはUniversal CartからGoogle Payを使い、対応する多くのBrandで数TapのCheckoutを実現すると説明しています。

一方、UCP Integrationは段階的に展開中です。

2026年8月のMerchant Center Documentationでも、UCP Integration Tabは米国のPilot Merchant向けLimited Pilotとされています。

Universal Cartの「Universal」は、現時点で世界中の全ECを完全統合済みという意味ではありません。

**販売店をまたいで購入候補を一か所に集め、その後の購入経路をできるだけ滑らかにする方向性**として理解するのが適切です。

## 会員価格や特典もAI Shoppingへ持ち込める

UCPではAccount Linkingにも対応します。

Merchant AccountとGoogle側のShopping体験をつなぐことで、Guestとして買うだけではなく、Merchantが持つCustomer情報を利用できます。

Googleが発表時に示した例では、新規会員向け価格を提示したり、Loyalty Enrollmentを案内したり、Returning Customerへ過去の購入に応じたOfferを出したりできます。

これはAgentic Commerceで重要な部分です。

一般Web上の表示価格だけをAIが拾うと、会員限定価格や個別Offerを反映できないことがあります。

Merchant側と正式に接続することで、AI Shoppingの中でもそのBrand固有の購入条件を扱えるようになります。

Googleが「MerchantがCustomer Relationshipを維持できる」と強調しているのもこのためです。

## 価格履歴と値下げ通知は「今買うべきか」の判断を助ける

商品を決めても、すぐ買うか迷うことがあります。

特に家電やPCなど価格変動が大きい商品では、

「この価格は安いのか」
「Saleまで待った方がいいのか」
「先週より高くなっていないか」

が気になります。

Universal CartはPrice Historyを見せ、DealやPrice Dropを探します。

在庫切れならRestockも知らせます。

これにより商品検索と価格追跡を別々に行う必要を減らせます。

Google Shoppingには以前から価格追跡機能がありましたが、Universal Cartではそれを購入候補全体の管理へ統合します。

AIがCartの中身を理解しているため、将来的には単品の値下げだけではなく、複数商品を含めた購入Timingの判断へ広がる可能性があります。

現時点でも「欲しいものをCartへ入れたらすぐCheckout」という従来のCartより、検討期間を含めたShopping Toolになっています。

## Universal Cartの料金について

Universal Cart自体を利用するための月額Subscriptionは、Googleから発表されていません。

GoogleのShopping体験の一部として提供されます。

そのため「Universal Cartを使うためにGeminiの有料Planへ加入する」というServiceではありません。

ただし商品を購入すれば当然商品代金がかかり、送料、Tax、Merchantごとの条件が適用されます。

Google Payを使ったCheckoutでも、販売主体は対応Merchantです。

またUniversal Cartは2026年8月時点で世界中のUserへ一律に提供されているわけではありません。

機能の利用可否は地域、Google Surface、Merchant対応状況によって変わります。

料金より先に「自分の地域・AccountでUniversal Cartが提供されているか」を見る必要があります。

## 日本ですぐ使える？

2026年8月24日時点では、日本のUserがUniversal Cartを一般的なGoogle Shopping機能として利用できると断定できる公式情報は確認できません。

Google I/O 2026では、Universal Cartを米国のSearchとGemini Appで夏からRolloutし、その後YouTubeとGmailへ広げると案内しています。

UCP-powered Checkoutについても、Googleは米国から展開し、Canada、Australia、UKなどへ拡大する計画を示しています。

Merchant CenterのUCP Integrationも、2026年8月時点では米国のPilot Merchantを対象にしたLimited Pilotです。

そのため日本からこの記事を読む場合、Universal Cartは「今すぐ誰でも使えるGoogleの新機能」というより、**Googleが米国から展開を始めている次世代Shopping体験**として見るのが正確です。

日本展開時期は今後の公式発表を確認する必要があります。

## Universal Cartはどんな人に向いている？

現在の展開地域で利用できる前提なら、複数のStoreをまたいで商品を比較する人ほど相性があります。

Google Searchで商品を探す。

Geminiへ相談する。

YouTubeでReviewを見る。

Saleまで待つ。

複数Retailerの価格を確認する。

こうした買い方をする人は、商品候補がさまざまな場所へ散らばります。

Universal CartならGoogle側へ候補を集め、価格や在庫を追えます。

複数の商品を組み合わせて買う人にも向いています。

自作PCのようにCompatibilityが重要な買い物では、AIがCart全体を見る意味が大きくなります。

逆に、いつも同じECサイトだけで買い物し、そのStoreのWishlistやCartで困っていない人には変化が小さいかもしれません。

Universal Cartの価値は「新しいカートだから」ではなく、**商品を見つけた場所と販売店がバラバラでも、購入検討をGoogle上の一つの流れとして扱えること**にあります。

## まとめ｜Universal Cartはカートを「商品を入れる箱」からAIショッピングの拠点へ変える

Google Universal Cartは、SearchやGeminiなどで見つけた複数Merchantの商品を一つのカートへ集め、AIに価格・在庫・組み合わせまで見てもらえるShopping機能です。

商品を追加するとGeminiがBackgroundでDealやPrice Dropを探し、Price Historyを表示し、Restockを通知します。

自作PCのように複数商品を組み合わせる買い物では、Compatibilityを確認し、問題があればAlternativeを提案することもできます。

今後はYouTubeやGmailなどGoogleの他Serviceからも同じCartへ商品を追加する構想です。

その裏側を支えるのがUniversal Commerce Protocol、UCPです。

Universal CartがUser向けのShopping機能なのに対し、UCPはAI Agent、Google、Merchant、Payment ProviderなどがCommerceでやり取りするためのOpen Standardです。

対応MerchantではGoogle上でNative Checkoutへ進み、Google Payで購入できる仕組みもあります。対応していない場合はMerchant SiteへCartを引き渡して購入します。

2026年8月時点では展開はまだ段階的で、Universal Cartは米国のSearch・Geminiを中心にRollout中です。UCP Integrationも一部Merchantから始まっています。

そのため日本では、すでに一般利用できる完成済みServiceとして見るより、Google Shoppingがこれからどう変わるかを示す機能として捉える方が適切です。

Googleが目指しているのは、**検索して商品を見つけたあと各ECサイトへ移動するShoppingから、AIと相談し、候補をCartへ預け、買い時を待ち、そのまま購入するShoppingへ変えること**です。

Universal Cartは、その新しい買い物体験の中心になるカートです。
