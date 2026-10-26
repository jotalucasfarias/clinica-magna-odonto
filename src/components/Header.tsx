"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#inicio" className="flex items-baseline gap-1.5" aria-label="Magna Odonto, início">
          <span className="font-display text-2xl font-semibold text-primary">Magna</span>
          <span className="eyebrow">Odonto</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-muted-foreground">
            <li>
              <a href="#sobre" className="transition-colors hover:text-primary">
                A clínica
              </a>
            </li>
            <li>
              <a href="#tratamentos" className="transition-colors hover:text-primary">
                Tratamentos
              </a>
            </li>
            <li>
              <a href="#localizacao" className="transition-colors hover:text-primary">
                Localização
              </a>
            </li>
            <li>
              <a href="#duvidas" className="transition-colors hover:text-primary">
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
            className="items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-lg shadow-whatsapp/25 hidden px-5 py-2.5 sm:inline-flex"
          >
            <WhatsAppIcon className="size-5 fill-current" />
            Agendar avaliação
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-primary md:hidden"
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Menu móvel"
        hidden={!isOpen}
        className={`border-t border-border bg-background px-5 pb-6 md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col py-2">
          <li>
            <a
              href="#sobre"
              onClick={closeMenu}
              className="block py-3 font-display text-xl text-primary"
            >
              A clínica
            </a>
          </li>
          <li>
            <a
              href="#tratamentos"
              onClick={closeMenu}
              className="block py-3 font-display text-xl text-primary"
            >
              Tratamentos
            </a>
          </li>
          <li>
            <a
              href="#localizacao"
              onClick={closeMenu}
              className="block py-3 font-display text-xl text-primary"
            >
              Localização
            </a>
          </li>
          <li>
            <a
              href="#duvidas"
              onClick={closeMenu}
              className="block py-3 font-display text-xl text-primary"
            >
              Dúvidas
            </a>
          </li>
        </ul>
        <a
          href={siteConfig.whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-lg shadow-whatsapp/25 w-full"
        >
          <WhatsAppIcon className="size-5 fill-current" />
          Agendar avaliação
          <span className="sr-only">(abre o WhatsApp em nova aba)</span>
        </a>
      </nav>
    </header>
  );
}
