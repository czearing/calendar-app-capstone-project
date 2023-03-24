import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const inquiry = await prisma.inquiry.create({ data: JSON.parse(body) });

      return res.status(200).json(inquiry);
    } catch (error) {
      return res.status(422).json(error);
    }
  } else if (req.method === "GET") {
    try {
      const inquiry = await prisma.inquiry.findMany({});

      return res.status(200).json(inquiry);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();
};
