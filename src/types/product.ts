import { priceList } from "../data/prices";

export type ProductLine =
  | "Mujer"
  | "Hombre"
  | "Red"
  | "Black"
  | "Lavit"
  | "Teen Girl"
  | "Teen Boy"
  | "S-400"
  | "Pack"
  | "Home Care";

export type Product = {
  id: string;
  code: string;
  line: ProductLine;
  name: string;
  inspiredBy: string;
  brandReference: string;
  gender: "Mujer" | "Hombre" | "Unisex";
  family: string[];
  aromaType: string[];
  mainNotes: string[];
  occasion: string[];
  intensity: "Ligero" | "Fresco" | "Equilibrado" | "Cálido" | "Intenso";
  temperature?: "Fresco" | "Cálido" | "Neutro";
  format: string;
  priceKey: keyof typeof priceList;
  customPrice?: number;
  stock: "Disponible" | "Pocas unidades" | "Agotado" | "Consultar";
  image: string;
  tags: string[];
  featured?: boolean;
  description: string;
};
