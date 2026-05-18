import { Product } from "../types/product";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { priceList } from "../data/prices";
import { formatPrice } from "../utils/formatters";
import { createProductWhatsappLink } from "../utils/whatsapp";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (product: Product) => void;
}

export function ProductDetailModal({ product, isOpen, onClose, onSelect }: ProductDetailModalProps) {
  if (!product) return null;

  const priceInfo = priceList[product.priceKey as keyof typeof priceList];
  const price = priceInfo ? formatPrice(priceInfo.sale) : "Consultar";

  const handleWhatsapp = () => {
    window.open(createProductWhatsappLink(product), "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{product.name}</DialogTitle>
          <DialogDescription>
            Alternativo inspirado en {product.inspiredBy} de {product.brandReference}
          </DialogDescription>
        </DialogHeader>

        <div className="aspect-square bg-slate-100 relative flex items-center justify-center rounded-md mb-4 overflow-hidden">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl font-bold text-slate-300">
              {product.code}
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary font-bold text-sm px-3 py-1 rounded-md shadow-sm">
            Código: {product.code}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Precio y Formato</h4>
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-md">
              <span className="text-lg font-bold text-primary">{price}</span>
              <Badge variant="secondary">{product.format}</Badge>
            </div>
            <p className="text-xs text-slate-500 mt-1 text-right">Stock: {product.stock}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Descripción</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-slate-500 mb-1">Familia Olfativa</span>
              <div className="flex flex-wrap gap-1">
                {product.family.map(f => <Badge key={f} variant="outline" className="text-xs">{f}</Badge>)}
              </div>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Intensidad</span>
              <Badge variant="outline" className="text-xs">{product.intensity}</Badge>
            </div>
          </div>

          <div>
            <span className="block text-slate-500 mb-1 text-sm">Notas Principales</span>
            <p className="text-sm font-medium">{product.mainNotes.join(", ")}</p>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <Button className="w-full" onClick={() => { onSelect(product); onClose(); }}>
              Seleccionar y seguir buscando
            </Button>
            <Button variant="outline" className="w-full" onClick={handleWhatsapp}>
              Consultar solo por este
            </Button>
          </div>

          <p className="text-[10px] text-slate-400 text-center mt-4">
            Las marcas mencionadas son solo referencias olfativas. Esta tienda vende perfumes alternativos.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
