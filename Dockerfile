FROM oven/bun:latest AS development
WORKDIR /app
COPY package.json /app/package.json
COPY bun.lockb /app/bun.lockb
RUN bun i
COPY . /app
CMD ["bun", "dev"]
FROM development AS build
RUN bun run build
FROM nginx:alpine
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
