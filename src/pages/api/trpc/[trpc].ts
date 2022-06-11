import { createContext } from '@/server';
import { AppRouter, appRouter } from '@/server/routers';
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler<AppRouter>({
  router: appRouter,
  createContext,
});
