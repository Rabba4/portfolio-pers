import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilitar output standalone para optimizar el despliegue en Docker
  output: "standalone",

  // Opcional: habilitar compresión para mejor rendimiento
  compress: true,
};

export default nextConfig;
