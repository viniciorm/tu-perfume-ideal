import { useState } from "react";
import { Product } from "../types/product";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { priceList } from "../data/prices";
import { formatPrice } from "../utils/formatters";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onViewDetail?: (product: Product) => void;
}

export function ProductCard({ product, onSelect, onViewDetail }: ProductCardProps) {
  const isPremium = product.code.startsWith("Q") || product.tags.includes("premium");
  const isClassicPerfume = !isPremium && (product.line === "Mujer" || product.line === "Hombre");

  const [selectedSize, setSelectedSize] = useState<"100ml" | "50ml" | "20ml" | null>(null);

  const getPriceKey = () => {
    if (isClassicPerfume) {
      if (!selectedSize) return "perfume20"; // Used for 'Desde' base price fallback if needed
      if (selectedSize === "100ml") return "perfume100";
      if (selectedSize === "50ml") return "perfume50";
      return "perfume20";
    }
    return product.priceKey;
  };

  const currentPriceKey = getPriceKey();
  const priceInfo = priceList[currentPriceKey as keyof typeof priceList];
  
  const price = isClassicPerfume && !selectedSize 
    ? "Desde $6.500" 
    : (priceInfo ? formatPrice(priceInfo.sale) : "Consultar");

  const handleSelect = () => {
    if (isClassicPerfume && !selectedSize) {
      const sizeToUse = "100ml";
      setSelectedSize(sizeToUse);
      const productToCart = { ...product, format: sizeToUse, priceKey: "perfume100" as any, id: `${product.id}-${sizeToUse}` };
      onSelect(productToCart);
      return;
    }
    
    const productToCart = { ...product };
    if (isClassicPerfume && selectedSize) {
      productToCart.format = selectedSize;
      productToCart.priceKey = currentPriceKey as any;
      productToCart.id = `${product.id}-${selectedSize}`;
    }
    onSelect(productToCart);
  };

  const displayImage = isClassicPerfume && selectedSize
    ? `/images/frasco-${product.gender?.toLowerCase() || 'unisex'}-${selectedSize}.png`
    : product.image;

  // Determinar color de fondo basado en familia olfativa principal
  const mainFamily = product.family[0]?.toLowerCase() || "";
  let bgColorClass = "bg-slate-100";
  let badgeColorClass = "border-slate-200";

  if (!isPremium) {
    if (mainFamily.includes("cítric") || mainFamily.includes("citric")) {
      bgColorClass = "bg-yellow-50/50";
      badgeColorClass = "border-yellow-200 text-yellow-800 bg-yellow-50";
    } else if (mainFamily.includes("floral")) {
      bgColorClass = "bg-pink-50/50";
      badgeColorClass = "border-pink-200 text-pink-800 bg-pink-50";
    } else if (mainFamily.includes("amaderad") || mainFamily.includes("madera")) {
      bgColorClass = "bg-amber-50/50";
      badgeColorClass = "border-amber-200 text-amber-800 bg-amber-50";
    } else if (mainFamily.includes("acuátic") || mainFamily.includes("acuatic") || mainFamily.includes("marin")) {
      bgColorClass = "bg-sky-50/50";
      badgeColorClass = "border-sky-200 text-sky-800 bg-sky-50";
    } else if (mainFamily.includes("oriental") || mainFamily.includes("especiad")) {
      bgColorClass = "bg-orange-50/50";
      badgeColorClass = "border-orange-200 text-orange-800 bg-orange-50";
    } else if (mainFamily.includes("fougère") || mainFamily.includes("verde") || mainFamily.includes("herb")) {
      bgColorClass = "bg-emerald-50/50";
      badgeColorClass = "border-emerald-200 text-emerald-800 bg-emerald-50";
    } else if (mainFamily.includes("frutal") || mainFamily.includes("gourmand")) {
      bgColorClass = "bg-rose-50/50";
      badgeColorClass = "border-rose-200 text-rose-800 bg-rose-50";
    }
  }

  return (
    <div className={`rounded-xl border overflow-hidden flex flex-col transition-all duration-300 ${
      isPremium
        ? "bg-gradient-to-b from-[#FAF8F5] to-white border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(212,175,55,0.06)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]"
        : "bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
    }`}>
      
      {/* Cabecera visual (Reemplaza foto grande por tipografía y color) */}
      <div 
        className={`relative pt-8 pb-4 px-6 flex flex-col items-center justify-center cursor-pointer group border-b ${
          isPremium ? "bg-[#111] border-[#D4AF37]/20" : `${bgColorClass} border-slate-100`
        }`}
        onClick={() => onViewDetail && onViewDetail(product)}
      >
        <div className={`text-4xl font-black tracking-tighter mb-1 ${isPremium ? "text-[#D4AF37]" : "text-slate-800"}`}>
          {product.code}
        </div>
        <div className={`text-[10px] font-bold tracking-widest uppercase text-center ${isPremium ? "text-[#D4AF37]/70" : "text-slate-500"}`}>
          {product.gender}
        </div>

        {isPremium && (
          <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm text-[#D4AF37] font-extrabold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded border border-[#D4AF37]/30 shadow-md">
            ✨ Premium
          </div>
        )}

        {/* Frasquito en esquina sutil */}
        {displayImage && (
          <img 
            src={displayImage} 
            alt="frasco" 
            className="absolute bottom-2 right-2 w-12 h-12 object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant="secondary" 
            className={`text-[10px] font-bold ${
              isPremium 
                ? product.line === "Red"
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-zinc-900 text-zinc-100 border border-zinc-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {isPremium ? `${product.line} Parfums` : product.line}
          </Badge>
          {!isClassicPerfume && (
            <span className="text-xs font-medium text-slate-400">{product.format}</span>
          )}
        </div>
        
        <h3 className={`font-bold text-base mb-1 ${
          isPremium ? "text-[#5C4017] font-serif-luxury text-lg" : "text-primary"
        }`}>
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 mb-3 leading-relaxed">
          Inspirado en: <span className="font-semibold text-slate-700">{product.inspiredBy}</span>
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.family.slice(0, 2).map((fam, idx) => (
            <Badge 
              key={`${fam}-${idx}`} 
              variant="outline" 
              className={`text-[9px] uppercase tracking-wider ${
                isPremium ? "border-[#D4AF37]/30 text-[#8B6508] bg-[#FAF8F5]" : badgeColorClass
              }`}
            >
              {fam}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          {/* Size Selector for Classics */}
          {isClassicPerfume && (
            <div className="flex bg-slate-100 rounded-md p-1 mb-4 gap-1">
              <button 
                onClick={() => setSelectedSize("20ml")}
                className={`flex-1 text-[10px] font-bold py-1.5 rounded-sm transition-colors ${selectedSize === "20ml" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                20ml
              </button>
              <button 
                onClick={() => setSelectedSize("50ml")}
                className={`flex-1 text-[10px] font-bold py-1.5 rounded-sm transition-colors ${selectedSize === "50ml" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                50ml
              </button>
              <button 
                onClick={() => setSelectedSize("100ml")}
                className={`flex-1 text-[10px] font-bold py-1.5 rounded-sm transition-colors ${selectedSize === "100ml" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                100ml
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <span className={`text-xl font-bold ${isPremium ? "text-[#8B6508]" : "text-primary"} ${isClassicPerfume && !selectedSize ? 'text-lg text-slate-600' : ''}`}>
              {price}
            </span>
            {product.stock !== "Disponible" ? (
              <span className="text-xs text-orange-500 font-medium">{product.stock}</span>
            ) : (
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Stock
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {onViewDetail && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onViewDetail(product)}
                className={`text-xs ${
                  isPremium 
                    ? "border-[#D4AF37]/45 text-[#8B6508] hover:bg-[#FAF8F5] hover:text-[#5C4017]" 
                    : "border-slate-200"
                }`}
              >
                Ver detalle
              </Button>
            )}
            <Button 
              size="sm" 
              onClick={handleSelect}
              className={`text-xs ${
                isPremium 
                  ? "bg-gradient-to-r from-[#B8860B] to-[#D4AF37] hover:from-[#966F0A] hover:to-[#B8860B] text-white shadow-sm font-semibold border-none" 
                  : "bg-primary hover:bg-primary/95 text-white"
              } ${!onViewDetail ? 'col-span-2' : ''}`}
            >
              Seleccionar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
