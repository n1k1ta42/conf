import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    await prisma.$connect()
    const { id } = req.query

    if (typeof id === 'string') {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          isEmailConfirmed: true,
        },
      })
    }

    await prisma.$disconnect()

    res.redirect('/email')
  }
}
