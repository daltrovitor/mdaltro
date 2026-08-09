/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  // Proteção contra erro de divergência de container no Dokploy (Deployment Skew)
  deploymentId: process.env.NEXT_DEPLOYMENT_ID || process.env.BUILD_ID || "production",
  experimental: {
    serverActions: {
      allowedOrigins: ['marcelodaltro.com.br', '*.marcelodaltro.com.br', 'localhost:3000'],
    },
  },
}

export default nextConfig

