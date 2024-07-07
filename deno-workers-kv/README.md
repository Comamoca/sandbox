<div align="center">

# deno-workers-kv

denoflare workers KV example.

<br>
<br>

</div>

<div align="center">

</div>

## 🚀 Set up

First, create file `.denoflare` it is denoflare configration.

```json:.denoflare
{
  "$schema": "https://raw.githubusercontent.com/skymethod/denoflare/v0.5.1/common/config.schema.json",
  "scripts": {
    "deno-workers-kv": {
      "path": "main.ts",  <- Entory point
      "bindings": {
        "MY_KV": {
          "kvNamespace": "<workers kv id>" <- KV ID
        }
      },
      "localPort": 8000
    }
  },
  "profiles": {
    "account1": {
      "accountId": "<ACCOUNT ID>", <- Your account id
      "apiToken": "<API TOKEN>" <- your account token
    }
  }
}
```

Run below command, to get workers kv id.

```sh
denoflare cfapi list-kv-namespaces
```

## ⛏️ Develop

```sh
deno task serve # launch server.
deno test       # run server test.
```
