import Image from 'next/image';

const partnersData = [
  { name: "Wedding Photography", file: "/services/wedding.webp" },
  { name: "Event Photography", file: "/services/event.webp" },
  { name: "Family Photography", file: "/services/family.webp" },
  { name: "Newborn", file: "/services/newborn.webp" },
  { name: "Portrait Studio", file: "/services/portrait.webp" },
  { name: "Corporate Shoots", file: "/services/corporate.webp" },
  { name: "Real Estate Photography", file: "/services/realestate.webp" },
  { name: "Product Photography", file: "/services/product.webp" },
];

const PartnershipsLogos = () => {
  return (
    <section className="bg-background py-20 lg:py-40 relative overflow-hidden">
      
      {/* LARGE BACKGROUND TITLE */}
      <h2
        className="font-accent text-primary italic lowercase absolute top-10 left-1/2 -translate-x-1/2 opacity-10 select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 20vw, 18rem)", lineHeight: 0.8, zIndex: 1 }}
      >
        services
      </h2>

      <div className="container relative z-20">

        {/* TOP RIGHT TEXT */}
        <div className="flex justify-end mb-16">
          <p className="text-text-secondary text-lg lg:text-xl italic max-w-md text-right">
            We provide a wide range of professional photography services, capturing
            your most important memories with creativity and precision.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {partnersData.map((service) => (
            <div
              key={service.name}
              className="group rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm shadow-xl 
                         border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={service.file}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="text-center text-white text-sm font-medium py-3 opacity-80 group-hover:opacity-100 transition">
                {service.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipsLogos;
