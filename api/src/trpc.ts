import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return `Hello ${input?.name ?? "world"}!`;
    }),
  getUser: t.procedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { username: input.username },
      });
      return user;
    }),
  createUser: t.procedure
    .input(z.object({ email: z.string(), username: z.string().nullish() }))
    .mutation(async ({ input }) => {
      const newUser = await prisma.user.create({
        data: {
          email: input.email,
          username: input.username ?? "",
        },
      });
      return newUser;
    }),
});

export type AppRouter = typeof appRouter;
