# FROM node:17.4-alpine3.14
FROM node
WORKDIR /app
COPY . .

RUN npm install ./back-end

EXPOSE 8000

CMD ["node", "./back-end/index.js"]