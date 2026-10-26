"use client";

import React from "react";
import {
  AlignHorizontalSpaceAround,
  Anchor,
  Stethoscope,
  Activity,
  Smile,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { EASING, SPRINGS, containerVariants, cardItemVariants, itemVariants } from "@/config/motion";

export function Treatments() {
  const treatments = [
    {
      num: "01",
      title: "Ortodontia",
      icon: <AlignHorizontalSpaceAround className="size-6" aria-hidden="true" />,
      desc: "Alinhamento dental e correção da mordida com aparelhos convencionais, estéticos e alinhadores transparentes.",
      highlight: "Sorriso mais alinhado, melhor mastigação e higienização facilitada.",
      cta: "Falar sobre ortodontia",
      link: siteConfig.whatsappLinks.orthodontics,
    },
    {
      num: "02",
      title: "Implantes dentários",
      icon: <Anchor className="size-6" aria-hidden="true" />,
      desc: "Reposição de dentes ausentes com implantes e próteses, conforme indicação profissional.",
      highlight: "Recuperação da função mastigatória e mais segurança ao sorrir.",
      cta: "Falar sobre implantes dentários",
      link: siteConfig.whatsappLinks.implants,
    },
    {
      num: "03",
      title: "Avaliação e clínica geral",
      icon: <Stethoscope className="size-6" aria-hidden="true" />,
      desc: "Avaliação preventiva, diagnóstico de cáries, limpeza profissional, raspagem e restaurações.",
      highlight: "Prevenção e identificação precoce de problemas em dentes e gengivas.",
      cta: "Falar sobre avaliação e clínica geral",
      link: siteConfig.whatsappLinks.generalClinic,
    },
    {
      num: "04",
      title: "Endodontia (canal)",
      icon: <Activity className="size-6" aria-hidden="true" />,
      desc: "Tratamento da parte interna do dente comprometida por cáries profundas ou traumas.",
      highlight: "Possibilidade de preservar o dente natural, tratar a infecção e aliviar a dor.",
      cta: "Falar sobre endodontia",
      link: siteConfig.whatsappLinks.rootCanal,
    },
    {
      num: "05",
      title: "Próteses dentárias",
      icon: <Smile className="size-6" aria-hidden="true" />,
      desc: "Reabilitação com próteses parciais, totais ou sobre implantes, conforme a sua necessidade.",
      highlight: "Mastigação recuperada, conforto ao falar e confiança ao sorrir.",
      cta: "Falar sobre próteses dentárias",
      link: siteConfig.whatsappLinks.prosthetics,
    },
    {
      num: "06",
      title: "Gengivoplastia",
      icon: <Sparkles className="size-6" aria-hidden="true" />,
      desc: "Procedimento periodontal para remodelar o contorno da gengiva, quando indicado.",
      highlight: "Busca por maior harmonia estética entre dentes e gengiva.",
      cta: "Falar sobre gengivoplastia",
      link: siteConfig.whatsappLinks.gingivoplasty,
    },
  ];

  return (
    <section id="tratamentos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="eyebrow">
            Tratamentos
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-medium leading-tight text-primary md:text-5xl"
          >
            Como podemos ajudá-lo a cuidar melhor do seu sorriso?
          </motion.h2>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {treatments.map((t) => (
            <motion.li
              key={t.num}
              variants={cardItemVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.25, ease: EASING.smoothOut },
              }}
              className="group flex flex-col rounded-2xl border border-border/80 bg-card p-7 shadow-xs transition-shadow duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5 md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                  {t.icon}
                </span>
                <span className="font-display text-sm text-muted-foreground">{t.num}</span>
              </div>
              <h3 className="mt-6 text-2xl font-medium text-primary transition-colors duration-200 group-hover:text-primary">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm text-foreground">
                {t.highlight}
              </p>
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-whatsapp hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              >
                <WhatsAppIcon className="fill-current size-4 transition-transform duration-200 group-hover/cta:scale-110" />
                <span>{t.cta}</span>
                <span className="sr-only">(abre o WhatsApp)</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASING.smoothOut }}
          className="mt-10 flex flex-col gap-6 rounded-3xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-10 shadow-lg shadow-primary/10"
        >
          <div>
            <p className="text-sm text-primary-foreground/85">Também realizamos</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm transition-colors hover:border-primary-foreground/50 hover:bg-primary-foreground/5">
                Clareamento dental
              </li>
              <li className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm transition-colors hover:border-primary-foreground/50 hover:bg-primary-foreground/5">
                Limpeza profunda
              </li>
              <li className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm transition-colors hover:border-primary-foreground/50 hover:bg-primary-foreground/5">
                Extrações dentárias
              </li>
            </ul>
          </div>
          <motion.a
            href={siteConfig.whatsappLinks.recommendation}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1.5, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRINGS.button}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold bg-background text-primary hover:bg-sand shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <WhatsAppIcon className="size-5 fill-current" />
            Não sabe qual escolher? Fale conosco
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
