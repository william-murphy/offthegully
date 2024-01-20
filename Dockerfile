# Stage 1: Build Astro website
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


