import React from "react";
import {
  AlignHorizontalSpaceAround,
  Anchor,
  Stethoscope,
  Activity,
  Smile,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Treatments() {
  const treatments = [
    {
      num: "01",
      title: "Ortodontia",
      icon: <AlignHorizontalSpaceAround className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
      desc: "Alinhamento dental e correção da mordida com aparelhos convencionais, estéticos e alinhadores transparentes.",
      highlight: "Sorriso mais alinhado, melhor mastigação e higienização facilitada.",
      cta: "Falar sobre ortodontia",
      link: siteConfig.whatsappLinks.orthodontics,
      delay: "reveal-delay-100",
    },
    {
      num: "02",
      title: "Implantes dentários",
      icon: <Anchor className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
      desc: "Reposição de dentes ausentes com implantes e próteses, conforme indicação profissional.",
      highlight: "Recuperação da função mastigatória e mais segurança ao sorrir.",
      cta: "Falar sobre implantes dentários",
      link: siteConfig.whatsappLinks.implants,
      delay: "reveal-delay-200",
    },
    {
      num: "03",
      title: "Avaliação e clínica geral",
      icon: <Stethoscope className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
      desc: "Avaliação preventiva, diagnóstico de cáries, limpeza profissional, raspagem e restaurações.",
      highlight: "Prevenção e identificação precoce de problemas em dentes e gengivas.",
      cta: "Falar sobre avaliação e clínica geral",
      link: siteConfig.whatsappLinks.generalClinic,
      delay: "reveal-delay-300",
    },
    {
      num: "04",
      title: "Endodontia (canal)",
      icon: <Activity className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
      desc: "Tratamento da parte interna do dente comprometida por cáries profundas ou traumas.",
      highlight: "Possibilidade de preservar o dente natural, tratar a infecção e aliviar a dor.",
      cta: "Falar sobre endodontia",
      link: siteConfig.whatsappLinks.rootCanal,
      delay: "reveal-delay-100",
    },
    {
      num: "05",
      title: "Próteses dentárias",
      icon: <Smile className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
      desc: "Reabilitação com próteses parciais, totais ou sobre implantes, conforme a sua necessidade.",
      highlight: "Mastigação recuperada, conforto ao falar e confiança ao sorrir.",
      cta: "Falar sobre próteses dentárias",
      link: siteConfig.whatsappLinks.prosthetics,
      delay: "reveal-delay-200",
    },
    {
      num: "06",
      title: "Gengivoplastia",
      icon: <Sparkles className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
      desc: "Procedimento periodontal para remodelar o contorno da gengiva, quando indicado.",
      highlight: "Busca por maior harmonia estética entre dentes e gengiva.",
      cta: "Falar sobre gengivoplastia",
      link: siteConfig.whatsappLinks.gingivoplasty,
      delay: "reveal-delay-300",
    },
  ];

  return (
    <section id="tratamentos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Tratamentos</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight text-primary md:text-5xl">
            Como podemos ajudá-lo a cuidar melhor do seu sorriso?
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <li
              key={t.num}
              className={`reveal ${t.delay} group relative flex flex-col rounded-3xl border border-border/80 bg-card p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 hover:bg-background md:p-9`}
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                  {t.icon}
                </span>
                <span className="font-display text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  {t.num}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-medium text-primary transition-colors duration-200 group-hover:text-accent">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm text-foreground transition-all duration-300 group-hover:border-primary group-hover:pl-4">
                {t.highlight}
              </p>
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-whatsapp transition-all duration-200 hover:text-whatsapp/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
              >
                <WhatsAppIcon className="fill-current size-4 transition-transform duration-200 group-hover/cta:scale-125 group-hover/cta:rotate-6" />
                <span className="group-hover/cta:underline group-hover/cta:translate-x-1 transition-transform duration-200">
                  {t.cta}
                </span>
                <span className="sr-only">(abre o WhatsApp)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-col gap-6 rounded-3xl bg-primary p-8 text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-sm text-primary-foreground/85">Também realizamos</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm transition-all duration-200 hover:bg-primary-foreground/20 hover:border-primary-foreground/60 hover:scale-105 cursor-default select-none">
                Clareamento dental
              </li>
              <li className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm transition-all duration-200 hover:bg-primary-foreground/20 hover:border-primary-foreground/60 hover:scale-105 cursor-default select-none">
                Limpeza profunda
              </li>
              <li className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm transition-all duration-200 hover:bg-primary-foreground/20 hover:border-primary-foreground/60 hover:scale-105 cursor-default select-none">
                Extrações dentárias
              </li>
            </ul>
          </div>
          <a
            href={siteConfig.whatsappLinks.recommendation}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 hover:bg-white active:translate-y-0 active:scale-[0.98] bg-background text-primary shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="size-5 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              Não sabe qual escolher? Fale conosco
            </span>
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
