// app/api/order/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  console.log("🚀 [API] POST /api/order called")
  console.log("SMTP_HOST:", process.env.SMTP_HOST)
  console.log("SMTP_PORT:", process.env.SMTP_PORT)
  console.log("SMTP_USER:", process.env.SMTP_USER)
  console.log("EMAIL_TO:", process.env.EMAIL_TO)

  const order = await request.json()

  // SMTP setup
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Verifică conexiunea SMTP
    await transporter.verify()
    console.log("✅ SMTP connection verified")

    // Pregătim lista de produse în text
    const itemsText = order.items
      .map((i: any) => `- ${i.name} x${i.quantity} (preț: ${i.price} Lei)`)
      .join("\n")

    const textBody = `
Comandă nouă:

Client: ${order.customerName} (${order.customerEmail})
Telefon: ${order.customerPhone}
Produse:
${itemsText}

Total comandă: ${order.total} Lei

Adresă de livrare:
${order.address}

Data: ${new Date().toLocaleString()}
    `

    // Trimite email
    const info = await transporter.sendMail({
      from: `"IzoPresto Shop" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Comandă nouă de la ${order.customerName}`,
      text: textBody,
    })

    console.log("✅ Email sent:", info.messageId)
    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("❌ Eroare trimitere email:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
