import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

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
        from: 'no-replay@yamal.dev', // sender address
        to: data.email, // list of receivers
        subject: 'Подтверждение регистрации', // Subject line
        html: `
<p style="font-size: 20px">Вы успешно зарегистрировались на мероприятие. Чтобы нам знать что почта ваша, пожалуйста подтвердите ее.</p> 
<br>
<a href="https://conf.yamal.dev/api/email?id=${newUser.id}">Подтвердить почту</a>

`, // html body
      })

    res.status(201).json({
      message:
        'Регистрация прошла успешно. Вам придет письмо для подтверждения почты.',
    })

    await prisma.$disconnect()
  }
}
