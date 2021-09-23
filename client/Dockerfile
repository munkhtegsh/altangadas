FROM node:latest
WORKDIR /app
#RUN apk add --no-cache libc6-compat
RUN npm install --global pm2
COPY ./package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
