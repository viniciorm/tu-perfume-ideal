import { Product } from "../types/product";
import { PlusCircle } from "lucide-react";
import { priceList } from "../data/prices";
import { formatPrice } from "../utils/formatters";

interface PremiumCatalogSectionProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
}

export function PremiumCatalogSection({ products, onAddProduct }: PremiumCatalogSectionProps) {
  const menProducts = products.filter(p => p.line === "Black" || p.gender === "Hombre");
  const womenProducts = products.filter(p => p.line === "Red" || p.gender === "Mujer");

  const pricePremium = formatPrice(priceList.redBlack100.sale);

  const handleSelect = (product: Product) => {
    // Ensuring it always maps to the premium 100ml format
    const productToCart = { ...product };
    productToCart.format = "100ml";
    productToCart.priceKey = "redBlack100";
    productToCart.id = `${product.id}-premium`;
    onAddProduct(productToCart);
  };

  return (
    <div className="space-y-12 mb-16">
      
      {/* Black Parfums (Hombre) */}
      {menProducts.length > 0 && (
        <section className="bg-[#0B121A] text-white rounded-2xl overflow-hidden relative shadow-2xl border border-[#1F2937]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen-2.png')] opacity-20 pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 items-center relative z-10">
            {/* Contenido (Lista) */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6 flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 border-b border-white/10 pb-4">
                  <div className="w-full xl:w-5/12 flex justify-center xl:justify-start">
                    <img src="/images/logo_blackparfums.png" alt="Black Parfums" className="h-16 md:h-24 object-contain mb-2 drop-shadow-md opacity-95" />
                  </div>
                  <div className="w-full xl:w-7/12">
                    <p className="text-sm md:text-base text-slate-300 font-light leading-normal text-center xl:text-left">
                      Fragancias exclusivas inspiradas en perfumería nicho internacional.
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-[#C6B9A5] uppercase tracking-[0.3em] font-bold text-xs mb-1 block">Línea Exclusiva Masculina</span>
                  <h2 className="text-2xl md:text-3xl font-serif italic font-light text-white mb-1">Aromas inspirados en:</h2>
                  <div className="w-16 h-0.5 bg-[#C6B9A5] mb-2"></div>
                </div>
              </div>

              <div className="space-y-2">
                {menProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10"
                    onClick={() => handleSelect(product)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="font-bold text-[#C6B9A5] text-base md:text-lg tracking-wider w-12">{product.code}</span>
                      <span className="text-slate-200 font-light text-sm md:text-base">
                        {product.name} <span className="text-slate-500 hidden sm:inline">/</span> <span className="text-slate-400 font-medium">{product.inspiredBy}</span>
                      </span>
                    </div>
                    <button className="text-[#C6B9A5] opacity-50 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Agregar</span>
                      <PlusCircle size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-64 md:h-full min-h-[350px] flex items-center justify-center p-8 bg-gradient-to-t from-black/50 to-transparent">
              <div className="relative inline-block mt-4 md:mt-0">
                {/* Badge de precio */}
                <div className="absolute -bottom-4 -left-6 md:-left-12 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex flex-col items-center justify-center border-4 border-[#0B121A] shadow-xl z-20 transform hover:scale-105 transition-transform">
                  <span className="text-[#0B121A] font-bold text-base md:text-lg leading-none">{pricePremium}</span>
                  <span className="text-[#0B121A] font-black text-xs md:text-sm tracking-widest uppercase mt-1">100 ML</span>
                </div>
                
                <img 
                  src="/images/perfume-black.png" 
                  alt="Black Parfums" 
                  className="w-full max-w-[280px] md:max-w-[320px] object-contain drop-shadow-2xl z-10 relative"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Red Parfums (Mujer) */}
      {womenProducts.length > 0 && (
        <section className="bg-gradient-to-br from-[#4A151C] to-[#2D0A10] text-white rounded-2xl overflow-hidden relative shadow-2xl border border-[#6B1E28]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen-2.png')] opacity-10 pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 items-center relative z-10">
            {/* Imagen (Para variar el layout, la imagen a la izquierda) */}
            <div className="order-2 md:order-1 relative h-64 md:h-full min-h-[350px] flex items-center justify-center p-8 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent">
              <div className="relative inline-block mt-4 md:mt-0">
                {/* Badge de precio */}
                <div className="absolute -bottom-4 -right-6 md:-right-12 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex flex-col items-center justify-center border-4 border-[#4A151C] shadow-xl z-20 transform hover:scale-105 transition-transform">
                  <span className="text-[#4A151C] font-bold text-base md:text-lg leading-none">{pricePremium}</span>
                  <span className="text-[#4A151C] font-black text-xs md:text-sm tracking-widest uppercase mt-1">100 ML</span>
                </div>
                
                <img 
                  src="/images/perfume-red.png" 
                  alt="Red Parfums" 
                  className="w-full max-w-[280px] md:max-w-[320px] object-contain drop-shadow-2xl z-10 relative"
                />
              </div>
            </div>

            {/* Contenido (Lista) */}
            <div className="order-1 md:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6 flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 border-b border-white/10 pb-4">
                  <div className="w-full xl:w-5/12 flex justify-center xl:justify-start">
                    <img src="/images/logo_redparfums.png" alt="Red Parfums" className="h-16 md:h-24 object-contain mb-2 drop-shadow-md opacity-95" />
                  </div>
                  <div className="w-full xl:w-7/12">
                    <p className="text-sm md:text-base text-white/90 font-light leading-normal text-center xl:text-left">
                      Fragancias exclusivas inspiradas en perfumería nicho internacional.
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-xs mb-1 block">Línea Exclusiva Femenina</span>
                  <h2 className="text-2xl md:text-3xl font-serif italic font-light text-white mb-1">Aromas inspirados en:</h2>
                  <div className="w-16 h-0.5 bg-[#D4AF37] mb-2"></div>
                </div>
              </div>

              <div className="space-y-2">
                {womenProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
                    onClick={() => handleSelect(product)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="font-bold text-[#D4AF37] text-base md:text-lg tracking-wider w-12">{product.code}</span>
                      <span className="text-[#F3E5D8] font-light text-sm md:text-base">
                        {product.name} <span className="text-[#D4AF37]/50 hidden sm:inline">/</span> <span className="text-[#D4AF37]/80 font-medium">{product.inspiredBy}</span>
                      </span>
                    </div>
                    <button className="text-[#D4AF37] opacity-50 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Agregar</span>
                      <PlusCircle size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
