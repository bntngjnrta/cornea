import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field harus diisi." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass || gmailUser === "your-gmail@gmail.com") {
      return NextResponse.json(
        { error: "Layanan email belum dikonfigurasi. Silakan hubungi admin." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: "corneastd@gmail.com",
      replyTo: email,
      subject: `Pesan baru dari ${name} - Cornea Studio`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="margin-bottom: 4px;">Pesan Baru dari Website</h2>
          <hr style="margin-bottom: 16px;" />
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Pesan:</strong></p>
          <p style="background:#f4f4f4; padding:12px; border-radius:8px; white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
