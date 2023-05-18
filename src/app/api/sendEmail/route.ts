import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email, title, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.HOTMAIL_USER,
        pass: process.env.HOTMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.HOTMAIL_USER,
      to: process.env.HOTMAIL_USER,
      replyTo: email,
      subject: title,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar o email", error);
    return NextResponse.json(
      { message: "Erro ao enviar o email." },
      { status: 500 }
    );
  }
}
