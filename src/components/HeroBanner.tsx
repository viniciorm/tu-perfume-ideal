import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroBanner() {
  return (
    <div className="w-full relative overflow-hidden mb-12">
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
