import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";

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
    <html lang="es" className="h-full overflow-x-hidden bg-black" style={{ backgroundColor: '#000000' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-full bg-black`}
        style={{ backgroundColor: '#000000' }}
      >
        <Header />
        <main className="flex-1 mx-auto max-w-6xl w-full px-4 sm:px-6 py-8 sm:py-10 pb-0 bg-black" style={{ backgroundColor: '#000000' }}>
          {children}
        </main>
        <footer className="border-t border-foreground/10 py-6 sm:py-8 w-full bg-black">
          <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 text-xs sm:text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <p>© {new Date().getFullYear()} ArbTech Studio. Todos los derechos reservados.</p>
            <a className="hover:underline underline-offset-4 whitespace-nowrap" href="/contacto">Trabajemos juntos →</a>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
