"use client";

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { EASING, SPRINGS, containerVariants, itemVariants } from "@/config/motion";

export function Cta() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-5xl rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground md:px-16 md:py-20 shadow-xl shadow-primary/10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-medium leading-tight md:text-5xl"
        >
          Pronto para cuidar do seu sorriso?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-xl text-primary-foreground/80 leading-relaxed"
        >
          Entre em contato pelo WhatsApp e converse com nossa equipe sobre uma avaliação.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-9">
          <motion.a
            href={siteConfig.whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRINGS.button}
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/35 hover:brightness-105 px-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <WhatsAppIcon className="size-5 fill-current" />
            Conversar no WhatsApp
            <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
