 FROM denoland/deno:alpine-1.31.3

WORKDIR /app

COPY . .

USER deno

CMD ["run", "--allow-net", "--allow-read", "src/mod.ts"]

EXPOSE 8000