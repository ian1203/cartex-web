"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
  onOpenLeadForm?: () => void;
}

const HERO_SRC = "/images/hero/hero-niños-3840.webp";

export default function HomeHeroFull({ onOpenLeadForm }: Props) {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const rafRef = useRef<number | null>(null);

  // Pequeña animación al hacer scroll (suave y barata)
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 300);
        setOpacity(1 - (y / 300) * 0.15);
        setScale(1 - (y / 300) * 0.02);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[70vh] lg:min-h-[90vh]">
      {/* Fondo (imagen + overlay) - se extiende hasta el footer */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none lg:fixed lg:inset-0"
        aria-hidden="true"
      >
        <Image
          src={HERO_SRC}
          alt="Moda infantil Miranda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 lg:pt-32">
        <div
          style={{ opacity, transform: `scale(${scale})` }}
          className="max-w-3xl transition-[opacity,transform] duration-150"
        >
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
            Moda infantil española en México
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/95 drop-shadow-md">
            Somos comercializadores oficiales de <strong>Miranda</strong>, con
            selección cuidada para boutiques y mayoristas. Descubre la elegancia
            y calidad de la moda infantil española.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenLeadForm}
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white/90 hover:text-white border-2 border-transparent hover:border-white/50 transition"
              aria-label="Solicitar catálogo"
            >
              Solicitar catálogo
            </button>

            <Link
              href="/marca/miranda"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white/90 hover:text-white border-2 border-transparent hover:border-white/50 transition"
              aria-label="Conocer la marca Miranda"
            >
              Conoce Miranda
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white drop-shadow-md">
            <span>✔ Calidad garantizada</span>
            <span>✔ Importación formal</span>
            <span>✔ Entregas puntuales</span>
            
          </div>
        </div>
      </div>
    </section>
  );
}
