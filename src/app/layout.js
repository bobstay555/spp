// app/layout.js
import "./globals.css";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const metadata = buildMetadata({});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StructuredData
          title={SITE_CONFIG.name}
          description={SITE_CONFIG.description}
          pathname="/"
          image={SITE_CONFIG.defaultImage}
          canonicalBase={SITE_CONFIG.url}
        />

        {children}
      </body>
    </html>
  );
}
