import { router } from '../trpc';
import { postRouter } from './post';
import { userRouter } from './user';

// AIDEV-NOTE: Root tRPC router - combines all feature routers
export const appRouter = router({
  user: userRouter,
  post: postRouter,
});

// Export type definition for use in client
export type AppRouter = typeof appRouter;
