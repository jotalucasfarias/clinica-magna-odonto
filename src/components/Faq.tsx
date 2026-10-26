"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASING, containerVariants, itemVariants } from "@/config/motion";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Como faço para agendar uma avaliação?",
      answer:
        "É só chamar a nossa equipe pelo WhatsApp (69) 99602-1979. Verificamos os horários disponíveis e confirmamos a sua consulta.",
    },
    {
      question: "Qual tratamento é indicado para o meu caso?",
      answer:
        "A indicação depende de uma avaliação clínica. Na consulta, a Dra. Magna examina o seu caso e explica as opções de tratamento.",
    },
    {
      question: "Quais são os horários de atendimento?",
      answer:
        "De segunda a sexta, das 08h às 11h30 e das 14h às 18h. Aos sábados e domingos a clínica geralmente fica fechada, salvo datas especiais ou plantões combinados previamente.",
    },
    {
      question: "Onde fica a clínica?",
      answer:
        "Na Av. Jatuarana, nº 4941, Sala 01, bairro Nova Floresta, em Porto Velho. Região central da Zona Sul, com fácil acesso e estacionamento nas proximidades.",
    },
    {
      question: "Posso tirar dúvidas antes de marcar?",
      answer:
        "Claro. Envie sua dúvida pelo WhatsApp e nossa equipe responde no horário de atendimento.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="duvidas" className="bg-secondary/60 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="eyebrow">
            Perguntas frequentes
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-medium text-primary md:text-4xl"
          >
            Dúvidas comuns
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-10 divide-y divide-border border-y border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={faq.question} variants={itemVariants}>
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => handleToggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between py-5 text-left text-base font-semibold text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md select-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASING.smoothOut }}
                    className="inline-block text-2xl font-light text-accent shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASING.smoothOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 leading-relaxed text-muted-foreground text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
