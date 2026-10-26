import React from "react";
import { siteConfig } from "@/config/site";

export function Professional() {
  return (
    <section aria-labelledby="resp" className="bg-sand/60 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="eyebrow">Responsável técnica</p>
        <h2 id="resp" className="mt-4 text-4xl font-medium text-primary md:text-5xl">
          {siteConfig.professional}
        </h2>
        <p className="mt-2 text-sm font-semibold tracking-widest text-muted-foreground">
          {siteConfig.cro}
        </p>
        <blockquote className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
          “Boas-vindas à Magna Odonto — transformamos a sua experiência odontológica em um momento positivo e seguro.”
        </blockquote>
      </div>
    </section>
  );
}
