// /lib/seo.js

const SITE = {
  name: "Smile Pic Photography",
  description:
    "Smile Pic Photography delivers premium portrait, wedding, and event photography services.",
  url: "https://www.smilepicphotography.online",
  defaultImage: "/og-cover.jpg",
  logo: "/logo.png",
  twitterHandle: "@smilepic",
  locale: "en_IN",
};

export const SITE_CONFIG = SITE;

export function buildMetadata({
  title,
  description,
  pathname = "/",
  image,
  keywords = [],
  type = "website",
  robots = { index: true, follow: true },
}) {
  const canonical = new URL(pathname, SITE.url).toString();
  const metaTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const metaDescription = description || SITE.description;
  const metaImage = image || SITE.defaultImage;

  return {
    metadataBase: new URL(SITE.url),

    title: {
      default: SITE.name,
      template: "%s | " + SITE.name,
      absolute: metaTitle,
    },

    description: metaDescription,
    keywords,

    alternates: {
      canonical,
    },

    robots: {
      index: robots.index,
      follow: robots.follow,
      googleBot: {
        index: robots.index,
        follow: robots.follow,
      },
    },

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: SITE.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: SITE.locale,
      type,
    },

    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
    },
  };
}
