FROM node:18.6

RUN mkdir -p /home/app
WORKDIR /home/app
COPY dist .

CMD ["node",  "dist/main.js"]