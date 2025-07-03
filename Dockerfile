# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app/src

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the entire project and build
COPY . ./
RUN npm run build -- --configuration=production

FROM node:20-alpine

WORKDIR /usr/app

COPY --from=build /app/src/dist/colynk-website ./

EXPOSE 4000

CMD ["node", "server/server.mjs"]
