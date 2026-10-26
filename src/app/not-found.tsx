import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">Página não encontrada</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-primary sm:text-5xl">
        Erro 404
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
      >
        <ArrowLeft className="size-4" />
        Voltar para a página inicial
      </Link>
    </div>
  );
}
