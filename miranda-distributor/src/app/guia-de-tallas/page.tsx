import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Ruler } from 'lucide-react';

export const metadata = {
  title: 'Guía de Tallas - Miranda Distributor',
  description: 'Consulta nuestra guía de tallas completa para productos Miranda. Encuentra la talla correcta según edad, altura y medidas específicas.',
  keywords: 'guía tallas, Miranda, medidas, edad, altura, tallas europeas',
};

const sizeGuide = [
  {
    age: '0-3 meses',
    height: '50-60 cm',
    chest: '40-44 cm',
    waist: '40-44 cm',
    sizes: ['0-3m'],
  },
  {
    age: '3-6 meses',
    height: '60-68 cm',
    chest: '44-48 cm',
    waist: '44-48 cm',
    sizes: ['3-6m'],
  },
  {
    age: '6-9 meses',
    height: '68-74 cm',
    chest: '48-52 cm',
    waist: '48-52 cm',
    sizes: ['6-9m'],
  },
  {
    age: '9-12 meses',
    height: '74-80 cm',
    chest: '52-56 cm',
    waist: '52-56 cm',
    sizes: ['9-12m'],
  },
  {
    age: '12-18 meses',
    height: '80-86 cm',
    chest: '56-60 cm',
    waist: '56-60 cm',
    sizes: ['12-18m'],
  },
  {
    age: '18-24 meses',
    height: '86-92 cm',
    chest: '60-64 cm',
    waist: '60-64 cm',
    sizes: ['18-24m'],
  },
  {
    age: '2 años',
    height: '92-98 cm',
    chest: '64-68 cm',
    waist: '64-68 cm',
    sizes: ['2'],
  },
  {
    age: '3 años',
    height: '98-104 cm',
    chest: '68-72 cm',
    waist: '68-72 cm',
    sizes: ['3'],
  },
  {
    age: '4 años',
    height: '104-110 cm',
    chest: '72-76 cm',
    waist: '72-76 cm',
    sizes: ['4'],
  },
  {
    age: '5 años',
    height: '110-116 cm',
    chest: '76-80 cm',
    waist: '76-80 cm',
    sizes: ['5'],
  },
  {
    age: '6 años',
    height: '116-122 cm',
    chest: '80-84 cm',
    waist: '80-84 cm',
    sizes: ['6'],
  },
  {
    age: '7 años',
    height: '122-128 cm',
    chest: '84-88 cm',
    waist: '84-88 cm',
    sizes: ['7'],
  },
  {
    age: '8 años',
    height: '128-134 cm',
    chest: '88-92 cm',
    waist: '88-92 cm',
    sizes: ['8'],
  },
  {
    age: '9 años',
    height: '134-140 cm',
    chest: '92-96 cm',
    waist: '92-96 cm',
    sizes: ['9'],
  },
  {
    age: '10 años',
    height: '140-146 cm',
    chest: '96-100 cm',
    waist: '96-100 cm',
    sizes: ['10'],
  },
  {
    age: '11 años',
    height: '146-152 cm',
    chest: '100-104 cm',
    waist: '100-104 cm',
    sizes: ['11'],
  },
  {
    age: '12 años',
    height: '152-158 cm',
    chest: '104-108 cm',
    waist: '104-108 cm',
    sizes: ['12'],
  },
];

export default function GuiaDeTallasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-cream via-white to-brand-blue py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-6xl">
                Guía de Tallas
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Encuentra la talla perfecta para tus clientes con nuestra guía detallada 
                basada en edad, altura y medidas específicas.
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Las tallas pueden variar según el modelo y la temporada. 
                  Siempre recomendamos consultar las medidas específicas de cada prenda antes de realizar el pedido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Size Guide Table */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Tabla de Tallas Miranda
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Medidas en centímetros para una selección precisa
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edad
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Altura
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pecho
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cintura
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tallas Disponibles
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {sizeGuide.map((size, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {size.age}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {size.height}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {size.chest}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {size.waist}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-wrap gap-1">
                                {size.sizes.map((talla) => (
                                  <Badge key={talla} variant="secondary" className="text-xs">
                                    {talla}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Measure */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Cómo tomar las medidas
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Sigue estos pasos para obtener medidas precisas
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg font-serif text-brand-dark">
                    <Ruler className="h-5 w-5 text-brand-pink" />
                    Altura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mide desde la parte superior de la cabeza hasta los pies, 
                    con el niño de pie y descalzo contra una pared.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg font-serif text-brand-dark">
                    <Ruler className="h-5 w-5 text-brand-pink" />
                    Pecho
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mide alrededor del pecho en su parte más ancha, 
                    justo debajo de las axilas. Mantén la cinta métrica ajustada pero no apretada.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg font-serif text-brand-dark">
                    <Ruler className="h-5 w-5 text-brand-pink" />
                    Cintura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mide alrededor de la cintura natural, 
                    generalmente en la parte más estrecha del torso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Consejos para elegir la talla correcta
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">
                    Para bebés (0-24 meses)
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Considera el crecimiento rápido en los primeros meses</li>
                    <li>• Las tallas por meses son más precisas que las por edad</li>
                    <li>• Prefiere tallas ligeramente más grandes para mayor durabilidad</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">
                    Para niños (2-12 años)
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• La altura es el indicador más confiable</li>
                    <li>• Considera la complexión del niño (delgado, promedio, robusto)</li>
                    <li>• Para prendas de ceremonia, elige la talla exacta</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-brand-pink/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                ¿Necesitas ayuda con las tallas?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Nuestro equipo puede ayudarte a elegir las tallas correctas para tu pedido
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/522294828125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-pink hover:bg-brand-pink/90"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="mailto:comer.cartex@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-brand-dark bg-white hover:bg-gray-50"
                >
                  Enviar email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
