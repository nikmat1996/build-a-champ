import { PrismaClient } from '@prisma/client'

  const globalThis = typeof window !== 'undefined' ? window : global;
  
  globalThis.prismaGlobal = globalThis.prismaGlobal || new PrismaClient();
  
  const prisma = globalThis.prismaGlobal;
  
  if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
  console.log(prisma)
  export default prisma