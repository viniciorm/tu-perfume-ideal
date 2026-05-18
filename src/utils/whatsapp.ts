import { STORE_CONFIG } from "../config/store";
import { Product } from "../types/product";
import { WizardAnswers } from "../types/wizard";
import { priceList } from "../data/prices";
import { formatPrice } from "./formatters";

function buildUrl(text: string): string {
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function createGeneralWhatsappLink(): string {
  const text = `✨ *Hola Parfums de Parfums!*
Quiero hacer una consulta general sobre sus alternativas de alta perfumería.`;
  return buildUrl(text);
}

export function createProductWhatsappLink(product: Product): string {
  const priceInfo = priceList[product.priceKey as keyof typeof priceList];
  const price = priceInfo ? formatPrice(priceInfo.sale) : "Consultar";

  let lineIndicator = "🌸 Clásica Dama";
  if (product.code.startsWith("Q-0") || product.code.startsWith("Q0")) {
    lineIndicator = "✨ Colección EXCLUSIVA RED";
  } else if (product.code.startsWith("Q-5") || product.code.startsWith("Q5")) {
    lineIndicator = "💎 Colección EXCLUSIVA BLACK";
  } else if (product.code.startsWith("H")) {
    lineIndicator = "💼 Clásica Varón";
  } else if (product.code.startsWith("L")) {
    lineIndicator = "💧 Lavit Body Splash";
  } else if (product.code.startsWith("J")) {
    lineIndicator = "🦄 Teen Line";
  }

  const text = `✨ *PARFUMS DE PARFUMS* ✨
_Consulta de Fragancia_

• *Código:* ${product.code}
• *Inspiración:* ${product.inspiredBy} (${product.brandReference || "Referencia"})
• *Colección/Línea:* ${lineIndicator}
• *Formato:* ${product.format}
• *Precio:* ${price}

¿Tienen stock disponible para entrega/envío en Chile?`;

  return buildUrl(text);
}

export function createSelectionWhatsappLink(
  selectedProducts: { product: Product; quantity: number }[],
  wizardAnswers?: WizardAnswers
): string {
  let text = `✨ *PARFUMS DE PARFUMS - MI PEDIDO* ✨\n`;
  text += `¡Hola! He seleccionado estas fragancias exclusivas en la web:\n\n`;

  let totalAmount = 0;
  
  selectedProducts.forEach(({ product, quantity }, index) => {
    const priceInfo = priceList[product.priceKey as keyof typeof priceList];
    const priceVal = priceInfo ? priceInfo.sale : 0;
    const itemTotal = priceVal * quantity;
    totalAmount += itemTotal;

    const priceText = priceInfo ? formatPrice(priceInfo.sale) : "Consultar";
    
    let lineIndicator = "🌸 Clásica Dama";
    if (product.code.startsWith("Q-0") || product.code.startsWith("Q0")) {
      lineIndicator = "🔴 Colección RED";
    } else if (product.code.startsWith("Q-5") || product.code.startsWith("Q5")) {
      lineIndicator = "⚫ Colección BLACK";
    } else if (product.code.startsWith("H")) {
      lineIndicator = "🔵 Clásica Varón";
    } else if (product.code.startsWith("L")) {
      lineIndicator = "💧 Lavit Splash";
    } else if (product.code.startsWith("J")) {
      lineIndicator = "🦄 Teen Line";
    }

    text += `*${index + 1}. [${product.code}] ${product.inspiredBy}*\n`;
    text += `   • *Línea:* ${lineIndicator}\n`;
    text += `   • *Formato:* ${product.format}\n`;
    text += `   • *Precio:* ${priceText} x${quantity}\n`;
    if (priceVal > 0) {
      text += `   • *Subtotal:* ${formatPrice(itemTotal)}\n`;
    }
    text += `\n`;
  });

  text += `──────────────────\n`;
  text += `💰 *TOTAL ESTIMADO:* ${formatPrice(totalAmount)}\n`;
  text += `──────────────────\n`;

  if (wizardAnswers && Object.keys(wizardAnswers).length > 0) {
    text += `\n🎯 *Preferencia del Asesor de Fragancias:*\n`;
    if (wizardAnswers.gender) text += `• Para: ${wizardAnswers.gender}\n`;
    if (wizardAnswers.aromaType) text += `• Familias: ${wizardAnswers.aromaType}\n`;
    if (wizardAnswers.intensity) text += `• Intensidad: ${wizardAnswers.intensity}\n`;
    if (wizardAnswers.occasion) text += `• Ocasión: ${wizardAnswers.occasion}\n`;
  }

  text += `\n¿Tienen disponibilidad para coordinar el despacho en Chile? ¡Muchas gracias!`;

  return buildUrl(text);
}

export function createNotFoundWhatsappLink(
  searchText?: string,
  wizardAnswers?: WizardAnswers
): string {
  let text = `✨ *PARFUMS DE PARFUMS - CONSULTA ESPECIAL* ✨\n`;
  text += `Hola, estoy buscando una fragancia equivalente personalizada y no la encontré en el buscador:\n\n`;

  if (searchText) {
    text += `• *Perfume buscado:* ${searchText}\n`;
  }

  if (wizardAnswers) {
    text += `\n*Mis preferencias elegidas:*\n`;
    if (wizardAnswers.gender) text += `• Género: ${wizardAnswers.gender}\n`;
    if (wizardAnswers.aromaType) text += `• Notas aromáticas: ${wizardAnswers.aromaType}\n`;
    if (wizardAnswers.intensity) text += `• Intensidad: ${wizardAnswers.intensity}\n`;
    if (wizardAnswers.occasion) text += `• Ocasión: ${wizardAnswers.occasion}\n`;
  }

  text += `\n¿Tienen alguna alternativa recomendada en stock que se parezca a mis gustos?`;

  return buildUrl(text);
}

