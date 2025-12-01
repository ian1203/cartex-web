import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/app/(marketing)/_components/PageHero';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Truck, Users, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Cómo comprar - Proceso Mayorista | Miranda Distributor',
  description: 'Conoce nuestro proceso de compra mayorista, requisitos, políticas y tiempos de entrega para distribuidores de Miranda en México.',
  keywords: 'compra mayorista, distribuidores, proceso compra, Miranda, México',
};

const requirements = [
  {
    icon: Users,
    title: 'Ser mayorista o boutique',
    description: 'Debes tener un negocio establecido de moda infantil.',
  },
  {
    icon: FileText,
    title: 'Documentación comercial',
    description: 'RFC, comprobante de domicilio fiscal y referencias comerciales.',
  },
  {
    icon: CreditCard,
    title: 'Pedidos mínimos',
    description: 'Pedido mínimo de $30,000 MXN por temporada.',
  },
];

const policies = [
  {
    category: 'Pedidos',
    items: [
      { policy: 'Pedido mínimo', value: '$30,000 MXN' },
      { policy: 'Tiempo de confirmación', value: '24-48 horas' },
      { policy: 'Modificaciones', value: 'Hasta 15 días después de realizado el pedido' },
    ],
  },
  {
    category: 'Pagos',
    items: [
      { policy: 'Formas de pago', value: 'Transferencia, cheque certificado' },
      { policy: 'Términos', value: '30% anticipo, 70% contra entrega' },
      
    ],
  },
  {
    category: 'Entregas',
    items: [
      { policy: 'Tiempo de entrega', value: 'Primavera-Verano: Marzo-Abril | Otoño-Invierno: Septiembre-Octubre' },
      { policy: 'Costo de envío', value: 'Según destino y volumen' },
      { policy: 'Cobertura', value: 'Todo México' },
    ],
  },
  {
    category: 'Garantías',
    items: [
      { policy: 'Defectos de fábrica', value: '30 días para reportar' },
    ],
  },
];

export default function ComoComprarPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          src="/images/hero/hero-bebes.jpg"
          title="Cómo comprar"
          subtitle="Proceso simple para mayoristas y boutiques."
        />

        {/* Requirements */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Requisitos para ser mayorista
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Para trabajar con nosotros necesitas cumplir con estos requisitos básicos
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {requirements.map((requirement) => (
                  <Card key={requirement.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10">
                        <requirement.icon className="h-6 w-6 text-brand-pink" aria-hidden="true" />
                      </div>
                      <dt className="mt-4 text-lg font-semibold leading-7 text-brand-dark">
                        {requirement.title}
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-gray-600">
                        {requirement.description}
                      </dd>
                    </CardContent>
                  </Card>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Proceso de compra
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Tres simples pasos para comenzar a trabajar con nosotros
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <Card className="relative text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                      <FileText className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="text-sm font-semibold text-brand-blue mb-2">
                      Paso 1
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Solicita información
                    </h3>
                    <p className="text-sm text-gray-600">
                      Completa nuestro formulario con tus datos comerciales y recibe el catálogo completo.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="relative text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                      <CheckCircle className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="text-sm font-semibold text-brand-blue mb-2">
                      Paso 2
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Confirma tu pedido
                    </h3>
                    <p className="text-sm text-gray-600">
                      Selecciona las piezas, tallas y cantidades. Te enviamos cotización detallada.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="relative text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                      <Truck className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="text-sm font-semibold text-brand-blue mb-2">
                      Paso 3
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Recibe tu pedido
                    </h3>
                    <p className="text-sm text-gray-600">
                      Coordinamos la entrega en tu ubicación en el tiempo acordado.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Table */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Políticas comerciales
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Conoce nuestros términos y condiciones para mayoristas
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {policies.map((policy) => (
                  <Card key={policy.category}>
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-brand-dark">
                        {policy.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {policy.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="text-sm font-medium text-gray-700">
                              {item.policy}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {item.value}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="¿Listo para comenzar?"
          subtitle="Únete a los distribuidores que ya trabajan con Miranda en México"
          actions={[
            { label: "Solicitar información", href: "/contacto", variant: "secondary" },
            { label: "Catálogos anteriores", href: "/marca/miranda#catalogos" },
          ]}
        />
      </main>
      
      <Footer variant="transparent" />
    </div>
  );
}
