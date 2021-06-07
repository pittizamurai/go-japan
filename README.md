![トップページ確認用](https://user-images.githubusercontent.com/71650013/120915885-40adb800-c6e1-11eb-81ae-5be31738c111.jpg)

## 追記　2021/06/07
詳細ページにて崩れが発生しているため、修正対応中

## 注意点
API制限により、スポット詳細ページ（/city/_id）において、APIが取得できない場合があります。

## アプリケーション名
### GO JAPAN
### URL： https://gojapan.herokuapp.com/

## 使用技術（開発環境）
- Nuxt.js / Vue.js
- HTML / Scss
- 外部API： Foursquare,OpenWeather
- デプロイ： heroku

## 概要
- 日本に初めて訪れる外国人観光客にむけておすすめスポットを紹介する
- 人気スポットを対象エリアから検索できる
- 対象エリアの直近8日間の天気予報がわかる

## UI/UXのこだわり

### 1, 最低限のアクションで知りたい情報が取得できる
なにかを調べるときに必要なアクションが多いと億劫になるため考慮しました。

具体的には

- 階層を浅く
- ハンバーガーメニューを使わない
- クリックできる箇所をわかりやすく

### 2, 画像を多様し、旅行のイメージを掻き立てる
自身も海外・国内旅行が好きで行き先を調べるときは、画像を見て興味があれば深堀りしていく方法のため。

- 画像を多用（ピンタレスト風）


## 工夫した点
- UI/UXのこだわり
- DX(Developer Experience)の意識

具体的には
- 動的ルーティングを使用
- コンポーネント化を積極的に

を行うことにより、運用・保守をスムーズにできるよう開発

## 実装したかったが、できなかったこと
- 都市ごとのおすすめスポットページでの画像一覧表示（API制限のため不可？）
- スポット詳細ページでの画像一覧（API制限のため不可？）


## 今後実装したいこと
- カテゴリー、エリアなどで絞り込み
- 上記、ピンタレスト風写真一覧


※ピンタレスト風写真一覧参考（取得したjsonをDLし、読み込みしました）
![pinterest風](https://user-images.githubusercontent.com/71650013/120915916-78b4fb00-c6e1-11eb-805c-1bb82fb5b632.png)


## 課題
- さらなるDX向上のためのコンポーネント化の知識
- API取得についての知識

## 所感
つまるところがあり、難航しましたが、開発をすすめる中で新たな知識を学ぶことができ、
非常に楽しく開発することができました。
また普段何気なく、利用しているサービスのすごさに改めて気付きました。
今後、様々なアプリケーションを体験し、自身での開発にも取り入れていこうと思いました。


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
