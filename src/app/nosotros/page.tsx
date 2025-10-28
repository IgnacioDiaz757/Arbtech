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
        "Formamos un equipo multidisciplinario, combinando creatividad, conocimiento técnico y enfoque digital, para ofrecer soluciones que generan resultados concretos."
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Ignacio",
            role: "Programación & Automatización",
            desc:
              "Programador especializado en automatización de servicios, desarrollo web y creación de páginas web. Diseño, dronista y creador de contenido con enfoque en soluciones tecnológicas innovadoras.",
          },
          {
            name: "Bruno",
            role: "Marketing Digital & Automatización",
            desc:
              "Marketing digital y automatización de procesos para hacer crecer tu negocio. Sistemas que optimizan y escalan tu operación.",
          },
          {
            name: "Tobías",
            role: "Marketing Digital & Crecimiento",
            desc:
              "Especialista en marketing digital y crecimiento de negocios. Diseño estrategias personalizadas que generan resultados medibles y escalables.",
          },
        ].map((p, index) => (
          <AnimatedProfileCard
            key={p.name}
            name={p.name}
            role={p.role}
            description={p.desc}
            imageSrc={p.name === "Ignacio" ? "/ignacio.jpeg" : p.name === "Bruno" ? "/bruno.jpg" : "/tobias.jpg"}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}


