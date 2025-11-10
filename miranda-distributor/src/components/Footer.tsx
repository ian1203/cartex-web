import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
  variant?: "transparent" | "solid" | "overlay";
}

export default function Footer({ className = "", variant = "transparent" }: FooterProps) {
  const isTransparent = variant === "transparent";
  const isOverlay = variant === "overlay";
  
  const footerContent = (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white">Cartex</h3>
            <p className="text-sm text-white/90">
              Importadora y Comercializadora de Moda Infantil • México
            </p>
            <p className="text-sm text-white/90">
              Distribuidores de Miranda (España)
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h4>
            <div className="space-y-2 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/522293652572" className="hover:text-white/80 transition-colors">
                  +52 229 365 2572
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:comer.cartex@gmail.com" className="hover:text-white/80 transition-colors">
                  comer.cartex@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Puebla, Puebla</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces</h4>
            <div className="space-y-2 text-sm text-white/90">
              <Link href="/catalogo" className="block hover:text-white/80 transition-colors">
                Catálogo
              </Link>
              <Link href="/marca/miranda" className="block hover:text-white/80 transition-colors">
                Marca Miranda
              </Link>
              <Link href="/como-comprar" className="block hover:text-white/80 transition-colors">
                Cómo comprar
              </Link>
              <Link href="/faq" className="block hover:text-white/80 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <div className="space-y-2 text-sm text-white/90">
              <Link href="/aviso-privacidad" className="block hover:text-white/80 transition-colors">
                Aviso de privacidad
              </Link>
              <Link href="/terminos" className="block hover:text-white/80 transition-colors">
                Términos y condiciones
              </Link>
              <div className="text-xs text-white/80">
                RFC: XXXX000000XXX
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/90">
              © 2024 Cartex. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a
                href="https://instagram.com/cartexmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 15.8 2.8 2.8 0 0 0 12 9.2zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
              </a>
              <a
                href="https://wa.me/522293652572"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:comer.cartex@gmail.com"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
  );

  if (isOverlay) {
    return (
      <footer className={cn(
        "relative z-20 text-white backdrop-blur-0 md:backdrop-blur-sm",
        className
      )}>
        <section className="relative overflow-hidden min-h-[260px] md:min-h-[340px]">
          {/* Background image */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ backgroundImage: "url('/images/hero/hero-bebes.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          {/* Dark gradient overlay */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/25" />
          {/* Content */}
          <div className="relative z-10 border-t border-white/20">
            {footerContent}
          </div>
        </section>
      </footer>
    );
  }
  
  return (
    <footer className={cn(
      "relative z-20",
      isTransparent
        ? "border-t border-white/20 bg-transparent text-white"
        : "bg-brand-dark text-white",
      className
    )}>
      {footerContent}
    </footer>
  );
}
