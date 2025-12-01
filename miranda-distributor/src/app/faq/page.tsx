import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBand from '@/components/HeroBand';
import PageHero from '@/app/(marketing)/_components/PageHero';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Package, Truck, CreditCard, RotateCcw } from 'lucide-react';

export const metadata = {
  title: 'Preguntas Frecuentes - Miranda Distributor',
  description: 'Encuentra respuestas a las preguntas más comunes sobre nuestros productos, procesos de compra, envíos y políticas de Miranda Distributor.',
  keywords: 'FAQ, preguntas frecuentes, Miranda, distribuidores, envíos, tallas',
};

const faqData = [
  {
    category: 'Productos y Tallas',
    icon: Package,
    questions: [
      {
        question: '¿Cómo sé qué talla elegir para mis clientes?',
        answer: 'Proporcionamos una guía de tallas detallada que incluye medidas por edad y altura. También puedes consultar nuestras recomendaciones por modelo, ya que algunas prendas pueden tener ajustes específicos.',
      },
      {
        question: '¿Las tallas de Miranda son iguales a las mexicanas?',
        answer: 'Las tallas de Miranda siguen el sistema europeo. Generalmente son similares, pero recomendamos revisar siempre la guía de tallas específica para cada modelo.',
      },
      {
        question: '¿Qué materiales utiliza Miranda?',
        answer: 'Miranda utiliza materiales premium como algodón 100%, mezclas de algodón con elastano para mayor comodidad, y telas especiales para ocasiones formales. Todos los materiales cumplen con estándares europeos de calidad.',
      },
      {
        question: '¿Hay garantía en los productos?',
        answer: 'Ofrecemos garantía de 30 días para defectos de fábrica. Los cambios por talla están disponibles por 15 días siempre que tengamos stock disponible.',
      },
    ],
  },
  {
    category: 'Envíos y Entregas',
    icon: Truck,
    questions: [
      {
        question: '¿Cuánto tiempo tarda en llegar mi pedido?',
        answer:
          'Las fechas de entrega dependen de la temporada. Para Primavera-Verano las entregas se realizan entre marzo y abril; para Otoño-Invierno, entre septiembre y octubre.',
      },
      {
        question: '¿Hacen envíos a todo México?',
        answer:
          'Sí, realizamos envíos a todo el territorio mexicano. El costo de envío se calcula según el destino y el volumen del pedido.',
      },
      {
        question: '¿Cómo puedo rastrear mi pedido?',
        answer:
          'Te proporcionamos el número de guía una vez que el pedido sale de nuestras instalaciones. Puedes rastrearlo directamente con la paquetería.',
      },
    ],
  },
  {
    category: 'Pedidos y Compras',
    icon: CreditCard,
    questions: [
      {
        question: '¿Cuál es el pedido mínimo?',
        answer:
          'El pedido mínimo es de $30,000 MXN por temporada. Esto nos permite mantener precios competitivos y garantizar la disponibilidad de productos.',
      },
      {
        question: '¿Cómo puedo hacer un pedido?',
        answer:
          'Puedes solicitar información a través de nuestro formulario de contacto, por WhatsApp o email. Te enviaremos el catálogo completo con precios mayoristas.',
      },
      {
        question: '¿Qué formas de pago aceptan?',
        answer:
          'Aceptamos transferencias bancarias y cheques certificados. El pago se realiza 30% anticipo y 70% contra entrega.',
      },
      {
        question: '¿Puedo modificar mi pedido después de confirmarlo?',
        answer:
          'Puedes solicitar modificaciones hasta 15 días después de realizado el pedido, sujeto a disponibilidad de stock y condiciones comerciales vigentes.',
      },
    ],
  },
  {
    category: 'Atención y Soporte',
    icon: RotateCcw,
    questions: [
      {
        question: '¿Qué pasa si mi pedido llega dañado?',
        answer:
          'Si recibes un pedido con daños, debes reportarlo dentro de las primeras 24 horas. Nos hacemos cargo de los costos de reemplazo y envío, según verificación del caso.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          src="/images/hero/faq.jpg"
          title="Preguntas Frecuentes"
          subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros productos, procesos y políticas comerciales."
        />

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              {faqData.map((category) => (
                <Card key={category.category} className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl font-serif text-brand-dark">
                      <category.icon className="h-6 w-6 text-brand-pink" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10 mb-6">
                <HelpCircle className="h-6 w-6 text-brand-pink" />
              </div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                ¿No encontraste tu respuesta?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nuestro equipo está aquí para ayudarte con cualquier pregunta adicional
              </p>
              
              {/* Newsletter Form */}
              <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-3">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="flex-1 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm focus:border-neutral-900 focus:outline-none placeholder:text-neutral-400" 
                  required
                />
                <Button variant="brand" className="whitespace-nowrap">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer variant="transparent" />
    </div>
  );
}
