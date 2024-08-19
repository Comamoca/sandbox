<div align="center">

<img src="https://emoji2svg.deno.dev/api/🦊" alt="eyecatch" height="100">

# racket-http-get

Example of send get request and parse returned json on Racket.

<br>
<br>


</div>

<div align="center">

</div>

## 🚀 How to use

By default, this program show weather forecast at Tokyo.
If you want to show other area forecast, can specify area code at command line argument.
Area code data is [here](https://zenn.dev/inoue2002/articles/2e07da8d0ca9ca) (JP text). 

```sh
racket ./main.rkt
racket ./main.rkt 474000

# with docker
docker build . -t racket-http-get
docker run --rm racket-native
docker run --rm -t racket-http-get:latest 474000
```
