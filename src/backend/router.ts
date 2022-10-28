import { initTRPC } from "@trpc/server"
import SuperJSON from "superjson"

// initialization
const t = initTRPC.create({
    transformer: SuperJSON,

    errorFormatter({ shape }) {
        return shape
    },
})

// router
export const router = t.router

// procedures
export const publicProcedure = t.procedure
