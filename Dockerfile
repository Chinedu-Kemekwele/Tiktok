

FROM node:10.15.1-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
#RUN npm run test
RUN npm run build
CMD ["npm","run","start"]
