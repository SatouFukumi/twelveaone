export default function getBaseUrl() {
  if (typeof window !== "undefined") return "" // browser should use relative path

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // reference for vercel.com
  if (process.env.RENDER_INTERNAL_HOSTNAME)
      return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}` // reference for render.com

  // assume local
  return `http://192.168.1.11:${process.env.PORT ?? 3000}`
}
