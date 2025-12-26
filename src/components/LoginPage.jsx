import { useState } from "react";
import { Mail, Lock, User, ArrowLeft, MapPinHouse, StretchVertical, DecimalsArrowRight, LocateFixed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import estadosDoBrasil from "../mock/estadosDoBrasil";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (isLogin) {
      console.log("LOGIN:", { email, password });
      navigate("/");
    } else {
      console.log("CADASTRO:", { name, email, password });
      navigate("/");
    }
  }

  function handleForgotPassword() {
    if (!email) {
      setMessage("Informe seu e-mail para recuperar a senha.");
      return;
    }

    console.log("RECUPERAÇÃO DE SENHA:", email);
    setMessage("Se o e-mail existir, enviaremos instruções para redefinir a senha.");
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <h1 className="text-3xl mb-2">
            {isLogin ? "BEM-VINDO" : "CRIAR CONTA"}
          </h1>

          <p className="text-white/60 mb-6">
            {isLogin
              ? "Entre com suas credenciais"
              : "Cadastre-se para continuar"}
          </p>

          {message && (
            <p className="mb-4 text-sm text-white/70">{message}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="flex flex-col gap-3">
                <div>
                <label className="block mb-2 text-lg">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
                  />
                </div>
                </div>
                <div>
                <label className="block mb-2 text-lg">CEP</label>
                <div className="relative">
                  <MapPinHouse className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="number"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3 "
                  />
                </div>
                </div>

               <div> 
              <label className="block mb-2 text-lg">Estado</label>
                <div className="relative">
                  <LocateFixed  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
                className="relative w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3 text-gray-500 bg-transparent outline-none"
                >
                <option>Selecione um estado</option>
                {estadosDoBrasil.map((item, index) => {
                  return (
                    <option key={index} value={item.sigla}>
                      {item.nome}
                    </option>
                  );
                })}
              </select>
               </div>
            </div>
                <div>
                <label className="block mb-2 text-lg">Rua</label>
                <div className="relative">
                  <StretchVertical className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
                  />
                </div>
                </div>
                <div>
                <label className="block mb-2 text-lg">Número</label>
                <div className="relative">
                  <DecimalsArrowRight className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="number"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
                  />
                </div>
                </div>
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-white/60 hover:text-white"
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg"
            >
              {isLogin ? "ENTRAR" : "CRIAR CONTA"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white underline"
              >
                {isLogin ? "Cadastre-se" : "Entrar"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
