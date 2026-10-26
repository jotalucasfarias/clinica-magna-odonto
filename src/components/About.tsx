"use client";

import React from "react";
import Image from "next/image";
import { Search, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { EASING, containerVariants, itemVariants } from "@/config/motion";

const features = [
  {
    icon: Search,
    title: "Foco na causa raiz",
    desc: "Tratamos a origem do problema, não apenas o sintoma.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção",
    desc: "Cuidar antes de doer é o caminho mais simples para a saúde bucal.",
  },
  {
    icon: HeartHandshake,
    title: "Acolhimento",
    desc: "Um ambiente seguro e tranquilo, para uma experiência positiva.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-secondary/60 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASING.smoothOut }}
        >
          <Image
            src="/images/care-detail.jpg"
            alt="Escova de dentes e instrumentos odontológicos sobre tecido claro"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="eyebrow">
            Boas-vindas à Magna Odonto
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-medium leading-tight text-primary md:text-4xl"
          >
            Atendimento de qualidade, com foco no que realmente importa: você.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-5 leading-relaxed text-muted-foreground">
            Nosso propósito é proporcionar atendimento odontológico de alta qualidade com foco na causa raiz dos problemas, prevenção e bem-estar do paciente, em um ambiente acolhedor, seguro e confiável.
          </motion.p>

          <motion.ul
            variants={containerVariants}
            className="mt-8 grid gap-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3"
          >
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  variants={itemVariants}
                  className="group rounded-2xl p-3 -m-3 transition-colors duration-200 hover:bg-background/60"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-sans text-base font-semibold tracking-normal text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
