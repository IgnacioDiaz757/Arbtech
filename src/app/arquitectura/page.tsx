import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Arquitectura",
  description: "Servicios de arquitectura: proyectos, renders, dirección de obra y documentación ejecutiva con foco en eficiencia.",
};

export default function ArquitecturaPage() {
  const services = [
    {
      title: "Proyectos Arquitectónicos",
      description: "Diseño completo desde el concepto inicial hasta la documentación ejecutiva. Planos técnicos, renders fotorrealistas y especificaciones detalladas.",
      features: ["Planos técnicos", "Renders 3D", "Documentación ejecutiva", "Especificaciones"]
    },
    {
      title: "Dirección de Obra",
      description: "Supervisión técnica durante la ejecución del proyecto, asegurando que se cumplan los estándares de calidad y los plazos establecidos.",
      features: ["Supervisión técnica", "Control de calidad", "Cumplimiento de plazos", "Coordinación"]
    },
    {
      title: "Renders Fotorrealistas",
      description: "Visualizaciones 3D de alta calidad que permiten ver el proyecto terminado antes de la construcción, facilitando la toma de decisiones.",
      features: ["Visualizaciones 3D", "Alta resolución", "Múltiples ángulos", "Post-producción"]
    },
    {
      title: "Documentación Técnica",
      description: "Elaboración de planos constructivos, memorias técnicas y especificaciones que cumplen con normativas vigentes.",
      features: ["Planos constructivos", "Memorias técnicas", "Normativas", "Especificaciones"]
    }
  ];

  const renders = [
    { 
      src: "/arbtech-logo.png", 
      alt: "Casa Moderna", 
      category: "Residencial",
      images: ["/renders/img11.jpg", "/renders/img12.jpg", "/renders/img13.jpg"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Oficina Corporativa", 
      category: "Comercial",
      images: ["/renders/img14.jpg", "/renders/img15.jpg", "/renders/img16.jpg"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Restaurante", 
      category: "Comercial",
      images: ["/renders/img17.jpg", "/renders/img18.jpg", "/renders/img19.jpg"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Casa Minimalista", 
      category: "Residencial",
      images: ["/renders/img20.jpg", "/renders/img21.jpg", "/renders/img22.jpg"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Centro Médico", 
      category: "Institucional",
      images: ["/renders/img23.jpg", "/renders/img24.jpg", "/renders/img25.jpg"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Loft Industrial", 
      category: "Residencial",
      images: ["/renders/RENDER 2025.png", "/renders/render interior 02.jpg", "/renders/render interior.jpg" , "/renders/renfer fachada.jpg" ]
    }
  ];

  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Arquitectura</h1>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          Transformamos ideas en espacios funcionales y estéticos. Desde el diseño conceptual 
          hasta la ejecución, creamos arquitectura que responde a las necesidades actuales 
          con visión de futuro.
        </p>
      </div>

      {/* Servicios */}
      <div className="space-y-12">
        <h2 className="text-3xl font-semibold text-white text-center">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl border border-[#003B0C] bg-black text-white p-8 hover:border-[#003B0C] hover:shadow-[0_0_15px_#003B0C] transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/80 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full border border-[#003B0C] text-xs text-white/80">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galería de Renders */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-white">Galería de Renders</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Visualizaciones de proyectos realizados. Cada render representa la fusión 
            entre funcionalidad, estética y viabilidad constructiva.
          </p>
        </div>

        <ProjectGallery projects={renders} />
        
        {/* CTA para más proyectos */}
        <div className="text-center space-y-4 pt-8">
          <h3 className="text-2xl font-semibold text-white">¿Necesitas ver más proyectos?</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tenemos muchos más renders y proyectos arquitectónicos para mostrarte. 
            Si tienes una idea en mente, ¡hablemos para hacerla realidad!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver más proyectos
            </a>
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-6 py-3 text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Comunicate con nosotros
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl p-8 md:p-12 bg-[#003B0C] border-2 border-[#003B0C] shadow-[0_0_30px_rgba(0,59,12,0.4)] text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">¿Tienes un proyecto en mente?</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Conversemos sobre tu proyecto arquitectónico. Desde la idea inicial hasta 
          la entrega final, estaremos contigo en cada paso.
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
            Ver más proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
