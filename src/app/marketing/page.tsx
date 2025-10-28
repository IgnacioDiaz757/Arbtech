import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Marketing Digital",
  description: "Estrategias digitales completas: sitios web, redes sociales y campañas publicitarias efectivas para hacer crecer tu negocio.",
};

export default function MarketingPage() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para conversión. Desde landing pages hasta e-commerce completos.",
      features: ["Diseño responsivo", "SEO optimizado", "Velocidad de carga", "Conversión"]
    },
    {
      title: "Redes Sociales",
      description: "Gestión completa de redes sociales con contenido estratégico, community management y crecimiento orgánico.",
      features: ["Content strategy", "Community management", "Crecimiento orgánico", "Engagement"]
    },
    {
      title: "Publicidad Digital",
      description: "Campañas publicitarias en Google Ads, Facebook, Instagram y LinkedIn para maximizar el ROI de tu inversión.",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"]
    },
    {
      title: "Branding Digital",
      description: "Identidad visual coherente, storytelling y posicionamiento de marca en el entorno digital.",
      features: ["Identidad visual", "Storytelling", "Posicionamiento", "Coherencia"]
    }
  ];

  const projects = [
    { 
      src: "/arbtech-logo.png", 
      alt: "E-commerce Fashion", 
      category: "Desarrollo Web",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Campaña Restaurante", 
      category: "Redes Sociales",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Landing Page SaaS", 
      category: "Conversión",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Branding Startup", 
      category: "Identidad",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Google Ads Local", 
      category: "Publicidad",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    },
    { 
      src: "/arbtech-logo.png", 
      alt: "Instagram Growth", 
      category: "Social Media",
      images: ["/arbtech-logo.png", "/arbtech-logo.png", "/arbtech-logo.png"]
    }
  ];

  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Marketing Digital</h1>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          Potenciamos tu presencia digital con estrategias integrales que conectan 
          tu marca con el público correcto. Desde el desarrollo web hasta campañas 
          publicitarias que generan resultados medibles.
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

      {/* Galería de Proyectos */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-white">Proyectos de Marketing</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Casos de éxito en marketing digital. Cada proyecto representa una estrategia 
            personalizada para maximizar el impacto y los resultados.
          </p>
        </div>

        <ProjectGallery projects={projects} />
        
        {/* CTA para más proyectos */}
        <div className="text-center space-y-4 pt-8">
          <h3 className="text-2xl font-semibold text-white">¿Necesitas ver más proyectos?</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tenemos muchos más casos de éxito en marketing digital para mostrarte. 
            Si tienes una estrategia en mente, ¡hablemos para hacerla realidad!
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
      <div className="rounded-xl p-8 md:p-12 bg-gradient-to-r from-blue-800 to-gray-700 text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">¿Listo para hacer crecer tu negocio?</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Desarrollamos estrategias digitales personalizadas que conectan tu marca 
          con tu audiencia ideal y generan resultados tangibles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: '#000000' }}
          >
            Consultar estrategia
          </a>
          <a 
            href="/portfolio" 
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-8 py-4 text-lg font-semibold hover:bg-white/20 transition-colors"
            style={{ color: '#000000' }}
          >
            Ver casos de éxito
          </a>
        </div>
      </div>
    </section>
  );
}
