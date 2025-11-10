export interface Producto {
  id: string;
  codigo: string;
  nombre: string;
  categoria: 'Ceremonia' | 'Conjuntos' | 'Vestidos' | 'Abrigos';
  edad: '0-24m' | '2-6' | '7-12';
  temporada: 'SS' | 'AW';
  colores: string[];
  tallas: string[];
  imagen: string;
  descripcion: string;
  precio: string;
  disponible: boolean;
}

export interface Lead {
  id: string;
  nombre: string;
  empresa: string;
  ciudad: string;
  estado: string;
  whatsapp: string;
  email: string;
  interes: 'catálogo' | 'precios' | 'distribución';
  mensaje: string;
  consentimiento: boolean;
  fecha: string;
}

export interface Newsletter {
  id: string;
  email: string;
  consentimiento: boolean;
  fecha: string;
}

export interface Testimonial {
  id: string;
  nombre: string;
  empresa: string;
  mensaje: string;
  calificacion: number;
}

export interface FAQ {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: string;
}
