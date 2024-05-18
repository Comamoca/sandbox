<div align="center">

# single-binary-benchmark

<br>
<br>

</div>

<div align="center">

</div>

## 🚀 How to use

### Requires

- [deno](https://deno.com/)
- [bun](https://bun.sh/)
- [go](https://go.dev/)
- [hyperfine](https://github.com/sharkdp/hyperfine)

### Task dependencies

Task dependencies is below. under task depends on the top task.

- build 
- benck 
- report

### Run task

> [!NOTE]
> Output `report.md` file in current directory when you run `deno task all` or `deno task report`.

Use `deno task`

```sh
# run all task.
deno task all 

# only run build.
deno run build

# show other tasks
deno task
```

## 📝 Todo

- [ ] Add Bash benchmark.

## 📜 License

MIT

### 🧩 Modules

- [dax](https://jsr.io/@david/dax)

## 💕 Special Thanks

- [hyperfine](https://github.com/sharkdp/hyperfine)
