/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar output standalone para optimizar el despliegue en Docker
  output: "standalone",

  // Opcional: habilitar compresión para mejor rendimiento
  compress: true,
};

export default nextConfig;
