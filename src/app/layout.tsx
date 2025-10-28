import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ArbTech Studio",
    template: "%s | ArbTech Studio",
  },
  description:
    "Estudio multidisciplinario: arquitectura, diseño interior, automatización, marketing digital, higiene y seguridad, aberturas.",
  metadataBase: new URL("https://arbtech.example.com"),
  openGraph: {
    title: "ArbTech Studio",
    description:
      "Estudio multidisciplinario con enfoque integral en arquitectura, tecnología y marketing.",
    type: "website",
    url: "https://arbtech.example.com",
    siteName: "ArbTech Studio",
  },
  icons: {
    icon: "/arbtech-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b sticky top-0 z-50 bg-black text-white border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <Image src="/arbtech-logo.png" alt="ArbTech" width={70} height={70} priority />
              <span className="text-lg font-bold tracking-tight">ArbTech</span>
            </a>
            <nav className="flex flex-wrap items-center gap-2 sm:gap-4 text-base">
              <a className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium" href="/">Inicio</a>
              <a className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium" href="/servicios">Servicios</a>
              <a className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium" href="/portfolio">Portfolio</a>
              <a className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium" href="/nosotros">Nosotros</a>
              <a className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium" href="/contacto">Contacto</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-foreground/10 py-8">
          <div className="mx-auto max-w-6xl px-6 text-sm text-foreground/70 flex items-center justify-between">
            <p>© {new Date().getFullYear()} ArbTech Studio. Todos los derechos reservados.</p>
            <a className="hover:underline underline-offset-4" href="/contacto">Trabajemos juntos →</a>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
