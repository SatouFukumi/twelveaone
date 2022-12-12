import { publicProcedure, router } from "../router"

// routers

// app router
export const appRouter = router({
  example: publicProcedure.query(() => {
    return 'you'
  })
})

// type
export type AppRouter = typeof appRouter
