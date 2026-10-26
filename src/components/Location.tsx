"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="localizacao" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-5 md:px-8">
        <div className="reveal md:col-span-2">
          <p className="eyebrow">Como chegar</p>
          <h2 className="mt-4 text-3xl font-medium text-primary md:text-4xl">
            Na Zona Sul de Porto Velho
          </h2>

          <address className="mt-6 flex gap-3 not-italic text-foreground">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
              <br />
              CEP {siteConfig.address.zip}
            </span>
          </address>

          <p className="mt-3 pl-8 text-sm text-muted-foreground">
            {siteConfig.address.reference}
          </p>

          <a
            href={siteConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Navigation className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            Abrir rota no mapa
          </a>

          <div
            id="horarios"
            className="mt-10 rounded-3xl border border-border bg-card p-6 transition-all duration-300 ease-out hover:border-primary/25 hover:shadow-md"
          >
            <h3 className="flex items-center gap-2 font-sans text-base font-semibold tracking-normal text-foreground">
              <Clock className="size-5 text-accent" aria-hidden="true" />
              Horários de atendimento
            </h3>
            <dl className="mt-4 divide-y divide-border text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">Segunda a sexta</dt>
                <dd className="text-right font-medium">{siteConfig.openingHours.weekdays}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">Almoço</dt>
                <dd className="font-medium">{siteConfig.openingHours.lunch}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">Sábado e domingo</dt>
                <dd className="text-right font-medium">{siteConfig.openingHours.weekend}</dd>
              </div>
            </dl>
            <p className="mt-2 text-xs text-muted-foreground">
              {siteConfig.openingHours.note}
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-200 md:col-span-3">
          <div
            ref={mapContainerRef}
            className="relative h-full min-h-80 overflow-hidden rounded-3xl bg-sand transition-shadow duration-300 hover:shadow-md"
            id="lazy-map"
          >
            {mapLoaded ? (
              <iframe
                title="Mapa da Clínica Magna Odonto"
                src={siteConfig.maps.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                <MapPin className="size-8" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
