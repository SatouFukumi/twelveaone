import { router } from '../router'

// routes
import { membersRouter } from './members'

// app router
export const appRouter = router({
    membersRouter
})

// type
export type AppRouter = typeof appRouter
