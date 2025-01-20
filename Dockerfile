FROM node:20.11.1

RUN apt-get update && \
    apt-get install -y sqlite3 libsqlite3-dev 

ARG DATABASE_URL

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY . .

RUN npm run build

CMD ["npm", "start"]