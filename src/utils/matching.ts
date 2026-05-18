import { Product } from "../types/product";
import { WizardAnswers } from "../types/wizard";

export function getProductScore(product: Product, answers: WizardAnswers): number {
  let score = 0;

  // Género
  if (answers.gender && answers.gender !== "Regalo / no estoy seguro") {
    if (product.gender === answers.gender || product.gender === "Unisex") {
      score += 3;
    }
  }

  // Familia/Aroma
  if (answers.aromaType && answers.aromaType !== "No estoy seguro") {
    if (
      product.family.some(f => f.toLowerCase() === answers.aromaType!.toLowerCase()) ||
      product.aromaType.some(a => a.toLowerCase() === answers.aromaType!.toLowerCase())
    ) {
      score += 4;
    }
  }

  // Ocasión
  if (answers.occasion) {
    if (product.occasion.some(o => o.toLowerCase() === answers.occasion!.toLowerCase())) {
      score += 3;
    }
  }

  // Intensidad
  if (answers.intensity) {
    if (product.intensity === answers.intensity) {
      score += 2;
    }
  }

  // Formato / Línea
  if (answers.format && answers.format !== "Ver todos") {
    if (product.format === answers.format || product.line === answers.format) {
      score += 2;
    }
  }

  // Búsqueda por referencia
  if (answers.hasReference === "Sí, quiero escribirlo" && answers.referenceText) {
    const term = answers.referenceText.toLowerCase();
    if (
      product.name.toLowerCase().includes(term) ||
      product.inspiredBy.toLowerCase().includes(term) ||
      product.brandReference.toLowerCase().includes(term) ||
      product.code.toLowerCase().includes(term)
    ) {
      score += 6;
    }
  }

  // Extras
  if (product.featured) {
    score += 1;
  }

  return score;
}

export function searchProducts(products: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) return products;
  
  const term = searchTerm.toLowerCase().trim();
  
  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(term) ||
      p.code.toLowerCase().includes(term) ||
      p.inspiredBy.toLowerCase().includes(term) ||
      p.brandReference.toLowerCase().includes(term) ||
      p.line.toLowerCase().includes(term) ||
      p.intensity.toLowerCase().includes(term) ||
      p.family.some((f) => f.toLowerCase().includes(term)) ||
      p.aromaType.some((a) => a.toLowerCase().includes(term)) ||
      p.mainNotes.some((n) => n.toLowerCase().includes(term)) ||
      p.occasion.some((o) => o.toLowerCase().includes(term)) ||
      p.tags.some((t) => t.toLowerCase().includes(term)) ||
      p.description.toLowerCase().includes(term)
    );
  });
}
