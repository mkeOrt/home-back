FROM node:18.6

WORKDIR /home/app
COPY . .

CMD ["yarn",  "start:dev"]