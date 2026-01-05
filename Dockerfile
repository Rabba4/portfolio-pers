# Dockerfile para Next.js con soporte para ARM64 (Raspberry Pi)
FROM node:20-alpine AS base

# Instalar dependencias solo cuando sean necesarias
FROM base AS deps
# Verificar https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine para entender por qué puede ser necesario libc6-compat
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependencias basadas en el gestor de paquetes preferido
COPY package.json package-lock.json* ./
# Instalar solo dependencias de producción y limpiar caché para ahorrar memoria
RUN npm ci --omit=dev --ignore-scripts && \
    npm cache clean --force

# Reconstruir el código fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js recopila datos de telemetría completamente anónimos sobre el uso general.
# Más información aquí: https://nextjs.org/telemetry
# Descomentar la siguiente línea en caso de que desees deshabilitar la telemetría durante el build.
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Imagen de producción, copiar todos los archivos y ejecutar next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Descomentar la siguiente línea en caso de que desees deshabilitar la telemetría durante el runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Configurar el directorio correcto para archivos estáticos
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Aprovechar las trazas de salida para reducir el tamaño de la imagen
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4321

ENV PORT=4321
ENV HOSTNAME="0.0.0.0"

# server.js se crea con next build cuando se usa el modo standalone
CMD ["node", "server.js"]
