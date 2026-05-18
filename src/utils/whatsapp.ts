import { STORE_CONFIG } from "../config/store";
import { Product } from "../types/product";
import { WizardAnswers } from "../types/wizard";
import { priceList } from "../data/prices";
import { formatPrice } from "./formatters";

function buildUrl(text: string): string {
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function createGeneralWhatsappLink(): string {
  const text = `Hola, quiero hacer una consulta sobre los perfumes alternativos.`;
  return buildUrl(text);
}

export function createProductWhatsappLink(product: Product): string {
  const priceInfo = priceList[product.priceKey as keyof typeof priceList];
  const price = priceInfo ? formatPrice(priceInfo.sale) : "Consultar";

  const text = `Hola, quiero consultar por este perfume:

Producto: ${product.code} - Aroma inspirado en ${product.inspiredBy}
Línea: ${product.line}
Formato: ${product.format}
Precio estimado: ${price}

¿Tienes stock disponible?`;

  return buildUrl(text);
}

export function createSelectionWhatsappLink(
  selectedProducts: { product: Product; quantity: number }[],
  wizardAnswers?: WizardAnswers
): string {
  let text = `Hola, quiero consultar por estos perfumes:\n\n`;

  selectedProducts.forEach(({ product, quantity }, index) => {
    const priceInfo = priceList[product.priceKey as keyof typeof priceList];
    const price = priceInfo ? formatPrice(priceInfo.sale) : "Consultar";
    text += `${index + 1}. ${product.code} - Aroma inspirado en ${product.inspiredBy} - ${product.format} - ${price} (x${quantity})\n`;
  });

  if (wizardAnswers && Object.keys(wizardAnswers).length > 0) {
    text += `\nMis preferencias fueron:\n`;
    if (wizardAnswers.gender) text += `Género: ${wizardAnswers.gender}\n`;
    if (wizardAnswers.aromaType) text += `Familia/Aroma: ${wizardAnswers.aromaType}\n`;
    if (wizardAnswers.intensity) text += `Intensidad: ${wizardAnswers.intensity}\n`;
    if (wizardAnswers.occasion) text += `Uso: ${wizardAnswers.occasion}\n`;
  }

  text += `\n¿Tienes stock disponible y cómo puedo comprar?`;

  return buildUrl(text);
}

export function createNotFoundWhatsappLink(
  searchText?: string,
  wizardAnswers?: WizardAnswers
): string {
  let text = `Hola, estoy buscando un perfume alternativo con estas características:\n\n`;

  if (searchText) {
    text += `Búsqueda: ${searchText}\n`;
  }

  if (wizardAnswers) {
    if (wizardAnswers.gender) text += `Género: ${wizardAnswers.gender}\n`;
    if (wizardAnswers.aromaType) text += `Familia/Aroma: ${wizardAnswers.aromaType}\n`;
    if (wizardAnswers.intensity) text += `Intensidad: ${wizardAnswers.intensity}\n`;
    if (wizardAnswers.occasion) text += `Uso: ${wizardAnswers.occasion}\n`;
  }

  text += `\n¿Me puedes ayudar a encontrar una alternativa?`;

  return buildUrl(text);
}
