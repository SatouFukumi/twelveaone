import withTwin from './with-twin.js'
import clientEnv from './src/env/client.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: clientEnv
}

export default withTwin(nextConfig)
