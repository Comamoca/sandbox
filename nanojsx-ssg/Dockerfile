FROM oven/bun:alpine

RUN bun install -D tailwindcss
RUN bun i -D daisyui@latest

WORKDIR /build

ENTRYPOINT ["bunx", "tailwindcss", "-i", "./style.css", "-o", "./_dist/tailwind.css", "--watch"]
