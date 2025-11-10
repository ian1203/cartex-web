import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.calificacion
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <blockquote className="text-gray-600 mb-4">
          &ldquo;{testimonial.mensaje}&rdquo;
        </blockquote>
        
        <div className="flex items-center">
          <div>
            <div className="font-semibold text-brand-dark">
              {testimonial.nombre}
            </div>
            <div className="text-sm text-gray-500">
              {testimonial.empresa}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
