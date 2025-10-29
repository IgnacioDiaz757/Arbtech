import type { Metadata } from "next";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de arquitectura, diseño interior, programación/automatización, marketing digital, higiene y seguridad, aberturas.",
};

export default function ServiciosPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Servicios</h1>
        <p className="text-white/70 max-w-2xl">
          Soluciones integrales para potenciar tus proyectos con una mirada
          técnica, estética y tecnológica.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Arquitectura",
            desc:
              "Proyectos, renders, dirección de obra y documentación ejecutiva con foco en eficiencia.",
            href: "/arquitectura",
          },
          {
            title: "Diseño interior",
            desc:
              "Transformamos tus espacios en ambientes únicos y funcionales.",
            href: "/diseno-interior",
          },
          {
            title: "Programación / Automatización",
            desc:
              "Sistemas a medida, paginas web, automatización de tareas y optimización de procesos.",
            href: "/programacion",
          },
          {
            title: "Marketing digital",
            desc:
              "Sitios, redes y pauta; estrategia para captar y convertir clientes.",
            href: "/marketing",
          },
          {
            title: "Higiene y Seguridad",
            desc:
              "Planes, auditorías y cumplimiento normativo para obras y empresas.",
            href: "/higiene-seguridad",
          },
          {
            title: "Aberturas / AutoCAD",
            desc:
              "Asesoramiento técnico, detalles constructivos y documentación CAD/BIM.",
          },
        ].map((item, index) => (
          <AnimatedServiceCard
            key={item.title}
            title={item.title}
            description={item.desc}
            index={index}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}


