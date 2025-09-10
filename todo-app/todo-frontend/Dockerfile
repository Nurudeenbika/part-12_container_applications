FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# Add this line to run tests. The build will fail if tests fail.
RUN npm run test

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

