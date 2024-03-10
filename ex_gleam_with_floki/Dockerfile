FROM ghcr.io/comamoca/gleam/gleam:latest

WORKDIR /app

COPY . .

RUN yes | mix archive.install hex mix_gleam
RUN mix deps.get

ENTRYPOINT ["iex", "-S", "mix"]
