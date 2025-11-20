// app/page.js
import { buildMetadata } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Smile Pic Photography — premium portrait, wedding, and event photography.",
  pathname: "/",
  image: "/og-cover.jpg",
  keywords: [
    "Smile Pic Photography",
    "wedding photography",
    "portrait photography",
    "event photography",
    "professional photographer",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        title="Smile Pic Photography"
        description="Premium portrait, wedding, and event photography services."
        pathname="/"
        image="/og-cover.jpg"
      />

      <main>
        {/* Home Page Content */}
      </main>
    </>
  );
}
