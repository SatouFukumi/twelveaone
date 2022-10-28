/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    sassOptions: { includePaths: ['src/styles', 'assets/styles'] },

    env: {
        DB_API_KEY: process.env.DB_API_KEY,
        DB_AUTH_DOMAIN: process.env.DB_AUTH_DOMAIN,
        DB_PROJECT_ID: process.env.DB_PROJECT_ID,
        DB_STORAGE_BUCKET: process.env.DB_STORAGE_BUCKET,
        DB_MESSAGING_SENDER_ID: process.env.DB_MESSAGING_SENDER_ID,
        DB_APP_ID: process.env.DB_APP_ID,
        DB_MEASUREMENT_ID: process.env.DB_MEASUREMENT_ID
    }
}

export default nextConfig
