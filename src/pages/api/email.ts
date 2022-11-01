import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
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

    res.redirect('/email')
  }
}
