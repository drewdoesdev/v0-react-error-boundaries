/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set this to your repo name if deploying to github.com/username/repo-name
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
  trailingSlash: true,
}

export default nextConfig
