FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY serve.mjs ./serve.mjs
COPY site ./site

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s CMD node -e "fetch('http://127.0.0.1:3000/').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "serve.mjs", "3000"]
