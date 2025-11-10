"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia cada 7 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-2xl font-serif font-bold text-brand-dark">
          Galería Miranda
        </h3>
        <div className="mt-8 relative">
          {/* Contenedor del carrusel */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            {images.map((img, index) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-black"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

