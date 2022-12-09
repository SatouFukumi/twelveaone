import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import { loggerLink, httpBatchLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import type { AppRouter } from "src/backend/routes/_app"
import SuperJSON from "superjson"
import getBaseUrl from "./get-base-url"

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

      transformer: SuperJSON,
    }
  },

  ssr: false,
})

// types
export type AppInputs = inferRouterInputs<AppRouter>
export type AppOutputs = inferRouterOutputs<AppRouter>
