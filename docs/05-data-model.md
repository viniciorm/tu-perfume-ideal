# Data Model

## Configuración de tienda

Archivo:

```txt
/src/config/store.ts
```

```ts
export const STORE_CONFIG = {
  storeName: "Tu Perfume Ideal",
  country: "Chile",
  currency: "CLP",
  whatsappNumber: "569XXXXXXXX",
  instagramUrl: "https://instagram.com/tuusuario",
  legalNotice:
    "Las marcas mencionadas son solo referencias olfativas. Esta tienda vende perfumes alternativos y no representa a las marcas originales ni a Parfums d Parfums como marca oficial.",
};
```

## Modelo de precios

Archivo:

```txt
/src/data/prices.ts
```

```ts
export const priceList = {
  perfume100: {
    label: "Perfume 100 ml",
    cost: 8500,
    sale: 17000,
  },
  perfume50: {
    label: "Perfume 50 ml",
    cost: 5500,
    sale: 11000,
  },
  perfume20: {
    label: "Perfume 20 ml",
    cost: 3250,
    sale: 6500,
  },
  teen50: {
    label: "Perfume Teen Girl o Boy 50 ml",
    cost: 4000,
    sale: 8000,
  },
  redBlack100: {
    label: "Perfume Red & Black 100 ml",
    cost: 13000,
    sale: 26000,
  },
  lavitBodySplash210: {
    label: "Lavit Body Splash 210 ml",
    cost: 3000,
    sale: 6000,
  },
  lavitHydraCream50: {
    label: "Lavit Hydra Cream 50 ml",
    cost: 2300,
    sale: 3900,
  },
  coloniaS400: {
    label: "Colonia S-400",
    cost: 3000,
    sale: 6000,
  },
  coloniaSplash: {
    label: "Colonia Splash",
    cost: 3300,
    sale: 6600,
  },
};
```

## Modelo de producto

```ts
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
  stock: "Disponible" | "Pocas unidades" | "Agotado" | "Consultar";
  image: string;
  tags: string[];
  featured?: boolean;
  description: string;
};
```

## Productos iniciales

Crear productos iniciales para:

### Mujer

- F12 Black Opium
- F43 Good Girl
- F57 La Vida es Bella
- F58 Libre
- F06 212 VIP Rosé
- F10 Coco Mademoiselle
- F54 Lady Million
- F51 Sí
- F50 Light Blue
- F55 212 VIP

### Hombre

- H18 Sauvage
- H36 Invictus
- H34 One Million
- H22 Acqua Di Gio
- H41 Bleu Chanel
- H40 212 VIP Black
- H43 Bad Boy
- H15 Sauvage Elixir
- H28 Eros
- H32 Y EDT

### Red

- Q01 English Pear and Freesia
- Q02 Black Orchid
- Q05 Baccarat Rouge
- Q06 Bianco Latte

### Black

- Q51 Santal 33
- Q52 Ombré Leather
- Q54 Aventus
- Q58 L’Immensité
