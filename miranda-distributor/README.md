# Miranda Distributor - Landing Page B2B

Una landing page profesional para comercializadores de ropa infantil española en México, especializada en la marca Miranda. El sitio está diseñado para comunicar confianza B2B, mostrar catálogo de productos y captar leads de mayoristas y boutiques.

## 🚀 Características

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** para estilos con paleta personalizada
- **shadcn/ui** para componentes de interfaz
- **React Hook Form + Zod** para validación de formularios
- **Diseño responsive** móvil primero
- **SEO optimizado** con metadata y JSON-LD
- **Accesibilidad** con buenas prácticas WCAG

## 🎨 Diseño y Branding

### Paleta de Colores
- **Rosa**: `#F7D9E3` (brand-pink)
- **Azul cielo**: `#D7EAF3` (brand-blue)
- **Marfil**: `#FFF9F4` (brand-cream)
- **Gris**: `#6B7280` (brand-gray)
- **Negro**: `#111827` (brand-dark)

### Tipografías
- **Títulos**: Playfair Display (serif elegante)
- **Texto**: Inter (sans-serif moderna)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Páginas de Next.js 14
│   ├── (marketing)/       # Grupo de rutas de marketing
│   │   ├── page.tsx       # Home
│   │   ├── catalogo/      # Catálogo de productos
│   │   ├── marca/         # Información de la marca
│   │   ├── como-comprar/  # Proceso de compra
│   │   ├── faq/           # Preguntas frecuentes
│   │   ├── guia-de-tallas/# Guía de tallas
│   │   └── contacto/      # Formulario de contacto
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes shadcn/ui
│   ├── Navbar.tsx        # Navegación principal
│   ├── Footer.tsx        # Pie de página
│   ├── Hero.tsx          # Sección hero
│   ├── ProductCard.tsx   # Tarjeta de producto
│   ├── LeadForm.tsx      # Formulario de leads
│   └── ...               # Otros componentes
├── lib/                  # Utilidades y configuraciones
│   ├── types.ts         # Tipos TypeScript
│   ├── schemas.ts       # Esquemas Zod
│   ├── utils.ts         # Funciones utilitarias
│   └── placeholder-images.ts # URLs de imágenes
└── data/                # Datos estáticos
    ├── productos.json   # Catálogo de productos
    ├── leads.json       # Leads capturados
    └── newsletter.json  # Suscriptores newsletter
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd miranda-distributor
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## ⚙️ Configuración Personalizada

### 1. Información de Contacto

Edita los siguientes archivos para personalizar la información de contacto:

**Archivo**: `src/components/Footer.tsx`
```typescript
// Cambiar WhatsApp
<a href="https://wa.me/522293652572">+52 229 365 2572</a>

// Cambiar email
<a href="mailto:ventas@tu-dominio.com">ventas@tu-dominio.com</a>

// Cambiar ubicación
<span>Puebla, Puebla</span>

// Cambiar RFC
<div className="text-xs text-gray-400">RFC: XXXX000000XXX</div>
```

**Archivo**: `src/components/Navbar.tsx`
```typescript
// Cambiar WhatsApp en navbar
<a href="https://wa.me/522293652572" target="_blank" rel="noopener noreferrer">
```

### 2. Dominio y URLs

**Archivo**: `src/app/layout.tsx`
```typescript
// Cambiar URL del sitio
url: "https://tu-dominio.com",

// Cambiar email de contacto
email: "ventas@tu-dominio.com",

// Cambiar código de verificación de Google
verification: {
  google: "your-google-verification-code",
},
```

**Archivo**: `public/robots.txt`
```
Sitemap: https://tu-dominio.com/sitemap.xml
```

**Archivo**: `public/sitemap.xml`
```xml
<loc>https://tu-dominio.com/</loc>
```

### 3. Productos y Catálogo

**Archivo**: `src/data/productos.json`
```json
{
  "id": "miranda-001",
  "codigo": "MIR-CER-001",
  "nombre": "Vestido Ceremonia Primavera",
  "categoria": "Ceremonia",
  "edad": "2-6",
  "temporada": "SS",
  "colores": ["Rosa", "Blanco", "Azul"],
  "tallas": ["2", "3", "4", "5", "6"],
  "imagen": "/images/products/vestido-ceremonia-primavera.jpg",
  "descripcion": "Elegante vestido de ceremonia...",
  "precio": "Precio mayorista disponible",
  "disponible": true
}
```

