import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { Telegraf } from 'telegraf'

const prisma = new PrismaClient()
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    await prisma.$connect()
    const data = req.body
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    })

    if (user) {
      return res.status(400).json({
        message: 'Пользователь с такой почтой уже зарегистрирован',
      })
    }

    const newUser = await prisma.user.create({ data })

    const transport = await nodemailer.createTransport({
      service: 'Yandex',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_USER_PASSWORD,
      },
    })

    if (newUser)
      await transport.sendMail({
        from: 'no-replay@yamal.dev',
        to: data.email,
        subject: 'Подтверждение регистрации',
        html: `<p style="font-size: 20px">Вы успешно зарегистрировались на мероприятие. Чтобы нам знать что почта ваша, пожалуйста подтвердите ее.</p> <br><a href="https://conf.yamal.dev/api/email?id=${newUser.id}">Подтвердить почту</a>`,
      })

    const users = await prisma.user.findMany()

    await bot.telegram.sendMessage(
      process.env.TELEGRAM_CHAT_ID || '',
      `Новая регистрация на конфу ${newUser.name} ${newUser.surname}.\n\nВсего уже зарегалось ${users.length} человек`,
    )

    res.status(201).json({
      message:
        'Регистрация прошла успешно. Вам придет письмо для подтверждения почты.',
    })

    await prisma.$disconnect()
  }
}
