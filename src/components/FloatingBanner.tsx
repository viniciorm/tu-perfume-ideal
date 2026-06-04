import { Gift, Truck } from 'lucide-react';

export function FloatingBanner() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#0B121A] text-white border-t-2 border-[#D4AF37] shadow-[0_-4px_15px_rgba(212,175,55,0.2)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-6">
        <div className="flex items-center gap-3">
          <Gift className="text-[#D4AF37] animate-pulse" size={24} />
          <div>
            <span className="font-bold text-[#D4AF37] block sm:inline mr-2 uppercase tracking-wider text-sm sm:text-base">Especial Día del Padre:</span>
            <span className="text-slate-200 text-sm sm:text-base">10% de descuento automático en todo tu pedido.</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
          <Truck size={16} />
          <span>Envíos por pagar los días Martes y Jueves. (Promo del 5 al 17 de Junio)</span>
        </div>
      </div>
    </div>
  );
}
