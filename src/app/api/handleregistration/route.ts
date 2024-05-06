import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

// Event Registration Route
export async function POST(req: Request, res: Response) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  const body = await req.json()
  const { eventName, firstName, lastName, email, phone, organisation } = body

  const msg = {
    to: 'info@misrescent.org',
    from: 'info@misrescent.org',
    subject: `New event registration from ${firstName} ${lastName}`,
    text: `Event: ${eventName}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nOrganisation: ${organisation}`,
    html: `
      <h1>New event registration</h1>
      <p><strong>Event:</strong> ${eventName}</p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Organisation:</strong> ${organisation}</p>
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
