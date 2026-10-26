"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { EASING, SPRINGS } from "@/config/motion";

const navLinks = [
  { href: "#sobre", label: "A clínica" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#duvidas", label: "Dúvidas" },
];

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
        <a
          href="#inicio"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg py-1"
          aria-label="Magna Odonto, início"
        >
          <Image
            src="/logo-clinica.png"
            alt="Magna Odonto"
            width={1153}
            height={457}
            sizes="(max-width: 640px) 110px, 130px"
            priority
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:h-11"
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={siteConfig.whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1.5, scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRINGS.button}
            className="items-center justify-center gap-2 rounded-full text-sm font-semibold bg-whatsapp text-whatsapp-foreground shadow-md shadow-whatsapp/20 hover:shadow-lg hover:shadow-whatsapp/30 hover:brightness-105 hidden px-5 py-2.5 sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <WhatsAppIcon className="size-5 fill-current" />
            Agendar avaliação
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </motion.a>

          <motion.button
            type="button"
            className="grid size-10 place-items-center rounded-full text-primary hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
            whileTap={{ scale: 0.92 }}
            transition={SPRINGS.button}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu móvel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASING.smoothOut }}
            className="overflow-hidden border-t border-border bg-background px-5 pb-6 md:hidden"
          >
            <motion.ul
              className="flex flex-col py-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, ease: EASING.smoothOut },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 font-display text-xl text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: EASING.smoothOut },
                  },
                }}
                className="mt-4 sm:hidden"
              >
                <a
                  href={siteConfig.whatsappLinks.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-md shadow-whatsapp/20"
                >
                  <WhatsAppIcon className="size-5 fill-current" />
                  Agendar avaliação
                  <span className="sr-only">(abre o WhatsApp em nova aba)</span>
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
