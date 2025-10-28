import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Proyectos y trabajos: arquitectura, interiores, renders y casos de automatización.",
};

export default function PortfolioPage() {
  const categories = [
    { key: "todos", label: "Todos" },
    { key: "arquitectura", label: "Arquitectura" },
    { key: "interiores", label: "Interiores" },
    { key: "automatizacion", label: "Automatización" },
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Portfolio</h1>
        <p className="text-white/70 max-w-2xl">
          Selección de proyectos y exploraciones visuales. Filtro demostrativo
          sin funcionalidad por ahora.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            className="px-3 py-1.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10"
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <figure
            key={i}
            className="aspect-[4/3] overflow-hidden rounded-lg border border-white/20 bg-white/5"
          >
            {/* Placeholder card */}
          </figure>
        ))}
      </div>
    </section>
  );
}


