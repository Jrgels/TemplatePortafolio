FROM node:17.4-alpine3.14

WORKDIR /app
COPY . .

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN npm install --build-from-source --python=/usr/bin/python3.8 ./back-end

EXPOSE 8000

CMD ["node", "./back-end/index.js"]
