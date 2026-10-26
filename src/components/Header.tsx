"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "border-border/80 bg-background/95 shadow-sm"
          : "border-border/60 bg-background/85"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#inicio"
          className="group flex items-baseline gap-1.5 transition-all duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
          aria-label="Magna Odonto, início"
        >
          <span className="font-display text-2xl font-semibold text-primary transition-colors duration-200 group-hover:text-accent">
            Magna
          </span>
          <span className="eyebrow transition-colors duration-200 group-hover:text-primary">
            Odonto
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-2 text-sm font-medium text-muted-foreground">
            <li>
              <a
                href="#sobre"
                className="inline-block rounded-full px-3.5 py-1.5 transition-all duration-200 hover:text-primary hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
              >
                A clínica
              </a>
            </li>
            <li>
              <a
                href="#tratamentos"
                className="inline-block rounded-full px-3.5 py-1.5 transition-all duration-200 hover:text-primary hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
              >
                Tratamentos
              </a>
            </li>
            <li>
              <a
                href="#localizacao"
                className="inline-block rounded-full px-3.5 py-1.5 transition-all duration-200 hover:text-primary hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
              >
                Localização
              </a>
            </li>
            <li>
              <a
                href="#duvidas"
                className="inline-block rounded-full px-3.5 py-1.5 transition-all duration-200 hover:text-primary hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
              >
                Dúvidas
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="group items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-whatsapp/35 hover:brightness-110 active:translate-y-0 active:scale-[0.98] bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/25 hidden px-5 py-2.5 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
          >
            <WhatsAppIcon className="size-5 fill-current transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" />
            <span>Agendar avaliação</span>
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-primary transition-all duration-200 hover:bg-secondary active:scale-90 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
          >
            <span
              className={`transition-transform duration-300 ease-out ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Menu móvel"
          className="overflow-hidden border-t border-border bg-background px-5 pb-6"
        >
          <ul className="flex flex-col py-2">
            <li>
              <a
                href="#sobre"
                onClick={closeMenu}
                className="block py-3 px-3 rounded-xl font-display text-xl text-primary transition-all duration-200 hover:text-accent hover:bg-secondary/60 hover:translate-x-2 active:scale-[0.98]"
              >
                A clínica
              </a>
            </li>
            <li>
              <a
                href="#tratamentos"
                onClick={closeMenu}
                className="block py-3 px-3 rounded-xl font-display text-xl text-primary transition-all duration-200 hover:text-accent hover:bg-secondary/60 hover:translate-x-2 active:scale-[0.98]"
              >
                Tratamentos
              </a>
            </li>
            <li>
              <a
                href="#localizacao"
                onClick={closeMenu}
                className="block py-3 px-3 rounded-xl font-display text-xl text-primary transition-all duration-200 hover:text-accent hover:bg-secondary/60 hover:translate-x-2 active:scale-[0.98]"
              >
                Localização
              </a>
            </li>
            <li>
              <a
                href="#duvidas"
                onClick={closeMenu}
                className="block py-3 px-3 rounded-xl font-display text-xl text-primary transition-all duration-200 hover:text-accent hover:bg-secondary/60 hover:translate-x-2 active:scale-[0.98]"
              >
                Dúvidas
              </a>
            </li>
          </ul>
          <a
            href={siteConfig.whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-whatsapp/35 hover:brightness-110 active:translate-y-0 active:scale-[0.98] bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/25 w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
          >
            <WhatsAppIcon className="size-5 fill-current transition-transform duration-300 group-hover:scale-110" />
            <span>Agendar avaliação</span>
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
