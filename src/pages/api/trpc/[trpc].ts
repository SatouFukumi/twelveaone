import { createNextApiHandler } from "@trpc/server/adapters/next"
import { appRouter } from "src/backend/routes/_app"

export default createNextApiHandler({
  router: appRouter,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => console.error(`> 'tRPC' failed on ${path}: ${error}`)
      : undefined,
})
