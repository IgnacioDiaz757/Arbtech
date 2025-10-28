"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Reemplaza estos valores con tus credenciales de EmailJS
      const serviceId = 'default_service';
      const templateId = 'template_m6xfmpq';
      const publicKey = 'erq48LP7ARY1s6eZ-';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_name: "ArbTech Studio",
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-[#003B0C] p-6 bg-background hover:border-[#003B0C] hover:shadow-[0_0_15px_#003B0C] transition-all duration-200">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-white">Nombre *</span>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-2 rounded-md border border-[#003B0C] bg-background text-white focus:border-[#003B0C] focus:outline-none focus:ring-2 focus:ring-[#003B0C]"
            placeholder="Tu nombre"
            required
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-white">Email *</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 rounded-md border border-[#003B0C] bg-background text-white focus:border-[#003B0C] focus:outline-none focus:ring-2 focus:ring-[#003B0C]"
            placeholder="tu@email.com"
            required
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="text-white">Teléfono</span>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-[#003B0C] bg-background text-white focus:border-[#003B0C] focus:outline-none focus:ring-2 focus:ring-[#003B0C]"
          placeholder="+54 9 351 123-4567"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-white">Mensaje *</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-[#003B0C] bg-background min-h-32 text-white focus:border-[#003B0C] focus:outline-none focus:ring-2 focus:ring-[#003B0C]"
          placeholder="Contanos sobre tu proyecto"
          required
        />
      </label>
      
      {submitStatus === "success" && (
        <div className="p-3 rounded-md bg-green-100 text-green-800 text-sm">
          ¡Mensaje enviado correctamente! Te responderemos pronto.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="p-3 rounded-md bg-red-100 text-red-800 text-sm">
          Error al enviar el mensaje. Por favor, intenta nuevamente.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-[#003B0C] border border-[#003B0C] text-white px-4 py-2 text-sm font-medium hover:bg-[#003B0C] hover:shadow-[0_0_15px_#003B0C] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
