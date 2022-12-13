import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import type { AppRouter } from "src/backend/trpc/routers/_app"
import getBaseUrl from "../get-base-url"
import { loggerLink, httpBatchLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import { transformer } from "src/utils/superjson"

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,

  config({ ctx }) {
    return {
      transformer,
      links: [
        loggerLink({
          enabled(opts) {
            return (
              process.env.NODE_ENV === "development"
              || (opts.direction === "down" && opts.result instanceof Error)
            )
          },
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (ctx?.req) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { connection, ...headers } = ctx.req.headers // exclude `connection` header from node 18.x.x
              return { ...headers, "x-ssr": "1" }
            }
            return {}
          },
        }),
      ],
    }
  },
})

// types
export type AppInputs = inferRouterInputs<AppRouter>
export type AppOutputs = inferRouterOutputs<AppRouter>
