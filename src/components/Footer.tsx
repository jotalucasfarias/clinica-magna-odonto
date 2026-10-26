import React from "react";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-primary">
            Magna <span className="eyebrow">Odonto</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Cuidados odontológicos simplificados para todos.
          </p>
          <p className="mt-4 text-sm">
            {siteConfig.professional}
            <br />
            <span className="text-muted-foreground">
              Responsável técnica · {siteConfig.cro}
            </span>
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <WhatsAppIcon className="fill-current size-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 break-all hover:text-primary"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal">Endereço</h2>
          <address className="mt-4 text-sm not-italic text-muted-foreground">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
            <br />
            CEP {siteConfig.address.zip}
          </address>
          <p className="mt-3 text-sm text-muted-foreground">
            Seg a sex · 08h–11h30 e 14h–18h
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal">Redes sociais</h2>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Magna Odonto"
              className="grid size-11 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-5 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" className="fill-current" />
              </svg>
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Magna Odonto"
              className="grid size-11 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
                <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Clínica Magna Odonto · Porto Velho - RO
      </p>
    </footer>
  );
}
