FROM node:18.6

WORKDIR /home/app
COPY dist .

CMD ["node",  "main.js"]