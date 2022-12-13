import type { inferAsyncReturnType } from "@trpc/server"
import type { CreateNextContextOptions } from "@trpc/server/adapters/next"

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreateContextOptions = {}

/** Use this helper for:
 * - testing, so we don't have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContextInner = async (opts?: CreateContextOptions) => {
  return {}
}

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async ({}: CreateNextContextOptions) => {
  return await createContextInner({})
}

export type Context = inferAsyncReturnType<typeof createContext>