### 4. Imágenes

**Estructura de carpetas**:
```
public/images/
├── products/           # Imágenes de productos (3:4 ratio)
├── collections/        # Imágenes de colecciones (4:3 ratio)
├── miranda-gallery/    # Galería de la marca (4:3 ratio)
└── miranda-brand.jpg   # Imagen principal de la marca
```

**Reemplazar imágenes placeholder**:
- Edita `src/lib/placeholder-images.ts` con las URLs reales
- Optimiza imágenes para web (WebP recomendado)
- Usa las proporciones correctas según el tipo de imagen

## 📝 Formularios y Datos

### LeadForm
- Captura información de mayoristas potenciales
- Validación con Zod
- Datos guardados en `src/data/leads.json`
- Campos: nombre, empresa, ciudad, estado, WhatsApp, email, interés, mensaje

### NewsletterForm
- Suscripción a newsletter
- Datos guardados en `src/data/newsletter.json`
- Campos: email, consentimiento

### Server Actions (Futuro)
Los formularios actualmente simulan el envío. Para producción, implementa Server Actions:

```typescript
// src/app/actions/leads.ts
'use server'

export async function submitLead(formData: FormData) {
  // Implementar lógica de guardado
  // Enviar email de notificación
  // Guardar en base de datos
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura variables de entorno si es necesario
3. Despliega automáticamente

### Otras plataformas
- **Netlify**: Compatible con Next.js
- **Railway**: Fácil despliegue con base de datos
- **DigitalOcean App Platform**: Opción robusta

### Variables de entorno
Crea `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_WHATSAPP=+522293652572
NEXT_PUBLIC_EMAIL=ventas@tu-dominio.com
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Inicio en producción
npm start

# Linting
npm run lint

# Linting con corrección
npm run lint:fix
```

## 📊 SEO y Performance

### Optimizaciones incluidas
- ✅ Metadata dinámico por página
- ✅ JSON-LD structured data
- ✅ Open Graph y Twitter Cards
- ✅ Sitemap.xml y robots.txt
- ✅ Imágenes optimizadas con next/image
- ✅ Fonts optimizadas con next/font
- ✅ Lazy loading de componentes

### Lighthouse Score objetivo
- **Performance**: >90
- **Accessibility**: >90
- **Best Practices**: >90
- **SEO**: >90

## 🎯 Funcionalidades B2B

### Para Mayoristas
- Catálogo completo con filtros
- Información de precios mayoristas
- Proceso de compra claro
- Guía de tallas detallada
- Políticas comerciales transparentes

### Para Boutiques
- Colecciones destacadas
- Información de la marca Miranda
- Testimonios de clientes
- Proceso de distribución
- Soporte personalizado

## 🔒 Seguridad y Privacidad

### Datos personales
- Consentimiento explícito requerido
- Datos almacenados localmente (JSON)
- No se comparten con terceros
- Cumplimiento con GDPR/LFPDPPP

### Formularios
- Validación client-side y server-side
- Sanitización de inputs
- Rate limiting recomendado para producción

## 📞 Soporte

### Documentación
- Componentes documentados con comentarios
- Tipos TypeScript para mejor desarrollo
- Estructura clara y mantenible

### Personalización
- Fácil cambio de colores en Tailwind config
- Componentes modulares y reutilizables
- Configuración centralizada

## 🚧 Próximas Mejoras

### Funcionalidades pendientes
- [ ] Integración con base de datos real
- [ ] Sistema de autenticación para mayoristas
- [ ] Panel de administración
- [ ] Integración con sistemas de inventario
- [ ] Chat en vivo
- [ ] Múltiples idiomas
- [ ] Dark mode

### Optimizaciones
- [ ] PWA (Progressive Web App)
- [ ] Cache de imágenes
- [ ] CDN para assets estáticos
- [ ] Analytics avanzado
- [ ] A/B testing

## 📄 Licencia

Este proyecto está desarrollado específicamente para Miranda Distributor. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Miranda Distributor**

Para soporte técnico o personalizaciones adicionales, contacta al equipo de desarrollo.