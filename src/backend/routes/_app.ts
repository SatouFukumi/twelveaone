import { publicProcedure, router } from "../router"

// routers

// app router
export const appRouter = router({
  test: publicProcedure.query(() => "Test from trpc")
})

// type
export type AppRouter = typeof appRouter
