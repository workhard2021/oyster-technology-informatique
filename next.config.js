/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_HOME:'https://oyster-technology.com',
    NEXT_PUBLIC_URL_API_IMAGE:'/'
  }
}

module.exports = nextConfig
