"use client";

import Image from "next/image";

interface PageHeroProps {
  src: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ src, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh]">
      {/* Fondo (imagen + overlay). Fijo en desktop */}
      <div
        className="absolute inset-0 -z-10 lg:fixed"
        aria-hidden="true"
      >
        <Image
          src={src}
          alt={title || "Hero"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {title && (
            <h1 className="text-4xl font-serif font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-white/95 drop-shadow-md max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

