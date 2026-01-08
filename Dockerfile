# Stage 1: Build the Angular application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only package.json and install dependencies first
# This takes advantage of Docker layer caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .
RUN npm run build

# Stage 2: Serve the application from Nginx
FROM nginx:alpine AS runner
# Copy the compiled output from the builder stage
COPY --from=builder /app/dist/ApiFrontEnd/browser /usr/share/nginx/html
# Copy the default nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80