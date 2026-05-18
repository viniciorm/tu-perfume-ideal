import { useState, useMemo } from "react";
import { Sparkles, Eye, Check, ShoppingBag, Search } from "lucide-react";
import { Button } from "./ui/button";
import { products } from "../data/products";
import { Product } from "../types/product";
import { ProductDetailModal } from "./ProductDetailModal";

interface FragranceMapProps {
  onAddProduct: (product: Product) => void;
}

export function FragranceMap({ onAddProduct }: FragranceMapProps) {
  const [gender, setGender] = useState<"Mujer" | "Hombre">("Mujer");
  const [selectedQuadrant, setSelectedQuadrant] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  // Quadrant definitions based on the Parfums de Parfums Olfactory maps
  const quadrants = useMemo(() => {
    if (gender === "Mujer") {
      return [
        {
          id: "q1",
          name: "Ligero & Fresco-Frutal",
          description: "Aromas chispeantes, frescos y limpios",
          families: ["Floral Frutal", "Cítrico", "Cítrico Maderoso"],
          color: "from-amber-50 to-orange-50 hover:to-orange-100/50",
          textColor: "text-amber-800",
          border: "border-amber-200/60"
        },
        {
          id: "q2",
          name: "Ligero & Floral-Verde",
          description: "Flores recién cortadas, suavidad y elegancia natural",
          families: ["Floral Maderoso", "Floral Verde", "Floral Aldehídico", "Floral"],
          color: "from-emerald-50 to-teal-50 hover:to-teal-100/50",
          textColor: "text-emerald-800",
          border: "border-emerald-200/60"
        },
        {
          id: "q3",
          name: "Intenso & Chypre-Floral",
          description: "Carácter, sofisticación y estela elegante",
          families: ["Chypre Floral", "Chypre Frutal", "Floral Cítrico"],
          color: "from-rose-50 to-pink-50 hover:to-pink-100/50",
          textColor: "text-rose-800",
          border: "border-rose-200/60"
        },
        {
          id: "q4",
          name: "Intenso & Cálido-Oriental",
          description: "Sensualidad pura, vainilla, ámbar y misterio",
          families: ["Floral Oriental", "Oriental Floral", "Oriental", "Oriental Maderoso", "Cítrico Gourmand"],
          color: "from-purple-50 to-violet-50 hover:to-violet-100/50",
          textColor: "text-purple-800",
          border: "border-purple-200/60"
        }
      ];
    } else {
      return [
        {
          id: "q1",
          name: "Ligero & Cítrico-Acuático",
          description: "Frescura marina, cítricos limpios y energía",
          families: ["Maderoso Cítrico", "Cítrico Fresco", "Maderoso Verde", "Fougere Fresco"],
          color: "from-sky-50 to-blue-50 hover:to-blue-100/50",
          textColor: "text-sky-800",
          border: "border-sky-200/60"
        },
        {
          id: "q2",
          name: "Ligero & Maderoso-Aromático",
          description: "Elegancia relajada para el día, oficina y deporte",
          families: ["Maderoso Frutal", "Maderoso Floral", "Maderoso Aromático", "Aromático"],
          color: "from-stone-50 to-amber-50 hover:to-amber-100/50",
          textColor: "text-stone-800",
          border: "border-stone-200/60"
        },
        {
          id: "q3",
          name: "Intenso & Fougère-Especiado",
          description: "Aromas viriles, tradicionales y con presencia",
          families: ["Fougere Aromático", "Chypre Aromático"],
          color: "from-indigo-50 to-slate-50 hover:to-indigo-100/50",
          textColor: "text-indigo-800",
          border: "border-indigo-200/60"
        },
        {
          id: "q4",
          name: "Intenso & Oriental-Maderoso",
          description: "Seducción nocturna, cueros ahumados y vainillas ricas",
          families: ["Oriental Frutal", "Fougere Maderoso", "Fougere Oriental", "Chypre Maderoso", "Maderoso Oriental", "Oriental Especiado"],
          color: "from-amber-50 to-yellow-50 hover:to-yellow-100/50",
          textColor: "text-amber-900",
          border: "border-amber-200/60"
        }
      ];
    }
  }, [gender]);

  // Full database of equivalents referenced in the PDF map, with matching Parfums de Parfums catalog items
  const equivalentDatabase = useMemo(() => {
    // Note: We combine our rich products array + commercial references from the PDF.
    // If we have the product in our catalog, we link it. If not, we show it with "Consultar stock".
    const list: Array<{
      code: string;
      name: string;
      inspiredBy: string;
      brand: string;
      family: string;
      gender: "Mujer" | "Hombre";
      quadrantId: string;
    }> = [
      // FEMENINAS
      // Q1 (Ligero & Fresco-Frutal)
      { code: "F07", name: "F-07 Ralph", inspiredBy: "Ralph", brand: "Ralph Lauren", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F13", name: "F-13 212 Heroes For Her", inspiredBy: "212 Heroes for Her", brand: "Carolina Herrera", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F27", name: "F-27 Be Delicious", inspiredBy: "Be Delicious", brand: "Donna Karan", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F25", name: "F-25 Burberry Her", inspiredBy: "Burberry Her", brand: "Burberry", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F31", name: "F-31 Eden", inspiredBy: "Eden", brand: "Cacharel", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F32", name: "F-32 Escape", inspiredBy: "Escape", brand: "Calvin Klein", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F38", name: "F-38 J'adore", inspiredBy: "J'adore", brand: "Christian Dior", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F39", name: "F-39 Boss Woman", inspiredBy: "Boss Woman", brand: "Hugo Boss", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F45", name: "F-45 Halloween", inspiredBy: "Halloween", brand: "Jesús del Pozo", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F55", name: "F-55 212 VIP", inspiredBy: "212 VIP", brand: "Carolina Herrera", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F62", name: "F-62 Dolce", inspiredBy: "Dolce", brand: "Dolce & Gabbana", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F66", name: "F-66 Very Good Girl", inspiredBy: "Very Good Girl", brand: "Carolina Herrera", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F61", name: "F-61 La Vida es Bella L'Elixir", inspiredBy: "La Vida es Bella L'Elixir", brand: "Lancôme", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F65", name: "F-65 Fame", inspiredBy: "Fame", brand: "Paco Rabanne", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F17", name: "F-17 O de Lancôme", inspiredBy: "O de Lancôme", brand: "Lancôme", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },
      { code: "F30", name: "F-30 Devotion", inspiredBy: "Devotion", brand: "Dolce & Gabbana", family: "Cítrico Gourmand", gender: "Mujer", quadrantId: "q1" },
      { code: "F28", name: "F-28 CK One", inspiredBy: "CK One", brand: "Calvin Klein", family: "Cítrico Maderoso", gender: "Mujer", quadrantId: "q1" },
      { code: "F50", name: "F-50 Light Blue", inspiredBy: "Light Blue", brand: "Dolce & Gabbana", family: "Cítrico Maderoso", gender: "Mujer", quadrantId: "q1" },
      { code: "Q01", name: "Q-01 English Pear & Freesia", inspiredBy: "English Pear & Freesia", brand: "Jo Malone", family: "Floral Frutal", gender: "Mujer", quadrantId: "q1" },

      // Q2 (Ligero & Floral-Verde)
      { code: "F05", name: "F-05 Chanel N°5", inspiredBy: "Chanel N°5", brand: "Chanel", family: "Floral Aldehídico", gender: "Mujer", quadrantId: "q2" },
      { code: "F22", name: "F-22 Woman", inspiredBy: "Woman", brand: "Ralph Lauren", family: "Floral Maderoso", gender: "Mujer", quadrantId: "q2" },
      { code: "F24", name: "F-24 Bloom", inspiredBy: "Bloom", brand: "Gucci", family: "Floral Maderoso", gender: "Mujer", quadrantId: "q2" },
      { code: "F16", name: "F-16 Anaïs Anaïs", inspiredBy: "Anaïs Anaïs", brand: "Cacharel", family: "Floral Verde", gender: "Mujer", quadrantId: "q2" },
      { code: "F36", name: "F-36 Tommy Girl", inspiredBy: "Tommy Girl", brand: "Tommy Hilfiger", family: "Floral Verde", gender: "Mujer", quadrantId: "q2" },
      { code: "F48", name: "F-48 Duende", inspiredBy: "Duende", brand: "Jesús del Pozo", family: "Floral Verde", gender: "Mujer", quadrantId: "q2" },
      { code: "F52", name: "F-52 Ultraviolet", inspiredBy: "Ultraviolet", brand: "Paco Rabanne", family: "Floral Verde", gender: "Mujer", quadrantId: "q2" },
      { code: "F60", name: "F-60 Acqua di Gioia", inspiredBy: "Acqua di Gioia", brand: "Giorgio Armani", family: "Floral Verde", gender: "Mujer", quadrantId: "q2" },
      { code: "F02", name: "F-02 Poison", inspiredBy: "Poison", brand: "Christian Dior", family: "Floral Especiado", gender: "Mujer", quadrantId: "q2" },
      { code: "F21", name: "F-21 Organza", inspiredBy: "Organza", brand: "Givenchy", family: "Floral Especiado", gender: "Mujer", quadrantId: "q2" },

      // Q3 (Intenso & Chypre-Floral)
      { code: "F01", name: "F-01 Paloma Picasso", inspiredBy: "Paloma Picasso", brand: "Paloma Picasso", family: "Chypre Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F34", name: "F-34 Lady Million Empire", inspiredBy: "Lady Million Empire", brand: "Paco Rabanne", family: "Chypre Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F56", name: "F-56 Miss Dior Rose N'Roses", inspiredBy: "Miss Dior Rose N'Roses", brand: "Christian Dior", family: "Chypre Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F59", name: "F-59 Idôle", inspiredBy: "Idôle", brand: "Lancôme", family: "Chypre Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F06", name: "F-06 212 VIP Rosé", inspiredBy: "212 VIP Rosé", brand: "Carolina Herrera", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F10", name: "F-10 Coco Mademoiselle", inspiredBy: "Coco Mademoiselle", brand: "Chanel", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F11", name: "F-11 Coco Chanel", inspiredBy: "Coco Chanel", brand: "Chanel", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F51", name: "F-51 Sí", inspiredBy: "Sí", brand: "Giorgio Armani", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F57", name: "F-57 La Vida es Bella", inspiredBy: "La Vida es Bella", brand: "Lancôme", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F08", name: "F-08 Paradox", inspiredBy: "Paradox", brand: "Prada", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F49", name: "F-49 Nina", inspiredBy: "Nina", brand: "Nina Ricci", family: "Chypre Frutal", gender: "Mujer", quadrantId: "q3" },
      { code: "F14", name: "F-14 CH", inspiredBy: "CH", brand: "Carolina Herrera", family: "Floral Cítrico", gender: "Mujer", quadrantId: "q3" },

      // Q4 (Intenso & Cálido-Oriental)
      { code: "F03", name: "F-03 Oscar de la Renta", inspiredBy: "Oscar de la Renta", brand: "Oscar de la Renta", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F12", name: "F-12 Black Opium", inspiredBy: "Black Opium", brand: "Yves Saint Laurent", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F23", name: "F-23 My Way", inspiredBy: "My Way", brand: "Giorgio Armani", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F35", name: "F-35 Flower by Kenzo", inspiredBy: "Flower by Kenzo", brand: "Kenzo", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F46", name: "F-46 212 Sexy", inspiredBy: "212 Sexy", brand: "Carolina Herrera", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F54", name: "F-54 Lady Million", inspiredBy: "Lady Million", brand: "Paco Rabanne", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F63", name: "F-63 Live Irrésistible", inspiredBy: "Live Irrésistible", brand: "Givenchy", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F64", name: "F-64 La Nuit Trésor", inspiredBy: "La Nuit Trésor", brand: "Lancôme", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F19", name: "F-19 La Bomba", inspiredBy: "La Bomba", brand: "Carolina Herrera", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "F33", name: "F-33 La Vida es Bella Intense", inspiredBy: "La Vida es Bella Intense", brand: "Lancôme", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "F42", name: "F-42 Scandal", inspiredBy: "Scandal", brand: "Jean Paul Gaultier", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "F43", name: "F-43 Good Girl", inspiredBy: "Good Girl", brand: "Carolina Herrera", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "F44", name: "F-44 Olympea", inspiredBy: "Olympea", brand: "Paco Rabanne", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "F58", name: "F-58 Libre", inspiredBy: "Libre", brand: "Yves Saint Laurent", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "F15", name: "F-15 Lolita Lempicka", inspiredBy: "Lolita Lempicka", brand: "Lolita Lempicka", family: "Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F04", name: "F-04 Angel", inspiredBy: "Angel", brand: "Thierry Mugler", family: "Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "F53", name: "F-53 Euphoria", inspiredBy: "Euphoria", brand: "Calvin Klein", family: "Oriental Maderoso", gender: "Mujer", quadrantId: "q4" },
      { code: "F37", name: "F-37 XS Black Woman", inspiredBy: "XS Black Woman", brand: "Paco Rabanne", family: "Oriental Frutal", gender: "Mujer", quadrantId: "q4" },
      { code: "F40", name: "F-40 Amor Amor", inspiredBy: "Amor Amor", brand: "Cacharel", family: "Oriental Frutal", gender: "Mujer", quadrantId: "q4" },
      { code: "F41", name: "F-41 Can Can", inspiredBy: "Can Can", brand: "Paris Hilton", family: "Oriental Frutal", gender: "Mujer", quadrantId: "q4" },
      { code: "Q02", name: "Q-02 Black Orchid", inspiredBy: "Black Orchid", brand: "Tom Ford", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "Q03", name: "Q-03 Love Don't Be Shy", inspiredBy: "Love Don't Be Shy", brand: "By Kilian", family: "Floral Oriental", gender: "Mujer", quadrantId: "q4" },
      { code: "Q05", name: "Q-05 Baccarat Rouge", inspiredBy: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },
      { code: "Q06", name: "Q-06 Bianco Latte", inspiredBy: "Bianco Latte", brand: "Giardini Di Toscana", family: "Cítrico Gourmand", gender: "Mujer", quadrantId: "q4" },
      { code: "Q07", name: "Q-07 Oriana", inspiredBy: "Oriana", brand: "Parfums de Marly", family: "Oriental Floral", gender: "Mujer", quadrantId: "q4" },

      // MASCULINAS
      // Q1 (Ligero & Cítrico-Acuático)
      { code: "H20", name: "H-20 Acqua di Gio Profondo", inspiredBy: "Acqua di Gio Profondo", brand: "Giorgio Armani", family: "Maderoso Cítrico", gender: "Hombre", quadrantId: "q1" },
      { code: "H22", name: "H-22 Acqua di Gio", inspiredBy: "Acqua di Gio", brand: "Giorgio Armani", family: "Maderoso Cítrico", gender: "Hombre", quadrantId: "q1" },
      { code: "H37", name: "H-37 Acqua di Gio Absolu", inspiredBy: "Acqua di Gio Absolu", brand: "Giorgio Armani", family: "Maderoso Cítrico", gender: "Hombre", quadrantId: "q1" },
      { code: "H41", name: "H-41 Bleu Chanel", inspiredBy: "Bleu", brand: "Chanel", family: "Maderoso Cítrico", gender: "Hombre", quadrantId: "q1" },
      { code: "H26", name: "H-26 CK One", inspiredBy: "CK One", brand: "Calvin Klein", family: "Cítrico Fresco", gender: "Hombre", quadrantId: "q1" },
      { code: "H14", name: "H-14 212 Men", inspiredBy: "212 Men", brand: "Carolina Herrera", family: "Maderoso Verde", gender: "Hombre", quadrantId: "q1" },
      { code: "H01", name: "H-01 Drakkar Noir", inspiredBy: "Drakkar Noir", brand: "Guy Laroche", family: "Fougere Fresco", gender: "Hombre", quadrantId: "q1" },
      { code: "Q53", name: "Q-53 Silver Mountain Water", inspiredBy: "Silver Mountain Water", brand: "Creed", family: "Cítrico Fresco", gender: "Hombre", quadrantId: "q1" },
      { code: "Q58", name: "Q-58 L'immensité", inspiredBy: "L'immensité", brand: "Louis Vuitton", family: "Maderoso Cítrico", gender: "Hombre", quadrantId: "q1" },

      // Q2 (Ligero & Maderoso-Aromático)
      { code: "H06", name: "H-06 Polo Blue", inspiredBy: "Polo Blue", brand: "Ralph Lauren", family: "Maderoso Frutal", gender: "Hombre", quadrantId: "q2" },
      { code: "H27", name: "H-27 XS Black Men", inspiredBy: "XS Black Men", brand: "Paco Rabanne", family: "Maderoso Frutal", gender: "Hombre", quadrantId: "q2" },
      { code: "H34", name: "H-34 One Million", inspiredBy: "One Million", brand: "Paco Rabanne", family: "Maderoso Frutal", gender: "Hombre", quadrantId: "q2" },
      { code: "H19", name: "H-19 Fahrenheit", inspiredBy: "Fahrenheit", brand: "Christian Dior", family: "Maderoso Floral", gender: "Hombre", quadrantId: "q2" },
      { code: "H35", name: "H-35 MYSLF", inspiredBy: "MYSLF", brand: "Yves Saint Laurent", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q2" },
      { code: "H05", name: "H-05 Invictus Platinum", inspiredBy: "Invictus Platinum", brand: "Paco Rabanne", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q2" },
      { code: "H08", name: "H-08 Armani Code Sport", inspiredBy: "Armani Code Sport", brand: "Giorgio Armani", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q2" },
      { code: "H09", name: "H-09 Tommy", inspiredBy: "Tommy", brand: "Tommy Hilfiger", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q2" },
      { code: "H10", name: "H-10 Carolina Herrera for Men", inspiredBy: "Carolina Herrera for Men", brand: "Carolina Herrera", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q2" },
      { code: "H21", name: "H-21 Elements", inspiredBy: "Elements", brand: "Hugo Boss", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q2" },
      { code: "H30", name: "H-30 Light Blue Homme", inspiredBy: "Light Blue Homme", brand: "Dolce & Gabbana", family: "Aromático", gender: "Hombre", quadrantId: "q2" },

      // Q3 (Intenso & Fougère-Especiado)
      { code: "H02", name: "H-02 Azzaro", inspiredBy: "Azzaro pour Homme", brand: "Azzaro", family: "Fougere Aromático", gender: "Hombre", quadrantId: "q3" },
      { code: "H04", name: "H-04 Paco Rabanne", inspiredBy: "Paco Rabanne pour Homme", brand: "Paco Rabanne", family: "Fougere Aromático", gender: "Hombre", quadrantId: "q3" },
      { code: "H11", name: "H-11 Agua Brava", inspiredBy: "Agua Brava", brand: "Puig", family: "Fougere Aromático", gender: "Hombre", quadrantId: "q3" },
      { code: "H13", name: "H-13 Polo Sport", inspiredBy: "Polo Sport", brand: "Ralph Lauren", family: "Fougere Aromático", gender: "Hombre", quadrantId: "q3" },
      { code: "H44", name: "H-44 Phantom", inspiredBy: "Phantom", brand: "Paco Rabanne", family: "Fougere Aromático", gender: "Hombre", quadrantId: "q3" },
      { code: "H15", name: "H-15 Sauvage Elixir", inspiredBy: "Sauvage Elixir", brand: "Christian Dior", family: "Fougere Aromático", gender: "Hombre", quadrantId: "q3" },
      { code: "H03", name: "H-03 Quorum", inspiredBy: "Quorum", brand: "Puig", family: "Chypre Aromático", gender: "Hombre", quadrantId: "q3" },

      // Q4 (Intenso & Oriental-Maderoso)
      { code: "H16", name: "H-16 Stronger with You", inspiredBy: "Stronger with You", brand: "Giorgio Armani", family: "Oriental Frutal", gender: "Hombre", quadrantId: "q4" },
      { code: "H17", name: "H-17 Burberry Hero", inspiredBy: "Burberry Hero", brand: "Burberry", family: "Oriental Frutal", gender: "Hombre", quadrantId: "q4" },
      { code: "H29", name: "H-29 One Million Intense", inspiredBy: "One Million Intense", brand: "Paco Rabanne", family: "Oriental Frutal", gender: "Hombre", quadrantId: "q4" },
      { code: "H39", name: "H-39 Gucci Guilty", inspiredBy: "Gucci Guilty", brand: "Gucci", family: "Oriental Frutal", gender: "Hombre", quadrantId: "q4" },
      { code: "H18", name: "H-18 Sauvage", inspiredBy: "Sauvage", brand: "Christian Dior", family: "Fougere Maderoso", gender: "Hombre", quadrantId: "q4" },
      { code: "H31", name: "H-31 Polo Black", inspiredBy: "Polo Black", brand: "Ralph Lauren", family: "Fougere Maderoso", gender: "Hombre", quadrantId: "q4" },
      { code: "H32", name: "H-32 Y YSL Edt", inspiredBy: "Y", brand: "Yves Saint Laurent", family: "Fougere Maderoso", gender: "Hombre", quadrantId: "q4" },
      { code: "H38", name: "H-38 Polo Red", inspiredBy: "Polo Red", brand: "Ralph Lauren", family: "Fougere Maderoso", gender: "Hombre", quadrantId: "q4" },
      { code: "H33", name: "H-33 Le Beau", inspiredBy: "Le Beau", brand: "Jean Paul Gaultier", family: "Fougere Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H36", name: "H-36 Invictus", inspiredBy: "Invictus", brand: "Paco Rabanne", family: "Fougere Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H40", name: "H-40 212 VIP Black", inspiredBy: "212 VIP Black", brand: "Carolina Herrera", family: "Fougere Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H45", name: "H-45 212 VIP Black Elixir", inspiredBy: "212 VIP Black Elixir", brand: "Carolina Herrera", family: "Fougere Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H12", name: "H-12 Ted Lapidus pour Homme", inspiredBy: "Ted Lapidus pour Homme", brand: "Ted Lapidus", family: "Chypre Maderoso", gender: "Hombre", quadrantId: "q4" },
      { code: "H23", name: "H-23 Halloween Man", inspiredBy: "Halloween Man", brand: "Jesús del Pozo", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H24", name: "H-24 Boss", inspiredBy: "Boss", brand: "Hugo Boss", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H25", name: "H-25 212 VIP Men", inspiredBy: "212 VIP Men", brand: "Carolina Herrera", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H28", name: "H-28 Eros", inspiredBy: "Eros", brand: "Versace", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H42", name: "H-42 Stronger with You Intensely", inspiredBy: "Stronger with You Intensely", brand: "Giorgio Armani", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "H43", name: "H-43 Bad Boy", inspiredBy: "Bad Boy", brand: "Carolina Herrera", family: "Oriental Especiado", gender: "Hombre", quadrantId: "q4" },
      { code: "Q51", name: "Q-51 Santal 33", inspiredBy: "Santal 33", brand: "Le Labo", family: "Maderoso Aromático", gender: "Hombre", quadrantId: "q4" },
      { code: "Q52", name: "Q-52 Ombré Leather", inspiredBy: "Ombré Leather", brand: "Tom Ford", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" },
      { code: "Q54", name: "Q-54 Aventus Edp", inspiredBy: "Aventus", brand: "Creed", family: "Maderoso Frutal", gender: "Hombre", quadrantId: "q4" },
      { code: "Q59", name: "Q-59 Marly Althair", inspiredBy: "Althair", brand: "Parfums de Marly", family: "Maderoso Oriental", gender: "Hombre", quadrantId: "q4" }
    ];

    return list;
  }, [gender]);

  // Filtered list of equivalents
  const filteredEquivalents = useMemo(() => {
    let result = equivalentDatabase;

    if (selectedQuadrant) {
      result = result.filter(item => item.quadrantId === selectedQuadrant);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        item =>
          item.name.toLowerCase().includes(q) ||
          item.inspiredBy.toLowerCase().includes(q) ||
          item.brand.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          item.family.toLowerCase().includes(q)
      );
    }

    return result;
  }, [equivalentDatabase, selectedQuadrant, searchQuery]);

  // Resolve matching product in products database
  const getCatalogProduct = (code: string): Product | undefined => {
    // Standardize codes for lookup (some products in rich products list have codes like "F12" or "Q01")
    return products.find(
      p =>
        p.code.toLowerCase() === code.toLowerCase() ||
        p.id.toLowerCase().endsWith(code.toLowerCase())
    );
  };

  const handleAdd = (eq: typeof equivalentDatabase[0]) => {
    const p = getCatalogProduct(eq.code);
    if (p) {
      onAddProduct(p);
      setAddedIds(prev => ({ ...prev, [p.id]: true }));
      setTimeout(() => {
        setAddedIds(prev => ({ ...prev, [p.id]: false }));
      }, 2000);
    } else {
      // If product is not in local sample but is in PDF list, construct a quick custom catalog item
      // to allow ordering it anyway! This fulfills catalog completeness.
      const customProduct: Product = {
        id: `custom-${eq.code.toLowerCase()}`,
        code: eq.code,
        line: gender === "Mujer" ? "Mujer" : "Hombre",
        name: eq.name,
        inspiredBy: eq.inspiredBy,
        brandReference: eq.brand,
        gender: gender,
        family: [eq.family],
        aromaType: [eq.family],
        mainNotes: ["Notas florales", "Esencias premium"],
        occasion: ["Diario", "Salidas de noche"],
        intensity: eq.code.startsWith("Q") || eq.code.endsWith("Elixir") ? "Intenso" : "Equilibrado",
        format: eq.code.startsWith("Q") ? "Red & Black 100 ml" : "100 ml",
        priceKey: eq.code.startsWith("Q") ? "redBlack100" : "perfume100",
        stock: "Consultar",
        image: gender === "Mujer" ? "/images/perfume-mujer.jpg" : "/images/perfume-hombre.jpg",
        tags: [eq.family.toLowerCase()],
        description: `Fragancia equivalente premium de alta concentración inspirada en la mítica ${eq.inspiredBy} de ${eq.brand}.`
      };
      onAddProduct(customProduct);
      setAddedIds(prev => ({ ...prev, [customProduct.id]: true }));
      setTimeout(() => {
        setAddedIds(prev => ({ ...prev, [customProduct.id]: false }));
      }, 2000);
    }
  };

  const handleViewDetails = (code: string) => {
    const p = getCatalogProduct(code);
    if (p) {
      setSelectedDetailProduct(p);
    } else {
      // Build a fallback product details so they can read details of any PDF equivalent!
      const fallback: Product = {
        id: `custom-${code.toLowerCase()}`,
        code: code,
        line: gender === "Mujer" ? "Mujer" : "Hombre",
        name: `${code} Inspirado en ${code}`,
        inspiredBy: code,
        brandReference: "Parfums de Parfums",
        gender: gender,
        family: ["Oliva"],
        aromaType: ["Aromático"],
        mainNotes: ["Esencias finas", "Madera noble"],
        occasion: ["Diario"],
        intensity: "Equilibrado",
        format: "100 ml",
        priceKey: "perfume100",
        stock: "Consultar",
        image: gender === "Mujer" ? "/images/perfume-mujer.jpg" : "/images/perfume-hombre.jpg",
        tags: ["exclusivo"],
        description: `Fragancia equivalente premium inspirada en los listados del mapa de fragancias de Parfums de Parfums.`
      };
      setSelectedDetailProduct(fallback);
    }
  };

  return (
    <section id="mapa-olfativo" className="my-16 bg-[#FAF9F6] py-12 rounded-3xl border border-[#C6B9A5]/30 glow-subtle px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#C6B9A5]/10 text-[#705E49] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Mapa Olfativo Interactivo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#42362C]">
            Tu Fragancia en el Universo Olfativo
          </h2>
          <p className="text-[#8C785C] text-sm md:text-base">
            Parfums de Parfums clasifica cada creación en cuatro cuadrantes según su intensidad y frescura. Encuentra tu equivalencia ideal.
          </p>
        </div>

        {/* CONTROLES */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 max-w-4xl mx-auto">
          {/* Selector Dama / Varón */}
          <div className="inline-flex bg-white p-1 rounded-full border border-[#C6B9A5]/30 shadow-sm">
            <button
              onClick={() => { setGender("Mujer"); setSelectedQuadrant(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                gender === "Mujer"
                  ? "bg-[#42362C] text-white shadow"
                  : "text-[#705E49] hover:bg-[#F9F7F4]"
              }`}
            >
              Femeninas (Dama)
            </button>
            <button
              onClick={() => { setGender("Hombre"); setSelectedQuadrant(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                gender === "Hombre"
                  ? "bg-[#42362C] text-white shadow"
                  : "text-[#705E49] hover:bg-[#F9F7F4]"
              }`}
            >
              Masculinas (Varón)
            </button>
          </div>

          {/* Caja de Búsqueda rápida de Equivalencia */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C6B9A5] w-4.5 h-4.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar marca o inspiración (Ej: Good Girl)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#C6B9A5]/30 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#705E49]"
            />
          </div>
        </div>

        {/* 4 CUADRANTES VISUALES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quadrants.map((q) => {
            const isActive = selectedQuadrant === q.id;
            return (
              <button
                key={q.id}
                onClick={() => setSelectedQuadrant(isActive ? null : q.id)}
                className={`p-6 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-44 ${
                  isActive
                    ? "bg-white border-[#705E49] ring-1 ring-[#705E49] shadow-md"
                    : `bg-gradient-to-br ${q.color} ${q.border} hover:shadow-sm`
                }`}
              >
                <div className="space-y-1">
                  <div className={`font-bold text-base ${q.textColor} flex items-center justify-between`}>
                    {q.name}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#705E49] animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {q.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1">
                  {q.families.slice(0, 2).map((f) => (
                    <span key={f} className="text-[10px] bg-white/80 px-2 py-0.5 rounded border border-[#C6B9A5]/20 text-[#705E49]">
                      {f}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* LISTADO DE RESULTADOS DENTRO DEL MAPA */}
        <div className="bg-white rounded-2xl border border-[#C6B9A5]/20 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
            <div>
              <h3 className="font-bold text-lg text-[#42362C]">
                {selectedQuadrant
                  ? `Fragancias en: ${quadrants.find((q) => q.id === selectedQuadrant)?.name}`
                  : "Todas las Fragancias del Mapa"}
              </h3>
              <p className="text-xs text-slate-400">
                Mostrando {filteredEquivalents.length} equivalencias basadas en el catálogo oficial
              </p>
            </div>
            {selectedQuadrant && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedQuadrant(null)}
                className="text-xs text-[#705E49] hover:text-[#42362C]"
              >
                Ver todas las familias
              </Button>
            )}
          </div>

          {filteredEquivalents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEquivalents.map((eq) => {
                const catalogProduct = getCatalogProduct(eq.code);
                const pId = catalogProduct ? catalogProduct.id : `custom-${eq.code.toLowerCase()}`;
                const isAdded = addedIds[pId];

                return (
                  <div
                    key={eq.code}
                    className="p-4 rounded-xl border border-slate-100 bg-[#FAF9F6]/40 hover:bg-white hover:border-[#C6B9A5]/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#42362C] text-white text-[11px] font-bold tracking-wider">
                          {eq.code}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                          {eq.family}
                        </span>
                      </div>
                      <h4 className="font-bold text-[#42362C] text-sm truncate" title={eq.name}>
                        {eq.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-snug mt-1">
                        Inspirado en: <strong className="text-slate-700">{eq.inspiredBy}</strong> ({eq.brand})
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-[#8C785C] font-semibold">
                        {eq.code.startsWith("Q") ? "Premium 100ml" : "100/50/20 ml"}
                      </span>
                      <div className="flex gap-1.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewDetails(eq.code)}
                          className="h-8 w-8 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleAdd(eq)}
                          className={`h-8 px-3 rounded-full text-xs transition-all ${
                            isAdded
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                              : "bg-[#42362C] hover:bg-[#705E49] text-white"
                          }`}
                        >
                          {isAdded ? (
                            <Check className="w-3.5 h-3.5 mr-1" />
                          ) : (
                            <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                          )}
                          {isAdded ? "Añadido" : "Elegir"}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 bg-slate-50/50 rounded-xl">
              <p className="text-slate-400 text-sm">No encontramos fragancias en esta selección o búsqueda.</p>
              <button onClick={() => { setSearchQuery(""); setSelectedQuadrant(null); }} className="text-xs text-[#705E49] underline mt-2">
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      <ProductDetailModal
        product={selectedDetailProduct}
        isOpen={!!selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onSelect={onAddProduct}
      />
    </section>
  );
}
