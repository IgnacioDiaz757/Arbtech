"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="border-b sticky top-0 z-50 bg-black text-white border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Image 
              src="/arbtech-logo.png" 
              alt="ArbTech" 
              width={50} 
              height={50} 
              className="sm:w-[60px] sm:h-[60px]"
              priority 
            />
            <span className="text-base sm:text-lg font-bold tracking-tight whitespace-nowrap">ArbTech</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 xl:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5493512606190"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.481 2.241 2.24 3.481 5.226 3.481 8.407 0 6.556-5.338 11.892-11.893 11.892-1.99-.001-3.94-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.923 3.574 1.448 5.463 1.449 5.235 0 9.484-4.25 9.484-9.485s-4.249-9.485-9.484-9.485-9.484 4.25-9.484 9.485c0 1.742.502 3.45 1.464 4.93l-1.654 6.304 4.947-1.299zm-2.672-2.884l-.46-.217c-1.013-.479-2.379.61-2.379 1.148 0 .538 1.068 1.61 1.153 1.727.085.117 2.03.323 3.966-1.458 1.936-1.781 2.169-1.749 2.56-1.123.391.627.391.917.275 1.123-.116.206-.429.519-.645.735-.216.216-.429.323-.645.43-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5493512606190"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] transition-colors font-medium text-base text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.481 2.241 2.24 3.481 5.226 3.481 8.407 0 6.556-5.338 11.892-11.893 11.892-1.99-.001-3.94-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.923 3.574 1.448 5.463 1.449 5.235 0 9.484-4.25 9.484-9.485s-4.249-9.485-9.484-9.485-9.484 4.25-9.484 9.485c0 1.742.502 3.45 1.464 4.93l-1.654 6.304 4.947-1.299zm-2.672-2.884l-.46-.217c-1.013-.479-2.379.61-2.379 1.148 0 .538 1.068 1.61 1.153 1.727.085.117 2.03.323 3.966-1.458 1.936-1.781 2.169-1.749 2.56-1.123.391.627.391.917.275 1.123-.116.206-.429.519-.645.735-.216.216-.429.323-.645.43-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321-.216.107-.43.214-.646.321"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

