import { useState } from "react";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";


export function CartPage() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Moletom Essential Black",
      price: 249.9,
      image:
        "https://images.unsplash.com/photo-1624115507303-33758fbe3043",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      name: "Camiseta Oversized White",
      price: 149.9,
      image:
        "https://images.unsplash.com/photo-1668720618149-f1c00c1841e9",
      size: "G",
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 29.9;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link to={"/"}
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          Continuar Comprando
        </Link>

        <h1 className="text-4xl mb-8">CARRINHO</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto mb-4 text-white/20" />
            <p className="text-white/60 mb-8">Seu carrinho está vazio</p>
            <button
              onClick={() => navigate("/page2")}
              className="bg-white text-black px-8 py-3"
            >
              EXPLORAR PRODUTOS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3>{item.name}</h3>
                    <p className="text-sm text-white/60">
                      Tamanho: {item.size}
                    </p>
                    <p className="mt-2">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>

                    <div className="flex justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={16} />
                        </button>
                      </div>

                      <button onClick={() => removeItem(item.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h2 className="mb-6">RESUMO</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>R$ {shipping.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              <button
                onClick={()=> navigate("/pagamento")}
                className="w-full bg-white text-black py-3 mt-6"
              >
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
