import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'
import { render } from '@react-email/render'
import { z } from 'zod'

import { Email } from './email'

export async function POST(request: NextRequest) {
  const adminEmail: string | false = process.env.EMAIL || false
  const adminPass: string | false = process.env.EMAIL_PASS || false

  if (!adminEmail || !adminPass) {
    return NextResponse.json({
      status: false,
      message: 'Email provider not configured properly',
    })
  }

  const { name, email, text } = await request.json()

  const messageSchema = z.object({
    name: z.string().min(3).max(35).trim(),
    email: z.string().email().toLowerCase(),
    text: z.string().min(3).max(300),
  })

  const message = messageSchema.safeParse({
    name,
    email,
    text,
  })

  if (!message.success) {
    const error = message.error.format()

    if (error.name) {
      return NextResponse.json({ status: false, message: error.name._errors[0] })
    }

    if (error.email) {
      return NextResponse.json({ status: false, message: error.email._errors[0] })
    }

    if (error.text) {
      return NextResponse.json({ status: false, message: error.text._errors[0] })
    }

    return NextResponse.json({ status: false, message: 'Not possible to send data.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    })

    const emailHtml = render(Email({ name, email, text }))

    await transporter.sendMail({
      from: adminEmail,
      cc: adminEmail,
      to: email,
      subject: `Hello, ${name}!`,
      html: emailHtml,
    })

    return NextResponse.json({ status: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.warn('🔥', error)
    return NextResponse.json({ status: false, message: 'Error while sending the email' })
  }
}
