import { initTRPC } from "@trpc/server"
import SuperJSON from "superjson"

// initialization
const t = initTRPC.create({
  transformer: SuperJSON,

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
