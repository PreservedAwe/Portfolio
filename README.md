![](https://i.imgur.com/ddZJDGe.png)
# Preserved's Portfolio

[![Total Commits](https://img.shields.io/github/commit-activity/t/PreservedAwe/Portfolio?style=flat-square)](https://github.com/PreservedAwe/Portfolio/graphs/commit-activity)

This is a web application that is being used as my portfolio for presentation and style purposes.

## App Preview

View the live app found here at [my website](https://preserved.app/)

## Features

![](https://i.imgur.com/XQFiYRn.gif)

- Send Message To Owner
- View Projects
- View Hobbies
- Provides links to external websites with more info about Owner

## Installation

![](https://i.imgur.com/r0YYzrM.png)

Main layout code that is shared across all pages on website.

Important: This project requires certain env variables for successful compilation. These are:

DATABASE_URL="this app currently uses mongodb connection string" 

MAIL_API_KEY="this is mailgun api key"

MAIL_DOMAIN="sub domain for mailgun domain"

MAIL_RECEIVER_EMAIL="email I use to receive messages from the contact page"

ACCESS_CODE="This is the password to access admin page"

Create a .env in the `root dir` and keep these env variable strings empty. Note that not the entire app will work as functioned due to this, unless you connect your own mongodb and mailgun account or change the code to your liking.

### Option 1:(Docker)

```bash
$ git clone https://github.com/PreservedAwe/Portfolio.git
```

- Download docker and docker compose for your system.

- Run `docker compose build` to build the container for the app.

- Run `docker compose up` to mount the container and have the app running live on localhost

### Option 2:(Node.js on Host Machine)

```bash
$ git clone https://github.com/PreservedAwe/Portfolio.git
```
- Clone git repo onto your system.

- Download nodejs(install npm also, if not included with nodejs) on your system. Here is a link on how to do so from Node.js' official [website](https://nodejs.org/en/download).

- Cd into project folder then open the terminal.

- Run the command `npm install` to install all neccessary dependencies.

- Run the command `npx prisma generate` to generate the prisma orm client.

- Run the command `npm run dev` to start the server in development mode or  `npm run build` then `npm run start` to start the server in production mode.

## Thank You

Thank you for taking a look at my project!