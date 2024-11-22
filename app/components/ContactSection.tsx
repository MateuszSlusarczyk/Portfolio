"use client";

import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-6">
      <Parallax speed={5}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Kontakt</h2>
          <p className="text-gray-400 mt-4">
            Skontaktuj się ze mną, aby dowiedzieć się więcej o moich projektach lub zlecić mi wykonanie strony internetowej.
          </p>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Twoje imię"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Twój e-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
            />
            <textarea
              name="message"
              placeholder="Twoja wiadomość"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-bold"
            >
              {status === "loading" ? "Wysyłanie..." : "Wyślij"}
            </button>
            {status === "success" && (
              <p className="text-green-500">Wiadomość została wysłana!</p>
            )}
            {status === "error" && (
              <p className="text-red-500">Wystąpił błąd. Spróbuj ponownie.</p>
            )}
          </form>
        </div>
      </Parallax>
    </section>
  );
}
