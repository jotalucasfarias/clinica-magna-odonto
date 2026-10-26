"use client";

import React, { useState } from "react";

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
    <section id="duvidas" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="eyebrow">Perguntas frequentes</p>
        <h2 className="mt-4 text-3xl font-medium text-primary md:text-4xl">
          Dúvidas comuns
        </h2>
        <div className="mt-10 faq">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.question}
                open={isOpen}
                className="border-b border-border"
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between py-4 text-left text-base font-semibold select-none"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle(index);
                  }}
                >
                  {faq.question}
                  <span aria-hidden="true" className="faq-ic">
                    +
                  </span>
                </summary>
                <div className="pb-4 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
