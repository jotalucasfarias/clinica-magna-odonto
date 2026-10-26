"use client";

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { containerVariants, itemVariants } from "@/config/motion";

export function Professional() {
  return (
    <section aria-labelledby="resp" className="bg-sand/60 py-20 md:py-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-4xl px-5 text-center md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="eyebrow">
          Responsável técnica
        </motion.p>
        <motion.h2
          id="resp"
          variants={itemVariants}
          className="mt-4 text-4xl font-medium text-primary md:text-5xl"
        >
          {siteConfig.professional}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-2 text-sm font-semibold tracking-widest text-muted-foreground"
        >
          {siteConfig.cro}
        </motion.p>
        <motion.blockquote
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-foreground md:text-2xl"
        >
          “Boas-vindas à Magna Odonto — transformamos a sua experiência odontológica em um momento positivo e seguro.”
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
