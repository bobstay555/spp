// /components/StructuredData.jsx

export default function StructuredData({
  title,
  description,
  pathname = "/",
  image = "/og-cover.jpg",
  canonicalBase = "https://www.smilepicphotography.online",
  breadcrumbs = [],
  type = "WebPage",
}) {
  const canonical = new URL(pathname, canonicalBase).toString();

  const org = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Smile Pic Photography",
    image: canonicalBase + "/logo.png",
    url: canonicalBase,
    description:
      "Premium portrait, wedding, model, and event photography services in India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "India",
      addressCountry: "IN",
    },
  };

  const pageLD = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: canonical,
    image: new URL(image, canonicalBase).toString(),
  };

  const breadcrumbLD =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: new URL(b.url, canonicalBase).toString(),
          })),
        }
      : null;

  return (
    <>
      <link rel="canonical" href={canonical} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLD) }}
      />

      {breadcrumbLD && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }}
        />
      )}
    </>
  );
}
