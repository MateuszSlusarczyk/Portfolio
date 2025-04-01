import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Wszystkie pola są wymagane." }, { status: 400 });
  }

  // Konfiguracja transportera Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.email_host, // Zastąp odpowiednim hostem SMTP
    port: process.env.email_port, // Zastąp odpowiednim portem
    secure: true, // Ustaw na true, jeśli używasz SSL
    auth: {
      user: process.env.email, // Twój e-mail
      pass: process.env.email_pass, // Hasło do e-maila
    },
  });

  try {
    // Wysyłanie e-maila
    await transporter.sendMail({
      from: process.env.email, // Nadawca
      to: process.env.email, // Odbiorca
      subject: `Nowa wiadomość od ${name}`, // Temat wiadomości
      text: message, // Treść wiadomości w formie tekstowej
      html: `<p><strong>Imię:</strong> ${name}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Wiadomość:</strong></p>
             <p>${message}</p>`, // Treść wiadomości w formie HTML
    });

    return NextResponse.json({ message: "Wiadomość została wysłana!" });
  } catch (error) {
    console.error("Błąd wysyłania e-maila:", error);
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }
}
