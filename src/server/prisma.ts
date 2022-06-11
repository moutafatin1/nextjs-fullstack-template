import { PrismaClient } from '@prisma/client';

const globalWithPrisma = global as typeof global & {
  prisma?: PrismaClient;
};

export const prisma: PrismaClient =
  globalWithPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'production'
        ? ['error']
        : ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalWithPrisma.prisma = prisma;
}
