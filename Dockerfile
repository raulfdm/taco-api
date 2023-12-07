FROM oven/bun:1

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY bun.lockb .

RUN bun i --prod --ignore-scripts --frozen-lockfile

COPY . .

RUN bun prisma generate
RUN bun run build

EXPOSE 4000

CMD [ "bun", "start" ]