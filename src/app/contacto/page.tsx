import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos: formulario, WhatsApp directo y datos de contacto para proyectos.",
};

export default function ContactoPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
        <p className="text-foreground/70 max-w-2xl">
          Escribinos sobre tu proyecto. Te respondemos en menos de 24 h.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <ContactForm />

        <aside className="space-y-4">
          <div className="rounded-lg border border-[#003B0C] p-6 bg-background hover:border-[#003B0C] hover:shadow-[0_0_15px_#003B0C] transition-all duration-200">
            <h3 className="text-lg font-medium text-white">WhatsApp</h3>
            <p className="text-sm text-foreground/70 mt-2">
              Contacto directo por WhatsApp para respuestas rápidas.
            </p>
            <Link
              className="inline-flex mt-3 text-sm text-[#003B0C] hover:underline underline-offset-4"
              href="https://wa.me/5493512606190"
              target="_blank"
            >
              Abrir WhatsApp →
            </Link>
          </div>

          <div className="rounded-lg border border-[#003B0C] p-6 bg-background hover:border-[#003B0C] hover:shadow-[0_0_15px_#003B0C] transition-all duration-200">
            <h3 className="text-lg font-medium text-white">Datos</h3>
            <ul className="text-sm text-foreground/70 mt-2 space-y-1">
              <li>ignadiazcab1905@gmail.com</li>
              <li>Córdoba, Argentina</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}


