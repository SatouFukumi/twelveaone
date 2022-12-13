import { createNextApiHandler } from "@trpc/server/adapters/next"
import { createContext } from "src/backend/trpc/context"
import { appRouter, type AppRouter } from "src/backend/trpc/routers/_app"

export default createNextApiHandler<AppRouter>({
  router: appRouter,
  createContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => console.error(`> 'tRPC' failed on ${path}: ${error}`)
      : undefined,
})
