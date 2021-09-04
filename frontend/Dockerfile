# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN mkdir -p /var/www/html/frontend
WORKDIR /var/www/html/frontend
# RUN npm install --global pm2
COPY ./package*.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
# RUN npm install --global pm2
WORKDIR /var/www/html/frontend
COPY . .
COPY --from=deps /var/www/html/frontend/node_modules ./node_modules
RUN npm run build && npm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /var/www/html/frontend

ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
RUN addgroup -S nodejs
RUN adduser -S -D -h /var/www/html/frontend nextjs nodejs
#RUN adduser -S -D -h /var/www/html/frontend/.next nextjs nodejs
RUN chown -R nextjs:nodejs /var/www/html/frontend

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /var/www/html/next.config.js ./
COPY --from=builder /var/www/html/frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /var/www/html/frontend/.next ./.next
COPY --from=builder /var/www/html/frontend/node_modules ./node_modules
COPY --from=builder /var/www/html/frontend/package.json ./package.json

USER nextjs

EXPOSE 7777

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ls -ltr && npm run build && npm run start

# CMD ["npm", "build", "start" ]

# CMD [ "pm2-runtime", "npm", "--", "start" ]
