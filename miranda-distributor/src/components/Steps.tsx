import { Card, CardContent } from '@/components/ui/card';
import { FileText, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: FileText,
    title: 'Solicita catálogo',
    description: 'Completa nuestro formulario y recibe el catálogo completo con precios mayoristas.',
  },
  {
    step: 2,
    icon: ShoppingCart,
    title: 'Elige colecciones',
    description: 'Selecciona las piezas que necesitas, tallas y cantidades según tu demanda.',
  },
  {
    step: 3,
    icon: Truck,
    title: 'Confirmación y entrega',
    description: 'Confirmamos tu pedido y coordinamos la entrega en tu ubicación.',
  },
];

export default function Steps() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
            Proceso de compra mayorista
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tres simples pasos para comenzar a trabajar con nosotros.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, stepIdx) => (
              <Card key={step.step} className="relative border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10 mb-4">
                    <step.icon className="h-6 w-6 text-brand-pink" aria-hidden="true" />
                  </div>
                  
                  <div className="text-sm font-semibold text-brand-pink mb-2">
                    Paso {step.step}
                  </div>
                  
                  <h3 className="text-lg font-semibold leading-7 text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Connector line */}
                {stepIdx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-pink/20 transform -translate-y-1/2" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
