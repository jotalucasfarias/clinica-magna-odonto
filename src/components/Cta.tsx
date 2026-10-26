import React from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Cta() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground md:px-16 md:py-20">
        <h2 className="text-3xl font-medium leading-tight md:text-5xl">
          Pronto para cuidar do seu sorriso?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
          Entre em contato pelo WhatsApp e converse com nossa equipe sobre uma avaliação.
        </p>
        <a
          href={siteConfig.whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-lg shadow-whatsapp/25 mt-9 px-8 py-4 text-base"
        >
          <WhatsAppIcon className="size-5 fill-current" />
          Conversar no WhatsApp
          <span className="sr-only">(abre o WhatsApp em nova aba)</span>
        </a>
      </div>
    </section>
  );
}
