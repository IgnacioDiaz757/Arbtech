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
            role: "Maestro Mayor de Obras",
            desc:
              "Maestro Mayor de Obras con experiencia en construcción y diseño. Realiza planos con AutoCAD, aberturas a medida y diseños personalizados para proyectos arquitectónicos.",
          },
          {
            name: "Tobías",
            role: "Marketing Digital & Anuncios",
            desc:
              "Especialista en marketing digital, anuncios publicitarios y potenciación de negocios y empresas. Diseño estrategias personalizadas que generan resultados medibles y escalables para hacer crecer tu empresa.",
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


