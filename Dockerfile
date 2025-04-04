FROM node:20.11.1

RUN apt-get update && \
    apt-get install -y sqlite3 libsqlite3-dev 

ARG DATABASE_URL

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

RUN npm run build

RUN groupadd -r tempGroup

RUN useradd -r -g tempGroup -m tempUser

RUN chown -R tempUser:tempGroup /home/tempUser

RUN chown -R tempUser:tempGroup /app

RUN chmod +x ./start-server.sh

USER tempUser

CMD ["./start-server.sh"]