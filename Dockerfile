FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma migrate deploy
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "./app.js"]
