import { useState, useRef } from "react";
import { Clock, Star, Package, ShieldCheck, Gift, HeartHandshake, Award, Users, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { FragranceMap } from "./FragranceMap";
import { ProductCard } from "./ProductCard";
import { products } from "../data/products";
import { Product } from "../types/product";

interface WomenPerfumesLandingProps {
  onAddProduct: (product: Product) => void;
}

export function WomenPerfumesLanding({ onAddProduct }: WomenPerfumesLandingProps) {
  const [activeCategory, setActiveCategory] = useState<"premium" | "clasico" | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleShowCategory = (category: "premium" | "clasico") => {
    setActiveCategory(category);
    setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const displayedProducts = products.filter(p => {
    if (p.line !== "Mujer" && p.gender !== "Mujer") return false;
    if (activeCategory === "premium") {
      return p.code.startsWith("Q") || p.tags.includes("premium") || p.priceKey === "redBlack100";
    }
    if (activeCategory === "clasico") {
      return !p.code.startsWith("Q") && p.priceKey !== "redBlack100";
    }
    return false;
  });

  return (
    <div className="font-sans bg-[#F9F6F6] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fuchsia-950 via-[#6a0d2a] to-rose-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div>
              <p className="text-[#D4AF37] uppercase tracking-[0.2em] font-bold text-sm mb-4">Colección Femenina</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
                LA ESENCIA <br />
                <span className="text-[#D4AF37] font-serif italic font-normal">DE SER MUJER</span>
              </h1>
            </div>
            
            <p className="text-xl text-[#F3E5D8] max-w-md font-light leading-relaxed">
              Descubre fragancias inolvidables, diseñadas para resaltar tu personalidad en cada ocasión.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-white/10 w-max">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Alta Duración</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Fórmulas<br/>Exclusivas</span>
              </div>
            </div>

            <Link to="/" className="inline-block bg-[#D4AF37] hover:bg-[#B3932F] text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm transition-colors mt-8">
              Ver Catálogo Completo
            </Link>
          </div>

          <div className="relative flex justify-center items-center mt-12 lg:mt-0">
            {/* Medalla */}
            <div className="absolute top-0 right-0 lg:right-12 w-32 h-32 rounded-full border border-[#D4AF37] flex flex-col items-center justify-center text-center p-4 z-20 hidden md:flex bg-[#4A151C]/50 backdrop-blur-sm">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-1">Especial</span>
              <span className="text-white text-[10px] uppercase tracking-widest mb-2 leading-tight">Para Regalar<br/>o Regalarte</span>
              <div className="w-8 h-2 border-b-2 border-t-2 border-[#D4AF37] rounded-[100%]"></div>
            </div>

            <img 
              src="/images/perfume-red.png" 
              alt="Red Parfums" 
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
              <Package className="w-8 h-8 text-[#4A151C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#4A151C] tracking-wider uppercase">Envíos a<br/>Todo Chile</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <ShieldCheck className="w-8 h-8 text-[#4A151C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#4A151C] tracking-wider uppercase">Pago 100%<br/>Seguro</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <Gift className="w-8 h-8 text-[#4A151C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#4A151C] tracking-wider uppercase">Presentación<br/>Premium</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center md:text-left px-4">
              <HeartHandshake className="w-8 h-8 text-[#4A151C]" strokeWidth={1.5} />
              <span className="text-xs font-bold text-[#4A151C] tracking-wider uppercase">Garantía de<br/>Satisfacción</span>
            </div>
          </div>
        </div>
      </section>

      {/* Elige Su Esencia */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif tracking-[0.2em] text-[#4A151C] uppercase mb-4">Descubre Tu Familia Olfativa</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta Premium */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#4A151C] to-[#2D0A10] flex flex-col md:flex-row items-center justify-between p-8 group border border-[#6B1E28]">
            <div className="z-20 md:w-1/2 space-y-4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl text-white tracking-widest font-light">LÍNEA RED EXCLUSIVE</h3>
              <p className="text-[#F3E5D8] font-light leading-relaxed">
                Aromas intensos, florales y orientales para dejar huella.
              </p>
              <button 
                onClick={() => handleShowCategory("premium")}
                className="inline-block bg-[#D4AF37] hover:bg-[#B3932F] text-white px-6 py-2.5 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors mt-4"
              >
                Ver Premium
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/images/perfume-red.png" 
                alt="Línea Premium Femenina" 
                className="w-full max-w-[200px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Tarjeta Clásico */}
          <div className="rounded-lg overflow-hidden bg-white shadow-md flex flex-col md:flex-row items-center justify-between p-8 group border border-slate-100">
            <div className="z-20 md:w-1/2 space-y-4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl text-[#2D1B22] tracking-widest font-bold">LÍNEA DULCE Y FRESCA</h3>
              <p className="text-[#5A3A40] font-medium leading-relaxed">
                Notas frutales, cítricas y acuáticas para tu día a día.
              </p>
              <button 
                onClick={() => handleShowCategory("clasico")}
                className="inline-block bg-[#4A151C] hover:bg-[#2D0A10] text-white px-6 py-2.5 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors mt-4"
              >
                Ver Clásicos
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/images/perfume-mujer.png" 
                alt="Perfume Clásico Mujer" 
                className="w-full max-w-[200px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Olfativo */}
      <div className="container mx-auto px-4">
        <FragranceMap onAddProduct={onAddProduct} initialGender="Mujer" />
      </div>

      {/* Catálogo en línea (Aparece al hacer click en Ver Premium / Ver Clásicos) */}
      {activeCategory && (
        <section ref={catalogRef} className="py-16 container mx-auto px-4 max-w-6xl">
          {activeCategory === "premium" ? (
            <div className="mb-10 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#7a1025] via-[#a01630] to-[#590a19] text-white flex flex-col md:flex-row items-center relative">
              {/* Decorative elements for the background */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-[#ff4d6d] blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[120%] bg-[#380410] blur-[100px] rounded-full mix-blend-multiply"></div>
              </div>

              <div className="p-8 md:p-12 md:w-5/12 flex flex-col items-center justify-center relative z-10 border-b md:border-b-0 md:border-r border-white/10">
                <img src="/images/logo_redparfums.png" alt="Red Parfums" className="h-24 md:h-32 object-contain drop-shadow-lg" />
              </div>
              
              <div className="p-8 md:p-12 md:w-7/12 relative z-10">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/95">
                  La intensidad que enciende los sentidos. Audaz, envolvente y sofisticada. <strong className="font-bold">RED</strong> es una fragancia que despierta emociones con su carácter vibrante y seductor. Diseñada para quienes dejan huella, su esencia se fusiona con la piel, revelando un aroma inolvidable.
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-10 flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-6 gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-slate-100 p-4 rounded-xl hidden md:block">
                  <img src="/images/perfume-mujer.png" alt="Perfumes Clásicos Mujer" className="w-20 h-20 object-contain drop-shadow-md opacity-80 mix-blend-multiply" />
                </div>
                <div>
                  <h2 className="text-4xl font-serif text-[#4A151C] mb-2">Línea Clásica</h2>
                  <p className="text-lg text-slate-600 font-medium">Perfumes de dama inspirados en los aromas que tú ya conoces.</p>
                </div>
              </div>
              <div className="text-slate-400 font-medium whitespace-nowrap">
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
      <section className="bg-[#4A151C] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <Award className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-[#F3E5D8] tracking-widest uppercase">Más de 50<br/>Aromas</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <Users className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-[#F3E5D8] tracking-widest uppercase">Miles de Clientes<br/>Satisfechas</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <Calendar className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-[#F3E5D8] tracking-widest uppercase">Calidad Todo<br/>El Año</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left px-4">
              <MessageCircle className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-bold text-[#F3E5D8] tracking-widest uppercase">¿Dudas?<br/>Escríbenos</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat message="Hola, quiero consultar sobre un perfume para mujer." />
    </div>
  );
}
