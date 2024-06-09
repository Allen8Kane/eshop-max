import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
import { sign } from "jsonwebtoken";

const db = new PrismaClient();

export async function POST(
  req: Request,
  res: NextApiResponse
): Promise<NextResponse> {
  const { email, password } = await req.json();
  console.log(email, password);

  const result = await db.user.create({
    data: {
      email,
      password,
    },
  });

  const secret = process.env.JWT_SECRET || "secret";

  const token = sign({ id: result.id }, secret, {
    expiresIn: "1d",
  });

  return NextResponse.json({ token });
}
