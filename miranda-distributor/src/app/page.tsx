'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeHeroFull from "./(marketing)/_components/HomeHeroFull";
import FeatureList from '@/components/FeatureList';
import Steps from '@/components/Steps';
import NewsletterForm from '@/components/NewsletterForm';
import LeadForm from '@/components/LeadForm';
import TestimonialCard from '@/components/TestimonialCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Crown, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsappFab from '@/components/WhatsappFab';
import { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    nombre: 'María González',
    empresa: 'Boutique Infantil Elegance',
    mensaje: 'La calidad de Miranda es excepcional. Nuestros clientes siempre quedan encantados con las prendas. El servicio de Miranda Distributor es impecable.',
    calificacion: 5,
  },
  {
    id: '2',
    nombre: 'Carlos Rodríguez',
    empresa: 'Tienda de Niños Premium',
    mensaje: 'Trabajar con Miranda Distributor ha sido una excelente decisión. Las entregas son puntuales y la atención al cliente es de primera calidad.',
    calificacion: 5,
  },
  {
    id: '3',
    nombre: 'Ana Martínez',
    empresa: 'Moda Infantil Boutique',
    mensaje: 'La selección de Miranda es perfecta para nuestro público. Los diseños españoles tienen un toque especial que nuestros clientes adoran.',
    calificacion: 5,
  },
];

const collections = [
  {
    name: 'Ceremonia',
    description: 'Vestidos y trajes elegantes para ocasiones especiales',
    image: '/images/collections/ceremonia.jpg',
    href: '/catalogo?categoria=Ceremonia',
    icon: Crown,
  },
  {
    name: 'Casual',
    description: 'Conjuntos cómodos y modernos para el día a día',
    image: '/images/collections/casual.jpg',
    href: '/catalogo?categoria=Conjuntos',
    icon: Heart,
  },
  {
    name: 'Temporada',
    description: 'Las últimas tendencias de cada temporada',
    image: '/images/collections/temporada.jpg',
    href: '/catalogo',
    icon: Sparkles,
  },
];

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HomeHeroFull onOpenLeadForm={() => setIsLeadFormOpen(true)} />
        
        {/* Todo lo que sigue sobre fondo blanco, sin huecos */}
        <div className="relative z-10 bg-white">
          <section className="py-16">
            <FeatureList />
          </section>
          
          {/* Featured Collections */}
          <section id="colecciones" className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                  Colecciones destacadas
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Descubre nuestras selecciones más populares de Miranda
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {collections.map((collection) => (
                <Card key={collection.name} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-brand-dark">
                        <collection.icon className="mr-1 h-3 w-3" />
                        {collection.name}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-brand-dark mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {collection.description}
                    </p>
                    <Button asChild className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white">
                      <Link href={collection.href}>
                        Ver colección
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </section>

          {/* Miranda Brand Section */}
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                  <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                      Marca Miranda
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                      Miranda es una marca española con más de 30 años de experiencia en moda infantil. 
                      Su compromiso con la calidad, el diseño y la comodidad la ha convertido en una 
                      referencia en el sector de la moda infantil europea.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                      Cada pieza está diseñada pensando en la comodidad del niño y la elegancia que 
                      buscan los padres. Trabajamos directamente con Miranda para traerte las últimas 
                      colecciones a México.
                    </p>
                    <div className="mt-8">
                      <Button asChild size="lg" className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                        <Link href="/marca/miranda">
                          Conoce la marca
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative h-72 sm:h-80 lg:h-[380px] overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
                      <Image
                        src="/images/collections/conjunto-bebe.jpg"
                        alt="Marca Miranda"
                        fill
                        priority={false}
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <Steps />
          </section>
          
          {/* Testimonials */}
          <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                  Lo que dicen nuestros clientes
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Boutiques y mayoristas que confían en nosotros
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-14">
            <NewsletterForm />
          </section>
        </div>
        
        <WhatsappFab />
      </main>
      
      <Footer variant="transparent" />
      
      <LeadForm 
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
      />
    </div>
  );
}
