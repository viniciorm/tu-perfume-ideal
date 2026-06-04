import { PacksCatalogSection } from './PacksCatalogSection';
import { Product } from '../types/product';

interface PacksLandingProps {
  onAddProduct: (product: Product) => void;
}

export function PacksLanding({ onAddProduct }: PacksLandingProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] pt-8">
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic text-[#42362C] mb-4">
            Packs Promocionales
          </h1>
          <p className="text-slate-600 text-lg">
            Combinaciones perfectas pensadas para ti. Elige tu aroma favorito en pack y ahorra más.
          </p>
        </div>

        <PacksCatalogSection onAddProduct={onAddProduct} />
      </main>
    </div>
  );
}
