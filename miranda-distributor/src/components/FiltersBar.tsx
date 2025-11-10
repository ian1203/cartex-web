'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

interface FiltersBarProps {
  onFiltersChange: (filters: {
    search: string;
    categoria: string;
    edad: string;
    temporada: string;
  }) => void;
}

export default function FiltersBar({ onFiltersChange }: FiltersBarProps) {
  const [filters, setFilters] = useState({
    search: '',
    categoria: '',
    edad: '',
    temporada: '',
  });

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      categoria: '',
      edad: '',
      temporada: '',
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar productos..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={filters.categoria} onValueChange={(value) => updateFilter('categoria', value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas las categorías</SelectItem>
              <SelectItem value="Ceremonia">Ceremonia</SelectItem>
              <SelectItem value="Conjuntos">Conjuntos</SelectItem>
              <SelectItem value="Vestidos">Vestidos</SelectItem>
              <SelectItem value="Abrigos">Abrigos</SelectItem>
            </SelectContent>
          </Select>

          {/* Age Filter */}
          <Select value={filters.edad} onValueChange={(value) => updateFilter('edad', value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Edad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas las edades</SelectItem>
              <SelectItem value="0-24m">0-24 meses</SelectItem>
              <SelectItem value="2-6">2-6 años</SelectItem>
              <SelectItem value="7-12">7-12 años</SelectItem>
            </SelectContent>
          </Select>

          {/* Season Filter */}
          <Select value={filters.temporada} onValueChange={(value) => updateFilter('temporada', value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Temporada" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas las temporadas</SelectItem>
              <SelectItem value="SS">Primavera/Verano</SelectItem>
              <SelectItem value="AW">Otoño/Invierno</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Limpiar filtros
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Filtros activos:</span>
          {filters.categoria && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.categoria}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('categoria', '')}
              />
            </Badge>
          )}
          {filters.edad && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.edad}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('edad', '')}
              />
            </Badge>
          )}
          {filters.temporada && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.temporada}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('temporada', '')}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
