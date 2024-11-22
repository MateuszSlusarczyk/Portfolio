import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Wszystkie pola są wymagane." }, { status: 400 });
  }

  // Konfiguracja transportera Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com", // Zastąp odpowiednim hostem SMTP
    port: 465, // Zastąp odpowiednim portem
    secure: true, // Ustaw na true, jeśli używasz SSL
    auth: {
      user: "mateusz.slusarczyk@yahoo.com", // Twój e-mail
      pass: "fjplpkfmypbbszny", // Hasło do e-maila
    },
  });

  try {
    // Wysyłanie e-maila
    await transporter.sendMail({
      from: `"${name}" <mateusz.slusarczyk@yahoo.com>`, // Nadawca
      to: "mateusz.slusarczyk@yahoo.com", // Odbiorca
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
