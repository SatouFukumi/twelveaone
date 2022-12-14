import { initTRPC } from "@trpc/server"
import { transformer } from "src/utils/superjson"
import { type Context } from "./context"

// initialization
const t = initTRPC.context<Context>().create({
  transformer,

  errorFormatter({ shape }) {
    return shape
  },
})

// defaults
export const middleware = t.middleware
export const procedure = t.procedure
export const router = t.router

// public procedure
export const publicProcedure = procedure
