# Stage 1: Builder
FROM node:18-alpine AS builder
# Install pnpm
RUN npm install -g pnpm
WORKDIR /app
# Create cache directory and set permissions
RUN mkdir -p .next/cache && chown -R node:node .next
# Copy package files
COPY package.json ./
COPY pnpm-lock.yaml ./
# Clean install dependencies
RUN pnpm install --frozen-lockfile --prod=false
# Copy source code
COPY . .
RUN chown -R node:node .
# Switch to non-root user
USER node
# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
# Build the application
RUN pnpm build
# Stage 2: Production
FROM node:18-alpine AS runner
WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# Create cache directory and set permissions
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next
# Copy necessary files
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Switch to non-root user
USER nextjs
# Set environment variables
ENV NODE_ENV=production
ENV PORT=7074
ENV HOSTNAME=0.0.0.0
# Expose the port your app runs on
EXPOSE 7074
# Healthcheck to ensure the app is running properly
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:7074/ || exit 1
# Start the application
CMD ["node", "server.js"]