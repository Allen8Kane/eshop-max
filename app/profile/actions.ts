"use server";

import { PrismaClient, Prisma } from "@prisma/client";

const db = new PrismaClient();

const getProfile = async (id: number) => {
  const res = await db.user.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
    },
  });
  return res;
};

export { getProfile };
