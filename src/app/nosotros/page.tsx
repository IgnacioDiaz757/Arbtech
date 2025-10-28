import type { Metadata } from "next";
import AnimatedProfileCard from "@/components/AnimatedProfileCard";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Ignacio y Bruno: historia, filosofía de trabajo y enfoque interdisciplinario.",
};

export default function NosotrosPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Nosotros</h1>
        <p className="text-foreground/70 max-w-2xl">
        “Formamos un equipo multidisciplinario, combinando creatividad, conocimiento técnico y enfoque digital, para ofrecer soluciones que generan resultados concretos.”
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        {[
          {
            name: "Ignacio",
            role: "Web Developer, Marketing, Content Manager",
            desc:
              "Soy un profesional especializado en desarrollo web, marketing y gestión de contenido. Combino creatividad, conocimiento técnico y estrategias digitales para crear sitios atractivos, campañas efectivas y contenido de calidad que generan resultados reales.",
          },
          {
            name: "Bruno",
            role: "Automatización · Marketing",
            desc:
              "Sistemas a medida, automatización de procesos y estrategia digital para captación de clientes.",
          },
        ].map((p, index) => (
          <AnimatedProfileCard
            key={p.name}
            name={p.name}
            role={p.role}
            description={p.desc}
            imageSrc={p.name === "Ignacio" ? "/ignacio.jpeg" : "/bruno.jpg"}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}


