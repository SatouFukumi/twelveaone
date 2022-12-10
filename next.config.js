import withTwin from './with-twin.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export default withTwin(nextConfig)
