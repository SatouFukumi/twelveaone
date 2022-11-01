import { httpBatchLink, loggerLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import type { AppRouter } from "../routes/_app"
import getBaseUrl from "../utils/get-base-url"
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import SuperJSON from "superjson"

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
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
            /**
             * @link https://tanstack.com/query/v4/docs/reference/QueryClient
             **/
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
            // transformer
            transformer: SuperJSON
        }
    },
    /**
     * @link https://trpc.io/docs/ssr
     **/
    ssr: false,
})

// types
export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>
