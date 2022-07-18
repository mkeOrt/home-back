FROM node:14.18.1-alpine3.2

WORKDIR /home/app/dist
COPY dist .

CMD ["node",  "main.js"]