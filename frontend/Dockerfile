FROM node:12-alpine as build

WORKDIR /app

COPY package.json /app/package.json

RUN npm i

COPY . /app

RUN npm run build --prod

FROM nginx:1.16.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]