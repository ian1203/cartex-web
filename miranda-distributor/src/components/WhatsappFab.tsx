"use client";

import { Phone } from "lucide-react";

export default function WhatsappFab() {
  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "522294828125";
  const href = `https://wa.me/${wa}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-lg transition-transform hover:scale-105"
    >
      <Phone className="h-5 w-5 text-emerald-600" />
    </a>
  );
}


