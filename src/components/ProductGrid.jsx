import  ProductCard  from "./ProductCard";

export default function ProductGrid() {
  const products = [
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
      badge: null,
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
      badge: null,
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
    {
      id: 7,
      name: "Jaqueta Bomber Premium",
      price: 449.90,
      image: "https://images.unsplash.com/photo-1550948506-9a85c307d4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzY1ODA4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: null,
    },
    {
      id: 8,
      name: "Tênis High Top Urban",
      price: 549.90,
      image: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY1NzQ1MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NOVO",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 sm:mb-12 flex flex-col text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
          PRODUTOS EM DESTAQUE
        </h2>
        <p className="text-white/60">Confira nossas peças mais vendidas</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
