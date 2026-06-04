import { PremiumCatalogSection } from './components/PremiumCatalogSection';
import { PacksLanding } from './components/PacksLanding';
// ... previous imports ...
import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SEOHead } from './components/SEOHead';
import { FathersDayLanding } from './components/FathersDayLanding';
import { WomenPerfumesLanding } from './components/WomenPerfumesLanding';
import { Header } from './components/Header';
import { QuickSearch } from './components/QuickSearch';
import { GuidedWizard } from './components/GuidedWizard';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SelectionSummary } from './components/SelectionSummary';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { FragranceMap } from './components/FragranceMap';
import { FloatingBanner } from './components/FloatingBanner';
import { AromaBlog } from './components/AromaBlog';
import { products } from './data/products';
import { searchProducts, getProductScore } from './utils/matching';
import { Product } from './types/product';
import { WizardAnswers } from './types/wizard';
import { Button } from './components/ui/button';
import { createNotFoundWhatsappLink } from './utils/whatsapp';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [wizardAnswers, setWizardAnswers] = useState<WizardAnswers>({});
  const [showWizard, setShowWizard] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  const displayedProducts = useMemo(() => {
    let result = products;

    if (showWizard && Object.keys(wizardAnswers).length > 0) {
      if (wizardAnswers.format) {
        return products
          .map(p => ({ product: p, score: getProductScore(p, wizardAnswers) }))
          .sort((a, b) => b.score - a.score)
          .map(p => p.product)
          .slice(0, 12);
      }
      return []; 
    }

    if (searchTerm) {
      result = searchProducts(products, searchTerm);
    }

    return result;
  }, [searchTerm, showWizard, wizardAnswers]);

  const isDefaultCatalog = !showWizard && !searchTerm;
  const premiumProducts = isDefaultCatalog ? displayedProducts.filter(p => p.code.startsWith("Q") || p.tags.includes("premium")) : [];
  const classicProducts = isDefaultCatalog ? displayedProducts.filter(p => !p.code.startsWith("Q") && !p.tags.includes("premium")) : displayedProducts;

  const handleSelectProduct = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(p => p.product.id === product.id);
      if (exists) {
        return prev.map(p => p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prev => prev.filter(p => p.product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-32">
      <SEOHead />
      <Header />
      
      <Routes>
        <Route path="/hombres" element={<FathersDayLanding onAddProduct={handleSelectProduct} />} />
        <Route path="/dia-del-padre" element={<FathersDayLanding onAddProduct={handleSelectProduct} />} />
        <Route path="/mujer" element={<WomenPerfumesLanding onAddProduct={handleSelectProduct} />} />
        <Route path="/packs" element={<PacksLanding onAddProduct={handleSelectProduct} />} />
        
        <Route path="/" element={
          <>
            <main className="container mx-auto px-4 py-8">
              <div className="mb-12">
                {!showWizard ? (
                  <div className="text-center space-y-6">
                    <QuickSearch 
                      value={searchTerm} 
                      onChange={(v) => {
                        setSearchTerm(v);
                        if (showWizard) {
                          setShowWizard(false);
                          setWizardAnswers({});
                        }
                      }} 
                      onClear={() => setSearchTerm('')} 
                    />
                    {!searchTerm && (
                      <div>
                        <p className="text-slate-500 mb-4">¿No sabes cuál elegir?</p>
                        <Button 
                          size="lg" 
                          className="rounded-full px-8"
                          onClick={() => setShowWizard(true)}
                        >
                          Usar guía paso a paso
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center mb-8 max-w-lg mx-auto">
                      <h2 className="text-2xl font-bold text-primary">Encuentra tu perfume</h2>
                      <Button variant="ghost" onClick={() => {
                        setShowWizard(false);
                        setWizardAnswers({});
                      }}>
                        Cancelar guía
                      </Button>
                    </div>
                    
                    {!wizardAnswers.format ? (
                      <GuidedWizard 
                        answers={wizardAnswers}
                        onChange={setWizardAnswers}
                        onComplete={() => {}}
                      />
                    ) : null}
                  </div>
                )}
              </div>

              {/* Resultados */}
              {(!showWizard || wizardAnswers.format) && (
                <div id="catalogo">
                  
                  {isDefaultCatalog && premiumProducts.length > 0 && (
                    <PremiumCatalogSection products={premiumProducts} onAddProduct={handleSelectProduct} />
                  )}

                  <div className="flex justify-between items-end mb-6 mt-8">
                    <h2 className="text-2xl font-bold text-[#42362C]">
                      {searchTerm ? 'Resultados de búsqueda' : 
                       showWizard ? 'Nuestras Sugerencias' : 
                       'Línea Clásica'}
                    </h2>
                    <span className="text-slate-500">{classicProducts.length} productos</span>
                  </div>

                  {classicProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {classicProducts.map(product => (
                        <ProductCard 
                          key={product.id}
                          product={product}
                          onSelect={handleSelectProduct}
                          onViewDetail={setSelectedProduct}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-white rounded-lg border border-[#C6B9A5]/20">
                      <p className="text-lg text-slate-500 mb-6 font-medium">No encontramos perfumes que coincidan exactamente con tu búsqueda.</p>
                      <Button 
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 rounded-full"
                        onClick={() => window.open(createNotFoundWhatsappLink(searchTerm, wizardAnswers), "_blank")}
                      >
                        Pedir ayuda por WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </main>

            {!showWizard && !searchTerm && (
              <div className="container mx-auto px-4">
                <FragranceMap onAddProduct={handleSelectProduct} />
                <AromaBlog />
              </div>
            )}

            {!showWizard && !searchTerm && <FAQ />}
          </>
        } />
      </Routes>
      
      <Footer />

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelect={handleSelectProduct}
      />

      <SelectionSummary 
        selectedProducts={cart}
        wizardAnswers={showWizard ? wizardAnswers : undefined}
        onClear={() => setCart([])}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
