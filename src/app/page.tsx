import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Treatments } from "@/components/Treatments";
import { Professional } from "@/components/Professional";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Treatments />
        <Professional />
        <Location />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StructuredData />
    </>
  );
}
