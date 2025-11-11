'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react'; // solo mantenemos Menu
import { SiWhatsapp } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Marca', href: '/marca/miranda' },
  { name: 'Cómo comprar', href: '/como-comprar' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 lg:px-8" aria-label="Global">
        {/* Brand */}
        <div className="flex lg:flex-1 shrink-0">
          <Link href="/" className="flex items-center gap-2 shrink-0 -my-1" aria-label="Ir al inicio">
            <Image
              src="/logo/logo-cartex.svg"
              alt="Cartex"
              width={100}
              height={50}
              className="h-20 w-auto md:h-24"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Abrir menú principal">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-6 z-[70] bg-white/95 backdrop-blur-md">
              <div className="flex flex-col gap-5 mt-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        isActive
                          ? 'text-brand-pink font-semibold border-b-[3px] border-brand-pink pb-1'
                          : 'text-gray-900 hover:text-brand-pink'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t flex gap-3">
                  <a
                    href="https://instagram.com/cartexmx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir Instagram de Cartex"
                    className="inline-flex items-center justify-center rounded-lg border px-3 py-2 hover:bg-neutral-50 transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>

                  <a
                    href="https://wa.me/522294828125"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir chat de WhatsApp"
                    className="inline-flex items-center justify-center rounded-lg border px-3 py-2 hover:bg-neutral-50 transition-colors"
                  >
                    <SiWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm md:text-base font-semibold leading-none py-0 transition-colors ${
                  isActive
                    ? 'text-brand-pink font-semibold border-b-[3px] border-brand-pink pb-1'
                    : 'text-gray-900 hover:text-brand-pink'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-3">
          <a
            href="https://instagram.com/cartexmx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram de Cartex"
            className="inline-flex items-center justify-center rounded-lg border px-3 py-1.5 hover:bg-neutral-50 transition-colors"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="https://wa.me/522294828125"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir chat de WhatsApp"
            className="inline-flex items-center justify-center rounded-lg border px-3 py-1.5 hover:bg-neutral-50 transition-colors"
          >
            <SiWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
