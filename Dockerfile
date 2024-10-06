FROM node:18 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

FROM node:alpine as main
COPY --from=build /app /
EXPOSE 3333
CMD ["node", "/src/index.js"]

