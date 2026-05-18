import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface QuickSearchProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
}

export function QuickSearch({ value, onChange, onClear }: QuickSearchProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <Input 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Busca por nombre, código o familia olfativa..."
          className="pl-10 h-14 text-lg bg-white shadow-sm border-slate-200 focus-visible:ring-primary"
        />
        {value && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            onClick={onClear}
          >
            Limpiar
          </Button>
        )}
      </div>
    </div>
  );
}
