import Script from 'next/script';

interface OrganizationJsonLdProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export default function OrganizationJsonLd({
  name,
  description,
  url,
  logo,
  contactPoint,
  address,
  sameAs = [],
}: OrganizationJsonLdProps) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    ...(logo && { logo }),
    ...(contactPoint && { contactPoint }),
    ...(address && { address }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd),
      }}
    />
  );
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  image?: string;
  brand: string;
  sku: string;
  category: string;
}

export function ProductJsonLd({
  name,
  description,
  image,
  brand,
  sku,
  category,
}: ProductJsonLdProps) {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    ...(image && { image }),
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    sku,
    category,
  };

  return (
    <Script
      id={`product-jsonld-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productJsonLd),
      }}
    />
  );
}
