import { prisma } from '@/lib/db';
import { type inferAsyncReturnType } from '@trpc/server';
import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

// AIDEV-NOTE: tRPC context for App Router - provides database and session to all procedures
export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  return {
    prisma,
    headers: opts.req.headers,
    // TODO: Add session from NextAuth.js
    // session: await getServerAuthSession(),
  };
};

export type Context = inferAsyncReturnType<typeof createTRPCContext>;
