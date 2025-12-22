import { useState, useRef } from "react";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturedCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Moletom Essential Black",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1624115507303-33758fbe3043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMHN0cmVldHxlbnwxfHx8fDE3NjU4MjIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NOVO",
    },
    {
      id: 2,
      name: "Camiseta Oversized White",
      price: 149.90,
      image: "https://images.unsplash.com/photo-1668720618149-f1c00c1841e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMHRzaGlydHxlbnwxfHx8fDE3NjU4MjIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "DESTAQUE",
    },
    {
      id: 3,
      name: "Jaqueta Urban Style",
      price: 399.90,
      image: "https://images.unsplash.com/photo-1550948506-9a85c307d4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzY1ODA4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "DESTAQUE",
    },
    {
      id: 4,
      name: "Tênis Street Classic",
      price: 499.90,
      image: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY1NzQ1MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NOVO",
    },
    {
      id: 5,
      name: "Moletom Cargo Black",
      price: 279.90,
      image: "https://images.unsplash.com/photo-1624115507303-33758fbe3043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMHN0cmVldHxlbnwxfHx8fDE3NjU4MjIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: null,
    },
    {
      id: 6,
      name: "Camiseta Graphics Pro",
      price: 169.90,
      image: "https://images.unsplash.com/photo-1668720618149-f1c00c1841e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMHRzaGlydHxlbnwxfHx8fDE3NjU4MjIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "SALE",
    },
  ];

const scroll = (direction) => {
  if (!scrollContainerRef.current) return;

  const container = scrollContainerRef.current;
  const scrollAmount = 300;

  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 flex flex-col text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            LANÇAMENTOS
          </h2>
          <p className="text-white/60">As novidades que você não pode perder</p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full hover:bg-white/90 transition-all shadow-lg hidden sm:block"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full hover:bg-white/90 transition-all shadow-lg hidden sm:block"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 sm:px-12 -mx-8 sm:-mx-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}