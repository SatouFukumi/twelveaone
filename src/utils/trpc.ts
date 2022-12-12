import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import { loggerLink, httpBatchLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import { AppRouter } from "src/backend/routes/_app"
import getBaseUrl from "./get-base-url"
import { transformer } from "src/utils/superjson"

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development"
            || (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],

      transformer,
    }
  },

  ssr: false,
})

// types
export type AppInputs = inferRouterInputs<AppRouter>
export type AppOutputs = inferRouterOutputs<AppRouter>
