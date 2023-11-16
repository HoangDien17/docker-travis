FROM node:18.15.0-alpine AS build

ARG WORK_DIR=/var/www/node

WORKDIR ${WORK_DIR}

COPY . .

RUN yarn install --frozen-lockfile

CMD yarn run start