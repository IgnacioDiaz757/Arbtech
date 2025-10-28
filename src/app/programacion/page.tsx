import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Programación & Automatización",
  description: "Sistemas inteligentes que optimizan procesos y mejoran la eficiencia de tu negocio. Automatización, desarrollo web y soluciones tecnológicas.",
};

export default function ProgramacionPage() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas, APIs robustas y sistemas escalables. Tecnologías como React, Node.js, Typescript y bases de datos.",
      features: ["React/Next.js", "Node.js", "APIs REST"]
    },
    {
      title: "Automatización de Procesos",
      description: "Automatizamos tareas repetitivas para aumentar la eficiencia. Integraciones entre sistemas, workflows y optimización de flujos de trabajo.",
      features: ["Workflows", "Integraciones", "APIs", "Optimización"]
    },
    {
      title: "Sistemas de Gestión",
      description: "Desarrollamos sistemas personalizados para la gestión de tu negocio: CRM, inventario, facturación y reportes automatizados.",
      features: ["CRM personalizado", "Gestión de inventario", "Facturación", "Reportes"]
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoramiento en arquitectura de software, migración de sistemas, optimización de performance y mejores prácticas de desarrollo.",
      features: ["Arquitectura", "Migración", "Performance", "Mejores prácticas"]
    }
  ];

  const projects = [
    { 
      src: "/registroasociado.png", 
      alt: "Sistema de Gestión Viveros Unidos", 
      category: "Sistema de Gestión",
      images: ["/Programacionweb/registroasociado.png", "/Programacionweb/sistemagestionassociados.png", "/Programacionweb/viverossistema.png"]
    },
    { 
      src: "/almeriaespañaarb.png", 
      alt: "Pagina Web Almeria", 
      category: "Plataforma Web de Contacto",
      images: ["/almeria/almeriaespañaarb.png", "/almeria/almeriaarb3.png", "/almeria/almeriaespañaarb2.png"]
    },
    { 
      src: "/riverasgestion/sistemawebriverasdelsuquia.png", 
      alt: "Sistema Web Gestión Riveras Del Suquía", 
      category: "Sistema de Gestión",
      images: ["/riverasgestion/sistemawebriverasgestion.png", "/riverasgestion/sistemawebriverasdelsuquia.png", "/riverasgestion/paneladminriveraswebgestion.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Automatización Inventario", 
      category: "Automatización",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "App Móvil", 
      category: "Mobile",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Integración ERP", 
      category: "Integración",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    }
  ];

  return (
    <div className="bg-black -ml-6 -mr-6 -mt-8 -mb-8 pl-6 pr-6 pt-8 pb-8">
      <div className="space-y-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Programación & Automatización</h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Desarrollamos soluciones tecnológicas que transforman la forma en que trabajas. 
            Desde aplicaciones web hasta sistemas de automatización que optimizan procesos 
            y maximizan la eficiencia de tu negocio.
          </p>
        </div>

      {/* Servicios */}
      <div className="space-y-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-white text-center">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/20 bg-black text-white p-8 hover:border-white/40 transition-colors">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/80 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full border border-white/20 text-xs text-white/80">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galería de Proyectos */}
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-white">Proyectos de Programación</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Soluciones tecnológicas desarrolladas para diferentes industrias. 
            Cada proyecto representa una solución personalizada para optimizar 
            procesos y mejorar la eficiencia.
          </p>
        </div>

        <ProjectGallery projects={projects} />
        
        {/* CTA para más proyectos */}
        <div className="text-center space-y-4 pt-8">
          <h3 className="text-2xl font-semibold text-white">¿Necesitas ver más proyectos?</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tenemos muchos más desarrollos y soluciones tecnológicas para mostrarte. 
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
      <div className="max-w-6xl mx-auto">
      <div className="rounded-xl p-8 md:p-12 bg-[#003B0C] text-white text-center space-y-6 shadow-[0_0_30px_rgba(0,59,12,0.4)]">
        <h2 className="text-3xl md:text-4xl font-semibold">¿Necesitas una solución tecnológica?</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Desarrollamos software personalizado que se adapta a las necesidades 
          específicas de tu negocio y automatiza procesos para maximizar la eficiencia.
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
            Ver desarrollos
          </a>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
