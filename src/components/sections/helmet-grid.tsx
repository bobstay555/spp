import Image from "next/image";

interface Helmet {
  name: string;
  year: string;
  baseImage?: string;
  hoverImage?: string;
}

const helmetData: Helmet[] = [
  {
    name: "Season",
    year: "2025",
    baseImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-20.webp",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305b411c575b2f777125f6_In-helm-2025-Season-hover-21.webp",
  },
  {
    name: "Discoball",
    year: "2025",
    baseImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305b2259159e5170d2b923_In-helm-2025-Discoball-ba-22.webp",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305b24037a1e7681195c20_In-helm-2025-Discoball-ho-23.webp",
  },
  {
    name: "Dark Glitter",
    year: "2025",
    baseImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305aff4692de3e7ea12251_In-helm-2025-DarkGlitter--24.webp",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305b03644c91f0a8de407b_In-helm-2025-DarkGlitter--25.webp",
  },
   {
    name: "Porcelain",
    year: "2024",
    baseImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305acf3fccf71c6d72607b_In-helm-2024-Porcelain-ba-28.webp",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305ad3a594ec37bd1d32cb_In-helm-2024-Porcelain-ho-29.webp",
  },
  {
    name: "Japan",
    year: "2024",
    baseImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305a980c399022066600a6_In-helm-2024-Japan-base-30.webp",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68305a980c399022066600a6_In-helm-2024-Japan-base-30.webp",
  },
  { name: "GIF", year: "2024" },
  { name: "Dark Mode", year: "2024" },
  { name: "Las Vegas", year: "2023" },
  { name: "Chrome", year: "2023" },
  { name: "Beachball", year: "2023" },
  { name: "Basketball", year: "2022" },
  { name: "Silverstone", year: "2020" },
];

const HelmetCard = ({ helmet }: { helmet: Helmet }) => {
  return (
    <a href="#" className="group block bg-card p-8 rounded-lg border border-border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(205,255,0,0.2)]">
      <div className="relative aspect-square mb-6">
        {helmet.baseImage && helmet.hoverImage ? (
          <>
            <Image
              src={helmet.baseImage}
              alt={`${helmet.name} helmet`}
              width={400}
              height={400}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              loading="lazy"
            />
            <Image
              src={helmet.hoverImage}
              alt={`${helmet.name} helmet alternate view`}
              width={400}
              height={400}
              className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />
          </>
        ) : (
          <div className="w-full h-full bg-secondary rounded-md flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Image N/A</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center text-display">
        <h3 className="text-xl text-foreground font-medium">{helmet.name}</h3>
        <p className="text-lg text-primary">{helmet.year}</p>
      </div>
    </a>
  );
};

const HelmetGrid = () => {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-32">
      <div className="container px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="text-left">
              <h2 className="text-6xl lg:text-7xl font-extrabold text-display text-white mb-2 tracking-tighter">HELMETS</h2>
              <h3 className="text-6xl lg:text-7xl font-normal text-accent-font text-white italic">HALL OF FAME</h3>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-text-secondary max-w-md">
                From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {helmetData.map((helmet) => (
              <HelmetCard key={`${helmet.name}-${helmet.year}`} helmet={helmet} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelmetGrid;