# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the entire project and build
COPY . .
RUN npm run build -- --configuration=production

EXPOSE 4000

CMD ["npm", "run", "serve:ssr:colynk-website"]
