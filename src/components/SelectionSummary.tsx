import { Product } from "../types/product";
import { WizardAnswers } from "../types/wizard";
import { Button } from "./ui/button";
import { priceList } from "../data/prices";
import { formatPrice } from "../utils/formatters";
import { createSelectionWhatsappLink } from "../utils/whatsapp";

interface SelectionSummaryProps {
  selectedProducts: { product: Product; quantity: number }[];
  wizardAnswers?: WizardAnswers;
  onClear: () => void;
  onRemove: (productId: string) => void;
}

export function SelectionSummary({ selectedProducts, wizardAnswers, onClear, onRemove }: SelectionSummaryProps) {
  if (selectedProducts.length === 0) return null;

  let totalEstimated = 0;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 z-40 animate-in slide-in-from-bottom-full duration-300">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-primary">Tu Selección ({selectedProducts.reduce((acc, curr) => acc + curr.quantity, 0)})</h3>
          <Button variant="ghost" size="sm" onClick={onClear} className="text-slate-500 text-xs h-8">
            Limpiar selección
          </Button>
        </div>
        
        <div className="max-h-32 overflow-y-auto mb-4 space-y-2 pr-2">
          {selectedProducts.map(({ product, quantity }) => {
            const priceInfo = priceList[product.priceKey as keyof typeof priceList];
            const price = priceInfo ? priceInfo.sale : 0;
            totalEstimated += price * quantity;
            
            return (
              <div key={product.id} className="flex justify-between items-center text-sm border-b pb-2">
                <div className="flex flex-col">
                  <span className="font-medium">{product.code} - {product.name}</span>
                  <span className="text-slate-500 text-xs">Formato: {product.format}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium text-primary">
                    {formatPrice(price * quantity)}
                  </span>
                  <button onClick={() => onRemove(product.id)} className="text-red-500 hover:text-red-700 text-xs font-bold">
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
          <div className="w-full md:w-auto flex justify-between md:justify-start items-center gap-4">
            <span className="text-slate-500">Total estimado:</span>
            <span className="text-2xl font-bold text-primary">{formatPrice(totalEstimated)}</span>
          </div>
          
          <Button 
            className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 px-8"
            onClick={() => window.open(createSelectionWhatsappLink(selectedProducts, wizardAnswers), "_blank")}
          >
            Enviar pedido por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
