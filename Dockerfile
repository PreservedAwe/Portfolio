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

RUN groupadd -r app-user-g && useradd -r -g app-user app-user-g

RUN chown -R app-user:app-user-g /app

USER app-user

CMD ["npm", "start"]