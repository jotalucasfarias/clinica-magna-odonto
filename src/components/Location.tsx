"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { EASING, SPRINGS, containerVariants, itemVariants } from "@/config/motion";

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
    <section id="localizacao" className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-5 md:px-8">
        <motion.div
          className="md:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="eyebrow">
            Como chegar
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-medium text-primary md:text-4xl"
          >
            Na Zona Sul de Porto Velho
          </motion.h2>

          <motion.address
            variants={itemVariants}
            className="mt-6 flex gap-3 not-italic text-foreground"
          >
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
              <br />
              CEP {siteConfig.address.zip}
            </span>
          </motion.address>

          <motion.p variants={itemVariants} className="mt-3 pl-8 text-sm text-muted-foreground">
            {siteConfig.address.reference}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6">
            <motion.a
              href={siteConfig.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1.5, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRINGS.button}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Navigation
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
              Abrir rota no mapa
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            id="horarios"
            className="mt-10 rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-shadow duration-300 hover:shadow-md"
          >
            <h3 className="flex items-center gap-2 font-sans text-base font-semibold tracking-normal text-foreground">
              <Clock className="size-5 text-accent shrink-0" aria-hidden="true" />
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
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: EASING.smoothOut, delay: 0.1 }}
        >
          <div
            ref={mapContainerRef}
            className="relative h-full min-h-80 overflow-hidden rounded-3xl bg-sand shadow-sm"
            id="lazy-map"
          >
            {mapLoaded ? (
              <iframe
                title="Mapa da Clínica Magna Odonto"
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-80 w-full border-0 transition-opacity duration-700 ease-out"
              />
            ) : (
              <div className="grid h-full min-h-80 place-items-center text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="size-5 text-accent" />
                  Carregando mapa...
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
