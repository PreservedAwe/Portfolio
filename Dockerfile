FROM node:20.11.1

RUN apt-get update && \
    apt-get install -y sqlite3 libsqlite3-dev 

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]