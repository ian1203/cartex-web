import { z } from 'zod';

export const leadSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().min(2, 'El nombre de la empresa es requerido'),
  ciudad: z.string().min(2, 'La ciudad es requerida'),
  estado: z.string().min(2, 'El estado es requerido'),
  whatsapp: z.string().min(10, 'El WhatsApp debe tener al menos 10 dígitos'),
  email: z.string().email('Email inválido'),
  mensaje: z.string().optional(),
  consentimiento: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar el consentimiento',
  }),
});

export const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
  consentimiento: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar el consentimiento',
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
