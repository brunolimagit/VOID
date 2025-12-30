import { useState } from "react";
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";



export function CheckoutPage() {
const [paymentMethod, setPaymentMethod] = useState("credit");
const [step, setStep] = useState("info");
const pageCart = useNavigate()

  const orderTotal = 429.70;

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    setStep("payment");
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={48} />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-4 tracking-tight">
            PEDIDO CONFIRMADO!
          </h1>
          <p className="text-white/60 mb-2">Pedido #12345</p>
          <p className="text-white/80 mb-8">
            Enviamos um e-mail de confirmação com os detalhes do seu pedido.
          </p>
          <button
            onClick={()=> pageCart("/cart")}
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-white/90 transition-colors tracking-wide"
          >
            VOLTAR PARA CARRINHO
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => step === "info" ? pageCart("/cart") : setStep("info")}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === "info" ? "bg-white text-black" : "bg-white/20"
              }`}>
                1
              </div>
              <span className="hidden sm:block">Dados</span>
            </div>
            <div className="w-12 sm:w-20 h-px bg-white/20" />
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === "payment" ? "bg-white text-black" : "bg-white/20"
              }`}>
                2
              </div>
              <span className="hidden sm:block">Pagamento</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-8 tracking-tight">
          {step === "info" ? "INFORMAÇÕES DE ENTREGA" : "PAGAMENTO"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === "info" ? (
              <form onSubmit={handleSubmitInfo} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm text-white/80">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="João Silva"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-white/80">
                      CPF
                    </label>
                    <input
                      type="text"
                      maxLength="11"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors max-11"
                      placeholder="000.000.000-00"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-white/80">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm text-white/80">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      maxLength="11"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-white/80">
                      CEP
                    </label>
                    <input
                      type="text"
                      maxLength="8"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="00000-000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-white/80">
                    Endereço
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Rua, número, complemento"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm text-white/80">
                      Bairro
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Centro"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-white/80">
                      Cidade
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="São Paulo"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg hover:bg-white/90 transition-colors tracking-wide"
                >
                  CONTINUAR PARA PAGAMENTO
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmitPayment} className="space-y-6">
                {/* Payment Method Selection */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("credit")}
                    className={`p-4 rounded-lg border transition-all ${
                      paymentMethod === "credit"
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <CreditCard className="mx-auto mb-2" size={24} />
                    <p className="text-sm">Cartão de Crédito</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-4 rounded-lg border transition-all ${
                      paymentMethod === "pix"
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="w-6 h-6 mx-auto mb-2 bg-white rounded" />
                    <p className="text-sm">PIX</p>
                  </button>
                </div>

                {paymentMethod === "credit" ? (
                  <>
                    <div>
                      <label className="block mb-2 text-sm text-white/80">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="0000 0000 0000 0000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-white/80">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="NOME COMO NO CARTÃO"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm text-white/80">
                          Validade
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-white/80">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                          placeholder="000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-white/80">
                        Parcelas
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors">
                        <option value="1">1x de R$ 429,70 sem juros</option>
                        <option value="2">2x de R$ 214,85 sem juros</option>
                        <option value="3">3x de R$ 143,23 sem juros</option>
                        <option value="4">4x de R$ 107,43 sem juros</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-48 h-48 bg-white mx-auto mb-4 rounded-lg flex items-center justify-center">
                      <p className="text-black text-xs">QR CODE PIX</p>
                    </div>
                    <p className="text-white/80 mb-2">
                      Escaneie o QR Code para pagar
                    </p>
                    <p className="text-sm text-white/60">
                      Pagamento confirmado automaticamente
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-white/60 bg-white/5 p-4 rounded-lg">
                  <Lock size={16} />
                  <p>Pagamento 100% seguro e criptografado</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg hover:bg-white/90 transition-colors tracking-wide"
                >
                  {paymentMethod === "credit" ? "FINALIZAR PAGAMENTO" : "CONFIRMAR PAGAMENTO"}
                </button>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl mb-6 tracking-wide">RESUMO</h2>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-white/5 rounded overflow-hidden flex-shrink-0">
                    <img
                      src="https://www.kacewear.com.br/cdn/shop/files/Moletom_Oversized_Rise_Kace_Wear_x_Hideki_Preto_Masculino_Costas_2.png?v=1764066219&width=1096"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">Moletom Essential Black</p>
                    <p className="text-xs text-white/60">Qtd: 1 | Tam: M</p>
                    <p className="text-sm mt-1">R$ 249,90</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-white/5 rounded overflow-hidden flex-shrink-0">
                    <img
                      src="https://www.kacewear.com.br/cdn/shop/files/Camiseta_Boxy_Kace_x_Redragon_Preta_Masculino_Frente.jpg?v=1722461907"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">Camiseta Oversized Black</p>
                    <p className="text-xs text-white/60">Qtd: 2 | Tam: G</p>
                    <p className="text-sm mt-1">R$ 149,90</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="flex justify-between text-sm text-white/80">
                  <span>Subtotal</span>
                  <span>R$ 399,80</span>
                </div>
                <div className="flex justify-between text-sm text-white/80">
                  <span>Frete</span>
                  <span>R$ 29,90</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/10">
                  <span>Total</span>
                  <span>R$ {orderTotal.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
