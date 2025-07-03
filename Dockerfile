# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the entire project and build
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built Angular app to Nginx's HTML directory
COPY --from=build /app/dist/colynk-website/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 4000

# Start Nginx
CMD ["npm", "run", "serve:ssr:colynk-website"]
