'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { leadSchema, type LeadFormData } from '@/lib/schemas';
import { toast } from 'sonner';
import { X, Loader2 } from 'lucide-react';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function LeadForm({ 
  isOpen, 
  onClose, 
  title = "Solicitar información",
  description = "Completa el formulario y nos pondremos en contacto contigo pronto."
}: LeadFormProps) {
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
    // Normalizar WhatsApp
    const whatsappValue = data.whatsapp?.replace(/\D/g, '') || '';

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
      console.log('Lead data:', data);
      
      toast.success('¡Gracias! Nos pondremos en contacto contigo pronto.');
      reset();
      onClose();
    } catch {
      toast.error('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed inset-0 z-[60] grid place-items-center px-4">
        <div className="relative mx-auto w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white/95 backdrop-blur-sm shadow-2xl border border-neutral-200 p-6 sm:p-7">
          {/* Header */}
          <div className="flex flex-row items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{description}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="ml-4">
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Form */}
          <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="grid grid-cols-2 gap-4">
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

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-neutral-300 bg-neutral-50 px-3 text-neutral-700 text-sm">+52</span>
                <input
                  id="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  {...register('whatsapp')}
                  className="block w-full rounded-r-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 placeholder:text-neutral-400"
                  placeholder="Número de teléfono"
                  required
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500">Ingresa tu número de teléfono.</p>
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

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje adicional</Label>
              <Textarea
                id="mensaje"
                {...register('mensaje')}
                placeholder="Cuéntanos más sobre tu negocio o necesidades específicas..."
                rows={3}
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
                'Enviar solicitud'
              )}
            </Button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}
