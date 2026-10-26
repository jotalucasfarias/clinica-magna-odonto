"use client";

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SPRINGS } from "@/config/motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={siteConfig.whatsappLinks.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Magna Odonto no WhatsApp (abre em nova aba)"
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={SPRINGS.button}
      className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl shadow-whatsapp/30 hover:shadow-2xl hover:shadow-whatsapp/40 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <WhatsAppIcon className="size-7 fill-current" />
      <span className="sr-only">Conversar pelo WhatsApp</span>
    </motion.a>
  );
}
