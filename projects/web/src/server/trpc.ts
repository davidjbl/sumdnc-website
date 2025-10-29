import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { type Context } from './context';

// AIDEV-NOTE: Initialize tRPC with context and transformers
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

// AIDEV-NOTE: Export reusable router and procedure builders
export const router = t.router;
export const publicProcedure = t.procedure;

// AIDEV-NOTE: Protected procedure - requires authentication
// TODO: Implement when NextAuth.js is configured
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  // Uncomment when session is available
  // if (!ctx.session || !ctx.session.user) {
  //   throw new TRPCError({ code: 'UNAUTHORIZED' });
  // }
  return next({
    ctx: {
      ...ctx,
      // session: { ...ctx.session, user: ctx.session.user },
    },
  });
});
