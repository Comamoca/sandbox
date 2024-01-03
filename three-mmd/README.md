<div align="center">

<img src="https://emoji2svg.deno.dev/api/🦊" alt="eyecatch" height="100">

# three-mmd

The threejs example to load MMD model

<br>
<br>


</div>

<table>
  <thead>
    <tr>
      <th style="text-align:center">🍔English text only</th>
    </tr>
  </thead>
</table>

<div align="center">

</div>

## 🚀 How to use

This example using bun. Maybe can use node.js too.

First, download to model and moation data.  
to download model data site is [here](https://3d.nicovideo.jp/works/td84835).

Second, you have to download moation data.  
to download moation data site is [here](https://bowlroll.net/file/303942).

Then you place the files that downloaded just now, like this.(program files are omission)

```
.
├── model
│   └── KazamaIroha
│       ├── KazamaIroha.pmx <- use this file
│       ├── KazamaIroha_haorioff.pmx
│       ├── TX_Iroha_Body.png
│       ├── TX_Iroha_Chakimaru.png
│       ├── TX_Iroha_Eye_Parts.png
│       ├── TX_Iroha_Eyes.png
│       ├── TX_Iroha_Face.png
│       ├── TX_Iroha_Hair.png
│       ├── TX_Iroha_Hair_Acce.png
│       ├── TX_Iroha_Hair_Pony.png
│       ├── TX_Iroha_Hair_Shadow.png
│       ├── TX_Iroha_Hyojo.png
│       ├── TX_Iroha_Wear_Inner.png
│       ├── TX_Iroha_Wear_Inner_noshadow.png
│       └── TX_Iroha_Wear_Outer.png
└── vmd
    └── SOS
        ├── Readme.txt
        └── SOS_モーション.vmd <- use this file

```


```
bun i
bun run preview
# to access localhost:5173
```

## ⛏️   Development

```sh
bun run dev
```
## 📝 Todo

- [ ] add physics

## 📜 License

MIT

### 🧩 Modules

- [threejs](https://threejs.org/)
