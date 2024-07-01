

FROM node:lts-alpine3.20
RUN mkdir -p /app
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
CMD ["npm","run","start"]
