import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => new PrismaClient();

export const prisma = globalThis.prisma || PrismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
