import { useState, useRef } from "react";
import  ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCarousel() {
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
      name: "Camiseta Oversized Black",
      price: 149.90,
      image: "https://www.kacewear.com.br/cdn/shop/files/Camiseta_Boxy_Kace_x_Redragon_Preta_Masculino_Frente.jpg?v=1722461907",
      badge: "DESTAQUE",
    },
    {
      id: 3,
      name: "Jaqueta Urban Style",
      price: 399.90,
      image: "https://www.kacewear.com.br/cdn/shop/files/Jaqueta_Gola_Alta_Thermo_Fleece_Preta_Research_Kace_Bolso_Masculina.png?v=1742135659&width=939",
      badge: "DESTAQUE",
    },
    {
      id: 4,
      name: "Tênis Streetwear",
      price: 499.90,
      image: "https://acdn-us.mitiendanube.com/stores/001/155/809/products/image_20251216_162746_845-9c209c57ff9deb139b17659135879581-1024-1024.webp",
      badge: "NOVO",
    },
    {
      id: 5,
      name: "Moletom Cargo Black",
      price: 279.90,
      image: "https://www.kacewear.com.br/cdn/shop/files/Moletom_Oversized_Rise_Kace_Wear_x_Hideki_Preto_Masculino_Costas_2.png?v=1764066219&width=1096",
      badge: null,
    },
    {
      id: 6,
      name: "Camiseta Graphics Pro",
      price: 169.90,
      image: "https://www.kacewear.com.br/cdn/shop/files/Camiseta_Boxy_Arcturus_Kace_x_Pitayaq_Detalhe_2.jpg?v=1719005961&width=939",
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