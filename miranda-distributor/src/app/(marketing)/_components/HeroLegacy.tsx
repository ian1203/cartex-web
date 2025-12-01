"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  onOpenLeadForm?: () => void;
}

const HERO_SRC = "/images/hero/hero-miranda-landscape-1920.jpg";

export default function Hero({ onOpenLeadForm }: HeroProps) {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 300);
        setOpacity(1 - (y / 300) * 0.15); // 1 -> 0.85
        setScale(1 - (y / 300) * 0.02);   // 1 -> 0.98
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[72vh] sm:min-h-[78vh] lg:min-h-[90vh]">
      {/* Fondo: fijo en desktop */}
      <div className="absolute inset-0 -z-10 lg:fixed">
        <Image
          src={HERO_SRC}
          alt="Dos bebés con conjuntos de ceremonia en tonos marfil, colección Miranda"
          fill
          priority
          placeholder="empty"      // cambia a blur cuando lo actives
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/45 to-white/10" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20 sm:pt-28 lg:pt-36">
        <div
          style={{ opacity, transform: `scale(${scale})` }}
          className="max-w-3xl transition-[opacity,transform] duration-150 will-change-transform"
        >
          <h1 className="text-4xl font-serif font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Moda infantil española en México
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Somos distribuidores oficiales de <strong>Miranda</strong>, con selección cuidada
            para boutiques y mayoristas. Descubre la elegancia y calidad de la moda infantil
            española.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenLeadForm}
              className="inline-flex items-center rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
              aria-label="Solicitar catálogo"
            >
              Solicitar catálogo
            </button>
            <Link
              href="/marca/miranda"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-900/80 hover:text-neutral-900"
              aria-label="Conocer la marca Miranda"
            >
              Conoce Miranda
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
            <span>✔ Calidad garantizada</span>
            <span>✔ Importación formal</span>
            <span>✔ Entregas puntuales</span>
            <span className="rounded-full border px-2 py-0.5">+X boutiques atendidas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
