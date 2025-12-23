import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10  bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4 tracking-wider text-white/50">
              LOGO<span className="text-white/50">VOID</span>
            </h3>
            <p className="text-white/60 text-sm">
              Estilo urbano que define sua personalidade. Desde 2025.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 tracking-wider text-white">LOJA</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Novidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Masculino
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Feminino
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Acessórios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4 tracking-wider text-white">AJUDA</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rastreamento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guia de Tamanhos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 tracking-wider text-white">SOBRE</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustentabilidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© 2025 VOID. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
