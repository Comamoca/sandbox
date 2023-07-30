<div align="center">

<img src="https://emoji2svg.deno.dev/api/🦊" alt="eyecatch" height="100">

# VRChat OSCサンプル

VRChatへ一定間隔でOSCリクエストを送信するサンプルコードです。

<br>
<br>


</div>

<table>
  <thead>
    <tr>
      <th style="text-align:center">Japanease text only</th>
      <th style="text-align:center">🍡日本語</th>
    </tr>
  </thead>
</table>

<div align="center">

</div>

## 🚀 使い方

- [Deno](https://deno.land/manual@v1.35.3/getting_started/installation)をインストールします。
- このリポジトリをclone又はダウンロードします。
- **Windows上で**以下のコマンドを実行します。

```
deno run -A ./main.ts
```

自動で依存関係の処理が行われて実行されます。
VRChat上でOSCを有効にし、Debugを確認してみてください。一定時間で`clock`という値が送信されているのが確認できるはずです。

## 📜 ライセンス

MIT

### 🧩 モジュール

[node-osc](https://www.npmjs.com/package/node-osc)

## 📚 参考にしたサイト

- [VRChatでOSCパラメータの送受信を確認してみる](https://qiita.com/sakik/items/4bb4753e418e533c132c)
- [VRChatがOSCに対応したので、まずはNode.jsでアバターをジャンプさせてみた](https://zenn.dev/tkyko13/articles/0c16ea15530e6e#node.js%E3%81%A7%E9%80%9A%E4%BF%A1%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B)
