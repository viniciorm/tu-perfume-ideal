import { Product } from "../types/product";
import { PlusCircle } from "lucide-react";

interface PacksCatalogSectionProps {
  onAddProduct: (product: Product) => void;
}

export function PacksCatalogSection({ onAddProduct }: PacksCatalogSectionProps) {
  const womenPacks = [
    { code: "W005", name: "CHANEL N°5" },
    { code: "W007", name: "RALPH" },
    { code: "W009", name: "TRESOR" },
    { code: "W018", name: "CAROLINA HERRERA" },
    { code: "W028", name: "C.K. ONE" },
    { code: "W036", name: "TOMMY GIRL" },
    { code: "W040", name: "AMOR AMOR" },
    { code: "W043", name: "GOOD GIRL" },
    { code: "W045", name: "HALLOWEEN" },
    { code: "W046", name: "212 SEXY" },
    { code: "W057", name: "LA VIDA ES BELLA" },
  ];

  const menPacks = [
    { code: "W106", name: "POLO BLUE" },
    { code: "W114", name: "212 FOR MEN" },
    { code: "W118", name: "SAUVAGE" },
    { code: "W122", name: "ACQUA DI GIO" },
    { code: "W124", name: "BOSS" },
    { code: "W127", name: "XS BLACK MEN" },
    { code: "W134", name: "ONE MILLION" },
    { code: "W136", name: "INVICTUS" },
  ];

  const lavitPacks = [
    { code: "L-FANTASY", name: "Fantasy of Love" },
    { code: "L-TROPICAL", name: "Tropical Caribbean" },
    { code: "L-SWEET", name: "Sweet Romance" },
  ];


  const handleSelect = (packInfo: any, gender: string, priceVal: number, packDesc: string) => {
    const productToCart: Product = {
      id: `pack-${packInfo.code}`,
      code: packInfo.code,
      name: `Pack ${packInfo.name}`,
      inspiredBy: packInfo.name,
      brandReference: "Pack Promocional",
      line: "Pack",
      gender: gender as any,
      family: ["Pack"],
      aromaType: ["Pack"],
      mainNotes: [],
      occasion: ["Regalo"],
      intensity: "Equilibrado",
      format: packDesc,
      priceKey: "custom", 
      stock: "Disponible",
      image: "",
      tags: ["pack"],
      description: `Pack Promocional especial Día del Padre.`
    };
    // HACK: Override priceKey behavior since it's custom, we will need to handle this in SelectionSummary if it only uses priceKey.
    // Let's ensure SelectionSummary can read a custom price.
    productToCart.customPrice = priceVal;
    
    onAddProduct(productToCart);
  };

  return (
    <div className="space-y-12 mb-16" id="packs">
      
      {/* Pack Promocional Varón */}
      <section className="bg-[#1A2639] text-white rounded-2xl overflow-hidden relative shadow-2xl border border-[#2A3B54]">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 items-center relative z-10">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[#8FB3E6] uppercase tracking-[0.3em] font-bold text-xs mb-2 block">Pack Promocional</span>
              <h2 className="text-4xl font-serif italic font-light text-white mb-2">After Shave 100ml + Perfume 50ml</h2>
              <div className="w-16 h-0.5 bg-[#8FB3E6] mb-6"></div>
            </div>

            <div className="space-y-1">
              {menPacks.map(pack => (
                <div 
                  key={pack.code} 
                  className="group flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10"
                  onClick={() => handleSelect(pack, "Hombre", 11100, "50ml + 100ml After Shave")}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="font-bold text-[#8FB3E6] text-lg tracking-wider w-16">{pack.code}</span>
                    <span className="text-slate-200 font-light text-sm md:text-base">
                      {pack.name}
                    </span>
                  </div>
                  <button className="text-[#8FB3E6] opacity-50 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Agregar</span>
                    <PlusCircle size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-64 md:h-full min-h-[400px] flex items-center justify-center p-8 bg-gradient-to-t from-black/50 to-transparent">
            <div className="absolute bottom-16 md:bottom-24 left-8 md:left-12 w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center border-4 border-[#1A2639] shadow-xl z-20 transform hover:scale-105 transition-transform">
              <span className="text-[#1A2639] font-bold text-lg leading-none">$11.100</span>
              <span className="text-[#1A2639] font-black text-sm tracking-widest uppercase mt-1">Pack</span>
            </div>
            
            <img 
              src="/images/pack_homme.png" 
              alt="Pack Hombre" 
              className="w-full max-w-[320px] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </section>

      {/* Pack Promocional Dama */}
      <section className="bg-gradient-to-br from-[#7D5F93] to-[#513B63] text-white rounded-2xl overflow-hidden relative shadow-2xl border border-[#9175A8]">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 items-center relative z-10">
          <div className="order-2 md:order-1 relative h-64 md:h-full min-h-[400px] flex items-center justify-center p-8 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent">
            <div className="absolute bottom-16 md:bottom-24 right-8 md:right-12 w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center border-4 border-[#7D5F93] shadow-xl z-20 transform hover:scale-105 transition-transform">
              <span className="text-[#7D5F93] font-bold text-lg leading-none">$11.900</span>
              <span className="text-[#7D5F93] font-black text-sm tracking-widest uppercase mt-1">Pack</span>
            </div>
            
            <img 
              src="/images/pack_femme.png" 
              alt="Pack Mujer" 
              className="w-full max-w-[320px] object-contain drop-shadow-2xl z-10"
            />
          </div>

          <div className="order-1 md:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[#E6D8EF] uppercase tracking-[0.3em] font-bold text-xs mb-2 block">Pack Promocional</span>
              <h2 className="text-4xl font-serif italic font-light text-white mb-2">Crema Corporal 250ml + Perfume 50ml</h2>
              <div className="w-16 h-0.5 bg-[#E6D8EF] mb-6"></div>
            </div>

            <div className="space-y-1">
              {womenPacks.map(pack => (
                <div 
                  key={pack.code} 
                  className="group flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
                  onClick={() => handleSelect(pack, "Mujer", 11900, "50ml + 250ml Crema")}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="font-bold text-[#E6D8EF] text-lg tracking-wider w-16">{pack.code}</span>
                    <span className="text-[#F5F0F8] font-light text-sm md:text-base">
                      {pack.name}
                    </span>
                  </div>
                  <button className="text-[#E6D8EF] opacity-50 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Agregar</span>
                    <PlusCircle size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pack Lavit */}
      <section className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white rounded-2xl overflow-hidden relative shadow-xl border border-[#40916C]">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left">
            <img src="/images/pack_lavit.png" alt="Pack Lavit" className="w-32 md:w-48 object-contain drop-shadow-xl" />
            <div>
              <span className="text-[#B7E4C7] uppercase tracking-[0.2em] font-bold text-xs mb-2 block">Cuidado Diario</span>
              <h2 className="text-3xl font-serif italic font-light text-white mb-2">Lavit Body Splash + Hydra Cream</h2>
              <p className="text-[#D8F3DC] max-w-md mx-auto sm:mx-0">Combo perfecto de cuidado personal a un precio increíble.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <div className="text-center sm:text-right mb-2">
              <span className="block text-2xl font-bold text-white">$8.500</span>
              <span className="text-[#B7E4C7] text-xs uppercase tracking-wider font-bold">Pack Especial</span>
            </div>
            
            <div className="space-y-1">
              {lavitPacks.map(pack => (
                <div 
                  key={pack.code} 
                  className="group flex items-center justify-between py-1.5 px-4 rounded-lg bg-black/20 hover:bg-black/40 transition-colors cursor-pointer border border-transparent hover:border-white/20"
                  onClick={() => handleSelect({code: pack.code, name: `Lavit Body Splash + Hydra Cream ${pack.name}`}, "Unisex", 8500, "Splash + Crema")}
                >
                  <span className="text-[#D8F3DC] font-medium text-sm sm:text-base">{pack.name}</span>
                  <button className="text-white opacity-75 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Agregar</span>
                    <PlusCircle size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
