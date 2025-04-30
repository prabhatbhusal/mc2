# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package manifests and install dependencies using pnpm
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the source code and build the Next.js app
COPY . .
RUN pnpm run build

# Stage 2: Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Add node_modules/.bin to PATH so the "next" command is recognized
ENV PATH=/app/node_modules/.bin:$PATH

# Install curl for the healthcheck
RUN apk add --no-cache curl

# Expose port 7071 since we want to serve on that port
EXPOSE 7074

# Copy all built files from the builder stage
COPY --from=builder /app .  

# Label the image for versioning
LABEL version="1.0.0"

# Healthcheck to ensure the container is responsive on port 7071
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl --fail http://localhost:7074/ || exit 1

# Start the Next.js application on port 7071, binding to all interfaces.
CMD ["next", "start", "-H", "0.0.0.0", "-p", "7074"]