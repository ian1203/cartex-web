'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { newsletterSchema, type NewsletterFormData } from '@/lib/schemas';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send this to your API
      console.log('Newsletter data:', data);
      
      toast.success('¡Te has suscrito exitosamente!');
      reset();
    } catch {
      toast.error('Hubo un error al suscribirte. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
          Mantente al día
        </h2>
        <p className="mt-2 text-gray-600">
          Recibe las últimas novedades de Miranda y ofertas especiales para mayoristas.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6 flex w-full max-w-md flex-col items-center gap-3">
          <div className="flex w-full items-center gap-3">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="tu@email.com"
              className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Suscribiendo...
                </>
              ) : (
                'Suscribirme'
              )}
            </Button>
          </div>
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </form>
        
        <div className="mt-4 flex items-start justify-center space-x-2">
          <input
            type="checkbox"
            id="newsletter-consent"
            {...register('consentimiento')}
            className="mt-1"
          />
          <Label htmlFor="newsletter-consent" className="text-sm text-gray-600">
            Acepto recibir información comercial por email. *
          </Label>
        </div>
        {errors.consentimiento && (
          <p className="mt-1 text-sm text-red-600">{errors.consentimiento.message}</p>
        )}
      </div>
    </section>
  );
}
