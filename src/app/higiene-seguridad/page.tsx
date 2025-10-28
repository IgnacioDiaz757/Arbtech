import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Higiene y Seguridad",
  description:
    "Servicios de higiene y seguridad: planes, auditorías, capacitación y cumplimiento normativo.",
};

export default function HigieneSeguridadPage() {
  const services = [
    {
      title: "Planes de Higiene y Seguridad",
      desc: "Elaboración de planes integrales adaptados a tu rubro y normativas vigentes para garantizar un ambiente laboral seguro.",
    },
    {
      title: "Auditorías de Seguridad",
      desc: "Evaluación exhaustiva de condiciones de trabajo, identificación de riesgos y propuesta de mejoras preventivas.",
    },
    {
      title: "Capacitación del Personal",
      desc: "Programas de formación en seguridad laboral, primeros auxilios y manejo de equipos de protección personal.",
    },
    {
      title: "Cumplimiento Normativo",
      desc: "Asesoramiento para el cumplimiento de leyes de higiene y seguridad, documentación requerida y trámites oficiales.",
    },
    {
      title: "Gestión de Riesgos",
      desc: "Identificación, evaluación y control de riesgos laborales con implementación de medidas preventivas efectivas.",
    },
    {
      title: "Inspecciones de Obra",
      desc: "Supervisión técnica en obras de construcción para garantizar el cumplimiento de normas de seguridad.",
    },
  ];

  const projects = [
    { src: "/arbtech-logo.png", alt: "Plan de Seguridad Industrial", category: "Planificación" },
    { src: "/arbtech-logo.png", alt: "Auditoría de Fábrica", category: "Auditoría" },
    { src: "/arbtech-logo.png", alt: "Capacitación en Obra", category: "Formación" },
    { src: "/arbtech-logo.png", alt: "Certificación ISO 45001", category: "Certificación" },
    { src: "/arbtech-logo.png", alt: "Análisis de Riesgos", category: "Evaluación" },
    { src: "/arbtech-logo.png", alt: "Inspección de Obra", category: "Supervisión" },
  ];

  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Higiene y Seguridad que Protege
        </h1>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          Garantizamos ambientes laborales seguros y saludables a través de planes
          integrales, auditorías especializadas y capacitación continua del personal.
        </p>
      </div>

      {/* Servicios de Higiene y Seguridad */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-white text-center">Nuestros Servicios</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/20 bg-black text-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-white/40"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-white text-center">¿Por qué elegirnos?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center space-y-2">
            <div className="text-3xl">🛡️</div>
            <h3 className="text-lg font-semibold text-white">Experiencia Comprobada</h3>
            <p className="text-sm text-white/70">Más de 5 años protegiendo empresas</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl">📋</div>
            <h3 className="text-lg font-semibold text-white">Cumplimiento Total</h3>
            <p className="text-sm text-white/70">100% de normativas vigentes</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl">👥</div>
            <h3 className="text-lg font-semibold text-white">Personal Capacitado</h3>
            <p className="text-sm text-white/70">Formación continua garantizada</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl">⚡</div>
            <h3 className="text-lg font-semibold text-white">Respuesta Rápida</h3>
            <p className="text-sm text-white/70">Atención en menos de 24 horas</p>
          </div>
        </div>
      </div>

      {/* Galería de Proyectos */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-white text-center">Nuestros Trabajos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <figure
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/20 bg-black group"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{project.alt}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl p-8 md:p-12 bg-gradient-to-r from-blue-800 to-gray-700 text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">¿Necesitas proteger tu empresa?</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Desarrollamos estrategias de higiene y seguridad personalizadas que cumplen 
          con todas las normativas y protegen a tu equipo de trabajo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: '#000000' }}
          >
            Consultar plan de seguridad
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



