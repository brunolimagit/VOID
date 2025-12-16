import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl tracking-wider">
              LOGO<span className="text-white/50"> VOID</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Novidades
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Masculino
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Feminino
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Acessórios
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Sale
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-white hover:text-white/70 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-white/70 transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button className="text-white hover:text-white/70 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden hover:text-white/70 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                Novidades
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                Masculino
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                Feminino
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                Acessórios
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                Sale
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
