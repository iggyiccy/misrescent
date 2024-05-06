import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

// Contact Form Route
export async function POST(req: Request, res: Response) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
  const body = await req.json()
  const { name, email, phone, message } = body

  const msg = {
    to: 'info@misrescent.org',
    from: 'info@misrescent.org',
    subject: `New contact form submission from ${name}`,
    text: message,
    html: `
      <h1>New contact form submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  }
  try {
    await sgMail.send(msg)
    return NextResponse.json({ message: 'Email sent' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error sending email' + error },
      { status: 500 },
    )
  }
}
