FROM mhart/alpine-node:16 AS dependencies

ARG NPM_AUTH_TOKEN

WORKDIR /src

COPY package.json package-lock.json ./
RUN echo "//npm.pkg.github.com/:_authToken=$NPM_AUTH_TOKEN" > .npmrc
RUN echo "@azzurri-group:registry=https://npm.pkg.github.com" >> .npmrc
RUN npm ci

RUN rm -f .npmrc

FROM dependencies AS transpile

WORKDIR /src
COPY tsconfig.json tsconfig.build.json ./
COPY config config
COPY src src

RUN npm run build

FROM mhart/alpine-node:16

ENV AWS_REGION eu-west-1
ENV NODE_ENV production

RUN apk add dumb-init python3 build-base py-pip --update \
	&& pip install awscli

WORKDIR /src

COPY --from=dependencies /src/node_modules/ node_modules
COPY --from=transpile /src/dist/ dist
COPY package.json ./
COPY config config

RUN addgroup -S azzurri && adduser -S azzurri -G azzurri
RUN chown azzurri:azzurri .
USER azzurri

EXPOSE 3002

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "-r", "dotenv/config", "./dist/server.js"]