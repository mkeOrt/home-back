FROM node

WORKDIR /home/app/dist
COPY . .

RUN yarn

CMD ["node",  "main.js"]