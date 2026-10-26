import React from "react";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-12 md:px-8 md:pb-24">
        <div className="reveal md:col-span-6 lg:col-span-5">
          <p className="eyebrow">Clínica odontológica · Porto Velho</p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Cuidados odontológicos <em className="font-normal text-accent">simplificados</em> para todos.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Transformamos a sua experiência odontológica em um momento positivo e seguro, com atenção à causa de cada problema.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-whatsapp/35 hover:brightness-110 active:translate-y-0 active:scale-[0.98] bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
            >
              <WhatsAppIcon className="size-5 fill-current transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" />
              Agendar avaliação pelo WhatsApp
              <span className="sr-only">(abre o WhatsApp em nova aba)</span>
            </a>
            <a
              href="#tratamentos"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 ease-out hover:bg-secondary hover:text-accent hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ver tratamentos{" "}
              <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
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
          <div className="relative overflow-hidden rounded-[2rem] shadow-sm md:rounded-tl-[8rem]">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Consultório da clínica com cadeira odontológica e luz natural"
              width={1280}
              height={1536}
              priority
              className="aspect-[4/5] w-full object-cover md:aspect-[5/5] lg:aspect-[6/5]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl shadow-primary/10 border border-border/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30 sm:left-8 cursor-default">
            <Clock className="size-5 text-accent transition-transform duration-300 ease-out hover:rotate-12" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold text-foreground">Seg a sex</p>
              <p className="text-muted-foreground">08h–11h30 · 14h–18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
