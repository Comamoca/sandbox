FROM ghcr.io/gleam-lang/gleam:v1.2.0-erlang as build

WORKDIR /work
COPY . .

RUN gleam clean
RUN gleam export erlang-shipment

# FROM erlang:27.0.0.0-slim
FROM hexpm/erlang:27.0-ubuntu-jammy-20240530

WORKDIR /app
COPY --from=build /work/build/erlang-shipment .

ENTRYPOINT ["./entrypoint.sh", "run"]
