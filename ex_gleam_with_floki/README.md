# ex_gleam_with_floki

Gleam with [Floki](https://hexdocs.pm/floki/readme.html) example.

```sh
mix deps.get

iex -S mix

# try run
# ExGleamWithFloki.main
```

on docker

```
docker build -t ex_gleam_with_floki .
docker run --rm -it ex_gleam_with_floki:latest

# iex> ExGleamWithFloki.main
# iex> :ex_gleam_with_floki.main
```
