'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenLeadForm: () => void;
}

export default function Hero({ onOpenLeadForm }: HeroProps) {
  // 👉 Cambia esta ruta si usas otro nombre de archivo
  const HERO_SRC = '/images/hero/hero-miranda-landscape-1920.jpg';

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-6xl">
              Moda infantil española en México
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              Somos distribuidores oficiales de <strong>Miranda</strong>, con selección cuidada
              para boutiques y mayoristas. Descubre la elegancia y calidad de la moda infantil española.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <Button
                size="lg"
                onClick={onOpenLeadForm}
                className="bg-brand-pink hover:bg-brand-pink/90 text-white"
              >
                Solicitar catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/marca/miranda">Conoce Miranda</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500 lg:justify-start">
              <span>✔ Calidad garantizada</span>
              <span>✔ Importación formal</span>
              <span>✔ Entregas puntuales</span>
              <span className="rounded-full border px-2 py-0.5">+X boutiques atendidas</span>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-sm aspect-[16/10] lg:aspect-[4/3]">
            {/* Overlay sutil para contraste */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/70 via-white/20 to-transparent" />
            <Image
              src={HERO_SRC}
              alt="Dos bebés con conjuntos de ceremonia en tonos marfil, colección Miranda"
              fill
              priority
              // si más tarde generas blurDataURL, puedes cambiar placeholder="blur" y pasar la cadena
              placeholder="empty"
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium backdrop-blur">
              Colección AW 25/26
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo opcional (mantén si te gusta) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <pattern id="hero-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-pattern)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
