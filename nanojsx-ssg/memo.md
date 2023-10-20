# nanojsx-ssg

DenoとNanoJSXで自分が欲しいSSG像をつかむために試作したSSG

## 使用技術

- Deno
- NanoJSX
- Twind

## なぜNanoJSXを採用したのか

SSR向けで軽量、ハイドレーションが可能なところに目を付け足。
また、以前簡単なHTMLを生成する際に使ったら案外よい感じだったのもある。

## 仕様

- Markdownサポート

いわずもがなMarkdownをサポートする。
この手のツールで多用されるFrontmatterも公式のライブラリを使って書けた。

HTMLに変換するライブラリにはMarkdown-itを採用した。特に理由はないけど、Zennも採用していたり、プラグインを作るための記事があったりして良さそう。
SSGと合わせて、生のリンク文字列をリンクカードにするMarkdown-itプラグインも公開したい。

- Tailwind CSS v3のフル機能をサポート

これはこちら側のサポートと言うよりTwind
v1のサポート。フル機能をサポートしているので、DaisyUIなども普通に使える。

他のCSSフレームワークに関しては、Static
Fileのサポートと合わせてなんやかんやしていきたい。
ただ、Reactに依存しているCSSフレームワーク（Chakura UI, MUI,
etc)などのサポートはちょっと厳しそう。
と考えていたけれど、わざわざReactのエコシステムをほっぽり出してまでNanoJSXに固執する理由もないので多分書き直す。

`ReactDOMServer.renderToString()`というNanoJSXの`renderSSR`的な関数があるのでそれで行けると思う。
https://zenn.dev/did0es/articles/b41d0de60934cc

実例もある。なんとハイドレーションも行けるらしい。

---

ReactのPartical
Hydrationについて調べてたのだけど、実装がかなり複雑になりそうで萎えている。
代わりにPartical Hydrationを諦めてQwikで実装するのもありかもしれない。..

そもそもDenoでQwikを動かすはおろか、最近Qwikを触ったという人がまるで居ない。期待はかなり薄そう。

もし仮に使えたとしてもReactベースのCSSフレームワークに関する問題は解決し無さそうですので、正直にごめんなさいするしか無さそう。

- ファイルベースのルーティンシステム

Lumeと同じファイルベースのルーティンシステムを備えている。
たとえば以下のようなディレクトリがあったとすると

```
.
├── base.html
├── blog
│   └── first-post.md
├── deno.jsonc
├── deno.lock
├── layout
│   └── layout.tsx
├── main.ts
├── memo.md
└── render.tsx
```

`/blog/first-post/`にアクセスすれば該当のページが表示される。

これを実装するには、

- ファイル名でディレクトリを作成
- レンダリング結果を`index.html`という名前で書き込み

この2つが必要になってくる。

- JSXの第一級サポート

NanoJSXをデフォルトで適用。JSXを使った開発をサポートする。

NanoJSXにはSSR向けのレンダリング関数があるのでそれを使用。
`deno.json`の設定も良い感じにできた。

- プラガブルなシステム

ユーザーがゴリゴリ処理を書けるSSGにしたいのでプラグインシステムを第一級でサポートしたい。

実装するには、Dynamic
Importとimportで取得したオブジェクトを実行するしくみがあれば行ける。

plugin.js

```js:plugin.js
export const layout = "layout.tsx"

export default function (// ここにプラグインに渡したいヘルパーなどを書く) {
    // なんやかんや
}
```

loader.js

```js:loader.js
const plug = await import("./plugin.js")

const layout = plug.layout

// プラグイン実行
plug.default()
```

検証完了した。結果は`tmp/`にて。

- ホットリロード

livereload.jsと`Deno.watchFs`を使うことで実装できそう。

## 読み込まれるファイル

- `*.tsx` or `*.jsx` デフォルトでサポートしているため読み込まれる
