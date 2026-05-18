import { Product } from "../types/product";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { priceList } from "../data/prices";
import { formatPrice } from "../utils/formatters";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

export function ProductCard({ product, onSelect, onViewDetail }: ProductCardProps) {
  const priceInfo = priceList[product.priceKey as keyof typeof priceList];
  const price = priceInfo ? formatPrice(priceInfo.sale) : "Consultar";

  return (
    <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div 
        className="aspect-square bg-slate-100 relative flex items-center justify-center cursor-pointer group overflow-hidden"
        onClick={() => onViewDetail(product)}
      >
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : null}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-primary font-bold text-xs px-2 py-1 rounded shadow-sm">
          {product.code}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600">
            {product.line}
          </Badge>
          <span className="text-sm font-medium text-slate-500">{product.format}</span>
        </div>
        <h3 className="font-bold text-lg text-primary mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 mb-2">
          Inspirado en: <span className="font-medium text-slate-700">{product.inspiredBy}</span>
        </p>
        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {product.family.slice(0, 2).map((fam) => (
            <Badge key={fam} variant="outline" className="text-[10px]">
              {fam}
            </Badge>
          ))}
          <Badge variant="outline" className="text-[10px]">
            {product.intensity}
          </Badge>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-primary">{price}</span>
          {product.stock !== "Disponible" && (
            <span className="text-xs text-orange-500 font-medium">{product.stock}</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Button variant="outline" size="sm" onClick={() => onViewDetail(product)}>
            Ver detalle
          </Button>
          <Button size="sm" onClick={() => onSelect(product)}>
            Seleccionar
          </Button>
        </div>
      </div>
    </div>
  );
}
