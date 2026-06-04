import { User, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col shadow-md">
      <div className="bg-[#4A151C] text-amber-50 text-xs font-bold text-center py-2 px-4 tracking-wide shadow-inner">
        🎁 MES DEL PADRE: 10% DE DESCUENTO EN TODOS LOS PEDIDOS (5 al 17 Junio) | ENVÍOS MARTES Y JUEVES (POR PAGAR)
      </div>
      <header className="border-b border-white/5 bg-[#0F141A] relative">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start justify-center group">
            <span className="text-xl font-bold text-white tracking-wide group-hover:text-[#C6B9A5] transition-colors leading-none">Tu Perfume Ideal</span>
            <span className="text-[10px] text-[#C6B9A5] uppercase tracking-[0.1em] mt-1 opacity-80">Parfums d Parfums</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-semibold text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link to="/dia-del-padre" className="hover:text-white transition-colors">Hombres</Link>
            <Link to="/mujer" className="hover:text-white transition-colors">Mujer</Link>
            <Link to="/packs" className="hover:text-white transition-colors">Pack Promocional</Link>
            <Link to="/#ofertas" className="hover:text-white transition-colors">Ofertas</Link>
          </nav>
          
          <div className="flex items-center gap-4 md:gap-6 text-white">
            <button className="hover:text-[#C6B9A5] transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-[#C6B9A5] transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="md:hidden hover:text-[#C6B9A5] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0F141A] border-b border-white/5 shadow-lg p-4 flex flex-col gap-4 text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 z-50">
            <Link to="/" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/dia-del-padre" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Hombres</Link>
            <Link to="/mujer" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Mujer</Link>
            <Link to="/packs" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Pack Promocional</Link>
            <Link to="/#ofertas" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Ofertas</Link>
          </div>
        )}
      </header>
    </div>
  );
}

