import Image from "next/image";
import HighlightedService from "@/components/HighlightedService";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2 items-center min-h-[60vh] sm:min-h-[70vh] rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 bg-black text-white">
        <div className="space-y-4 sm:space-y-6">
          <span className="inline-flex items-center rounded-full border border-foreground/15 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs tracking-wide uppercase text-foreground/70 text-[10px] sm:text-xs">
            Estudio multidisciplinario
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
            Estamos aca para solucionar tus problemas y optimizar tus proyectos
          </h1>
          <p className="text-foreground/70 max-w-xl text-base sm:text-lg md:text-xl">
            Unimos arquitectura, diseño interior y automatización con marketing
            digital para entregar resultados medibles y estéticos.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-black text-white px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-medium hover:bg-white/30 hover:border-white/30 transition-colors">
              Empezar un proyecto
            </a>
            <a href="/servicios" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-medium hover:bg-white/10 hover:border-white/50 transition-colors">
              Ver servicios
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 text-center">
            <div className="text-sm sm:text-base text-foreground/70">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">+5 Años</div>
              <span className="text-xs sm:text-sm">Áreas de especialidad</span>
            </div>
            <div className="text-sm sm:text-base text-foreground/70">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">+50 Proyectos</div>
              <span className="text-xs sm:text-sm">Realizados</span>
            </div>
            <div className="text-sm sm:text-base text-foreground/70">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">Menos de 24h</div>
              <span className="text-xs sm:text-sm">Tiempo de respuesta</span>
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
      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Servicios Destacados</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4 sm:px-0">
            Nuestras especialidades principales para hacer crecer tu proyecto
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
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
      <section className="rounded-xl p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-2 border-blue-400 shadow-2xl text-white text-center space-y-4 sm:space-y-6 md:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
          ¿Listo para comenzar tu proyecto?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto text-white/90 font-light px-4">
          Trabajemos juntos para hacer realidad tu visión. Desde la idea inicial hasta la entrega final.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center rounded-xl bg-blue-900 border-2 border-blue-300 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-lg sm:text-xl md:text-2xl font-bold hover:bg-blue-800 hover:border-white hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto min-w-[200px] sm:min-w-[250px]"
          >
            Contactar ahora
          </a>
          <a 
            href="/portfolio" 
            className="inline-flex items-center justify-center rounded-xl bg-blue-900 border-2 border-blue-300 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-lg sm:text-xl md:text-2xl font-bold hover:bg-blue-800 hover:border-white hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto min-w-[200px] sm:min-w-[250px]"
          >
            Ver nuestro trabajo
          </a>
        </div>
        <div className="pt-2 sm:pt-4 md:pt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-semibold flex items-center justify-center gap-2 px-4">
          <span className="text-green-400 text-xl sm:text-2xl">✓</span>
          <span>Respuesta garantizada en menos de 24 horas</span>
        </div>
      </section>
    </div>
  );
}
