"use client";

import { useState, useRef, useEffect, useCallback, FC } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302baa04b14a1ca33c0b25_ln-home-horiz-1-6.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302baab12220595c8223b3_ln-home-horiz-2-7.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302babcf12f0111d96322e_ln-home-horiz-3-8.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302baa798e2cc6e02ac38a_ln-home-horiz-4-9.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68da85d632bfefc552a0faac_Britain-25_20_1_-10.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-11.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302bab3ee6e26b1f434a7d_ln-home-horiz-7-12.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302baaedf821dd2e3a7c74_ln-home-horiz-8-13.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302babb87c5f19ec131093_ln-home-horiz-9-15.webp",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302bab4f762cdbc5e93415_ln-home-horiz-10-16.webp",
];

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
            alt={`Racing and lifestyle gallery image ${index + 1}`}
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

const HorizontalGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[index] as HTMLElement;
    if (child) {
      const scrollTarget =
        child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
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

    if (closestIndex !== -1) {
      setActiveIndex(closestIndex);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="bg-background py-20 lg:py-32">
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      <div
        ref={scrollRef}
        className="scrollbar-hide flex items-center gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-[calc((100vw-90vw)/2)] md:px-[calc((100vw-600px)/2)]"
      >
        {galleryImages.map((src, index) => (
          <ImageCard key={src} src={src} index={index} containerRef={scrollRef} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              activeIndex === index
                ? "bg-primary"
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;