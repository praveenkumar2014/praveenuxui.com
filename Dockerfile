FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY serve.mjs ./serve.mjs
COPY site ./site

# Use the internal proxy port only; never publish a host port. Host 3000 is
# already used by Dokploy, and 80/443 belong to the Coolify proxy.
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s CMD node -e "fetch('http://127.0.0.1:80/').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "serve.mjs", "80"]
