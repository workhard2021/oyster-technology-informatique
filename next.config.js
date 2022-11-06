/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_HOME:'http://localhost:3000',
    NEXT_PUBLIC_URL_API_IMAGE:'/'
  }
}

module.exports = nextConfig
