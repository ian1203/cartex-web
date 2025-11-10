"use client";
import Link from "next/link";

export default function ReadyCTA() {
  return (
    <section className="pt-0 pb-14 bg-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
          ¿Listo para trabajar con Cartex?
        </h2>
        <p className="mt-3 text-gray-600">
          Únete a los distribuidores que ya confían en la calidad y estilo de Miranda
        </p>
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-lg border border-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}

