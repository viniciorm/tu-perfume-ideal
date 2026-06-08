import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroBanner() {
  return (
    <div className="w-full relative overflow-hidden mb-12">
      {/* Propuesta de valor */}
      <div className="container mx-auto px-4 py-12 md:py-16 text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
          Descubre Tu Fragancia
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 font-light leading-relaxed">
          Perfumes inspirados en fragancias de lujo, con excelente duración y una fracción del precio de las marcas originales.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm md:text-base text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Alta duración y fijación</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Más de 100 aromas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Formatos de 20, 50 y 100 ml</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Colección Hombres Premium */}
        <Link 
          to="/hombres"
          className="group relative h-[400px] md:h-[500px] overflow-hidden block"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/images/perfume-black.png" 
              alt="Colección Hombres" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6B9A5] font-bold mb-2">Día del Padre</span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4 group-hover:text-[#C6B9A5] transition-colors">Colección Hombres</h2>
            <div className="flex items-center text-sm font-semibold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Ver Colección</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Colección Mujer Premium */}
        <Link 
          to="/mujer"
          className="group relative h-[400px] md:h-[500px] overflow-hidden block"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/images/perfume-red.png" 
              alt="Colección Mujer" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A151C]/90 via-[#4A151C]/40 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFB6B6] font-bold mb-2">Exclusivo</span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4 group-hover:text-[#FFB6B6] transition-colors">Colección Mujeres</h2>
            <div className="flex items-center text-sm font-semibold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Ver Colección</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
