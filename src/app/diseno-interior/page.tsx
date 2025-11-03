import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Diseño interior",
  description:
    "Diseño de interiores funcional y estético: ambientaciones, renders, selección de materiales y mobiliario a medida.",
};

export default function DisenoInteriorPage() {
  const services = [
    {
      title: "Ambientación integral",
      description:
        "Conceptualización y desarrollo de espacios pensados para vivir y trabajar mejor. Cohesión entre estética y funcionalidad.",
      features: [
        "Concepto y estilo",
        "Moodboards",
        "Paleta de materiales",
        "Iluminación",
      ],
    },
    {
      title: "Renders de interior",
      description:
        "Visualizaciones 3D fotorrealistas para tomar decisiones antes de ejecutar obra o compra de mobiliario.",
      features: [
        "Imágenes fotorrealistas",
        "Varios ángulos",
        "Correcciones iterativas",
        "Alta resolución",
      ],
    },
    {
      title: "Mobiliario y equipamiento",
      description:
        "Selección y diseño de mobiliario a medida. Layout funcional y especificaciones técnicas.",
      features: [
        "Layout funcional",
        "Listados y especificaciones",
        "A medida",
        "Asesoramiento de compra",
      ],
    },
    {
      title: "Dirección y seguimiento",
      description:
        "Acompañamiento durante la implementación para asegurar calidad y cumplimiento del diseño propuesto.",
      features: [
        "Coordinación de gremios",
        "Control de calidad",
        "Ajustes en sitio",
        "Entrega final",
      ],
    },
  ];

  // Usamos imágenes locales existentes para evitar dominios externos
  const projects = [
    {
      src: "/renders/render interior 02.jpg",
      alt: "Interior Vivienda",
      category: "Residencial",
      images: [
        "/renders/render interior 02.jpg",
        "/renders/render interior.jpg",
        "/renders/renfer fachada.jpg",
      ],
    },
    {
      src: "/interior/skp diseño 13.jpg",
      alt: "Escalera Planta Baja",
      category: "Escalera Planta Baja",
      images: [
        "/interior/skp diseño 13.jpg",
        "/interior/skp diseño 15.jpg",
        "/interior/Imagen1.png",
      ],
      background: "white" as const,
    },
    {
      src: "/interior/1.jpg",
      alt: "vivienda 155",
      category: "vivienda",
      images: [
        "/interior/1.jpg",
        "/interior/2.jpg",
        "/interior/3.jpg",
      ],
      background: "white" as const,
    },
    {
      src: "/interior/img13 (2).jpg",
      alt: "Interior Vivienda 149",
      category: "Interior",
      images: [
        "/interior/img11 (2).jpg",
        "/interior/img12 (3).jpg",
        "/interior/img13 (2).jpg",
      ],
      background: "white" as const,
    },
    {
      src: "/interior/interior4.jpg",
      alt: "vivienda 143",
      category: "Interior",
      images: [
        "/interior/interior4.jpg",
        "/interior/interior5.jpg",
        "/interior/interior6.jpg",
      ],
      background: "white" as const,
    },
  ];

  return (
    <section className="space-y-16">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Diseño interior</h1>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          Creamos interiores que combinan estética, confort y funcionalidad. Del concepto a la
          ejecución, te acompañamos en cada decisión para lograr espacios únicos.
        </p>
      </div>

      {/* Servicios */}
      <div className="space-y-12">
        <h2 className="text-3xl font-semibold text-white text-center">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#003B0C] bg-black text-white p-8 hover:border-[#003B0C] hover:shadow-[0_0_15px_#003B0C] transition-all duration-200"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/80 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-[#003B0C] text-xs text-white/80"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galería */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-white">Galería de proyectos</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Selección de interiores desarrollados. Las imágenes se adaptan a su formato original en el
            modal sin recortes.
          </p>
        </div>

        <ProjectGallery projects={projects} />

        {/* CTA secundaria */}
        <div className="text-center space-y-4 pt-8">
          <h3 className="text-2xl font-semibold text-white">¿Querés ver más proyectos?</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Si tenés una idea en mente, escribinos y te mostramos más trabajos o diseñamos tu
            proyecto a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
            >
              Ver más proyectos
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
            >
              Consultar proyecto
            </a>
          </div>
        </div>
      </div>

      {/* CTA principal */}
      <div className="rounded-xl p-8 md:p-12 bg-[#003B0C] border-2 border-[#003B0C] shadow-[0_0_30px_rgba(0,59,12,0.4)] text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">¿Rediseñamos tus espacios?</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Hablemos sobre tu proyecto de interiorismo y cómo podemos potenciar tus ambientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
          >
            Consultar proyecto
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
          >
            Ver nuestro trabajo
          </a>
        </div>
      </div>
    </section>
  );
}


