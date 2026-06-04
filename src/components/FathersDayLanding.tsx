import { useState, useRef } from "react";
import { Clock, Star, Package, ShieldCheck, Gift, HeartHandshake, Award, Users, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { FragranceMap } from "./FragranceMap";
import { ProductCard } from "./ProductCard";
import { products } from "../data/products";
import { Product } from "../types/product";

interface FathersDayLandingProps {
  onAddProduct: (product: Product) => void;
}

export function FathersDayLanding({ onAddProduct }: FathersDayLandingProps) {
  const [activeCategory, setActiveCategory] = useState<"premium" | "clasico" | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleShowCategory = (category: "premium" | "clasico") => {
    setActiveCategory(category);
    setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const displayedProducts = products.filter(p => {
    if (p.line !== "Hombre" && p.gender !== "Hombre") return false;
    if (activeCategory === "premium") {
      return p.code.startsWith("Q") || p.tags.includes("premium") || p.priceKey === "redBlack100";
    }
    if (activeCategory === "clasico") {
      return !p.code.startsWith("Q") && p.priceKey !== "redBlack100";
    }
    return false;
  });

  return (
    <div className="font-sans bg-[#EBE9E4] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0B121A] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div>
              <p className="text-[#C6B9A5] uppercase tracking-[0.2em] font-bold text-sm mb-4">Día del Padre</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                EL MEJOR REGALO <br />
                <span className="text-[#C6B9A5] font-serif italic font-normal">PARA PAPÁ</span>
              </h1>
            </div>
            
            <p className="text-xl text-slate-300 max-w-md font-light leading-relaxed">
              Fragancias que lo acompañan en cada momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-white/10 w-max">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#C6B9A5]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Alta Duración</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-[#C6B9A5]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Calidad Premium<br/>A Precio Justo</span>
              </div>
            </div>

            <Link to="/" className="inline-block bg-[#BFA573] hover:bg-[#A68F5B] text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm transition-colors mt-8">
              Ver Catálogo Completo
            </Link>
          </div>

          <div className="relative flex justify-center items-center mt-12 lg:mt-0">
            {/* Medalla */}
            <div className="absolute top-0 right-0 lg:right-12 w-32 h-32 rounded-full border border-[#C6B9A5] flex flex-col items-center justify-center text-center p-4 z-20 hidden md:flex bg-[#0B121A]/50 backdrop-blur-sm">
              <span className="text-[#C6B9A5] text-[10px] uppercase tracking-widest font-bold mb-1">Ideal</span>
              <span className="text-white text-[10px] uppercase tracking-widest mb-2 leading-tight">Para sorprender<br/>a papá</span>
              <div className="w-8 h-2 border-b-2 border-t-2 border-[#C6B9A5] rounded-[100%]"></div>
            </div>

            <img 
              src="/images/perfume-black.png" 
              alt="Black Parfums" 
              className="w-full max-w-[400px] object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Trust Banner 1 */}
      <section className="bg-[#F0EEEB] py-8 border-b border-[#D8D3CC]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#D8D3CC]">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <Package className="w-8 h-8 text-[#42362C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#42362C] tracking-wider uppercase">Envíos a<br/>Todo Chile</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <ShieldCheck className="w-8 h-8 text-[#42362C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#42362C] tracking-wider uppercase">Pago 100%<br/>Seguro</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <Gift className="w-8 h-8 text-[#42362C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#42362C] tracking-wider uppercase">Presentación<br/>Premium</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <HeartHandshake className="w-8 h-8 text-[#42362C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#42362C] tracking-wider uppercase">Garantía de<br/>Satisfacción</span>
            </div>
          </div>
        </div>
      </section>

      {/* Elige Su Esencia */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif tracking-[0.2em] text-[#0B121A] uppercase mb-4">Elige su esencia</h2>
          <div className="w-12 h-0.5 bg-[#BFA573] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta Premium */}
          <div className="rounded-lg overflow-hidden bg-[#0A0A0A] flex flex-col md:flex-row items-center justify-between p-8 group border border-[#1A1A1A]">
            <div className="z-20 md:w-1/2 space-y-4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl text-white tracking-widest font-light">LÍNEA PREMIUM</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Fragancias exclusivas inspiradas en las mejores marcas.
              </p>
              <button 
                onClick={() => handleShowCategory("premium")}
                className="inline-block bg-[#BFA573] hover:bg-[#A68F5B] text-white px-6 py-2.5 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors mt-4"
              >
                Ver Premium
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/images/perfume-black.png" 
                alt="Línea Premium" 
                className="w-full max-w-[200px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Tarjeta Clásico */}
          <div className="rounded-lg overflow-hidden bg-[#243441] flex flex-col md:flex-row items-center justify-between p-8 group border border-[#2A3A4A]">
            <div className="z-20 md:w-1/2 space-y-4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl text-white tracking-widest font-light">PERFUME CLÁSICO</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Fragancia fresca y elegante para el día a día.
              </p>
              <button 
                onClick={() => handleShowCategory("clasico")}
                className="inline-block bg-[#BFA573] hover:bg-[#A68F5B] text-white px-6 py-2.5 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors mt-4"
              >
                Ver Clásicos
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/images/perfume-hombre.png" 
                alt="Perfume Clásico" 
                className="w-full max-w-[200px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Olfativo */}
      <div className="container mx-auto px-4">
        <FragranceMap onAddProduct={onAddProduct} initialGender="Hombre" />
      </div>

      {/* Catálogo en línea (Aparece al hacer click en Ver Premium / Ver Clásicos) */}
      {activeCategory && (
        <section ref={catalogRef} className="py-16 container mx-auto px-4 max-w-6xl">
          {activeCategory === "premium" ? (
            <div className="mb-10 rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a] text-white flex flex-col md:flex-row items-center relative border border-white/5">
              {/* Decorative elements for the background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none"></div>
              
              <div className="p-8 md:p-12 md:w-5/12 flex flex-col items-center justify-center relative z-10 border-b md:border-b-0 md:border-r border-white/10">
                <img src="/images/logo_blackparfums.png" alt="Black Parfums" className="h-24 md:h-32 object-contain drop-shadow-lg" />
              </div>
              
              <div className="p-8 md:p-12 md:w-7/12 relative z-10">
                <p className="text-lg md:text-xl font-light leading-relaxed text-slate-300">
                  Elegancia en su máxima expresión. Misteriosa, refinada y magnética. <strong className="font-bold text-white">BLACK</strong> es el equilibrio perfecto entre sofisticación y carácter, una fragancia diseñada para quienes buscan un aroma con presencia, profundidad y distinción.
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-10 flex flex-col md:flex-row items-center justify-between border-b border-[#D8D3CC] pb-6 gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-[#DCD8D3] p-4 rounded-xl hidden md:block">
                  <img src="/images/perfume-hombre.png" alt="Perfumes Clásicos Hombre" className="w-20 h-20 object-contain drop-shadow-md opacity-80 mix-blend-multiply" />
                </div>
                <div>
                  <h2 className="text-4xl font-serif text-[#0B121A] mb-2">Línea Clásica</h2>
                  <p className="text-lg text-slate-600 font-medium">Perfumes de varón inspirados en los aromas que tú ya conoces.</p>
                </div>
              </div>
              <div className="text-slate-500 font-medium whitespace-nowrap">
                {displayedProducts.length} productos
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onSelect={onAddProduct}
              />
            ))}
          </div>

          {displayedProducts.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No se encontraron fragancias en esta categoría.
            </div>
          )}
        </section>
      )}


      {/* Trust Banner 2 */}
      <section className="bg-[#0B121A] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <Award className="w-8 h-8 text-[#C6B9A5]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-widest uppercase">Más de 60<br/>Fragancias</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <Users className="w-8 h-8 text-[#C6B9A5]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-widest uppercase">Miles de Clientes<br/>Satisfechos</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <Calendar className="w-8 h-8 text-[#C6B9A5]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-widest uppercase">Ideas de Regalo<br/>Para Cada Papá</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <MessageCircle className="w-8 h-8 text-[#C6B9A5]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-widest uppercase">¿Dudas?<br/>Escríbenos</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat message="Hola, quiero consultar sobre un perfume para el Día del Padre." />
    </div>
  );
}
