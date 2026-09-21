const QUIZ_DATA = [
  {
    id: 1,
    section: "文字・語彙",
    type: "single",
    question: "あには バスで 会社に <u>通って</u> います。",
    options: ["むかって", "かよって", "わたって", "もどって"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 2,
    section: "文字・語彙",
    type: "single",
    question: "わたしと <u>弟</u> は よく にていると 言われる。",
    options: ["あに", "あね", "おとうと", "いもうと"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 3,
    section: "文字・語彙",
    type: "single",
    question: "山本さんは、3 時に、駅に <u>着く</u> よていです。",
    options: ["ちゃく", "とどく", "きく", "つく"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 4,
    section: "文字・語彙",
    type: "single",
    question: "わたしは <u>運転</u> した ことが ありません。",
    options: ["うんてん", "うんでん", "うんどう", "うんどん"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 5,
    section: "文字・語彙",
    type: "single",
    question: "ここは <u>空気</u> が わるいですね。",
    options: ["くき", "くうけ", "くうき", "くんき"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 6,
    section: "文字・語彙",
    type: "single",
    question: "しずかだが、<u>不便</u> な ところに ひっこして しまった。",
    options: ["ぶべん", "ふうびん", "ふうべん", "ふべん"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 7,
    section: "文字・語彙",
    type: "single",
    question: "いつも この 時間に なると <u>眠く</u> なる。",
    options: ["あさく", "ねむく", "ひどく", "まるく"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 8,
    section: "文字・語彙",
    type: "single",
    question: "あした 7 じに <u>おきる</u> つもりです。",
    options: ["起きる", "走きる", "屋きる", "着きる"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 9,
    section: "文字・語彙",
    type: "single",
    question: "この 病気の げんいん に ついて <u>けんきゅう</u> した。",
    options: ["剣究", "研究", "件究", "権究"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 10,
    section: "文字・語彙",
    type: "single",
    question: "学生りょうの <u>しょくどう</u> で パーティーを した。",
    options: ["食堂", "食同", "飯堂", "飯道"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 11,
    section: "文字・語彙",
    type: "single",
    question: "わたしの 父は <u>ひろしまけん</u> で 生まれた。",
    options: ["町", "市", "都", "県"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 12,
    section: "文字・語彙",
    type: "single",
    question: "冬に なって、<u>くらく</u> なるのが はやく なった。",
    options: ["暗く", "黒く", "夜く", "悪く"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 13,
    section: "文字・語彙",
    type: "single",
    question: "よる ひとりで くらい みちを あるくのは（　　　）だ。",
    options: ["しんせつ", "るす", "べんり", "きけん"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 14,
    section: "文字・語彙",
    type: "single",
    question: "駅を（　　　）右に まがって ください。",
    options: ["しめて", "はれて", "でて", "みがいて"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 15,
    section: "文字・語彙",
    type: "single",
    question: "かびんを こわして、父に（　　　）ました。",
    options: ["たおれられ", "まいられ", "うかがわれ", "しかられ"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 16,
    section: "文字・語彙",
    type: "single",
    question: "外から 見えないように、（　　　）を しめて ください。",
    options: ["テキスト", "セーター", "カーテン", "カレンダー"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 17,
    section: "文字・語彙",
    type: "single",
    question: "父が なくなったのは（　　　）でした。",
    options: ["おととし", "らいげつ", "こんや", "あさって"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 18,
    section: "文字・語彙",
    type: "single",
    question: "やせる ためには（　　　）した ほうが いいですよ。",
    options: ["うんてん", "うんどう", "りょこう", "りょかん"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 19,
    section: "文字・語彙",
    type: "single",
    question: "（　　　）しないで、たくさん 食べて ください。",
    options: ["いっぱい", "えんりょ", "きょうみ", "けいけん"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 20,
    section: "文字・語彙",
    type: "single",
    question: "「（　　　）山田さんを 見ませんね。」「そうですね。やめたの かもしれませんね。」",
    options: ["はっきり", "たいてい", "このごろ", "そろそろ"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 21,
    section: "文字・語彙",
    type: "single",
    question: "友だちの パーティーに しょうたい されました。",
    options: [
      "友だちは パーティーが 大すきです。",
      "友だちに パーティーに 来て もらいました。",
      "友だちから パーティーに 来て ください と言われました。",
      "友だちと パーティーに 行く つもりです。",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 22,
    section: "文字・語彙",
    type: "single",
    question: "山田さんは あしたまで るすです。",
    options: [
      "山田さんは あしたまで 家に いません。",
      "山田さんは あした ひっこします。",
      "山田さんは あした たいいんします。",
      "山田さんは あしたから にゅういんします。",
    ],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 23,
    section: "文字・語彙",
    type: "single",
    question: "かれの いけんは ただしいと おもいます。",
    options: [
      "かれの いけんは おかしいと おもいます。",
      "かれの いけんは おもしろいと おもいます。",
      "かれの いけんは まちがって いないと おもいます。",
      "かれの いけんは やくに たたないと おもいます。",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 24,
    section: "文字・語彙",
    type: "single",
    question: "電車が とうちゃく しました。",
    options: ["電車が でました。", "電車が つきました。", "電車に のりました。", "電車を おりました。"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 25,
    section: "文字・語彙",
    type: "single",
    question: "きょうみ",
    options: [
      "しけんの けっかが きょうみに なって、よく ねむれませんでした。",
      "わたしは 日本の れきしに きょうみが あります。",
      "ふるい かばんですが、きょうみが あるので、すてられません。",
      "わたしの きょうみは アニメを 見る ことです。",
    ],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 26,
    section: "文字・語彙",
    type: "single",
    question: "もどる",
    options: [
      "日が 西に もどって くらくなった。",
      "きのうの よる、おおさかから とうきょうに もどった。",
      "りょうりは のこさないで、口の 中に もどって ください。",
      "父は さいきん、前の かみが 頭の 上に むかって もどって います。",
    ],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 27,
    section: "文字・語彙",
    type: "single",
    question: "はずかしい",
    options: [
      "この 食べものは やくと はずかしくなります。",
      "あの 山に のぼると はずかしい 気持ちに なります。",
      "そんなに ほめられると はずかしいです。",
      "今日の 天気は とても はずかしいです。",
    ],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 28,
    section: "文字・語彙",
    type: "single",
    question: "まず",
    options: [
      "まず、牛肉を この 中に 入れて ください。そして、やさいを 入れて ください。",
      "長い 時間を かけて 書いた レポートは まずだった。",
      "この ほしは まず 明るく なって います。",
      "今週と 来週は まずなので、さらいしゅうに して ください。",
    ],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 29,
    section: "文法",
    type: "single",
    question: "「リーさんは（　　　）アルバイトを 見つけたんですか。」\n「友達に 紹介して もらったんです。」",
    options: ["どうやって", "どうして", "どんな", "どういう"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 30,
    section: "文法",
    type: "single",
    question: "わたしは 大学を 出たら、大きい 会社に 入って、家族（　　　）安心させたい。",
    options: ["が", "と", "で", "を"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 31,
    section: "文法",
    type: "single",
    question: "「はい、一週間 かかりましたが、きのうの 夜、（　　　）終わりました。」",
    options: ["やっと", "ずっと", "もっと", "きっと"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 32,
    section: "文法",
    type: "single",
    question: "暗く なると こわいから、明るい（　　　）、帰りましょう。",
    options: ["ので", "うちに", "ために", "まで"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 33,
    section: "文法",
    type: "single",
    question: "かべに 「禁煙」（　　　）書かれて います。",
    options: ["が", "と", "を", "で"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 34,
    section: "文法",
    type: "single",
    question: "あの えいがは 見なくても（　　　）だろうと 思います。",
    options: ["かなしく", "かなしい", "かなしくて", "かなしいと"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 35,
    section: "文法",
    type: "single",
    question: "会社に 行く（　　　）、忘れ物に 気が つきました。",
    options: ["とちゅうで", "あいだ", "から", "あとで"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 36,
    section: "文法",
    type: "single",
    question: "あの 橋（　　　）渡って 少し行くと、公園が あります。",
    options: ["を", "が", "の", "で"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 37,
    section: "文法",
    type: "single",
    question: "そこの ソファー（　　　）かけて おまちください。",
    options: ["で", "に", "へ", "が"],
    answer: 2,
    passage: null,
    note: null,
  },
  {
    id: 38,
    section: "文法",
    type: "single",
    question: "この つくえは 木（　　　）作られます。",
    options: ["で", "にも", "まで", "ほど"],
    answer: 1,
    passage: null,
    note: null,
  },
  {
    id: 39,
    section: "文法",
    type: "single",
    question: "こんどの 日よう日は（　　　）かもしれません。",
    options: ["ひまだ", "ひまです", "ひま", "ひまな"],
    answer: 4,
    passage: null,
    note: null,
  },
  {
    id: 40,
    section: "文法",
    type: "single",
    question: "北海道の おばあちゃんから メロンを 送って（　　　）。",
    options: ["はずだ", "もらった", "くれた", "やった"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 41,
    section: "文法",
    type: "single",
    question: "この 仕事、明日までに できるか（　　　）わからない。",
    options: ["どうして", "どうにか", "どうか", "どっちか"],
    answer: 3,
    passage: null,
    note: null,
  },
  {
    id: 42,
    section: "文法",
    type: "single",
    question: "うちの子は、＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ しない。",
    options: ["見て", "テレビ", "勉強", "ばかり"],
    answer: 4,
    passage: null,
    note: "★の位置に入る語を選択",
  },
  {
    id: 43,
    section: "文法",
    type: "single",
    question: "A「コンサートには もう 間に合わないですね。」\nB「今すぐ ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ 行こう。」",
    options: ["タクシーに", "タクシーで", "間に合うかもしれないから", "乗れば"],
    answer: 3,
    passage: null,
    note: "★の位置に入る語を選択",
  },
  {
    id: 44,
    section: "文法",
    type: "single",
    question: "カルロスは ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ はずがないよ。",
    options: ["遅れる", "サッカーが", "試合に", "大好きだから"],
    answer: 3,
    passage: null,
    note: "★の位置に入る語を選択",
  },
  {
    id: 45,
    section: "文法",
    type: "single",
    question: "ビザが ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ を します。",
    options: ["予約", "来週", "飛行機の", "降りたら"],
    answer: 4,
    passage: null,
    note: "★の位置に入る語を選択",
  },
  {
    id: 46,
    section: "読解",
    type: "single",
    question: "18．文章の（18）に入るものはどれですか。",
    options: ["は", "しか", "が", "だけ"],
    answer: 2,
    passage:
      "日本に 来る 前、私は 一人で いるのが 好きでした。でも、今は ともだちと いる\n時間を とても 大切に しています。なぜなら、ともだちと いると、いろいろな 経験が\nできるから。\n\n私は 大学の 寮に 住んで います。寮には いろいろな 国からの 留学生が 住んで\nいますが、ベトナム人は 一人（18）いません。日本に 来た ばかりの ころは、とき\nどき 寂しく なることも ありましたが、寮の ともだちが 食事や 旅行に よく（19）から、\n今は あまり 寂しく ありません。私は ともだちに 誘われたら、（20）行くように\nして います。日本語の 会話の 練習にもなるし、いろいろな 考え方を 知ることも\nできるからです。\n\nたしかに 一人で いる 時間も 大切ですが、私は今、ともだちと いっしょに いる 時間を\n（21）。これからも ともだちと いろいろな 経験を したいと 思います。",
    note: null,
  },
  {
    id: 47,
    section: "読解",
    type: "single",
    question: "19．文章の（19）に入るものはどれですか。",
    options: ["誘って くれます", "誘って もらいます", "誘われます", "誘わせます"],
    answer: 3,
    passage:
      "日本に 来る 前、私は 一人で いるのが 好きでした。でも、今は ともだちと いる\n時間を とても 大切に しています。なぜなら、ともだちと いると、いろいろな 経験が\nできるから。\n\n私は 大学の 寮に 住んで います。寮には いろいろな 国からの 留学生が 住んで\nいますが、ベトナム人は 一人（18）いません。日本に 来た ばかりの ころは、とき\nどき 寂しく なることも ありましたが、寮の ともだちが 食事や 旅行に よく（19）から、\n今は あまり 寂しく ありません。私は ともだちに 誘われたら、（20）行くように\nして います。日本語の 会話の 練習にもなるし、いろいろな 考え方を 知ることも\nできるからです。\n\nたしかに 一人で いる 時間も 大切ですが、私は今、ともだちと いっしょに いる 時間を\n（21）。これからも ともだちと いろいろな 経験を したいと 思います。",
    note: null,
  },
  {
    id: 48,
    section: "読解",
    type: "single",
    question: "20．文章の（20）に入るものはどれですか。",
    options: ["なかなか", "とても", "できるだけ", "ずっと"],
    answer: 3,
    passage:
      "日本に 来る 前、私は 一人で いるのが 好きでした。でも、今は ともだちと いる\n時間を とても 大切に しています。なぜなら、ともだちと いると、いろいろな 経験が\nできるから。\n\n私は 大学の 寮に 住んで います。寮には いろいろな 国からの 留学生が 住んで\nいますが、ベトナム人は 一人（18）いません。日本に 来た ばかりの ころは、とき\nどき 寂しく なることも ありましたが、寮の ともだちが 食事や 旅行に よく（19）から、\n今は あまり 寂しく ありません。私は ともだちに 誘われたら、（20）行くように\nして います。日本語の 会話の 練習にもなるし、いろいろな 考え方を 知ることも\nできるからです。\n\nたしかに 一人で いる 時間も 大切ですが、私は今、ともだちと いっしょに いる 時間を\n（21）。これからも ともだちと いろいろな 経験を したいと 思います。",
    note: null,
  },
  {
    id: 49,
    section: "読解",
    type: "single",
    question: "21．文章の（21）に入るものはどれですか。",
    options: ["楽しいです", "楽しみに しました", "楽しかったようです", "楽しんで います"],
    answer: 4,
    passage:
      "日本に 来る 前、私は 一人で いるのが 好きでした。でも、今は ともだちと いる\n時間を とても 大切に しています。なぜなら、ともだちと いると、いろいろな 経験が\nできるから。\n\n私は 大学の 寮に 住んで います。寮には いろいろな 国からの 留学生が 住んで\nいますが、ベトナム人は 一人（18）いません。日本に 来た ばかりの ころは、とき\nどき 寂しく なることも ありましたが、寮の ともだちが 食事や 旅行に よく（19）から、\n今は あまり 寂しく ありません。私は ともだちに 誘われたら、（20）行くように\nして います。日本語の 会話の 練習にもなるし、いろいろな 考え方を 知ることも\nできるからです。\n\nたしかに 一人で いる 時間も 大切ですが、私は今、ともだちと いっしょに いる 時間を\n（21）。これからも ともだちと いろいろな 経験を したいと 思います。",
    note: null,
  },
  {
    id: 50,
    section: "読解",
    type: "single",
    question: "22．この 病院に ついて、正しいものは どれですか。",
    options: [
      "木曜日に 病院に 行きたい人は、予約を しなくても いいです。",
      "日曜日に 病院に 行きたい人は、予約を しなくても いいです。",
      "熱が ある人は、インターネットで 予約を してから 行かなければ いけません。",
      "人が 多いとき、電話を すれば、ほかの 人とは 別の 部屋で 受付が できます。",
    ],
    answer: 1,
    passage:
      "山川病院からの お知らせ\n\n土曜日と 日曜日に 病院に 来る人は、電話か インターネットで 予約を してください。\n月曜日から 金曜日までは、予約を しないで 来ても いいですが、人が 多いときは、\n受付まで 時間が かかることが あります。\n熱が ある人は、ほかの 人とは 別の 部屋で 受付を します。病院に 来る 前に 電話を\nしてください。\n\n山川病院",
    note: null,
  },
  {
    id: 51,
    section: "読解",
    type: "single",
    question:
      "23．山田さんは、大きい ふうとう 5セットと、小さい ふうとう 2セットを 買いたいです。いくらに なりますか。",
    options: ["2500 円", "2790 円", "2850 円", "3100 円"],
    answer: 3,
    passage:
      "To：山田さま\nFrom：スククル営業部\n\nこんにちは。きのうはメール、ありがとうございました。\nふうとうの ねだんと、わり引きに ついて、お答えします。\n大きい ふうとうは 1セット 100まいで 500円、小さい ふうとうは 1セット 200まいで\n300円です。わり引きですが、どちらも、5セット以上、買って いただくと 10パーセント\nわり引きに なります。大きい ふうとうと 小さい ふうとうを いっしょに して 5セットに\nなっても、安く なりませんので、ご注意 ください。",
    note: null,
  },
  {
    id: 52,
    section: "読解",
    type: "single",
    question: "24．いい会社を 作るには、どの ような人が ひつようですか。",
    options: [
      "バリバリ型の 人と コツコツ型の 人",
      "おもしろい タイプの人",
      "バリバリ型の 人だけ",
      "同じタイプの 人だけ",
    ],
    answer: 1,
    passage:
      "仕事の やり方は みんな ちがいます。会社には バリバリ型と コツコツ型の\nどちらの タイプの 人が ひつようなの でしょうか。いつも わらって、いっしょうけんめい バリ\nバリ がんばる人が いると、会社が 明るく なるから、バリバリ型の 人は とても 大切です。\nでも、会社は おもしろい ところで、同じタイプの 人だけが 集まっても、いい会社はできません。\nだから、何も 言わないで 一人で しずかに コツコツ 仕事を する人も 大切に しなければ\nなりません。",
    note: null,
  },
  {
    id: 53,
    section: "読解",
    type: "single",
    question: "25．やさしい 日本語劇を 見る前、「私」は 日本の 劇に ついて どう思って いましたか。",
    options: [
      "日本語が わからなくても、劇は 楽しいと 思って いました。",
      "日本語が わからないと、劇は むずかしいと 思って いました。",
      "劇に 出て くる 人は 大きい声で 話すので、大きい声で 笑って もいいと思って いました。",
      "日本の 大切な 文化なので、劇で 笑っては いけないと 思って いました。",
    ],
    answer: 2,
    passage:
      "やさしい 日本語劇を 見たことが ありますか。私は 先週、初めて 見ました。それ まで、\n日本の 劇は 日本語が わからないと 難しいと 思って いましたが、外国の 人もみんな、\n大きな 声で 笑って いました。私も 劇が あんなに おもしろいなんて 思いませんでした。\n\nふつうの 劇では、話や 人の 説明が ありません。でも、やさしい 日本語劇では、劇が\n始まる 前に、場所や 人に ついて、外国の 人でも わかる、かんたんな ことばで 説明して\nくれます。それに、劇に 出て くる 人が 話すことばも、とても かんたんな 日本語で わかり\nやすいです。\n\nやさしい 日本語劇を 見たあと、私も やさしい 日本語劇を やって みたいと 思いました。\n劇を するのは 緊張しますが、見て いる人が 私の 劇で 笑ったり 泣いたりして くれたら\nいいなと 思います。日本語が うまく 話せなくても、見て いる人が 笑って くれたら、\n伝わったことが わかって、自信が 持てるでしょう。日本語の 勉強にも なるし、楽しく 練習\nできそうなので、やさしい 日本語劇を やって みたいです。",
    note: null,
  },
  {
    id: 54,
    section: "読解",
    type: "single",
    question: "26．やさしい 日本語劇に ついて、合って いるものは どれですか。",
    options: [
      "劇の 中で、話や 人の 説明を します。",
      "短い ことばで、話や 人の 説明を します。",
      "劇が 始まる 前に、外国の ことばで 説明を します。",
      "劇が 始まる 前に、かんたんな 日本語で 説明を します。",
    ],
    answer: 4,
    passage:
      "やさしい 日本語劇を 見たことが ありますか。私は 先週、初めて 見ました。それ まで、\n日本の 劇は 日本語が わからないと 難しいと 思って いましたが、外国の 人もみんな、\n大きな 声で 笑って いました。私も 劇が あんなに おもしろいなんて 思いませんでした。\n\nふつうの 劇では、話や 人の 説明が ありません。でも、やさしい 日本語劇では、劇が\n始まる 前に、場所や 人に ついて、外国の 人でも わかる、かんたんな ことばで 説明して\nくれます。それに、劇に 出て くる 人が 話すことばも、とても かんたんな 日本語で わかり\nやすいです。\n\nやさしい 日本語劇を 見たあと、私も やさしい 日本語劇を やって みたいと 思いました。\n劇を するのは 緊張しますが、見て いる人が 私の 劇で 笑ったり 泣いたりして くれたら\nいいなと 思います。日本語が うまく 話せなくても、見て いる人が 笑って くれたら、\n伝わったことが わかって、自信が 持てるでしょう。日本語の 勉強にも なるし、楽しく 練習\nできそうなので、やさしい 日本語劇を やって みたいです。",
    note: null,
  },
  {
    id: 55,
    section: "読解",
    type: "single",
    question: "27．なぜ やさしい 日本語劇を やって みたいと 思いましたか。",
    options: [
      "日本語を 楽しく 練習できるから",
      "緊張することを やって みたいから",
      "見て いる人が 笑うと、上手に 話せるから",
      "日本語で 話を 伝える 自信が あるから",
    ],
    answer: 1,
    passage:
      "やさしい 日本語劇を 見たことが ありますか。私は 先週、初めて 見ました。それ まで、\n日本の 劇は 日本語が わからないと 難しいと 思って いましたが、外国の 人もみんな、\n大きな 声で 笑って いました。私も 劇が あんなに おもしろいなんて 思いませんでした。\n\nふつうの 劇では、話や 人の 説明が ありません。でも、やさしい 日本語劇では、劇が\n始まる 前に、場所や 人に ついて、外国の 人でも わかる、かんたんな ことばで 説明して\nくれます。それに、劇に 出て くる 人が 話すことばも、とても かんたんな 日本語で わかり\nやすいです。\n\nやさしい 日本語劇を 見たあと、私も やさしい 日本語劇を やって みたいと 思いました。\n劇を するのは 緊張しますが、見て いる人が 私の 劇で 笑ったり 泣いたりして くれたら\nいいなと 思います。日本語が うまく 話せなくても、見て いる人が 笑って くれたら、\n伝わったことが わかって、自信が 持てるでしょう。日本語の 勉強にも なるし、楽しく 練習\nできそうなので、やさしい 日本語劇を やって みたいです。",
    note: null,
  },
  {
    id: 56,
    section: "読解",
    type: "single",
    question:
      "28．大学生の 山田さん（男）は 月よう日に、エリカさん（女）と 映画を 見に 行きます。また、月よう日は エリカさんの たんじょうびです。いくら はらいますか。",
    options: ["1900 円", "2000 円", "2400 円", "2500 円"],
    answer: 1,
    passage:
      "映画は やっぱり 大きな スクリーンで 見ることですよね？\n映画は 高くて…？いいえ、そんなこと ありません。\nお得な わりびきを うまく使って、大スクリーンで 映画を おたのしみください！\n\n当日料金\nおとな 1,800 円\n大学・高校生 1,500 円\n中学・小学・60才以上 1,000 円\n子ども（3才以下）900 円\n※学生わりびきには かならず 学生証が 必要です。\n\nサービスデー\n・毎月1日は、映画の日。すべての 方は 1,000 円\n・毎週月よう日は、メンズデー。男性の 方は 1,000 円\n・毎週水よう日は、レディースデー。女性の 方は 1,000 円\n\nあなたのたんじょうび\n・ご自分の たんじょうびに、いらっしゃった お客様は 900 円。\n※たんじょうびを 証明できる ものが 必要。",
    note: null,
  },
  {
    id: 57,
    section: "読解",
    type: "single",
    question:
      "29．9月1日（木）に 父、母、大学に かよって いる いもうとと 私（会社員）が 映画を 見に 行きます。いくら はらいますか。",
    options: ["3600 円", "4000 円", "6600 円", "6900 円"],
    answer: 2,
    passage:
      "映画は やっぱり 大きな スクリーンで 見ることですよね？\n映画は 高くて…？いいえ、そんなこと ありません。\nお得な わりびきを うまく使って、大スクリーンで 映画を おたのしみください！\n\n当日料金\nおとな 1,800 円\n大学・高校生 1,500 円\n中学・小学・60才以上 1,000 円\n子ども（3才以下）900 円\n※学生わりびきには かならず 学生証が 必要です。\n\nサービスデー\n・毎月1日は、映画の日。すべての 方は 1,000 円\n・毎週月よう日は、メンズデー。男性の 方は 1,000 円\n・毎週水よう日は、レディースデー。女性の 方は 1,000 円\n\nあなたのたんじょうび\n・ご自分の たんじょうびに、いらっしゃった お客様は 900 円。\n※たんじょうびを 証明できる ものが 必要。",
    note: null,
  },
  {
    id: 58,
    section: "聴解",
    type: "single",
    question: "1番  đề bài",
    options: ["Đáp án 1 ", "Đáp án 2 ", "Đáp án 3 ", "Đáp án 4 "],
    answer: 1,
    passage: `<img class="img" src="images/1.png" alt="Đề bài 1">`,
    note: "",
  },
  {
    id: 59,
    section: "聴解",
    type: "single",
    question: "2番  đề bài",
    options: ["Đáp án 1 ", "Đáp án 2 ", "Đáp án 3 ", "Đáp án 4 "],
    answer: 1,
    passage: `<img class="img" src="images/2.png" alt="Đề bài 2">`,
    note: "",
  },
  {
    id: 60,
    section: "聴解",
    type: "single",
    question: "3番 ",
    options: ["男の人と 会社へ 行く", "一人で 会社へ 行く", "男の人と 家へ もどる", "一人で 家へ もどる"],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 61,
    section: "聴解",
    type: "single",
    question: "4番 ",
    options: ["3時30分", "3時40分", "3時50分", "4時"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 62,
    section: "聴解",
    type: "single",
    question: "5番 ",
    options: [
      "女の人と 部屋の そうじを する",
      "一人で 部屋の そうじを する",
      "女の人と 山へ 行って きてから 部屋の そうじを する",
      "女の人と 田舎へ 行く",
    ],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 63,
    section: "聴解",
    type: "single",
    question: "6番 ",
    options: ["50円", "100円", "150円", "250円"],
    answer: 3,
    passage: null,
    note: "",
  },
  {
    id: 64,
    section: "聴解",
    type: "single",
    question: "7番 ",
    options: ["ミルクも さとうも 入れる", "ミルクも さとうも 入れない", "さとうだけ 入れる", "ミルクだけ 入れる"],
    answer: 3,
    passage: null,
    note: "",
  },
  {
    id: 65,
    section: "聴解",
    type: "single",
    question: "8番 ",
    options: [
      "男の人と 親と 仕事を する",
      "男の人と 親と 映画を 見る",
      "男の人と 親と 会議を する",
      "男の人と 親と 食事を する",
    ],
    answer: 4,
    passage: null,
    note: "",
  },
  {
    id: 66,
    section: "聴解",
    type: "single",
    question: "もんだい2・1番 ",
    options: ["お金の ことで", "車が 古いから", "友だちの 車だから", "車が ないから"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 67,
    section: "聴解",
    type: "single",
    question: "もんだい2・2番 ",
    options: ["今日から 会社を 休む", "来週から 会社を 休む", "今日から 会社へ 行く", "来週から 会社へ 行く"],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 68,
    section: "聴解",
    type: "single",
    question: "もんだい2・3番  đề bài",
    options: ["選択肢1 ", "選択肢2 ", "選択肢3 ", "選択肢4 "],
    answer: 2,
    passage: `<img class="img" src="images/3.png" alt="Đề bài 3">`,
    note: "",
  },
  {
    id: 69,
    section: "聴解",
    type: "single",
    question: "もんだい2・4番 ",
    options: ["ミルクと 合わないから", "好きじゃ ないから", "医者に 言われたから", "ジュースが 飲みたいから"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 70,
    section: "聴解",
    type: "single",
    question: "もんだい2・5番 ",
    options: ["じゃまだから", "ほかに 待って いる人が いるから", "人が たくさん いるから", "あぶないから"],
    answer: 4,
    passage: null,
    note: "",
  },
  {
    id: 71,
    section: "聴解",
    type: "single",
    question: "もんだい2・6番 ",
    options: [
      "のどが かわいて いなかったから",
      "水が つめたかったから",
      "そのまま 飲むのが こわかったから",
      "おいしく なかったから",
    ],
    answer: 3,
    passage: null,
    note: "",
  },
  {
    id: 72,
    section: "聴解",
    type: "single",
    question: "もんだい2・7番 ",
    options: ["あつい 外国語の じしょ", "かるい 外国語の じしょ", "あつい 国語じしょ", "かるい 国語じしょ"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 73,
    section: "聴解",
    type: "single",
    question: "もんだい3・1番  đề bài",
    options: ["お先に失礼します。", "お休みなさい。", "おじゃましました。"],
    answer: 2,
    passage: `<img class="img" src="images/4.png" alt="Đề bài 4">`,
    note: "",
  },
  {
    id: 74,
    section: "聴解",
    type: "single",
    question: "もんだい3・2番  đề bài",
    options: ["いつ病院へ行くの？", "大丈夫なの？", "お元気？"],
    answer: 2,
    passage: `<img class="img" src="images/5.png" alt="Đề bài 5">`,
    note: "",
  },
  {
    id: 75,
    section: "聴解",
    type: "single",
    question: "もんだい3・3番  đề bài",
    options: ["遅くなってすみません。", "授業が始まったんですか。", "もっとがんばります。"],
    answer: 2,
    passage: `<img class="img" src="images/6.png" alt="Đề bài 6">`,
    note: "",
  },
  {
    id: 76,
    section: "聴解",
    type: "single",
    question: "もんだい3・4番  đề bài",
    options: [
      "先生、明日行ってもいいですか。",
      "先生、教えてくれてありがとうございます。",
      "先生、お聞きしたいことがありますが。",
    ],
    answer: 3,
    passage: `<img class="img" src="images/7.png" alt="Đề bài 7">`,
    note: "",
  },
  {
    id: 77,
    section: "聴解",
    type: "single",
    question: "もんだい3・5番  đề bài",
    options: [
      "すみません。そこまではよく分かりません。",
      "すみません。この郵便局へはどうやって行きますか。",
      "すみません。もう一度言ってください。",
    ],
    answer: 2,
    passage: `<img class="img" src="images/8.png" alt="Đề bài 8">`,
    note: "",
  },
  {
    id: 78,
    section: "聴解",
    type: "single",
    question: "もんだい4・1番 ",
    options: ["早く着てみたいです。", "ブザーがなります。", "青いほうが好きです。"],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 79,
    section: "聴解",
    type: "single",
    question: "もんだい4・2番 ",
    options: ["アイスコーヒーをください。", "寝る前に紅茶を飲みました。", "のどがかわきました。"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 80,
    section: "聴解",
    type: "single",
    question: "もんだい4・3番 ",
    options: ["いいえ、言いませんでした。", "ええ、昨日のことでしかられました。", "ええ、全部言いました。"],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 81,
    section: "聴解",
    type: "single",
    question: "もんだい4・4番 ",
    options: ["ええ、先生からうかがいました。", "ええ、拝見しました。", "いいえ、まだご覧していません。"],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 82,
    section: "聴解",
    type: "single",
    question: "もんだい4・5番 ",
    options: ["はい、日本人です。", "はい、学生です。", "はい、会社員です。"],
    answer: 2,
    passage: null,
    note: "",
  },
  {
    id: 83,
    section: "聴解",
    type: "single",
    question: "もんだい4・6番 ",
    options: ["3時間勉強しました。", "はい、勉強しました。", "2時から勉強しました。"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 84,
    section: "聴解",
    type: "single",
    question: "もんだい4・7番 ",
    options: ["ええ、休みましょう。", "ええ、休みました。", "ええ、休みません。"],
    answer: 1,
    passage: null,
    note: "",
  },
  {
    id: 85,
    section: "聴解",
    type: "single",
    question: "もんだい4・8番 ",
    options: ["いいえ、ちがいます。", "はい、イさんのです。", "あの青いのです。"],
    answer: 3,
    passage: null,
    note: "",
  },
];

let current = 0;
let activeFilter = "all";
let submitted = false;
let answers = {};
let checked = {};
const data = QUIZ_DATA;

const quiz = document.getElementById("quiz");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultModal = document.getElementById("resultModal");
const score = document.getElementById("score");
const scoreText = document.getElementById("scoreText");

const letters = ["A", "B", "C", "D"];

function filtered() {
  return activeFilter === "all" ? data : data.filter((q) => q.section === activeFilter);
}
function esc(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function render() {
  const list = filtered();
  if (current >= list.length) current = list.length - 1;
  const q = list[current];
  const answered = answers[q.id];

  const sectionNames = {
    "文字・語彙": "文字・語彙",
    文法: "文法",
    読解: "読解",
    聴解: "聴解",
  };

  const isListening = q.section === "聴解";
  const devBox = isListening ? `<div class="dev-box">🎧 ${esc(q.note || "")}</div>` : "";

  const passage = q.passage ? `<div class="passage">${q.passage}</div>` : "";

  const revealed = submitted || Boolean(checked[q.id]);

  const opts = q.options
    .map((opt, i) => {
      let cls = "option";
      if (answered === i + 1) cls += " selected";
      if (revealed && i + 1 === q.answer) cls += " correct";
      if (revealed && answered === i + 1 && answered !== q.answer) cls += " wrong";
      return `<button class="${cls}" data-choice="${i + 1}">
      <span class="opt-letter">${letters[i]}</span>
      <span class="option-text">${opt}</span>
    </button>`;
    })
    .join("");

  quiz.innerHTML = `
    <article class="question-card">
      <div class="meta"><span class="badge">${sectionNames[q.section]}</span><span class="q-number">Câu ${current + 1} / ${list.length}</span></div>
      ${devBox}
      ${passage}
      <h1 class="question">${q.question}</h1>
      <div class="options">${opts}</div>
      ${revealed ? `<div class="explain">${answered === q.answer ? "✓ Chính xác" : `✗ Đáp án đúng: ${letters[q.answer - 1]}`}</div>` : ""}
    </article>`;

  quiz.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (submitted) return;
      answers[q.id] = Number(btn.dataset.choice);
      checked[q.id] = true;
      render();
    });
  });

  progressText.textContent = `${current + 1} / ${list.length}`;
  progressBar.style.width = `${((current + 1) / list.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.classList.toggle("hidden", current === list.length - 1);
  submitBtn.classList.toggle("hidden", current !== list.length - 1 || submitted);
}

function setFilter(filter) {
  activeFilter = filter;
  current = 0;
  document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b.dataset.filter === filter));
  render();
}

document
  .querySelectorAll(".filter")
  .forEach((btn) => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    render();
  }
});
nextBtn.addEventListener("click", () => {
  const list = filtered();
  if (current < list.length - 1) {
    current++;
    render();
  }
});

submitBtn.addEventListener("click", () => {
  submitted = true;
  const list = filtered();
  let correct = 0;
  list.forEach((q) => {
    if (answers[q.id] === q.answer) correct++;
  });
  score.textContent = `${correct} / ${list.length}`;
  scoreText.textContent = `Bạn đã trả lời ${Object.keys(answers).filter((id) => list.some((q) => q.id == id)).length}/${list.length} câu.`;
  resultModal.classList.remove("hidden");
  render();
});

document.getElementById("closeModal").addEventListener("click", () => resultModal.classList.add("hidden"));
document.getElementById("reviewBtn").addEventListener("click", () => resultModal.classList.add("hidden"));

document.getElementById("countAll").textContent = data.length;
render();
