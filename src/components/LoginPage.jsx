import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowLeft,
  MapPinHouse,
  StretchVertical,
  DecimalsArrowRight,
  LocateFixed,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

 async function handleSubmit(e) {
  e.preventDefault(); 

  if (isLogin) {
    // ===== LOGIN =====
    try {
      const response = await fetch(
        // GET com filtro por email e senha ate o momento usando mock
        `http://localhost:3001/users?email=${email}&password=${password}`
      );

      const data = await response.json(); 

      
      if (data.length === 0) {
        toast.error("E-mail ou senha inválidos");
        console.log("errrrro")
        return;
      }

      const user = data[0]; 

      // salva usuário logado no mock 
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login realizado com sucesso");
      navigate("/"); 
    } catch (error) {
      console.error(error);
      toast.error("Erro ao fazer login");
    }
  } else {
    // CADASTRO (mock) 
    try {
      const response = await fetch(
        "http://localhost:3001/users",
        {
          method: "POST", // POST para cadastro
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            role: "user",
          }),
        }
      );

      if (!response.ok) {
        toast.error("Erro ao criar conta");
        return;
      }

      toast.success("Conta criada com sucesso");
      setIsLogin(true); 
    } catch (error) {
      toast.error("Erro no cadastro");
    }
  }
}


  function handleForgotPassword() {
    if (!email) {
      setMessage("Informe seu e-mail para recuperar a senha.");
      return;
    }

    setMessage(
      "Se o e-mail existir, enviaremos instruções para redefinir a senha."
    );
  }

  return (
    <div className="min-h-screen bg-black text-white sm:pt-24 px-4">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => (isLogin ? navigate("/") : setIsLogin(true))}
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
              <>
                <Input
                  label="Nome Completo"
                  icon={User}
                  value={name}
                  onChange={setName}
                />

                <Input
                  label="CEP"
                  icon={MapPinHouse}
                  value={cep}
                  onChange={setCep}
                />

                <SelectEstado estado={estado} setEstado={setEstado} />

                <Input
                  label="Rua"
                  icon={StretchVertical}
                  value={rua}
                  onChange={setRua}
                />

                <Input
                  label="Número"
                  icon={DecimalsArrowRight}
                  value={numero}
                  onChange={setNumero}
                />
              </>
            )}

            <Input
              label="E-mail"
              icon={Mail}
              type="email"
              value={email}
              onChange={setEmail}
            />

            <Input
              label="Senha"
              icon={Lock}
              type="password"
              value={password}
              onChange={setPassword}
            />

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

            <button className="w-full bg-white text-black py-3 rounded-lg">
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

/* ---------- COMPONENTES AUXILIARES ---------- */

function Input({ label, icon: Icon, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block mb-2 text-sm">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
        />
      </div>
    </div>
  );
}

function SelectEstado({ estado, setEstado }) {
  return (
    <div>
      <label className="block mb-2 text-sm">Estado</label>
      <div className="relative">
        <LocateFixed className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 py-3"
        >
          <option value="">Selecione um estado</option>
          {estadosDoBrasil.map((item) => (
            <option key={item.sigla} value={item.sigla}>
              {item.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
