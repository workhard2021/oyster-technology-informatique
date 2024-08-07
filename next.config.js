/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_HOME:'https://oyster-technology.com',
    NEXT_PUBLIC_URL_API_IMAGE:'/',
    NEXT_PUBLIC_EMAIL: "admin@oyster-technology.com",
    NEXT_PUBLIC_TEL: "+212 661-050228",
    NEXT_PUBLIC_ADDRESS:"Rue Paenoia, Hay Ryad secteur 17, B75 Rabat",
  }
}

module.exports = nextConfig
