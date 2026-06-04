import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const [activeLine, setActiveLine] = useState<'red' | 'black'>('red');
  const [isHovered, setIsHovered] = useState(false);

  // Auto-switch between red (women) and black (men) high-end lines
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev === 'red' ? 'black' : 'red'));
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-gradient-to-br from-[#1A1210] via-[#27181F] to-[#120E18] relative overflow-hidden py-16 px-4 md:py-24 transition-all duration-1000">
      {/* Luces y Gradientes de Lujo dinámicos que cambian con la línea activa */}
      <div 
        className={`absolute right-0 top-0 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none transition-all duration-1000 ${
          activeLine === 'red' 
            ? 'bg-gradient-to-br from-[#B31D1D]/15 via-amber-500/5 to-transparent' 
            : 'bg-gradient-to-br from-indigo-500/10 via-[#404040]/10 to-transparent'
        }`} 
      />
      <div 
        className={`absolute -left-10 -bottom-10 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ${
          activeLine === 'red' 
            ? 'bg-gradient-to-tr from-amber-600/5 via-rose-500/5 to-transparent' 
            : 'bg-gradient-to-tr from-slate-600/5 via-indigo-500/5 to-transparent'
        }`} 
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Información */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              El Arte del Perfume Fino
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif-luxury">
              Fragancias que <span className="text-gradient-gold font-semibold">inspiran</span> emociones
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
              Encuentra tu perfume alternativo ideal. Explora nuestro mapa olfativo inteligente, descubre equivalencias de alta gama o responde unas preguntas simples para armar tu pedido personalizado por WhatsApp.
            </p>

            {/* Insignias de Confianza */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
              <div className="space-y-1">
                <div className="text-amber-400 font-bold text-lg md:text-xl font-serif-luxury">8-12h+</div>
                <div className="text-xs text-slate-400 font-medium">Larga Duración</div>
              </div>
              <div className="space-y-1">
                <div className="text-amber-400 font-bold text-lg md:text-xl font-serif-luxury">Francia</div>
                <div className="text-xs text-slate-400 font-medium">Esencias Importadas</div>
              </div>
              <div className="space-y-1">
                <div className="text-amber-400 font-bold text-lg md:text-xl font-serif-luxury">100%</div>
                <div className="text-xs text-slate-400 font-medium">Garantía de Calidad</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Producto Flotante Interactiva de Alta Gama */}
          <div 
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Controles de Línea arriba de la tarjeta */}
            <div className="flex gap-2 mb-4 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/10 relative z-20">
              <button
                onClick={() => setActiveLine('red')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeLine === 'red'
                    ? 'bg-[#B31D1D] text-white shadow-lg shadow-rose-900/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🔴 Línea Red (Dama)
              </button>
              <button
                onClick={() => setActiveLine('black')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeLine === 'black'
                    ? 'bg-[#222] border border-white/20 text-white shadow-lg shadow-black/80'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚫ Línea Black (Varón)
              </button>
            </div>

            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10 group">
              {/* Capa de Sombra Gradual */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20 z-10 pointer-events-none" />
              
              {/* Contenedor de imágenes con transiciones fluidas de opacidad */}
              <div className="absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none">
                <img 
                  src="/images/perfume-red.png" 
                  alt="Línea Red de Alta Gama (Mujer)" 
                  className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-[1200ms] ease-out ${
                    activeLine === 'red' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
                <img 
                  src="/images/perfume-black.png" 
                  alt="Línea Black de Alta Gama (Hombre)" 
                  className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-[1200ms] ease-out ${
                    activeLine === 'black' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              </div>

              {/* Etiqueta Flotante Superior de Exclusividad */}
              <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-[9px] font-bold uppercase tracking-widest shadow-lg">
                ✨ COLEC. ALTA GAMA
              </span>

              {/* Contenido Flotante Inferior de Glassmorphism */}
              <div className="absolute bottom-5 left-5 right-5 z-20 glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl transition-all duration-500">
                <div className="flex items-center justify-between mb-1">
                  <p className={`text-[9px] uppercase tracking-widest font-extrabold transition-colors duration-500 ${
                    activeLine === 'red' ? 'text-rose-400' : 'text-amber-400'
                  }`}>
                    {activeLine === 'red' ? 'Red Line / Femenina' : 'Black Line / Masculina'}
                  </p>
                  <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5 font-semibold">
                    100 ml
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-1 font-serif-luxury transition-all duration-300">
                  {activeLine === 'red' ? 'Red Parfums' : 'Black Parfums'}
                </h3>
                <p className="text-xs text-slate-300 leading-snug font-medium min-h-[36px] transition-all duration-500">
                  {activeLine === 'red' 
                    ? 'Inspirada en fragancias exclusivas de nicho como Baccarat Rouge, Love Don\'t Be Shy, Bianco Latte y Soleil Blanc.' 
                    : 'Inspirada en fragancias exclusivas de nicho como Creed Aventus, Santal 33, Ombré Leather y L\'immensité.'
                  }
                </p>
              </div>
            </div>

            {/* Elemento decorativo flotante trasero dinámico */}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl -z-10 transition-all duration-1000 ${
              activeLine === 'red' ? 'bg-rose-500/25' : 'bg-slate-500/25'
            }`} />
          </div>
        </div>
      </div>
    </section>
  );
}
