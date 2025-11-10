import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsApp(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // If it starts with 52 (Mexico country code), keep it
  if (cleaned.startsWith('52')) {
    return `+${cleaned}`;
  }
  
  // If it starts with 1, assume it's a Mexican number and add 52
  if (cleaned.startsWith('1')) {
    return `+52${cleaned}`;
  }
  
  // Otherwise, add 52 prefix
  return `+52${cleaned}`;
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
