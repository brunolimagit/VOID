import { ShoppingCart, Search, Menu, User, LineSquiggle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoVoid from "../assets/logo-voidd.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0 flex gap-4">
          <p className="text-[35px] flex  font-bold">VOID</p>
            <img src={logoVoid} alt="" className="h-10 opacity-80  w-auto object-contain mt-1 "  />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={"/page2"}  className="text-white hover:text-white/70 transition-colors text-lg">
              Lançamentos
            </Link>
            <a href="#" className="text-white hover:text-white/70 transition-colors text-lg">
              Masculino
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors text-lg">
              Feminino
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors text-lg">
              Acessórios
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors text-lg">
              Sale
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-white hover:text-white/70 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            
            <Link to={"/login"} className="text-white hover:text-white/70 transition-colors hidden sm:block">
              <User size={20} />
            </Link>
            <Link to={"/cart"} className="text-white hover:text-white/70 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
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
              <Link to={"/page2"}  className="text-white hover:text-white/70 transition-colors text-lg">
              Lançamentos
            </Link>
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                Masculino
              </Link>
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                Feminino
              </Link>
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                Acessórios
              </Link>
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                Sale
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
