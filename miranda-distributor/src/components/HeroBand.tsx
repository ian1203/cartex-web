"use client";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroBandProps {
  src: string;        // ruta de la imagen
  children?: ReactNode; // contenido (CTA) - opcional
}

export default function HeroBand({ src, children }: HeroBandProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={src}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>
      {/* Espaciado superior e inferior para que respiren CTA y footer */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {children}
      </div>
    </section>
  );
}

