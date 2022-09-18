import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { User } from '@/domain/User'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    await prisma.$connect()
    const data: User = req.body
    const user = await prisma.user.findFirst({
      where: {
        phone: data.phone,
      },
    })

    if (user) {
      res.status(400).json({
        message: 'Пользователь с таким телефоном уже зарегистрирован',
      })
    }

    const newUser = await prisma.user.create({ data })

    if (newUser)
      res.status(201).json({
        message: 'Регистрация прошла успешно',
      })

    await prisma.$disconnect()
  }
}
