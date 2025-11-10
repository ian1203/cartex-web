import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Truck, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Curaduría Premium',
    description: 'Seleccionamos cuidadosamente cada pieza de Miranda para garantizar la máxima calidad y estilo.',
  },
  {
    icon: Truck,
    title: 'Entregas Puntuales',
    description: 'Cumplimos con los tiempos de entrega acordados para mantener tu negocio funcionando.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Nuestro equipo te acompaña en cada paso del proceso de compra mayorista.',
  },
  {
    icon: Shield,
    title: 'Importación Formal',
    description: 'Trabajamos con todos los permisos y certificaciones necesarias para importar legalmente.',
  },
];

export default function FeatureList() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
            Por qué elegirnos
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Somos más que distribuidores, somos tu socio estratégico en moda infantil premium.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10">
                    <feature.icon className="h-6 w-6 text-brand-pink" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 text-lg font-semibold leading-7 text-brand-dark">
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
