import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { Telegraf } from 'telegraf'

import prisma from '@/utils/prisma'

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const data: {
      name: string
      surname: string
      decision: string
    } = req.body
    const user = await prisma.user.findFirst({
      where: {
        name: data.name,
        surname: data.surname,
      },
    })

    if (!user) {
      return res.status(400).json({
        message: 'Пользователь с таким именем и фамилией не зарегистрирован',
      })
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        decision: data.decision,
      },
    })

    res.status(201).json({
      message:
        'Вы успешно отправили свое решение о формате посещения конференции',
    })

    const usersWithDecision = await prisma.user.findMany({
      where: {
        decision: {
          not: '',
        },
      },
    })

    const usersOffline = await prisma.user.findMany({
      where: {
        decision: 'offline',
      },
    })

    const usersOnline = await prisma.user.findMany({
      where: {
        decision: 'online',
      },
    })

    const usersNot = await prisma.user.findMany({
      where: {
        decision: 'not',
      },
    })

    let decision: string = ''

    if (data.decision === 'offline') {
      decision = 'придет в полярис'
    }
    if (data.decision === 'online') {
      decision = 'будет смотреть онлайн'
    }
    if (data.decision === 'not') {
      decision = 'не придет и не будет смотреть онлайн'
    }

    if (process.env.NODE_ENV !== 'development') {
      await bot.telegram.sendMessage(
        process.env.TELEGRAM_CHAT_ID || '',
        `Пользователь ${updatedUser.name} ${updatedUser.surname} подтвердил что, ${decision}.\n\nВсего прошли подтверждение ${usersWithDecision.length}, из них:\n - придут в полярис ${usersOffline.length}\n - будут смотреть онлайн ${usersOnline.length}\n - не придут и не будут смотреть онлайн ${usersNot.length}`,
      )

      const transport = await nodemailer.createTransport({
        service: 'Yandex',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_USER_PASSWORD,
        },
      })

      if (updatedUser.isEmailConfirmed && data.decision !== 'not')
        await transport.sendMail({
          from: 'no-replay@yamal.dev',
          to: updatedUser.email,
          subject: 'Подтверждение участия в конференции YAMAL.DEV CONF',
          html: `<p style="font-size: 20px">Вы успешно подтвердили свое участие на конференции YAMAL.DEV CONF.</p> <p style="font-size: 20px">Ждем вас 5-6 ноября в Арт-резиденции "Полярис", по адресу: г. Салехард, ул. Чубынина 17. Сбор участников с 9-10.</p> <p style="font-size: 20px">Прямая трансляция будет в наших социальных сетях: <a href="https://vk.com/yamal.dev.conf">вконтакте</a>, на <a href="https://conf.yamal.dev">официальном сайте</a> и на <a href="https://www.youtube.com/channel/UCIZCgmAI_tb1X9l17nAU6Rg?app=desktop">youtube</a>.</p>`,
        })
    }
  }
}
