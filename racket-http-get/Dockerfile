FROM racket/racket:8.9-full as build

WORKDIR /build

COPY . .
RUN raco pkg install --auto
RUN raco exe -o racket-http-get ./main.rkt && \
    raco dist dist racket-http-get

FROM gcr.io/distroless/base-debian12

WORKDIR /run
COPY --from=build /build/dist/ .

ENTRYPOINT [ "./bin/racket-http-get" ]
