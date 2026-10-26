import React from "react";
import Image from "next/image";
import { Search, ShieldCheck, HeartHandshake } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="reveal overflow-hidden rounded-3xl shadow-sm">
          <Image
            src="/images/care-detail.jpg"
            alt="Escova de dentes e instrumentos odontológicos sobre tecido claro"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
        <div className="reveal reveal-delay-100">
          <p className="eyebrow">Boas-vindas à Magna Odonto</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight text-primary md:text-4xl">
            Atendimento de qualidade, com foco no que realmente importa: você.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Nosso propósito é proporcionar atendimento odontológico de alta qualidade com foco na causa raiz dos problemas, prevenção e bem-estar do paciente, em um ambiente acolhedor, seguro e confiável.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            <li className="reveal reveal-delay-200 group rounded-2xl border border-transparent p-4 -m-2 transition-all duration-300 ease-out hover:bg-card hover:border-border/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <div className="size-11 grid place-items-center rounded-xl bg-sand text-accent transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-md">
                <Search className="size-5 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-sans text-base font-semibold tracking-normal text-foreground transition-colors duration-200 group-hover:text-primary">
                Foco na causa raiz
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Tratamos a origem do problema, não apenas o sintoma.
              </p>
            </li>
            <li className="reveal reveal-delay-300 group rounded-2xl border border-transparent p-4 -m-2 transition-all duration-300 ease-out hover:bg-card hover:border-border/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <div className="size-11 grid place-items-center rounded-xl bg-sand text-accent transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-md">
                <ShieldCheck className="size-5 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-sans text-base font-semibold tracking-normal text-foreground transition-colors duration-200 group-hover:text-primary">
                Prevenção
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Cuidar antes de doer é o caminho mais simples para a saúde bucal.
              </p>
            </li>
            <li className="reveal reveal-delay-400 group rounded-2xl border border-transparent p-4 -m-2 transition-all duration-300 ease-out hover:bg-card hover:border-border/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <div className="size-11 grid place-items-center rounded-xl bg-sand text-accent transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-md">
                <HeartHandshake className="size-5 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-sans text-base font-semibold tracking-normal text-foreground transition-colors duration-200 group-hover:text-primary">
                Acolhimento
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Um ambiente seguro e tranquilo, para uma experiência positiva.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
