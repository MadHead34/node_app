From node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

Copy . .

EXPOSE 8000

CMD ["npm","start"]
