import { router } from '../router'

// routes
import { membersRouter } from './members'
import { weatherRouter } from './weather'

// app router
export const appRouter = router({
    membersRouter,
    weatherRouter
})

// type
export type AppRouter = typeof appRouter
