export function buildMetadata({
  title,
  description,
  pathname = "/",
  image = "/og-default.jpg",
  keywords = [],
}) {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    keywords,
  };
}
