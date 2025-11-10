import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Producto } from '@/lib/types';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  producto: Producto;
  onRequestPrice?: () => void;
}

export default function ProductCard({ producto, onRequestPrice }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2">
              {producto.nombre}
            </h3>
            <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
              {producto.codigo}
            </Badge>
          </div>
          
          <p className="text-xs text-gray-600 line-clamp-2">
            {producto.descripcion}
          </p>
          
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs">
              {producto.categoria}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {producto.edad}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {producto.temporada}
            </Badge>
          </div>
          
          <div className="text-xs text-gray-500">
            <span className="font-medium">Colores:</span> {producto.colores.join(', ')}
          </div>
          
          <div className="text-xs text-gray-500">
            <span className="font-medium">Tallas:</span> {producto.tallas.join(', ')}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <div className="text-sm font-medium text-brand-dark">
            {producto.precio}
          </div>
          {onRequestPrice && (
            <Button 
              onClick={onRequestPrice}
              className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white"
              size="sm"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Solicitar lista de precios
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
