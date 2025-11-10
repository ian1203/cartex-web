"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

function CatalogoPDFContent() {
  const searchParams = useSearchParams();
  const v = searchParams.get("v")?.replace(/[^a-zA-Z0-9-_\.]/g, "");
  const file = v ?? "miranda-verano-26.pdf";
  const src = `/catalogos/${file}`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-6 py-10">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-serif font-bold text-brand-dark">Catálogo</h1>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href={src} 
              download 
              className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition"
            >
              Descargar PDF
            </a>
            <Link 
              href={src} 
              target="_blank"
              className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition"
            >
              Abrir en nueva pestaña
            </Link>
          </div>
        </header>

        <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200">
          <iframe
            src={src}
            className="h-full w-full"
            title="Catálogo Miranda"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Para otra versión del catálogo, usa <code className="bg-gray-100 px-1 rounded">?v=otro-archivo.pdf</code> si está en <code className="bg-gray-100 px-1 rounded">/public/catalogos</code>.
        </p>
      </main>
      
      <Footer />
    </div>
  );
}

export default function CatalogoPDFPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div>Cargando catálogo...</div>
      </div>
    }>
      <CatalogoPDFContent />
    </Suspense>
  );
}

