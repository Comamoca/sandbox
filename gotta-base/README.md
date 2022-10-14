<div align="center">

# 🍢 gotta-base

簡易的なトランスパイラの開発基盤の試作

</div>

<table>
  <thead>
    <tr>
      <th style="text-align:center">🍡日本語</th>
      <th style="text-align:center">Japanease Only</th>
    </tr>
  </thead>
</table>

<div align="center">

</div>

## 🚀 使い方

```
go run .
```

### 入出力

main.goの以下の変数を変更する事で動作を指定する事ができます。

- filePath
読み込むファイルパス

- outPath
出力するファイルパス


### ファイル構成

`main.go`の`transpile`関数を変更する事でトランスパイルの動作を変更できます。
これらの関数は`rule.go`に記述されています。

- BashRule
Bashで記述されたプログラムを解釈するためのルールが書かれています。

- PyRule
Pythonで記述されたプログラムを解釈するためのルールが書かれています。

`pyPrint`や`consoleLog`はテンプレートから指定された構文に置き換える関数です。

## 📜 ライセンス

MIT
