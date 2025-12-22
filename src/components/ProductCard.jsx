import { ShoppingCart } from "lucide-react";

export function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-white/5 mb-4 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs tracking-wider">
            {product.badge}
          </span>
        )}

        <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/90">
          <ShoppingCart size={20} />
        </button>
      </div>

      <h3 className="mb-2 group-hover:text-white/70 transition-colors">
        {product.name}
      </h3>

      <p className="text-white/60">
        R$ {product.price.toFixed(2).replace(".", ",")}
      </p>
    </div>
  );
}
