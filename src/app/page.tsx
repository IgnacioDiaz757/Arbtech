import Image from "next/image";
import HighlightedService from "@/components/HighlightedService";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="grid gap-10 lg:grid-cols-2 items-center min-h-[70vh] rounded-xl p-6 sm:p-8 md:p-12 bg-black text-white">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-foreground/15 px-3 py-1 text-xs tracking-wide uppercase text-foreground/70">
            Estudio multidisciplinario
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Estamos aca para solucionar tus problemas y optimizar tus proyectos
          </h1>
          <p className="text-foreground/70 max-w-xl text-base sm:text-lg">
            Unimos arquitectura, diseño interior y automatización con marketing
            digital para entregar resultados medibles y estéticos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-black text-white px-5 py-3 text-sm font-medium hover:bg-white/30">
              Empezar un proyecto
            </a>
            <a href="/servicios" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white/10">
              Ver servicios
            </a>
          </div>
                  <div className="grid grid-cols-3 gap-6 pt-4 text-center">
                    <div className="text-sm text-foreground/70">
                      <div className="text-2xl font-semibold text-foreground">+5 Años</div>
                      Áreas de especialidad
                    </div>
                    <div className="text-sm text-foreground/70">
                      <div className="text-2xl font-semibold text-foreground">+50 Proyectos</div>
                      Realizados
                    </div>
                    <div className="text-sm text-foreground/70">
                      <div className="text-2xl font-semibold text-foreground">Menos de 24h</div>
                      Tiempo de respuesta
                    </div>
                  </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/15 bg-white">
          <Image
            src="/arbtech-logo.png"
            alt="Ilustración ArbTech"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
            priority
          />
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Servicios Destacados</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Nuestras especialidades principales para hacer crecer tu proyecto
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <HighlightedService
            title="Arquitectura & Diseño"
            description="Proyectos completos. Renders fotorrealistas y documentación técnica."
            icon="🏗️"
            index={0}
            href="/arquitectura"
          />
          <HighlightedService
            title="Marketing Digital"
            description="Estrategias digitales completas: sitios web, redes sociales y campañas publicitarias efectivas."
            icon="📱"
            index={1}
            href="/marketing"
          />
          <HighlightedService
            title="Automatización"
            description="Sistemas inteligentes que optimizan procesos y mejoran la eficiencia de tu negocio."
            icon="⚡"
            index={2}
            href="/programacion"
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="rounded-xl p-8 md:p-12 bg-gradient-to-r from-blue-700 to-black text-black text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">¿Listo para comenzar tu proyecto?</h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Trabajemos juntos para hacer realidad tu visión. Desde la idea inicial hasta la entrega final.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar ahora
          </a>
          <a 
            href="/portfolio" 
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Ver nuestro trabajo
          </a>
        </div>
        <div className="pt-4 text-sm text-white/60">
          Respuesta garantizada en menos de 24 horas
        </div>
      </section>
    </div>
  );
}
