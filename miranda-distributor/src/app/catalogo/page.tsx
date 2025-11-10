'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FiltersBar from '@/components/FiltersBar';
import LeadForm from '@/components/LeadForm';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Grid, List } from 'lucide-react';
import { Producto } from '@/lib/types';
import productosData from '@/data/productos.json';

function CatalogoContent() {
  const searchParams = useSearchParams();
  const [productos] = useState<Producto[]>(productosData as Producto[]);
  const [filteredProductos, setFilteredProductos] = useState<Producto[]>(productosData as Producto[]);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Apply filters
  const applyFilters = useCallback((filters: {
    search: string;
    categoria: string;
    edad: string;
    temporada: string;
  }) => {
    let filtered = productos;

    if (filters.search) {
      filtered = filtered.filter(producto =>
        producto.nombre.toLowerCase().includes(filters.search.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(filters.search.toLowerCase()) ||
        producto.codigo.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.categoria) {
      filtered = filtered.filter(producto => producto.categoria === filters.categoria);
    }

    if (filters.edad) {
      filtered = filtered.filter(producto => producto.edad === filters.edad);
    }

    if (filters.temporada) {
      filtered = filtered.filter(producto => producto.temporada === filters.temporada);
    }

    setFilteredProductos(filtered);
  }, [productos]);

  // Apply URL parameters on mount
  useEffect(() => {
    const categoria = searchParams.get('categoria');
    const edad = searchParams.get('edad');
    const temporada = searchParams.get('temporada');
    
    if (categoria || edad || temporada) {
      applyFilters({
        search: '',
        categoria: categoria || '',
        edad: edad || '',
        temporada: temporada || '',
      });
    }
  }, [searchParams, applyFilters]);

  const handleRequestPrice = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-5xl">
              Catálogo Miranda
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección completa de moda infantil española. 
              Precios mayoristas disponibles para boutiques y distribuidores.
            </p>
          </div>

          {/* Filters and View Controls */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-brand-dark">
                  {filteredProductos.length} productos encontrados
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button 
                onClick={handleRequestPrice}
                className="bg-brand-pink hover:bg-brand-pink/90 text-white"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Solicitar lista de precios
              </Button>
            </div>

            <FiltersBar onFiltersChange={applyFilters} />
          </div>

          {/* Products Grid */}
          {filteredProductos.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProductos.map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                  onRequestPrice={handleRequestPrice}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto max-w-md">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar los filtros para encontrar lo que buscas.
                </p>
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-brand-blue/10 rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está aquí para ayudarte a seleccionar las mejores piezas 
              para tu negocio. Contáctanos para recibir asesoría personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleRequestPrice}
                size="lg"
                className="bg-brand-pink hover:bg-brand-pink/90 text-white"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Solicitar información
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
              >
                <a href="https://wa.me/522293652572" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <LeadForm 
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        title="Solicitar lista de precios"
        description="Completa el formulario para recibir nuestra lista de precios mayoristas y más información sobre nuestros productos."
      />
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div>Cargando catálogo...</div>}>
      <CatalogoContent />
    </Suspense>
  );
}
