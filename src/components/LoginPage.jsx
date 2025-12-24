import { useState } from "react";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function LoginPage({ onNavigate }) {
    const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted", { email, password, name });
  onNavigate("home");
};

function handleNavigateHome(){
    navigate("/")
}

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-md mx-auto">
        <button
          onClick={handleNavigateHome}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h1 className="text-3xl sm:text-4xl mb-2 tracking-tight">
            {isLogin ? "BEM-VINDO" : "CRIAR CONTA"}
          </h1>
          <p className="text-white/60 mb-8">
            {isLogin
              ? "Entre com suas credenciais"
              : "Cadastre-se para continuar"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm text-white/80">
                  Nome Completo
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Seu nome"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm text-white/80">
                E-mail
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-white/80">
                Senha
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  size={20}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg hover:bg-white/90 transition-colors tracking-wide"
            >
              {isLogin ? "ENTRAR" : "CRIAR CONTA"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/60">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:text-white/80 transition-colors"
              >
                {isLogin ? "Cadastre-se" : "Entrar"}
              </button>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/40">
            Ao continuar, você concorda com nossos{" "}
            <a href="#" className="text-white/60 hover:text-white">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="text-white/60 hover:text-white">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
