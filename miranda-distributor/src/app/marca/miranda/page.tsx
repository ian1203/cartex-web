import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/app/(marketing)/_components/PageHero';
import CTASection from '@/components/CTASection';
import GalleryCarousel from '@/components/GalleryCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Globe, Heart, Shield, Star, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Marca Miranda - Moda Infantil Española | Miranda Distributor',
  description: 'Conoce Miranda, la marca española líder en moda infantil con más de 30 años de experiencia. Calidad, diseño y comodidad para los más pequeños.',
  keywords: 'Miranda, marca española, moda infantil, España, calidad, diseño, comodidad',
};

const features = [
  {
    icon: Award,
    title: 'Más de 30 años de experiencia',
    description: 'Miranda lleva décadas perfeccionando el arte de la moda infantil.',
  },
  {
    icon: Heart,
    title: 'Diseño pensado en los niños',
    description: 'Cada pieza está diseñada para la comodidad y libertad de movimiento.',
  },
  {
    icon: Shield,
    title: 'Calidad garantizada',
    description: 'Materiales premium y procesos de producción rigurosos.',
  },
  {
    icon: Globe,
    title: 'Tradición europea',
    description: 'El estilo y elegancia característicos de la moda europea.',
  },
];

const gallery = [
  {
    src: '/images/miranda-gallery/lifestyle-1.jpg',
    alt: 'Niños usando ropa Miranda en un ambiente natural',
    title: 'Comodidad en movimiento',
  },
  {
    src: '/images/miranda-gallery/details-1.jpg',
    alt: 'Detalles de calidad en prendas Miranda',
    title: 'Detalles cuidados',
  },
  {
    src: '/images/miranda-gallery/lifestyle-2.jpg',
    alt: 'Familias disfrutando con ropa Miranda',
    title: 'Momentos especiales',
  },
  {
    src: '/images/miranda-gallery/details-2.jpg',
    alt: 'Calidad de materiales Miranda',
    title: 'Materiales premium',
  },
];

// Nueva galería con las 3 imágenes nuevas
const galleryImages = [
  { src: "/images/miranda-gallery/bebes2.jpg", alt: "Bebés Miranda" },
  { src: "/images/miranda-gallery/niñas2.jpg", alt: "Niñas Miranda" },
  { src: "/images/miranda-gallery/niños2.jpg", alt: "Niños Miranda" },
];

// Función para obtener catálogos disponibles
function getCatalogos() {
  const dir = path.join(process.cwd(), "public", "catalogos");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(n => n.toLowerCase().endsWith(".pdf"))
    .map(n => ({
      file: `/catalogos/${n}`,
      label: n.replace(/[-_]/g, " ").replace(/\.pdf$/i, "").replace(/\b\w/g, l => l.toUpperCase())
    }))
    .sort((a, b) => b.label.localeCompare(a.label)); // Ordenar más recientes primero
}

export default function MirandaPage() {
  const catalogos = getCatalogos();

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          src="/images/hero/hero-niñas.jpg"
          title="Marca Miranda"
          subtitle="Elegancia, calidad y diseño español."
        />

        {/* Brand Story */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                    Nuestra historia
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600">
                    Miranda nació en España hace más de tres décadas con una visión clara: 
                    crear moda infantil que combine elegancia, comodidad y durabilidad. 
                    Desde entonces, hemos sido pioneros en el sector, estableciendo 
                    estándares de calidad que nos han convertido en una referencia europea.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-600">
                    Cada colección refleja nuestro compromiso con la innovación en el diseño 
                    y la selección cuidadosa de materiales que garantizan la comodidad y 
                    seguridad de los niños, mientras satisfacen las expectativas de estilo 
                    de los padres más exigentes.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative h-72 sm:h-80 lg:h-[380px] overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
                    <Image
                      src="/images/collections/conjunto-bebe.jpg"
                      alt="Marca Miranda"
                      fill
                      priority={false}
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                ¿Por qué elegir Miranda?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Los valores que nos distinguen en el mercado de la moda infantil
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col justify-between min-h-[140px]">
                      <div className="flex items-start">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10">
                          <feature.icon className="h-6 w-6 text-brand-pink" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <dt className="text-lg font-semibold leading-7 text-brand-dark">
                            {feature.title}
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-gray-600">
                            {feature.description}
                          </dd>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <GalleryCarousel images={galleryImages} />

        {/* How we work */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Cómo trabajamos con Miranda en México
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nuestro proceso de importación y distribución garantiza la frescura y calidad de cada pieza
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                      <Star className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Selección cuidadosa
                    </h3>
                    <p className="text-sm text-gray-600">
                      Trabajamos directamente con Miranda para seleccionar las mejores piezas de cada colección.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                      <Globe className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Importación directa
                    </h3>
                    <p className="text-sm text-gray-600">
                      Importamos directamente desde España, garantizando autenticidad y frescura de temporada.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                      <Heart className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Atención personalizada
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nuestro equipo te acompaña en cada paso, desde la selección hasta la entrega.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Catálogos anteriores */}
        <section id="catalogos" className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-brand-dark sm:text-4xl">
              Catálogos anteriores
            </h2>
            <p className="mt-3 text-gray-600">
              Descarga colecciones de temporadas anteriores.
            </p>
            {catalogos.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catalogos.map((c) => (
                  <div key={c.file} className="rounded-lg border p-4 bg-white flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-brand-pink flex-shrink-0" />
                      <span className="font-medium text-brand-dark">{c.label}</span>
                    </div>
                    <a 
                      href={c.file} 
                      download 
                      className="text-sm rounded-lg border border-neutral-300 px-3 py-1.5 hover:bg-neutral-50 transition whitespace-nowrap"
                    >
                      Descargar
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-gray-500">No hay catálogos disponibles por el momento.</p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="¿Listo para trabajar con Cartex?"
          subtitle="Únete a los distribuidores que confían en la calidad y estilo de Miranda"
          actions={[
            { label: "Contactar", href: "/contacto", variant: "secondary" },
          ]}
        />
      </main>
      
      <Footer variant="transparent" />
    </div>
  );
}
