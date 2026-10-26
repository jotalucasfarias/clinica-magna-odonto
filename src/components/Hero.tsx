"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { EASING, SPRINGS } from "@/config/motion";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-12 md:px-8 md:pb-24">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="eyebrow">
            Clínica odontológica · Porto Velho
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Cuidados odontológicos <em className="font-normal text-accent">simplificados</em> para todos.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Transformamos a sua experiência odontológica em um momento positivo e seguro, com atenção à causa de cada problema.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={siteConfig.whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1.5, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRINGS.button}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/35 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <WhatsAppIcon className="size-5 fill-current" />
              Agendar avaliação pelo WhatsApp
              <span className="sr-only">(abre o WhatsApp em nova aba)</span>
            </motion.a>
            <a
              href="#tratamentos"
              onClick={(e) => scrollToSection(e, "tratamentos")}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver tratamentos{" "}
              <ArrowRight
                className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Responsável técnica:{" "}
            <strong className="font-semibold text-foreground">
              {siteConfig.professional}
            </strong>{" "}
            · {siteConfig.cro}
          </p>
        </div>

        <div className="relative md:col-span-6 lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-tl-[8rem]">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Consultório da clínica com cadeira odontológica e luz natural"
              width={1280}
              height={1536}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/5] lg:aspect-[6/5]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent"
              aria-hidden="true"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASING.smoothOut, delay: 0.2 }}
            className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl shadow-primary/10 sm:left-8 border border-border/40"
          >
            <Clock className="size-5 text-accent shrink-0" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold text-foreground">Seg a sex</p>
              <p className="text-muted-foreground">08h–11h30 · 14h–18h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
