import { createProxySSGHelpers } from "@trpc/react-query/ssg"
import { type CreateContextOptions, createContextInner } from "src/backend/trpc/context"
import { type AppRouter, appRouter } from "src/backend/trpc/routers/_app"
import { transformer } from "../superjson"

/**
 * ```ts
 * // remember to pass this in
 * { props: { trpcState: ssg.dehydrate() } }
 * ```
 */
export const createSSGHelpers = async (opts?: CreateContextOptions) => {
  return createProxySSGHelpers<AppRouter>({
    router: appRouter,
    transformer,
    ctx: await createContextInner(opts),
  })
}

export default createSSGHelpers
