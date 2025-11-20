// app/gallery/page.js
import { buildMetadata } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Explore the Smile Pic Photography gallery and portfolio.",
  pathname: "/gallery",
  image: "/gallery-og.jpg",
  keywords: ["Photography Gallery", "portfolio", "photo showcase"],
});

export default function GalleryPage() {
  return (
    <>
      <StructuredData
        title="Gallery"
        description="Explore the Smile Pic Photography gallery."
        pathname="/gallery"
        image="/gallery-og.jpg"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />

      <main>
        {/* Gallery Content */}
      </main>
    </>
  );
}
