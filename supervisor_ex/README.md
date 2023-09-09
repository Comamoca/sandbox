# SupervisorEx

Elixirのスーパーバイザーのサンプル
ElixirのSupervisorとPlugを用いてフォールトトレランスなAPIサーバーを構築しています。

## 使い方

`iex -S mix`でプロジェクトが起動します。

以下のエンドポイントにアクセスするとそれぞれ次のような値が返されます。

- `http://localhost:4001/query?query={value}`

Yor query is {value}

- `http://localhost:4001/hello/{value}`

Hello! {value}

もしエラーが発生してもスーパーバイザーによって自動的に再起動されるので、その後また正しい値を指定して実行すると正常に応答が返ってくるはずです。

これがElixirの堅牢さを支える柱の１つ、OTPスーパーバイザーです。
これを使うことで多言語ではk8sなどで実現していたプロセス管理をシームレスに制御することができます。
