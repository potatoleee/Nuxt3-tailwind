# syntax=docker/dockerfile:1

FROM node:18.17.0-alpine as builder
LABEL stage=builder

# Create app directory
WORKDIR /app
COPY . /app/
RUN  npm install && npm run build




FROM node:18.17.0-alpine
WORKDIR /app
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package*.json ./


# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=80

# 暴露的連接埠
EXPOSE 3000

# 啟動應用程式
CMD ["node", ".output/server/index.mjs"]


