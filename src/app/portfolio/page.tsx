import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Proyectos y trabajos: arquitectura, interiores, renders y casos de automatización.",
};

export default function PortfolioPage() {
  const categories = [
    { 
      key: "arquitectura", 
      label: "Arquitectura", 
      href: "/arquitectura",
      description: "Renders y proyectos arquitectónicos",
      icon: "🏗️"
    },
    { 
      key: "marketing", 
      label: "Marketing Digital", 
      href: "/marketing",
      description: "Casos de éxito y estrategias digitales",
      icon: "📱"
    },
    { 
      key: "higiene", 
      label: "Higiene y Seguridad", 
      href: "/higiene-seguridad",
      description: "Planes y auditorías de seguridad",
      icon: "🛡️"
    },
    { 
      key: "programacion", 
      label: "Programación", 
      href: "/programacion",
      description: "Desarrollos y automatización",
      icon: "⚡"
    },
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Portfolio</h1>
        <p className="text-white/70 max-w-2xl">
          Explora nuestros trabajos por especialidad. Cada categoría te llevará 
          a ver proyectos específicos con detalles y resultados.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {categories.map((category) => (
          <a
            key={category.key}
            href={category.href}
            className="group relative overflow-hidden rounded-xl border border-white/20 bg-black text-white p-8 transition-all duration-300 hover:scale-105 hover:border-white/40"
          >
            <div className="space-y-4">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-semibold">{category.label}</h3>
              <p className="text-white/70 text-sm">{category.description}</p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-medium">Ver proyectos →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


