export function CategorySection() {
  const categories = [
    {
      title: "CAMISETAS",
      image: "https://images.unsplash.com/photo-1668720618149-f1c00c1841e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMHRzaGlydHxlbnwxfHx8fDE3NjU4MjIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "MOLETONS",
      image: "https://images.unsplash.com/photo-1624115507303-33758fbe3043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMHN0cmVldHxlbnwxfHx8fDE3NjU4MjIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "JAQUETAS",
      image: "https://images.unsplash.com/photo-1550948506-9a85c307d4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzY1ODA4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="relative h-64 sm:h-80 group cursor-pointer overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl sm:text-3xl tracking-widest">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
