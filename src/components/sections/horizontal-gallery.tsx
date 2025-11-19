"use client";

import { useState, useRef, useEffect, useCallback, FC } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// ----------------------------------------
// GALLERY IMAGES (replace with your 20 webp)
// ----------------------------------------
const galleryImages = [
  "/gallery/1.webp",
  "/gallery/2.webp",
  "/gallery/3.webp",
  "/gallery/4.webp",
  "/gallery/5.webp",
  "/gallery/6.webp",
  "/gallery/7.webp",
  "/gallery/8.webp",
  "/gallery/9.webp",
  "/gallery/10.webp",
  "/gallery/11.webp",
  "/gallery/12.webp",
  "/gallery/13.webp",
  "/gallery/14.webp",
  "/gallery/15.webp",
  "/gallery/16.webp",
  "/gallery/17.webp",
  "/gallery/18.webp",
  "/gallery/19.webp",
  "/gallery/20.webp",
];

// ----------------------------------------
// IMAGE CARD
// ----------------------------------------
interface ImageCardProps {
  src: string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ImageCard: FC<ImageCardProps> = ({ src, index, containerRef }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollXProgress,
    [0, 1],
    index % 2 === 0 ? [-20, 20] : [20, -20]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: containerRef.current || undefined, once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="w-[90vw] md:w-[600px] flex-shrink-0 snap-center"
    >
      <motion.div style={{ y: parallaxY }} className="aspect-[16/9]">
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-xl border border-border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 90vw, 600px"
            className="object-cover"
            priority={index < 3}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ----------------------------------------
// MAIN COMPONENT
// ----------------------------------------
const HorizontalGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[index] as HTMLElement;
    if (!child) return;

    const scrollTarget =
      child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;

    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });
  };

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = -1;
    let smallestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const htmlChild = child as HTMLElement;
      const childCenter = htmlChild.offsetLeft + htmlChild.offsetWidth / 2;

      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1) setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="gallery-section"
      className="
        bg-background min-h-screen
        py-20 lg:py-32
        snap-start
        opacity-0 translate-y-20
        transition-all duration-[1200ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
      "
    >
      {/* hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="
          scrollbar-hide flex items-center gap-8 
          overflow-x-auto snap-x snap-mandatory scroll-smooth
          py-4 
          px-[calc((100vw-90vw)/2)] 
          md:px-[calc((100vw-600px)/2)]
        "
      >
        {galleryImages.map((src, index) => (
          <ImageCard
            key={src}
            src={src}
            index={index}
            containerRef={scrollRef}
          />
        ))}
      </div>

      {/* Dots navigation */}
      <div className="mt-8 flex justify-center gap-3">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`View image ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              activeIndex === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
