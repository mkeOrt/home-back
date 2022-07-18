FROM node

WORKDIR /home/app/dist
COPY . .

RUN yarn

CMD ["node",  "dist/main.js"]