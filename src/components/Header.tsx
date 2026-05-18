import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C6B9A5]/10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8C785C] animate-pulse" />
          <span className="text-xl font-serif-luxury font-bold tracking-widest text-gradient-gold">
            PARFUMS DE PARFUMS
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-[#705E49]">
          <a href="#" className="hover:text-[#42362C] transition-colors">Inicio</a>
          <a href="#catalogo" className="hover:text-[#42362C] transition-colors">Catálogo</a>
          <a href="#mapa-olfativo" className="hover:text-[#42362C] transition-colors">Mapa Olfativo</a>
          <a href="#blog-aromas" className="hover:text-[#42362C] transition-colors">Aromas</a>
          <a href="#faq" className="hover:text-[#42362C] transition-colors">Preguntas</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#catalogo"
            className="hidden sm:inline-flex bg-[#42362C] hover:bg-[#705E49] text-white px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all"
          >
            Explorar
          </a>
        </div>
      </div>
    </header>
  );
}

