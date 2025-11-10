'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBand from '@/components/HeroBand';
import PageHero from '@/app/(marketing)/_components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { leadSchema, type LeadFormData } from '@/lib/schemas';
import { toast } from 'sonner';
import { Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    // Validar WhatsApp (10 dígitos)
    const whatsappValue = data.whatsapp?.replace(/\D/g, '') || '';
    if (!/^\d{10}$/.test(whatsappValue)) {
      toast.error('El WhatsApp debe tener exactamente 10 dígitos.');
      return;
    }

    // Validar email
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if (emailInput && !emailInput.checkValidity()) {
      toast.error('Ingresa un correo válido.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send this to your API
      console.log('Contact form data:', data);
      
      toast.success('¡Gracias! Nos pondremos en contacto contigo pronto.');
      reset();
    } catch {
      toast.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          src="/images/hero/contacto.jpg"
          title="Contacto"
          subtitle="Estamos aquí para ayudarte. Contáctanos para información sobre productos, precios mayoristas o cualquier consulta sobre Miranda."
        />

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10 mb-4">
                    <Phone className="h-6 w-6 text-brand-pink" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Respuesta rápida para consultas urgentes
                  </p>
                  <a
                    href="https://wa.me/522293652572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-pink hover:text-brand-pink/80 font-medium"
                  >
                    +52 229 365 2572
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-4">
                    <Mail className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Para información detallada y cotizaciones
                  </p>
                  <a
                    href="mailto:comer.cartex@gmail.com"
                    className="text-brand-blue hover:text-brand-blue/80 font-medium"
                  >
                    comer.cartex@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pink/10 mb-4">
                    <MapPin className="h-6 w-6 text-brand-pink" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">
                    Ubicación
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Oficinas principales
                  </p>
                  <p className="text-brand-dark font-medium">
                    Puebla, Puebla<br />
                    México
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                  Envíanos un mensaje
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo pronto
                </p>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input
                          id="nombre"
                          {...register('nombre')}
                          placeholder="Tu nombre completo"
                          className="bg-white placeholder:text-neutral-400"
                        />
                        {errors.nombre && (
                          <p className="text-sm text-red-600">{errors.nombre.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa *</Label>
                        <Input
                          id="empresa"
                          {...register('empresa')}
                          placeholder="Nombre de tu empresa"
                          className="bg-white placeholder:text-neutral-400"
                        />
                        {errors.empresa && (
                          <p className="text-sm text-red-600">{errors.empresa.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ciudad">Ciudad *</Label>
                        <Input
                          id="ciudad"
                          {...register('ciudad')}
                          placeholder="Ciudad"
                          className="bg-white placeholder:text-neutral-400"
                        />
                        {errors.ciudad && (
                          <p className="text-sm text-red-600">{errors.ciudad.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="estado">Estado *</Label>
                        <Input
                          id="estado"
                          {...register('estado')}
                          placeholder="Estado"
                          className="bg-white placeholder:text-neutral-400"
                        />
                        {errors.estado && (
                          <p className="text-sm text-red-600">{errors.estado.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp *</Label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-neutral-300 bg-neutral-50 px-3 text-neutral-700 text-sm">+52</span>
                          <input
                            id="whatsapp"
                            type="tel"
                            inputMode="numeric"
                            pattern="\\d{10}"
                            maxLength={10}
                            {...register('whatsapp')}
                            className="block w-full rounded-r-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 placeholder:text-neutral-400"
                            placeholder="10 dígitos"
                            required
                          />
                        </div>
                        <p className="mt-1 text-xs text-neutral-500">Ingresa 10 dígitos (ej. 2293652572).</p>
                        {errors.whatsapp && (
                          <p className="text-sm text-red-600" role="alert">{errors.whatsapp.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="tu@email.com"
                          className="bg-white placeholder:text-neutral-400"
                          required
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600" role="alert">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        {...register('mensaje')}
                        placeholder="Cuéntanos sobre tu negocio, qué productos te interesan, o cualquier pregunta que tengas..."
                        rows={5}
                        className="bg-white placeholder:text-neutral-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="consentimiento"
                          {...register('consentimiento')}
                          className="mt-1"
                        />
                        <Label htmlFor="consentimiento" className="text-sm text-gray-600">
                          Acepto recibir información comercial y promocional por email y WhatsApp. *
                        </Label>
                      </div>
                      {errors.consentimiento && (
                        <p className="text-sm text-red-600">{errors.consentimiento.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="brand"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar mensaje'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 mb-6">
                <Clock className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                Horarios de atención
              </h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2 justify-items-center">
                <div className="text-center">
                  <h3 className="font-semibold text-brand-dark">Lunes a Viernes</h3>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-brand-dark">Sábados</h3>
                  <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Tiempo de respuesta promedio: 2-4 horas en horario laboral
              </p>
            </div>
          </div>
        </section>
      </main>
      
      
      
      <Footer variant="transparent" />
    </div>
  );
}
