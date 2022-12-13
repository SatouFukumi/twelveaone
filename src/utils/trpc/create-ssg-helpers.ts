import { createProxySSGHelpers } from "@trpc/react-query/ssg"
import { type CreateContextOptions, createContextInner } from "src/backend/trpc/context"
import { AppRouter, appRouter } from "src/backend/trpc/routers/_app"
import { transformer } from "../superjson"

/**
 * ```ts
 * { props: { trpcState: ssg.dehydrate() } }
 * ```
 */
export async function createSSGHelpers(opts?: CreateContextOptions) {
  return createProxySSGHelpers<AppRouter>({
    router: appRouter,
    transformer,
    ctx: await createContextInner(opts),
  })
}

export default createSSGHelpers
