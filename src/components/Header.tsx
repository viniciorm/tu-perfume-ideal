import { Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-primary">
          Tu Perfume Ideal
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full text-primary">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-full text-primary">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
