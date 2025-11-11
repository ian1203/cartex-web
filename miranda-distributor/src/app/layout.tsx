import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import OrganizationJsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Miranda Distributor - Moda Infantil Española en México",
  description: "Comercializadores oficiales de Miranda en México. Distribuimos moda infantil española premium para boutiques y mayoristas con calidad garantizada.",
  keywords: "moda infantil, Miranda, España, México, mayoristas, boutiques, ropa niños, distribuidores",
  authors: [{ name: "Miranda Distributor" }],
  creator: "Miranda Distributor",
  publisher: "Miranda Distributor",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://tu-dominio.com",
    title: "Miranda Distributor - Moda Infantil Española en México",
    description: "Comercializadores oficiales de Miranda en México. Distribuimos moda infantil española premium para boutiques y mayoristas.",
    siteName: "Miranda Distributor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miranda Distributor - Moda Infantil Española en México",
    description: "Comercializadores oficiales de Miranda en México. Distribuimos moda infantil española premium para boutiques y mayoristas.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationJsonLd
          name="Miranda Distributor"
          description="Comercializadores oficiales de Miranda en México. Distribuimos moda infantil española premium para boutiques y mayoristas."
          url="https://tu-dominio.com"
          contactPoint={{
            telephone: "+52-229-365-2572",
            contactType: "customer service",
            email: "comer.cartex@gmail.com",
          }}
          address={{
            streetAddress: "Paseo de la Reforma 100",
            addressLocality: "Puebla",
            addressRegion: "Puebla",
            addressCountry: "MX",
          }}
          sameAs={[
            "https://wa.me/522294828125",
            "mailto:comer.cartex@gmail.com",
          ]}
        />
      </head>
      <body className="min-h-[100svh] flex flex-col font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
