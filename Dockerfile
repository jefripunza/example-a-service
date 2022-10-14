FROM node:14-alpine

WORKDIR /app

COPY . .

# 🌊 Install Dependencies
RUN yarn

CMD ["node", "index.js"]