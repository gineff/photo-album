ARG NODE_VERSION=20
ARG PORT=80

FROM node:$NODE_VERSION-alpine as build

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . .

RUN rm -rf /app/packages/client/dist/
WORKDIR /app/packages/client
RUN yarn build

FROM nginx:alpine

COPY --from=build /app/packages/client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/client/dist /usr/share/nginx/html

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]
