import { useState } from "react";
import { Product } from "../types/product";
import { WizardAnswers } from "../types/wizard";
import { Button } from "./ui/button";
import { priceList } from "../data/prices";
import { formatPrice } from "../utils/formatters";
import { createSelectionWhatsappLink } from "../utils/whatsapp";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SelectionSummaryProps {
  selectedProducts: { product: Product; quantity: number }[];
  wizardAnswers?: WizardAnswers;
  onClear: () => void;
}

export function SelectionSummary({ selectedProducts, wizardAnswers, onClear }: SelectionSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (selectedProducts.length === 0) return null;

  let totalEstimated = 0;
  let discountEligibleAmount = 0;
  
  selectedProducts.forEach(({ product, quantity }) => {
    const priceInfo = priceList[product.priceKey as keyof typeof priceList];
    const price = product.customPrice ?? (priceInfo ? priceInfo.sale : 0);
    const itemTotal = price * quantity;
    totalEstimated += itemTotal;
    if (!product.tags?.includes("pack") && product.priceKey !== "custom") {
      discountEligibleAmount += itemTotal;
    }
  });

  const totalToPay = totalEstimated - (discountEligibleAmount * 0.1);
  const totalItems = selectedProducts.reduce((acc, curr) => acc + curr.quantity, 0);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto md:w-[400px] bg-white border-t md:border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl p-4 md:p-6 z-40 animate-in slide-in-from-bottom-full duration-300 rounded-t-2xl md:rounded-2xl">
      <div className="w-full">
        <div 
          className="flex justify-between items-center mb-2 md:mb-4 cursor-pointer md:cursor-auto select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <h3 className="font-bold text-lg md:text-xl text-[#0B121A]">Tu Selección</h3>
            <span className="bg-[#C6B9A5] text-white px-2 py-1 rounded-full text-xs font-bold">
              {totalItems}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {!isExpanded && (
              <span className="font-bold text-lg md:hidden text-[#0B121A]">
                {formatPrice(totalToPay)}
              </span>
            )}
            
            <div className="md:hidden text-slate-500 flex items-center justify-center bg-slate-100 rounded-full w-8 h-8">
              {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={(e) => { e.stopPropagation(); onClear(); }} 
              className="text-slate-500 text-xs h-8 hidden md:flex hover:text-red-500 hover:bg-red-50"
            >
              Vaciar
            </Button>
          </div>
        </div>

        <div className={`${isExpanded ? 'block' : 'hidden md:block'}`}>
          <div className="flex justify-between md:hidden mb-4 mt-2">
            <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); onClear(); }} className="text-slate-500 text-xs h-8 w-full border border-slate-200">
              Vaciar carrito
            </Button>
          </div>

          {selectedProducts.length > 0 ? (
            <div className="max-h-[30vh] md:max-h-48 overflow-y-auto mb-4 space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-200">
              {selectedProducts.map(({ product, quantity }) => {
                const priceInfo = priceList[product.priceKey as keyof typeof priceList];
                const price = product.customPrice ?? (priceInfo ? priceInfo.sale : 0);
                const itemTotal = price * quantity;
                
                return (
                  <div key={product.id} className="flex justify-between text-sm items-start">
                    <span className="text-slate-700 leading-tight pr-4">
                      <span className="font-bold text-[#0B121A] mr-1.5">{quantity}x</span>
                      <span className="text-xs text-slate-500 mr-1">[{product.code}]</span>
                      <span className="font-medium">{product.name}</span>
                    </span>
                    <span className="font-bold text-[#0B121A] whitespace-nowrap">{formatPrice(itemTotal)}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic mb-4">No has seleccionado productos aún.</p>
          )}

          {selectedProducts.length > 0 && (
            <div className="flex flex-col gap-2.5 pt-4 border-t mt-2">
              <div className="w-full flex justify-between items-center text-slate-500 text-sm">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-700">{formatPrice(totalEstimated)}</span>
              </div>
              
              <div className="w-full flex justify-between items-center text-green-600 text-sm bg-green-50 p-2 rounded-md">
                <span className="font-medium">Dscto. Día del Padre:</span>
                <span className="font-bold">-{formatPrice(discountEligibleAmount * 0.1)}</span>
              </div>

              <div className="w-full flex justify-between items-center text-[#0B121A] text-xl font-black pt-2">
                <span>Total:</span>
                <span>{formatPrice(totalToPay)}</span>
              </div>

              <div className="bg-amber-50 text-amber-800 text-[11px] leading-tight p-3 rounded-lg border border-amber-200/60 mt-1">
                <strong className="block mb-0.5">Día del Padre (5 - 17 de junio)</strong> 
                Envíos por pagar (martes y jueves).
              </div>
              
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 mt-3 text-lg shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
                onClick={(e) => { e.stopPropagation(); window.open(createSelectionWhatsappLink(selectedProducts, wizardAnswers), "_blank"); }}
              >
                Pedir por WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
