import { Product } from "../types/product";

const allProducts: Product[] = [
  {
    "id": "m-f01",
    "code": "F01",
    "line": "Mujer",
    "name": "F-01 Paloma Picasso",
    "inspiredBy": "Paloma Picasso",
    "brandReference": "Paloma Picasso",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Chypre"
    ],
    "mainNotes": [
      "Musgo de roble",
      "Clavel",
      "Pachulí",
      "Cilantro",
      "Rosa",
      "Ylang-Ylang"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "floral"
    ],
    "description": "Un clásico chipre floral legendario. Elegante, maduro y de carácter fuerte, con un bouquet complejo coronado por musgo, pachulí y clavel."
  },
  {
    "id": "m-f02",
    "code": "F02",
    "line": "Mujer",
    "name": "F-02 Poison",
    "inspiredBy": "Poison",
    "brandReference": "Christian Dior",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Especiado"
    ],
    "aromaType": [
      "Floral",
      "Especiado"
    ],
    "mainNotes": [
      "Ciruela",
      "Baya silvestre",
      "Nardo",
      "Miel",
      "Canela",
      "Incienso"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "especiado"
    ],
    "description": "Una pócima hipnótica y especiada. Seductora, intensa y misteriosa, con una base profunda de incienso y miel endulzada por ciruelas."
  },
  {
    "id": "m-f03",
    "code": "F03",
    "line": "Mujer",
    "name": "F-03 Oscar De La Renta",
    "inspiredBy": "Oscar De La Renta",
    "brandReference": "Oscar de la Renta",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Clavel",
      "Nardo",
      "Ylang-Ylang",
      "Sándalo",
      "Lavanda",
      "Ámbar"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "La elegancia clásica de Oscar de la Renta. Un bouquet floral tradicional y oriental, con ricas maderas cálidas y especias suaves."
  },
  {
    "id": "m-f04",
    "code": "F04",
    "line": "Mujer",
    "name": "F-04 Angel (t. Mugler)",
    "inspiredBy": "Angel",
    "brandReference": "Thiery Mugier",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Almizclado"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "almizclado"
    ],
    "description": "Inspirado en la elegancia de Angel de Thiery Mugier. Una fragancia floral / almizclado que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f05",
    "code": "F05",
    "line": "Mujer",
    "name": "F-05 Chanel No. 5",
    "inspiredBy": "Chanel No. 5",
    "brandReference": "Chanel",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Aldehídico"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Aldehídos",
      "Ylang-Ylang",
      "Iris",
      "Jazmín",
      "Rosa de Grasse",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "aldehídico"
    ],
    "description": "El perfume de los perfumes. Una firma floral aldehídica atemporal que evoca lujo absoluto, jabón refinado y elegancia femenina."
  },
  {
    "id": "m-f06",
    "code": "F06",
    "line": "Mujer",
    "name": "F-06 212 VIP Rosé",
    "inspiredBy": "212 VIP Rosé",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Fresco",
      "Floral"
    ],
    "mainNotes": [
      "Champagne Rosé",
      "Flor de Durazno",
      "Maderas Blancas",
      "Almizcle"
    ],
    "occasion": [
      "Primavera / verano",
      "Salidas de noche",
      "Diario"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "festivo",
      "fresco",
      "alegre",
      "seductor"
    ],
    "featured": false,
    "description": "Chispeante y exclusivo. Una fragancia que abre con la efervescencia festiva del champagne rosé y se suaviza con el delicado aroma del duraznero."
  },
  {
    "id": "m-f07",
    "code": "F07",
    "line": "Mujer",
    "name": "F-07 Ralph",
    "inspiredBy": "Ralph",
    "brandReference": "Ralph Lauren",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Fresco",
      "Frutal",
      "Cítrico"
    ],
    "mainNotes": [
      "Manzana verde",
      "Fresia blanca",
      "Hojas de Mandarina",
      "Almizcle azul",
      "Iris blanco"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "fresco",
      "juvenil",
      "limpio",
      "cítrico"
    ],
    "featured": false,
    "description": "La frescura en su máxima expresión juvenil. Con acordes cítricos jugosos de manzana verde y mandarina que infunden energía y frescura al día a día."
  },
  {
    "id": "m-f08",
    "code": "F08",
    "line": "Mujer",
    "name": "F-08 Paradox (prada)",
    "inspiredBy": "Paradox",
    "brandReference": "Prada",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Nerolí de Italia",
      "Jazmín",
      "Ámbar",
      "Almizcle blanco",
      "Flor de azahar"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "floral"
    ],
    "description": "Una reinvención floral moderna. Combina el frescor limpio del nerolí con un ámbar vibrante para dar una sensación sofisticada y solar."
  },
  {
    "id": "m-f09",
    "code": "F09",
    "line": "Mujer",
    "name": "F-09 Tresor",
    "inspiredBy": "Tresor",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Durazno maduro",
      "Damasco",
      "Rosa de Damasco",
      "Lichi",
      "Sándalo",
      "Vainilla"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Un poema de amor clásico. Cálido y envolvente, destaca por su salida aterciopelada de durazno y damasco con un corazón de rosa noble."
  },
  {
    "id": "m-f10",
    "code": "F10",
    "line": "Mujer",
    "name": "F-10 Coco Mademoiselle",
    "inspiredBy": "Coco Mademoiselle",
    "brandReference": "Chanel",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Chypre"
    ],
    "mainNotes": [
      "Mandarina",
      "Jazmín",
      "Rosa",
      "Pachulí",
      "Vetiver",
      "Almizcle blanco"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "frutal"
    ],
    "description": "Audaz y elegante. Un chipre fresco que representa el espíritu libre con un pachulí moderno combinado con rosas frescas y cítricos."
  },
  {
    "id": "m-f11",
    "code": "F11",
    "line": "Mujer",
    "name": "F-11 Coco Chanel",
    "inspiredBy": "Coco Chanel",
    "brandReference": "Chanel",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Coco Chanel de Chanel. Una fragancia chypre / frutal que combina notas de pachulí, musgo de roble, bergamota para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f12",
    "code": "F12",
    "line": "Mujer",
    "name": "F-12 Black Opium",
    "inspiredBy": "Black Opium",
    "brandReference": "YSL",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Dulce",
      "Café",
      "Vainilla"
    ],
    "mainNotes": [
      "Granos de Café",
      "Vainilla",
      "Pimienta Rosa",
      "Flor de Azahar",
      "Jazmín",
      "Pachulí"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "noche",
      "adictivo",
      "dulce",
      "seductor"
    ],
    "featured": true,
    "description": "Una fragancia sumamente adictiva e intensa. Su salida despierta con notas de café negro energizante, abriendo paso a la dulzura seductora de la vainilla y jazmín."
  },
  {
    "id": "m-f13",
    "code": "F13",
    "line": "Mujer",
    "name": "F-13 212 Heroes For Her",
    "inspiredBy": "212 Heroes For Her",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de 212 Heroes For Her de Carolina Herrera. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f14",
    "code": "F14",
    "line": "Mujer",
    "name": "F-14 Ch",
    "inspiredBy": "Ch",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Cítrico"
    ],
    "aromaType": [
      "Oriental",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Limón de Sicilia"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "cítrico"
    ],
    "description": "Inspirado en la elegancia de Ch de Carolina Herrera. Una fragancia oriental / cítrico que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f15",
    "code": "F15",
    "line": "Mujer",
    "name": "F-15 Lolita Lempicka",
    "inspiredBy": "Lolita Lempicka",
    "brandReference": "Lolita Empicka",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Lolita Lempicka de Lolita Empicka. Una fragancia oriental / frutal que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f16",
    "code": "F16",
    "line": "Mujer",
    "name": "F-16 Anais - Anais",
    "inspiredBy": "Anais - Anais",
    "brandReference": "Cacharel",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Fresco"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Azucena",
      "Jacinto",
      "Madreselva",
      "Flor de azahar",
      "Jazmín",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "fresco"
    ],
    "description": "La inocencia de un jardín florido. Fresco, limpio y ultra femenino, dominado por jacintos y azucenas con un toque de sándalo."
  },
  {
    "id": "m-f17",
    "code": "F17",
    "line": "Mujer",
    "name": "F-17 O De Lancome",
    "inspiredBy": "O De Lancome",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Chypre"
    ],
    "aromaType": [
      "Cítrico",
      "Chypre",
      "Fresco"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Bergamota de Calabria",
      "Mandarina",
      "Pomelo rosa",
      "Nerolí",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "cítrico",
      "chypre"
    ],
    "description": "Inspirado en la elegancia de O De Lancome de Lancome. Una fragancia cítrico / chypre que combina notas de limón de sicilia, bergamota de calabria, mandarina para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f18",
    "code": "F18",
    "line": "Mujer",
    "name": "F-18 Carolina Herrera",
    "inspiredBy": "Carolina Herrera",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Floral"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "floral"
    ],
    "description": "Inspirado en la elegancia de Carolina Herrera de Carolina Herrera. Una fragancia floral / floral que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f19",
    "code": "F19",
    "line": "Mujer",
    "name": "F-19 La Bomba",
    "inspiredBy": "La Bomba",
    "brandReference": "CH",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "floral"
    ],
    "description": "Inspirado en la elegancia de La Bomba de CH. Una fragancia oriental / floral que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f20",
    "code": "F20",
    "line": "Mujer",
    "name": "F-20 Eternity",
    "inspiredBy": "Eternity",
    "brandReference": "Calvin Klein",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Floral"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Clavel",
      "Azucena",
      "Hojas verdes",
      "Fresia",
      "Caléndula",
      "Sándalo"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "floral"
    ],
    "description": "El tributo al amor eterno. Un floral limpio, verde y radiante con un icónico clavel especiado y maderas reconfortantes."
  },
  {
    "id": "m-f21",
    "code": "F21",
    "line": "Mujer",
    "name": "F-21 Organza",
    "inspiredBy": "Organza",
    "brandReference": "Givenchy",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Especiado"
    ],
    "aromaType": [
      "Floral",
      "Especiado"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pimienta negra"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "especiado"
    ],
    "description": "Inspirado en la elegancia de Organza de Givenchy. Una fragancia floral / especiado que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f22",
    "code": "F22",
    "line": "Mujer",
    "name": "F-22 Woman",
    "inspiredBy": "Woman",
    "brandReference": "Ralph Laurent",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Maderoso"
    ],
    "aromaType": [
      "Floral",
      "Maderoso"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Madera de Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "maderoso"
    ],
    "description": "Inspirado en la elegancia de Woman de Ralph Laurent. Una fragancia floral / maderoso que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f23",
    "code": "F23",
    "line": "Mujer",
    "name": "F-23 My Way",
    "inspiredBy": "My Way",
    "brandReference": "Giorgio Armani",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Flor de Azahar",
      "Nardo de la India",
      "Jazmín",
      "Vainilla Bourbon",
      "Almizcle"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Un viaje olfativo luminoso. Combina un radiante ramillete de flores blancas (azahar y nardo) con un cálido fondo de vainilla."
  },
  {
    "id": "m-f24",
    "code": "F24",
    "line": "Mujer",
    "name": "F-24 Bloom",
    "inspiredBy": "Bloom",
    "brandReference": "Gucci",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Maderoso"
    ],
    "aromaType": [
      "Floral",
      "Maderoso"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Madera de Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "maderoso"
    ],
    "description": "Inspirado en la elegancia de Bloom de Gucci. Una fragancia floral / maderoso que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f25",
    "code": "F25",
    "line": "Mujer",
    "name": "F-25 Burberry Her",
    "inspiredBy": "Burberry Her",
    "brandReference": "Burberry",
    "gender": "Mujer",
    "family": [
      "Froral",
      "Frutal",
      "Ambarado"
    ],
    "aromaType": [
      "Frutal"
    ],
    "mainNotes": [
      "Pera jugosa",
      "Manzana verde",
      "Frambuesa",
      "Durazno",
      "Grosella negra"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "froral",
      "frutal",
      "ambarado"
    ],
    "description": "Inspirado en la elegancia de Burberry Her de Burberry. Una fragancia froral / frutal / ambarado que combina notas de pera jugosa, manzana verde, frambuesa para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f26",
    "code": "F26",
    "line": "Mujer",
    "name": "F-26 Paris",
    "inspiredBy": "Paris",
    "brandReference": "Yves Saint Laurent",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Floral"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "floral"
    ],
    "description": "Inspirado en la elegancia de Paris de Yves Saint Laurent. Una fragancia floral / floral que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f27",
    "code": "F27",
    "line": "Mujer",
    "name": "F-27 Be Delicious",
    "inspiredBy": "Be Delicious",
    "brandReference": "Donna Karan",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Manzana verde",
      "Pepino fresco",
      "Toronja",
      "Lirio de los valles",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Un mordisco fresco a la Gran Manzana. Crujiente, acuático y enérgico, combinando pepino refrescante con manzana y flores suaves."
  },
  {
    "id": "m-f28",
    "code": "F28",
    "line": "Mujer",
    "name": "F-28 Ck One",
    "inspiredBy": "Ck One",
    "brandReference": "Calvin Klein",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Limón",
      "Bergamota",
      "Piña",
      "Té verde",
      "Jazmín",
      "Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "cítrico",
      "maderoso"
    ],
    "description": "La revolución cítrica limpia. Una fragancia unisex emblemática y ultra fresca de té verde y limones jugosos sobre maderas."
  },
  {
    "id": "m-f29",
    "code": "F29",
    "line": "Mujer",
    "name": "F-29 212 Carolina Herrera",
    "inspiredBy": "212 Carolina Herrera",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Floral"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Flor de Azahar",
      "Lirio",
      "Gardenia",
      "Jazmín",
      "Maderas blancas",
      "Almizcle"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "floral"
    ],
    "description": "El latido urbano de Nueva York. Un floral limpio, moderno y metálico con pétalos frescos de gardenia y un sofisticado almizcle."
  },
  {
    "id": "m-f30",
    "code": "F30",
    "line": "Mujer",
    "name": "F-30 Devotion (d&g)",
    "inspiredBy": "Devotion",
    "brandReference": "Dolce & Gabbana",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Gourmand"
    ],
    "aromaType": [
      "Cítrico",
      "Dulce",
      "Fresco"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Bergamota de Calabria",
      "Mandarina",
      "Pomelo rosa",
      "Nerolí",
      "Caramelo caliente"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "cítrico",
      "gourmand"
    ],
    "description": "Inspirado en la elegancia de Devotion de Dolce & Gabbana. Una fragancia cítrico / gourmand que combina notas de limón de sicilia, bergamota de calabria, mandarina para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f31",
    "code": "F31",
    "line": "Mujer",
    "name": "F-31 Eden",
    "inspiredBy": "Eden",
    "brandReference": "Cacharel",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Melón",
      "Durazno",
      "Loto",
      "Nenúfar",
      "Pachulí",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Un paraíso exótico y acuático. Intenso y único, combina frutas maduras y flores de loto en un fondo profundo de pachulí."
  },
  {
    "id": "m-f32",
    "code": "F32",
    "line": "Mujer",
    "name": "F-32 Escape",
    "inspiredBy": "Escape",
    "brandReference": "Calvin Klein",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Escape de Calvin Klein. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f33",
    "code": "F33",
    "line": "Mujer",
    "name": "F-33 La Vida Es Bella Intense",
    "inspiredBy": "La Vida Es Bella Intense",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "floral"
    ],
    "description": "Inspirado en la elegancia de La Vida Es Bella Intense de Lancome. Una fragancia oriental / floral que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f34",
    "code": "F34",
    "line": "Mujer",
    "name": "F-34 Lady Million Empire",
    "inspiredBy": "Lady Million Empire",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "floral"
    ],
    "description": "Inspirado en la elegancia de Lady Million Empire de Paco Rabanne. Una fragancia chypre / floral que combina notas de pachulí, musgo de roble, bergamota para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f35",
    "code": "F35",
    "line": "Mujer",
    "name": "F-35 Flower By Kenzo",
    "inspiredBy": "Flower By Kenzo",
    "brandReference": "Kenzo",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Inspirado en la elegancia de Flower By Kenzo de Kenzo. Una fragancia floral / oriental que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f36",
    "code": "F36",
    "line": "Mujer",
    "name": "F-36 Tommy Girl",
    "inspiredBy": "Tommy Girl",
    "brandReference": "Tommy Hilfiger",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Verde"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Hojas de Violeta"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "verde"
    ],
    "description": "Inspirado en la elegancia de Tommy Girl de Tommy Hilfiger. Una fragancia floral / verde que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f37",
    "code": "F37",
    "line": "Mujer",
    "name": "F-37 Xs Black Woman",
    "inspiredBy": "Xs Black Woman",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Xs Black Woman de Paco Rabanne. Una fragancia oriental / frutal que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f38",
    "code": "F38",
    "line": "Mujer",
    "name": "F-38 J'adore",
    "inspiredBy": "J'adore",
    "brandReference": "Dior",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Fresco",
      "Sofisticado"
    ],
    "mainNotes": [
      "Pera jugosa",
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Melón",
      "Orquídea",
      "Mora silvestre"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Regalo"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "lujoso",
      "clásico",
      "floral-rico",
      "elegante"
    ],
    "featured": false,
    "description": "Un ramo de flores de oro finamente talladas. Un perfume legendario, luminoso y sofisticado que exuda elegancia clásica con pera y jazmín."
  },
  {
    "id": "m-f39",
    "code": "F39",
    "line": "Mujer",
    "name": "F-39 Boss Woman",
    "inspiredBy": "Boss Woman",
    "brandReference": "Hugo Boss",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Boss Woman de Hugo Boss. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f40",
    "code": "F40",
    "line": "Mujer",
    "name": "F-40 Amor Amor",
    "inspiredBy": "Amor Amor",
    "brandReference": "Cacharel",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Amor Amor de Cacharel. Una fragancia oriental / frutal que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f41",
    "code": "F41",
    "line": "Mujer",
    "name": "F-41 Can Can",
    "inspiredBy": "Can Can",
    "brandReference": "Paris Hilton",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Can Can de Paris Hilton. Una fragancia oriental / frutal que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f42",
    "code": "F42",
    "line": "Mujer",
    "name": "F-42 Scandal",
    "inspiredBy": "Scandal",
    "brandReference": "Jean Paul Gaultier",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "floral"
    ],
    "description": "Inspirado en la elegancia de Scandal de Jean Paul Gaultier. Una fragancia oriental / floral que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f43",
    "code": "F43",
    "line": "Mujer",
    "name": "F-43 Good Girl",
    "inspiredBy": "Good Girl",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Floral"
    ],
    "mainNotes": [
      "Almendra dulce",
      "Nardo silvestre",
      "Haba Tonka",
      "Cacao oscuro",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "elegante",
      "sofisticado",
      "seductor",
      "popular"
    ],
    "featured": true,
    "description": "Audaz y elegante. Celebra las dos facetas de la mujer moderna: la dulzura sensual del nardo y jazmín junto con el misterio del haba tonka y el cacao."
  },
  {
    "id": "m-f44",
    "code": "F44",
    "line": "Mujer",
    "name": "F-44 Olympea",
    "inspiredBy": "Olympea",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla salada",
      "Jazmín acuático",
      "Flor de jengibre",
      "Ámbar gris",
      "Sándalo"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "floral"
    ],
    "description": "El perfume de una diosa moderna. Una estela fascinante que desafía las reglas con su audaz combinación de vainilla salada y jazmín."
  },
  {
    "id": "m-f45",
    "code": "F45",
    "line": "Mujer",
    "name": "F-45 Halloween",
    "inspiredBy": "Halloween",
    "brandReference": "Jesús Del Pozo",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Violeta noble",
      "Notas marinas",
      "Plátano verde",
      "Magnolia",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Un aura de misterio y seducción juvenil. Un elixir floral de violetas empolvadas envueltas en brisa marina y sándalo."
  },
  {
    "id": "m-f46",
    "code": "F46",
    "line": "Mujer",
    "name": "F-46 212 Sexy",
    "inspiredBy": "212 Sexy",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Pimienta rosa",
      "Mandarina",
      "Algodón de azúcar",
      "Gardenia",
      "Vainilla"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Seducción dulce e intrigante. Combina el picante de la pimienta rosa con la dulzura irresistible del algodón de azúcar y vainilla."
  },
  {
    "id": "m-f47",
    "code": "F47",
    "line": "Mujer",
    "name": "F-47 La Vida Es Bella Rosé",
    "inspiredBy": "La Vida Es Bella Rosé",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Chypre"
    ],
    "aromaType": [
      "Floral",
      "Chypre"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pachulí"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "chypre"
    ],
    "description": "Inspirado en la elegancia de La Vida Es Bella Rosé de Lancome. Una fragancia floral / chypre que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f48",
    "code": "F48",
    "line": "Mujer",
    "name": "F-48 Duende",
    "inspiredBy": "Duende",
    "brandReference": "Jesús Del Pozo",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Verde"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Hojas de Violeta"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "verde"
    ],
    "description": "Inspirado en la elegancia de Duende de Jesús Del Pozo. Una fragancia floral / verde que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f49",
    "code": "F49",
    "line": "Mujer",
    "name": "F-49 Nina",
    "inspiredBy": "Nina",
    "brandReference": "Nina Ricci",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Limón de Amalfi",
      "Manzana caramelizada",
      "Praliné",
      "Peonía",
      "Madera de manzano"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Un cuento de hadas goloso. La manzana de fantasía que mezcla frescura cítrica con el dulzor adictivo del caramelo y el praliné."
  },
  {
    "id": "m-f50",
    "code": "F50",
    "line": "Mujer",
    "name": "F-50 Light Blue",
    "inspiredBy": "Light Blue",
    "brandReference": "Dolce & Gabbana",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Maderoso"
    ],
    "aromaType": [
      "Cítrico",
      "Fresco",
      "Aireado"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Manzana Granny Smith",
      "Cedro de Virginia",
      "Jazmín",
      "Bambú",
      "Ámbar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Oficina / trabajo"
    ],
    "intensity": "Ligero",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "cítrico",
      "fresco",
      "limpio",
      "verano"
    ],
    "featured": false,
    "description": "La alegría del verano en el Mediterráneo. Una fragancia chispeante, fresca y cítrica que transmite una deliciosa sensación de limpieza y frescura."
  },
  {
    "id": "m-f51",
    "code": "F51",
    "line": "Mujer",
    "name": "F-51 Sí",
    "inspiredBy": "Sí",
    "brandReference": "Armani",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Sí de Armani. Una fragancia chypre / frutal que combina notas de pachulí, musgo de roble, bergamota para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f52",
    "code": "F52",
    "line": "Mujer",
    "name": "F-52 Ultraviolet",
    "inspiredBy": "Ultraviolet",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Verde"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Hojas de Violeta"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "verde"
    ],
    "description": "Inspirado en la elegancia de Ultraviolet de Paco Rabanne. Una fragancia floral / verde que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f53",
    "code": "F53",
    "line": "Mujer",
    "name": "F-53 Euphoria",
    "inspiredBy": "Euphoria",
    "brandReference": "Calvin Klein",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "oriental",
      "maderoso"
    ],
    "description": "Inspirado en la elegancia de Euphoria de Calvin Klein. Una fragancia oriental / maderoso que combina notas de vainilla pura, ámbar, haba tonka para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f54",
    "code": "F54",
    "line": "Mujer",
    "name": "F-54 Lady Million",
    "inspiredBy": "Lady Million",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Inspirado en la elegancia de Lady Million de Paco Rabanne. Una fragancia floral / oriental que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f55",
    "code": "F55",
    "line": "Mujer",
    "name": "F-55 212 Vip",
    "inspiredBy": "212 Vip",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de 212 Vip de Carolina Herrera. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f56",
    "code": "F56",
    "line": "Mujer",
    "name": "F-56 Miss Dior Rose",
    "inspiredBy": "Miss Dior Rose",
    "brandReference": "Christian Dior",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "floral"
    ],
    "description": "Inspirado en la elegancia de Miss Dior Rose de Christian Dior. Una fragancia chypre / floral que combina notas de pachulí, musgo de roble, bergamota para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f57",
    "code": "F57",
    "line": "Mujer",
    "name": "F-57 La Vida es Bella",
    "inspiredBy": "La Vida es Bella",
    "brandReference": "Lancôme",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Dulce",
      "Floral",
      "Polvoso"
    ],
    "mainNotes": [
      "Iris Pallida",
      "Praliné dulce",
      "Vainilla pura",
      "Grosella negra",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Regalo"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "dulce",
      "alegre",
      "clásico",
      "exitoso"
    ],
    "featured": true,
    "description": "El perfume de la felicidad. Una firma olfativa dulce, empolvada y magnética construida en torno al Iris, con notas adictivas de praliné y vainilla."
  },
  {
    "id": "m-f58",
    "code": "F58",
    "line": "Mujer",
    "name": "F-58 Libre",
    "inspiredBy": "Libre",
    "brandReference": "YSL",
    "gender": "Mujer",
    "family": [
      "Maderoso",
      "Cítrico"
    ],
    "aromaType": [
      "Floral",
      "Fresco",
      "Aromático"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Flor de Azahar",
      "Vainilla de Madagascar",
      "Cedro",
      "Ámbar gris"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "elegante",
      "moderno",
      "limpio",
      "sofisticado"
    ],
    "featured": false,
    "description": "Un perfume elegante que grita libertad. Una audaz tensión entre la lavanda tradicionalmente masculina y la ultra femenina flor de naranjo marroquí."
  },
  {
    "id": "m-f59",
    "code": "F59",
    "line": "Mujer",
    "name": "F-59 Idole",
    "inspiredBy": "Idole",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "chypre",
      "floral"
    ],
    "description": "Inspirado en la elegancia de Idole de Lancome. Una fragancia chypre / floral que combina notas de pachulí, musgo de roble, bergamota para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f60",
    "code": "F60",
    "line": "Mujer",
    "name": "F-60 Acqua Di Gioia",
    "inspiredBy": "Acqua Di Gioia",
    "brandReference": "Armani",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Verde"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Hojas de Violeta"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "verde"
    ],
    "description": "Inspirado en la elegancia de Acqua Di Gioia de Armani. Una fragancia floral / verde que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f61",
    "code": "F61",
    "line": "Mujer",
    "name": "F-61 La Vida Es Bella L’ Elixir",
    "inspiredBy": "La Vida Es Bella L’ Elixir",
    "brandReference": "Lancôme",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de La Vida Es Bella L’ Elixir de Lancôme. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f62",
    "code": "F62",
    "line": "Mujer",
    "name": "F-62 Dolce",
    "inspiredBy": "Dolce",
    "brandReference": "Dolce & Gabbana",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Dolce de Dolce & Gabbana. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f63",
    "code": "F63",
    "line": "Mujer",
    "name": "F-63 Live Irresistible",
    "inspiredBy": "Live Irresistible",
    "brandReference": "Givenchy",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Inspirado en la elegancia de Live Irresistible de Givenchy. Una fragancia floral / oriental que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f64",
    "code": "F64",
    "line": "Mujer",
    "name": "F-64 La Nuit Tresor",
    "inspiredBy": "La Nuit Tresor",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Inspirado en la elegancia de La Nuit Tresor de Lancome. Una fragancia floral / oriental que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f65",
    "code": "F65",
    "line": "Mujer",
    "name": "F-65 Fame",
    "inspiredBy": "Fame",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Maderoso"
    ],
    "aromaType": [
      "Floral",
      "Maderoso"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Madera de Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "maderoso"
    ],
    "description": "Inspirado en la elegancia de Fame de Paco Rabanne. Una fragancia floral / maderoso que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "m-f66",
    "code": "F66",
    "line": "Mujer",
    "name": "F-66 Very Good Girl",
    "inspiredBy": "Very Good Girl",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "clásico",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en la elegancia de Very Good Girl de Carolina Herrera. Una fragancia floral / frutal que combina notas de jazmín sambac, rosa de damasco, nardo silvestre para crear una estela sofisticada, sensual y duradera."
  },
  {
    "id": "h-h01",
    "code": "H01",
    "line": "Hombre",
    "name": "H-01 Drakkar Noir",
    "inspiredBy": "Drakkar Noir",
    "brandReference": "Guy Laroche",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Fresco"
    ],
    "aromaType": [
      "Fougere",
      "Fresco"
    ],
    "mainNotes": [
      "Lavanda",
      "Limón",
      "Albahaca",
      "Musgo de roble",
      "Cuero",
      "Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "fresco"
    ],
    "description": "La leyenda clásica del poder masculino. Un aroma fougère fuerte, limpio y robusto con cuero, musgo de roble y hierbas frescas."
  },
  {
    "id": "h-h02",
    "code": "H02",
    "line": "Hombre",
    "name": "H-02 Azzaro",
    "inspiredBy": "Azzaro",
    "brandReference": "Azzaro",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Anís estrellado",
      "Lavanda",
      "Albahaca",
      "Vetiver",
      "Sándalo",
      "Cuero"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Seducción y sofisticación clásica. Un fougère aromático icónico con un carácter cálido de anís y lavanda sobre cuero rico."
  },
  {
    "id": "h-h03",
    "code": "H03",
    "line": "Hombre",
    "name": "H-03 Quorum",
    "inspiredBy": "Quorum",
    "brandReference": "Puig",
    "gender": "Hombre",
    "family": [
      "Chypre",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Menta fresca"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "chypre",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Quorum de Puig. Un aroma chypre / aromático que conjuga la fuerza de pachulí, musgo de roble, bergamota, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h04",
    "code": "H04",
    "line": "Hombre",
    "name": "H-04 Paco Rabanne",
    "inspiredBy": "Paco Rabanne",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Lavanda",
      "Romero",
      "Miel",
      "Musgo de roble",
      "Ámbar",
      "Habatonka"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "La esencia del caballero tradicional. Un fougère aromático rico y varonil que destaca por sus hierbas frescas de romero y fondo limpio."
  },
  {
    "id": "h-h05",
    "code": "H05",
    "line": "Hombre",
    "name": "H-05 Invictus Platinum",
    "inspiredBy": "Invictus Platinum",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Invictus Platinum de Paco Rabanne. Un aroma maderoso / aromático que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h06",
    "code": "H06",
    "line": "Hombre",
    "name": "H-06 Polo Blue Men",
    "inspiredBy": "Polo Blue Men",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Frutal"
    ],
    "aromaType": [
      "Maderoso",
      "Frutal"
    ],
    "mainNotes": [
      "Melón de Cavaillon",
      "Pepino",
      "Mandarina",
      "Albahaca",
      "Salvia",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "frutal"
    ],
    "description": "La inmensidad del cielo azul. Fresco y deportivo, destaca por su salida acuática de pepino y melón y un fondo suave de gamuza."
  },
  {
    "id": "h-h07",
    "code": "H07",
    "line": "Hombre",
    "name": "H-07 212 Heroes Men",
    "inspiredBy": "212 Heroes Men",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Frutal"
    ],
    "aromaType": [
      "Fougere",
      "Frutal"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "frutal"
    ],
    "description": "Inspirado en el carácter y magnetismo de 212 Heroes Men de Carolina Herrera. Un aroma fougere / frutal que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h08",
    "code": "H08",
    "line": "Hombre",
    "name": "H-08 Armani Code Sport",
    "inspiredBy": "Armani Code Sport",
    "brandReference": "Giorgio Armani",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Armani Code Sport de Giorgio Armani. Un aroma maderoso / aromático que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h09",
    "code": "H09",
    "line": "Hombre",
    "name": "H-09 Tommy",
    "inspiredBy": "Tommy",
    "brandReference": "Tommy Hilfiger",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Menta fresca",
      "Lavanda",
      "Manzana verde",
      "Flor de cactus",
      "Flor de algodonero"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "El espíritu americano clásico. Fresco, limpio y casual, con acordes verdes de menta, manzana crujiente y flores de cactus."
  },
  {
    "id": "h-h10",
    "code": "H10",
    "line": "Hombre",
    "name": "H-10 Carolina Herrera",
    "inspiredBy": "Carolina Herrera",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Carolina Herrera de Carolina Herrera. Un aroma maderoso / aromático que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h11",
    "code": "H11",
    "line": "Hombre",
    "name": "H-11 Agua Brava",
    "inspiredBy": "Agua Brava",
    "brandReference": "Puig",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Menta fresca"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Agua Brava de Puig. Un aroma fougere / aromático que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h12",
    "code": "H12",
    "line": "Hombre",
    "name": "H-12 Ted Lapidus Pour Homme",
    "inspiredBy": "Ted Lapidus Pour Homme",
    "brandReference": "Ted Lapidus",
    "gender": "Hombre",
    "family": [
      "Chypre",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Chypre"
    ],
    "mainNotes": [
      "Pachulí",
      "Musgo de roble",
      "Bergamota",
      "Rosa",
      "Jazmín",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "chypre",
      "maderoso"
    ],
    "description": "Inspirado en el carácter y magnetismo de Ted Lapidus Pour Homme de Ted Lapidus. Un aroma chypre / maderoso que conjuga la fuerza de pachulí, musgo de roble, bergamota, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h13",
    "code": "H13",
    "line": "Hombre",
    "name": "H-13 Polo Sport",
    "inspiredBy": "Polo Sport",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Menta",
      "Aldehídos",
      "Lavanda",
      "Bergamota",
      "Pastos marinos",
      "Madera de pino"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Energía deportiva al límite. Una inyección fougère ultra fresca con notas de menta helada, lavanda y aire libre marino."
  },
  {
    "id": "h-h14",
    "code": "H14",
    "line": "Hombre",
    "name": "H-14 212 For Men",
    "inspiredBy": "212 For Men",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Verde"
    ],
    "aromaType": [
      "Maderoso",
      "Fresco"
    ],
    "mainNotes": [
      "Hojas verdes",
      "Especias",
      "Pomelo",
      "Jengibre",
      "Salvia",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "verde"
    ],
    "description": "Magnetismo urbano y cosmopolita. Combina el frescor verde y metálico de las hojas de violeta con el picante del jengibre y sándalo."
  },
  {
    "id": "h-h15",
    "code": "H15",
    "line": "Hombre",
    "name": "H-15 Sauvage Elixir (c. Dior)",
    "inspiredBy": "Sauvage Elixir",
    "brandReference": "Christian Dior",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Canela",
      "Nuez moscada",
      "Cardamomo",
      "Lavanda de Nyons",
      "Regaliz",
      "Sándalo"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Elixir de extrema riqueza e intensidad. Un concentrado nocturno y picante con especias cálidas de cardamomo y un sándalo licoroso."
  },
  {
    "id": "h-h16",
    "code": "H16",
    "line": "Hombre",
    "name": "H-16 Stronger With You",
    "inspiredBy": "Stronger With You",
    "brandReference": "Armani",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Cardamomo",
      "Pimienta rosa",
      "Hojas de violeta",
      "Castaña",
      "Vainilla",
      "Salvia"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "frutal"
    ],
    "description": "Fuerza amorosa contemporánea. Una fragancia cálida y magnética con un acorde único de castaña caramelizada y vainilla especiada."
  },
  {
    "id": "h-h17",
    "code": "H17",
    "line": "Hombre",
    "name": "H-17 Burberry Hero",
    "inspiredBy": "Burberry Hero",
    "brandReference": "Burberry",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en el carácter y magnetismo de Burberry Hero de Burberry. Un aroma oriental / frutal que conjuga la fuerza de vainilla pura, ámbar, haba tonka, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h18",
    "code": "H18",
    "line": "Hombre",
    "name": "H-18 Sauvage",
    "inspiredBy": "Sauvage",
    "brandReference": "Dior",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Maderoso"
    ],
    "aromaType": [
      "Fresco",
      "Cítrico",
      "Especiado"
    ],
    "mainNotes": [
      "Bergamota de Reggio",
      "Pimienta de Sichuan",
      "Ambroxan",
      "Lavanda",
      "Vetiver",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Salidas de noche"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "masculino",
      "imponente",
      "versátil",
      "fresco"
    ],
    "featured": true,
    "description": "Una composición noble, cruda y sumamente masculina. Abre con un estallido fresco de bergamota de Calabria que descansa sobre un denso fondo de ambroxan mineral."
  },
  {
    "id": "h-h19",
    "code": "H19",
    "line": "Hombre",
    "name": "H-19 Fahrenheit",
    "inspiredBy": "Fahrenheit",
    "brandReference": "Christian Dior",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Floral"
    ],
    "aromaType": [
      "Maderoso",
      "Floral"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "floral"
    ],
    "description": "Inspirado en el carácter y magnetismo de Fahrenheit de Christian Dior. Un aroma maderoso / floral que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h20",
    "code": "H20",
    "line": "Hombre",
    "name": "H-20 Acqua Di Gio Profondo",
    "inspiredBy": "Acqua Di Gio Profondo",
    "brandReference": "Giorgio Armani",
    "gender": "Hombre",
    "family": [
      "Cítrico",
      "Amaderado"
    ],
    "aromaType": [
      "Maderoso",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Bergamota de Calabria",
      "Mandarina",
      "Pomelo rosa",
      "Nerolí",
      "Madera de Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "cítrico",
      "amaderado"
    ],
    "description": "Inspirado en el carácter y magnetismo de Acqua Di Gio Profondo de Giorgio Armani. Un aroma cítrico / amaderado que conjuga la fuerza de limón de sicilia, bergamota de calabria, mandarina, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h21",
    "code": "H21",
    "line": "Hombre",
    "name": "H-21 Elements",
    "inspiredBy": "Elements",
    "brandReference": "Hugo Boss",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Elements de Hugo Boss. Un aroma maderoso / aromático que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h22",
    "code": "H22",
    "line": "Hombre",
    "name": "H-22 Acqua Di Gio",
    "inspiredBy": "Acqua Di Gio",
    "brandReference": "Giorgio Armani",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Cítrico"
    ],
    "aromaType": [
      "Maderoso",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Notas marinas",
      "Limón",
      "Lima",
      "Jazmín",
      "Durazno",
      "Ámbar gris"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "cítrico"
    ],
    "description": "La brisa fresca del mar mediterráneo. El perfume acuático por excelencia, fresco y cítrico con toques marinos y fondo maderoso limpio."
  },
  {
    "id": "h-h23",
    "code": "H23",
    "line": "Hombre",
    "name": "H-23 Halloween Man",
    "inspiredBy": "Halloween Man",
    "brandReference": "Jesús Del Pozo",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "Inspirado en el carácter y magnetismo de Halloween Man de Jesús Del Pozo. Un aroma oriental / maderoso que conjuga la fuerza de vainilla pura, ámbar, haba tonka, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h24",
    "code": "H24",
    "line": "Hombre",
    "name": "H-24 Boss",
    "inspiredBy": "Boss",
    "brandReference": "Hugo Boss",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Manzana verde",
      "Ciruela",
      "Canela",
      "Madera de Caoba",
      "Vainilla",
      "Vetiver"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "El traje perfecto embotellado. Equilibrado, masculino y moderno, destaca por su salida de manzana verde y su fondo cálido de canela."
  },
  {
    "id": "h-h25",
    "code": "H25",
    "line": "Hombre",
    "name": "H-25 212 Vip Men",
    "inspiredBy": "212 Vip Men",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Maracuyá",
      "Jengibre",
      "Pimienta negra",
      "Vodka",
      "Ginebra",
      "Cuero"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "El alma de la fiesta. Un aroma oriental y maderoso, vibrante por sus acordes licorosos de ginebra y maracuyá sobre cuero sensual."
  },
  {
    "id": "h-h26",
    "code": "H26",
    "line": "Hombre",
    "name": "H-26 Ck One",
    "inspiredBy": "Ck One",
    "brandReference": "Calvin Klein",
    "gender": "Hombre",
    "family": [
      "Cítrico",
      "Fresco"
    ],
    "aromaType": [
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Limón",
      "Té verde",
      "Mandarina",
      "Jazmín",
      "Almizcle blanco",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "cítrico",
      "fresco"
    ],
    "description": "Limpieza y frescura compartida. Una colonia cítrica ideal para uso diario, súper limpia, revitalizante y fresca."
  },
  {
    "id": "h-h27",
    "code": "H27",
    "line": "Hombre",
    "name": "H-27 Xs Black Men",
    "inspiredBy": "Xs Black Men",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Frutal"
    ],
    "aromaType": [
      "Maderoso",
      "Frutal"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "frutal"
    ],
    "description": "Inspirado en el carácter y magnetismo de Xs Black Men de Paco Rabanne. Un aroma maderoso / frutal que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h28",
    "code": "H28",
    "line": "Hombre",
    "name": "H-28 Eros",
    "inspiredBy": "Eros",
    "brandReference": "Versace",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Menta",
      "Manzana verde",
      "Limón de Italia",
      "Habatonka",
      "Ambrosía",
      "Vainilla"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "Poder, pasión y divinidad. Una bomba de seducción oriental que combina el frescor helado de la menta con la dulzura rica de habatonka."
  },
  {
    "id": "h-h29",
    "code": "H29",
    "line": "Hombre",
    "name": "H-29 One Million Intense",
    "inspiredBy": "One Million Intense",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en el carácter y magnetismo de One Million Intense de Paco Rabanne. Un aroma oriental / frutal que conjuga la fuerza de vainilla pura, ámbar, haba tonka, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h30",
    "code": "H30",
    "line": "Hombre",
    "name": "H-30 Light Blue Men",
    "inspiredBy": "Light Blue Men",
    "brandReference": "Dolce & Gabbana",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Inspirado en el carácter y magnetismo de Light Blue Men de Dolce & Gabbana. Un aroma maderoso / aromático que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h31",
    "code": "H31",
    "line": "Hombre",
    "name": "H-31 Polo Black",
    "inspiredBy": "Polo Black",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Maderoso"
    ],
    "aromaType": [
      "Fougere",
      "Maderoso"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "maderoso"
    ],
    "description": "Inspirado en el carácter y magnetismo de Polo Black de Ralph Lauren. Un aroma fougere / maderoso que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h32",
    "code": "H32",
    "line": "Hombre",
    "name": "H-32 Y Edt (y.s.l.)",
    "inspiredBy": "Y Edt",
    "brandReference": "Ives Saint Laurente",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Maderoso"
    ],
    "aromaType": [
      "Fougere",
      "Maderoso"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "maderoso"
    ],
    "description": "Inspirado en el carácter y magnetismo de Y Edt de Ives Saint Laurente. Un aroma fougere / maderoso que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h33",
    "code": "H33",
    "line": "Hombre",
    "name": "H-33 Le Beu (j.p. Gaultier)",
    "inspiredBy": "Le Beu",
    "brandReference": "Jean Paul Gaultier",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fougere",
      "Oriental"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "oriental"
    ],
    "description": "Inspirado en el carácter y magnetismo de Le Beu de Jean Paul Gaultier. Un aroma fougere / oriental que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h34",
    "code": "H34",
    "line": "Hombre",
    "name": "H-34 One Million",
    "inspiredBy": "One Million",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Frutal"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Especiado"
    ],
    "mainNotes": [
      "Canela de Ceilán",
      "Cuero rubio",
      "Mandarina roja",
      "Menta fresca",
      "Rosa",
      "Ámbar"
    ],
    "occasion": [
      "Salidas de noche",
      "Otoño / invierno",
      "Citas o momentos especiales"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "noche",
      "seductor",
      "dulce",
      "audaz"
    ],
    "featured": false,
    "description": "Audaz, provocativo y magnético. Combina notas dulces y frutales con una canela picante y el calor masculino del cuero rubio."
  },
  {
    "id": "h-h35",
    "code": "H35",
    "line": "Hombre",
    "name": "H-35 Myslf (y.s.l.)",
    "inspiredBy": "Myslf",
    "brandReference": "Yves Saint Laurent",
    "gender": "Hombre",
    "family": [
      "Amaderado",
      "Frutal"
    ],
    "aromaType": [
      "Maderoso",
      "Frutal"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "amaderado",
      "frutal"
    ],
    "description": "Inspirado en el carácter y magnetismo de Myslf de Yves Saint Laurent. Un aroma amaderado / frutal que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h36",
    "code": "H36",
    "line": "Hombre",
    "name": "H-36 Invictus",
    "inspiredBy": "Invictus",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fresco",
      "Acuático",
      "Dinámico"
    ],
    "mainNotes": [
      "Notas Marinas saladas",
      "Pomelo amargo",
      "Madera de Gaiac",
      "Laurel",
      "Ámbar gris"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "deportivo",
      "juvenil",
      "fresco",
      "activo"
    ],
    "featured": true,
    "description": "El aroma de la victoria. Un choque electrizante de frescura acuática y pomelo enérgico, envuelto en la robusta masculinidad del laurel y la madera de gaiac."
  },
  {
    "id": "h-h37",
    "code": "H37",
    "line": "Hombre",
    "name": "H-37 Acqua Di Gio Absolu",
    "inspiredBy": "Acqua Di Gio Absolu",
    "brandReference": "Giorgio Armani",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Citrico"
    ],
    "aromaType": [
      "Maderoso",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "maderoso",
      "citrico"
    ],
    "description": "Inspirado en el carácter y magnetismo de Acqua Di Gio Absolu de Giorgio Armani. Un aroma maderoso / citrico que conjuga la fuerza de madera de cedro, sándalo, vetiver, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h38",
    "code": "H38",
    "line": "Hombre",
    "name": "H-38 Polo Red",
    "inspiredBy": "Polo Red",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fougere",
      "Oriental"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "oriental"
    ],
    "description": "Inspirado en el carácter y magnetismo de Polo Red de Ralph Lauren. Un aroma fougere / oriental que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h39",
    "code": "H39",
    "line": "Hombre",
    "name": "H-39 Gucci Guilty",
    "inspiredBy": "Gucci Guilty",
    "brandReference": "Gucci",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "frutal"
    ],
    "description": "Inspirado en el carácter y magnetismo de Gucci Guilty de Gucci. Un aroma oriental / frutal que conjuga la fuerza de vainilla pura, ámbar, haba tonka, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h40",
    "code": "H40",
    "line": "Hombre",
    "name": "H-40 212 Vip Black",
    "inspiredBy": "212 Vip Black",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fougere",
      "Oriental"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "oriental"
    ],
    "description": "Inspirado en el carácter y magnetismo de 212 Vip Black de Carolina Herrera. Un aroma fougere / oriental que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h41",
    "code": "H41",
    "line": "Hombre",
    "name": "H-41 Bleu",
    "inspiredBy": "Bleu",
    "brandReference": "Chanel",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Cítrico"
    ],
    "aromaType": [
      "Cítrico",
      "Maderoso",
      "Fresco"
    ],
    "mainNotes": [
      "Pomelo rosa",
      "Menta fresca",
      "Incienso místico",
      "Madera de Cedro",
      "Sándalo",
      "Pimienta Rosa"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Citas o momentos especiales"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "elegante",
      "formal",
      "versátil",
      "limpio"
    ],
    "featured": false,
    "description": "La encarnación de la elegancia atemporal y soberana. Un aroma aromático-amaderado con un cautivador frescor cítrico y un fondo sofisticado de incienso."
  },
  {
    "id": "h-h42",
    "code": "H42",
    "line": "Hombre",
    "name": "H-42 Stronger With You Intensely",
    "inspiredBy": "Stronger With You Intensely",
    "brandReference": "Armani",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "Inspirado en el carácter y magnetismo de Stronger With You Intensely de Armani. Un aroma oriental / maderoso que conjuga la fuerza de vainilla pura, ámbar, haba tonka, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h43",
    "code": "H43",
    "line": "Hombre",
    "name": "H-43 Bad Boy",
    "inspiredBy": "Bad Boy",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Especiado"
    ],
    "aromaType": [
      "Especiado",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pimienta negra"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "oriental",
      "especiado"
    ],
    "description": "Inspirado en el carácter y magnetismo de Bad Boy de Carolina Herrera. Un aroma oriental / especiado que conjuga la fuerza de vainilla pura, ámbar, haba tonka, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "h-h44",
    "code": "H44",
    "line": "Hombre",
    "name": "H-44 Phantom",
    "inspiredBy": "Phantom",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Lavanda enérgica",
      "Limón de Amalfi",
      "Vainilla cremosa",
      "Vetiver",
      "Madera de Cedro"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Equilibrado",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Futurología olfativa. Un fougère aromático nacido del encuentro de un limón enérgico y lavanda con un fondo cremoso de vainilla."
  },
  {
    "id": "h-h45",
    "code": "H45",
    "line": "Hombre",
    "name": "H-45 212 Vip Black Elixir",
    "inspiredBy": "212 Vip Black Elixir",
    "brandReference": "CH",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fougere",
      "Oriental"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Vainilla pura"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Otoño / invierno"
    ],
    "intensity": "Intenso",
    "format": "100 ml",
    "priceKey": "perfume100",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "clásico",
      "masculino",
      "varonil",
      "fougere",
      "oriental"
    ],
    "description": "Inspirado en el carácter y magnetismo de 212 Vip Black Elixir de CH. Un aroma fougere / oriental que conjuga la fuerza de lavanda francesa, romero, musgo, diseñado para el hombre moderno y distinguido."
  },
  {
    "id": "r-q01",
    "code": "Q01",
    "line": "Red",
    "name": "Q-01 English Pear & Freesia",
    "inspiredBy": "English Pear & Freesia",
    "brandReference": "Jo Malone",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Ruibarbo",
      "Pera madura",
      "Freesia blanca",
      "Pachulí",
      "Almizcle",
      "Driftwood"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "elegante",
      "delicado",
      "floral",
      "exclusivo"
    ],
    "featured": true,
    "description": "La frescura otoñal de las peras recién cortadas envuelta en un delicado bouquet de fresias blancas, suavizado por notas de madera y pachulí."
  },
  {
    "id": "r-q02",
    "code": "Q02",
    "line": "Red",
    "name": "Q-02 Black Orchid",
    "inspiredBy": "Black Orchid",
    "brandReference": "Tom Ford",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Oriental"
    ],
    "aromaType": [
      "Oriental",
      "Especiado",
      "Cálido"
    ],
    "mainNotes": [
      "Orquídea negra",
      "Incienso",
      "Oud",
      "Pachulí",
      "Canela",
      "Flor de Loto",
      "Vainilla"
    ],
    "occasion": [
      "Salidas de noche",
      "Otoño / invierno",
      "Citas o momentos especiales"
    ],
    "intensity": "Intenso",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "seductor",
      "misterioso",
      "opulento",
      "noche"
    ],
    "featured": false,
    "description": "Una fragancia lujosa y oscura de acordes tentadores de orquídea negra y especias, con una base rica y aterciopelada de incienso, maderas y vainilla."
  },
  {
    "id": "r-q03",
    "code": "Q03",
    "line": "Red",
    "name": "Q-03 Love Don't Be Shy",
    "inspiredBy": "Love Don't Be Shy",
    "brandReference": "By Kilian",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Dulce",
      "Floral",
      "Gourmand"
    ],
    "mainNotes": [
      "Malvavisco",
      "Flor de Naranjo",
      "Caramelo",
      "Jazmín Sambac",
      "Nerolí",
      "Azúcar vainilla"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Regalo"
    ],
    "intensity": "Intenso",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "ultra-dulce",
      "afrodisíaco",
      "glamoroso"
    ],
    "featured": true,
    "description": "Una apertura dulce de nerolí que da paso a una explosión gourmand de malvavisco (marshmallow), caramelo caliente y sensual flor de naranjo."
  },
  {
    "id": "r-q04",
    "code": "Q04",
    "line": "Red",
    "name": "Q-04 Soleil Blanc",
    "inspiredBy": "Soleil Blanc",
    "brandReference": "Tom Ford",
    "gender": "Mujer",
    "family": [
      "Amaderado",
      "Cítrico"
    ],
    "aromaType": [
      "Cálido",
      "Coco",
      "Cítrico"
    ],
    "mainNotes": [
      "Leche de Coco",
      "Bergamota",
      "Cardamomo",
      "Ylang-Ylang",
      "Pistacho",
      "Sándalo",
      "Ámbar"
    ],
    "occasion": [
      "Primavera / verano",
      "Diario",
      "Salidas de noche"
    ],
    "intensity": "Cálido",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "solar",
      "veraniego",
      "playero",
      "elegante"
    ],
    "featured": false,
    "description": "Un perfume solar, adictivo e inesperado que evoca islas privadas de verano eterno. Con notas cremosas de coco, pistacho y flores blancas."
  },
  {
    "id": "r-q05",
    "code": "Q05",
    "line": "Red",
    "name": "Q-05 Baccarat Rouge",
    "inspiredBy": "Baccarat Rouge 540",
    "brandReference": "Maison Francis Kurkdjian",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Dulce",
      "Amaderado",
      "Cálido"
    ],
    "mainNotes": [
      "Azafrán",
      "Frambuesa",
      "Amberwood",
      "Jazmín de Egipto",
      "Madera de Cedro",
      "Musgo de roble",
      "Caramelo"
    ],
    "occasion": [
      "Citas o momentos especiales",
      "Salidas de noche",
      "Regalo"
    ],
    "intensity": "Intenso",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "icono",
      "lujoso",
      "distinguido",
      "magnético"
    ],
    "featured": true,
    "description": "Una obra de arte olfativa con una firma densa, mineral y poética. Súper duradero, con toques de azafrán, maderas doradas y caramelo quemado."
  },
  {
    "id": "r-q06",
    "code": "Q06",
    "line": "Red",
    "name": "Q-06 Bianco Latte",
    "inspiredBy": "Bianco Latte",
    "brandReference": "Giardini Di Toscana",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Café",
      "Vainilla"
    ],
    "mainNotes": [
      "Vainilla de Madagascar",
      "Miel de flores",
      "Caramelo de leche",
      "Almizcle blanco",
      "Cacao suave"
    ],
    "occasion": [
      "Diario",
      "Salidas de noche",
      "Otoño / invierno"
    ],
    "intensity": "Cálido",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "gourmand",
      "lechoso",
      "novedad",
      "acogedor"
    ],
    "featured": true,
    "description": "El perfume viral de la alta perfumería. Un abrazo cálido de leche condensada, miel derretida y vainilla pura. Irresistiblemente tierno y goloso."
  },
  {
    "id": "r-q07",
    "code": "Q07",
    "line": "Red",
    "name": "Q-07 Oriana",
    "inspiredBy": "Oriana",
    "brandReference": "Parfums de Marly",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Frutal",
      "Floral"
    ],
    "mainNotes": [
      "Crema Batida",
      "Malvavisco",
      "Grosella Negra",
      "Frambuesa",
      "Mandarina",
      "Flor de Naranjo"
    ],
    "occasion": [
      "Diario",
      "Citas o momentos especiales",
      "Regalo"
    ],
    "intensity": "Equilibrado",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "femenino",
      "jovial",
      "dulce",
      "sofisticado"
    ],
    "featured": false,
    "description": "Un festín de texturas suaves. Un malvavisco crujiente de mandarina y frambuesa bañado en una rica crema batida de vainilla y flor de azahar."
  },
  {
    "id": "r-q08",
    "code": "Q08",
    "line": "Red",
    "name": "Q-08 Attrape-Rêves",
    "inspiredBy": "Attrape-Rêves",
    "brandReference": "Louis Vuitton",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Fresco",
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Lichi de Madagascar",
      "Polvo de Cacao",
      "Peonía fresca",
      "Pachulí noble",
      "Rosa de Grasse",
      "Jengibre chispeante"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Equilibrado",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "soñador",
      "romántico",
      "moderno",
      "fresco"
    ],
    "featured": false,
    "description": "Una fragancia fascinante que combina cacao crudo con el lichi fresco, peonías salvajes y jengibre chispeante. Una estela mágica y magnética."
  },
  {
    "id": "r-q09",
    "code": "Q09",
    "line": "Red",
    "name": "Q-09 Bleecker Street",
    "inspiredBy": "Bleecker Street",
    "brandReference": "Bond N°9",
    "gender": "Mujer",
    "family": [
      "Amaderado",
      "Fresco"
    ],
    "aromaType": [
      "Fresco",
      "Maderoso",
      "Verde"
    ],
    "mainNotes": [
      "Hojas de Violeta",
      "Arándano azul",
      "Gamuza",
      "Maderas de Roble",
      "Jazmín",
      "Canela",
      "Caramelo sutil"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Red Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-red.jpg",
    "tags": [
      "premium",
      "nicho",
      "urbano",
      "distintivo",
      "unisex"
    ],
    "featured": false,
    "description": "Una mezcla sofisticada del Soho neoyorquino. Abre con hojas verdes de violeta y arándanos, reposando sobre una base de gamuza, maderas y pachulí."
  },
  {
    "id": "b-q51",
    "code": "Q51",
    "line": "Black",
    "name": "Q-51 Santal 33",
    "inspiredBy": "Santal 33",
    "brandReference": "Le Labo",
    "gender": "Hombre",
    "family": [
      "Amaderado",
      "Floral"
    ],
    "aromaType": [
      "Maderoso",
      "Fresco",
      "Aromático"
    ],
    "mainNotes": [
      "Sándalo de Australia",
      "Cardamomo de India",
      "Iris polvoso",
      "Papiro",
      "Cuero suave",
      "Cedro",
      "Cypriol"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Citas o momentos especiales"
    ],
    "intensity": "Intenso",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "icono",
      "nicho",
      "amaderado",
      "intelectual"
    ],
    "featured": true,
    "description": "La leyenda de las fragancias de nicho. Combina sándalo cremoso, papiro y cardamomo para evocar el olor de una biblioteca antigua o el bosque."
  },
  {
    "id": "b-q52",
    "code": "Q52",
    "line": "Black",
    "name": "Q-52 Ombré Leather",
    "inspiredBy": "Ombré Leather",
    "brandReference": "Tom Ford",
    "gender": "Hombre",
    "family": [
      "Amaderado",
      "Cuero"
    ],
    "aromaType": [
      "Cuero",
      "Cálido",
      "Especiado"
    ],
    "mainNotes": [
      "Cuero negro",
      "Gamuza",
      "Cardamomo",
      "Jazmín Sambac",
      "Pachulí",
      "Ámbar",
      "Musgo"
    ],
    "occasion": [
      "Salidas de noche",
      "Otoño / invierno",
      "Citas o momentos especiales"
    ],
    "intensity": "Intenso",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "salvaje",
      "sofisticado",
      "cuero",
      "noche"
    ],
    "featured": true,
    "description": "Una fragancia táctil y profundamente sensual de cuero negro premium que se funde en la piel, envuelta en jazmín dulce y cardamomo."
  },
  {
    "id": "b-q53",
    "code": "Q53",
    "line": "Black",
    "name": "Q-53 Silver Mountain Water",
    "inspiredBy": "Silver Mountain Water",
    "brandReference": "Creed",
    "gender": "Hombre",
    "family": [
      "Cítrico",
      "Amaderado"
    ],
    "aromaType": [
      "Fresco",
      "Cítrico",
      "Aromático"
    ],
    "mainNotes": [
      "Mandarina",
      "Bergamota",
      "Naranja",
      "Té verde",
      "Gálbano",
      "Sándalo",
      "Almizcle blanco"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "aireado",
      "limpio",
      "elegante",
      "gélido"
    ],
    "featured": false,
    "description": "Inspirada en el aire vigorizante y puro de los Alpes suizos. Una ola cítrica y crujiente de té verde, grosellas y sándalo."
  },
  {
    "id": "b-q54",
    "code": "Q54",
    "line": "Black",
    "name": "Q-54 Aventus Edp",
    "inspiredBy": "Aventus",
    "brandReference": "Creed",
    "gender": "Hombre",
    "family": [
      "Amaderado",
      "Frutal"
    ],
    "aromaType": [
      "Fresco",
      "Frutal",
      "Maderoso"
    ],
    "mainNotes": [
      "Piña ahumada",
      "Bergamota",
      "Abedul silvestre",
      "Cuero",
      "Manzana",
      "Pachulí",
      "Musgo de roble",
      "Ámbar"
    ],
    "occasion": [
      "Oficina / trabajo",
      "Citas o momentos especiales",
      "Salidas de noche"
    ],
    "intensity": "Intenso",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "rey",
      "poderoso",
      "lider",
      "atractivo"
    ],
    "featured": true,
    "description": "La fragancia del éxito. Un choque audaz de piña madura y manzana con el amargor del abedul ahumado, cuero y musgo. Súper masculino."
  },
  {
    "id": "b-q55",
    "code": "Q55",
    "line": "Black",
    "name": "Q-55 Neroli Portofino",
    "inspiredBy": "Neroli Portofino",
    "brandReference": "Tom Ford",
    "gender": "Hombre",
    "family": [
      "Cítrico",
      "Floral"
    ],
    "aromaType": [
      "Cítrico",
      "Fresco",
      "Floral"
    ],
    "mainNotes": [
      "Nerolí de Italia",
      "Limón de Sicilia",
      "Bergamota de Calabria",
      "Lavanda",
      "Flor de azahar",
      "Romero",
      "Ámbar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "cítrico",
      "italiano",
      "limpio",
      "fresco"
    ],
    "featured": false,
    "description": "Una oda a la Riviera italiana. Limones jugosos, bergamota fresca y flores de azahar flotando sobre una brisa marina y cálido ámbar."
  },
  {
    "id": "b-q56",
    "code": "Q56",
    "line": "Black",
    "name": "Q-56 Born in Roma Uomo",
    "inspiredBy": "Born in Roma Uomo",
    "brandReference": "Valentino",
    "gender": "Hombre",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Aromático",
      "Dulce",
      "Madera"
    ],
    "mainNotes": [
      "Sales minerales",
      "Violeta noble",
      "Jazmín",
      "Jengibre",
      "Vainilla ahumada",
      "Benjuí",
      "Cachemira"
    ],
    "occasion": [
      "Diario",
      "Salidas de noche",
      "Citas o momentos especiales"
    ],
    "intensity": "Equilibrado",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "moderno",
      "rebelde",
      "romano",
      "atractivo"
    ],
    "featured": false,
    "description": "Un aroma amaderado con un toque rebelde. Notas de sal mineral and violeta noble contrastadas con jengibre aromático y una rica vainilla."
  },
  {
    "id": "b-q57",
    "code": "Q57",
    "line": "Black",
    "name": "Q-57 Erba Pura",
    "inspiredBy": "Erba Pura",
    "brandReference": "Xerjoff",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Amaderada"
    ],
    "aromaType": [
      "Dulce",
      "Frutal",
      "Cálido"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Mandarina",
      "Pera madura",
      "Melón dulce",
      "Piña",
      "Ámbar gris seco",
      "Almizcle blanco",
      "Vainilla de Bourbon"
    ],
    "occasion": [
      "Salidas de noche",
      "Citas o momentos especiales",
      "Regalo"
    ],
    "intensity": "Intenso",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "frutal-dulce",
      "bomba",
      "festivo",
      "duradero"
    ],
    "featured": true,
    "description": "Una canasta de frutas deliciosas, frescas y dulces en la salida, que transita hacia un fondo denso, ambarino y sumamente duradero de almizcles."
  },
  {
    "id": "b-q58",
    "code": "Q58",
    "line": "Black",
    "name": "Q-58 L'immensité",
    "inspiredBy": "L'immensité",
    "brandReference": "Louis Vuitton",
    "gender": "Hombre",
    "family": [
      "Fougère",
      "Amaderada"
    ],
    "aromaType": [
      "Fresco",
      "Acuático",
      "Cítrico"
    ],
    "mainNotes": [
      "Jengibre fresco",
      "Limón amargo",
      "Acorde marino",
      "Salvia",
      "Romero",
      "Ámbar gris",
      "Cuero sutil",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "ultra-fresco",
      "lujo",
      "limpio",
      "elegante"
    ],
    "featured": false,
    "description": "Una bocanada de viento infinito. Combina el crujir del jengibre fresco y el limón con notas saladas marinas y un elegante fondo de ámbar y cuero."
  },
  {
    "id": "b-q59",
    "code": "Q59",
    "line": "Black",
    "name": "Q-59 Marly Althair",
    "inspiredBy": "Althair",
    "brandReference": "Parfums de Marly",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Vainilla"
    ],
    "aromaType": [
      "Dulce",
      "Especiado",
      "Cálido"
    ],
    "mainNotes": [
      "Vainilla de Bourbon",
      "Flor de Azahar",
      "Bergamota",
      "Cardamomo",
      "Canela",
      "Almizcle",
      "Madera de Guayaco"
    ],
    "occasion": [
      "Salidas de noche",
      "Otoño / invierno",
      "Citas o momentos especiales"
    ],
    "intensity": "Intenso",
    "format": "Black Parfums 100 ml",
    "priceKey": "redBlack100",
    "stock": "Disponible",
    "image": "/images/perfume-black.jpg",
    "tags": [
      "premium",
      "vainilla",
      "invierno",
      "cálido",
      "elegante"
    ],
    "featured": false,
    "description": "Una majestuosa oda a la vainilla bourbon, refinada y especiada con cardamomo y canela, envuelta en maderas nobles y almizcle cremoso."
  },
  {
    "id": "j-j00",
    "code": "J00",
    "line": "Teen Girl",
    "name": "J-00 Cloud Teen Girl",
    "inspiredBy": "Cloud",
    "brandReference": "Ariana Grande",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Gourmand",
      "Polvoso"
    ],
    "mainNotes": [
      "Crema de Coco",
      "Praliné",
      "Orquídea de vainilla",
      "Lavanda",
      "Pera jugosa",
      "Crema batida"
    ],
    "occasion": [
      "Diario",
      "Salidas de noche",
      "Citas o momentos especiales"
    ],
    "intensity": "Cálido",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "juvenil",
      "dulce",
      "coco",
      "viral"
    ],
    "featured": true,
    "description": "Un perfume soñador e irresistiblemente dulce que se siente como flotar en una nube. Con una deliciosa base de coco, praliné y lavanda."
  },
  {
    "id": "j-j01",
    "code": "J01",
    "line": "Teen Girl",
    "name": "J-01 Fantasy Teen Girl",
    "inspiredBy": "Fantasy",
    "brandReference": "Britney Spears",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Frutal",
      "Gourmand"
    ],
    "mainNotes": [
      "Chocolate blanco",
      "Cupcake",
      "Lichi rojo",
      "Kiwi",
      "Jazmín",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Regalo"
    ],
    "intensity": "Cálido",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "dulce",
      "divertido",
      "goloso"
    ],
    "featured": false,
    "description": "Una pócima de amor juguetona y sumamente dulce. Combina frutas exóticas con la tentación del chocolate blanco, cupcake y almizcle cremoso."
  },
  {
    "id": "j-j02",
    "code": "J02",
    "line": "Teen Girl",
    "name": "J-02 Selena Teen Girl",
    "inspiredBy": "Selena",
    "brandReference": "Selena Gomez",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Frutal",
      "Gourmand"
    ],
    "mainNotes": [
      "Frambuesa",
      "Durazno",
      "Piña",
      "Fresa",
      "Chocolate",
      "Vainilla"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Regalo"
    ],
    "intensity": "Equilibrado",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "juvenil",
      "selena",
      "floral",
      "frutal",
      "gourmand"
    ],
    "description": "Un perfume alegre y juguetón. Una mezcla de frutas tropicales deliciosas como piña y frambuesa con un dulce corazón de chocolate y vainilla."
  },
  {
    "id": "j-j03",
    "code": "J03",
    "line": "Teen Girl",
    "name": "J-03 Bombshell Teen Girl",
    "inspiredBy": "Bombshell",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Maracuyá",
      "Toronja",
      "Fresa",
      "Peonía",
      "Orquídea vainilla",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Regalo"
    ],
    "intensity": "Fresco",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "juvenil",
      "bombshell",
      "floral",
      "frutal"
    ],
    "description": "Inspirado en Bombshell de Victoria's Secret. Una fragancia chispeante y fresca de frutas exóticas y flores brillantes, ideal para destacar con energía."
  },
  {
    "id": "j-j04",
    "code": "J04",
    "line": "Teen Girl",
    "name": "J-04 Thank U, Next Teen Girl",
    "inspiredBy": "Thank U, Next",
    "brandReference": "Ariana Grande",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Frutal",
      "Gourmand"
    ],
    "mainNotes": [
      "Pera jugosa",
      "Frambuesa silvestre",
      "Crema de Coco",
      "Pétalos de Rosa pink",
      "Macarrón dulce",
      "Almizcle velvet"
    ],
    "occasion": [
      "Diario",
      "Regalo",
      "Salidas de noche"
    ],
    "intensity": "Cálido",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "juvenil",
      "thank u, next",
      "floral",
      "frutal",
      "gourmand"
    ],
    "description": "Inspirado en Thank U, Next de Ariana Grande. Abre con pera y frambuesa salvaje, fundiéndose en un adictivo corazón de crema de coco y galleta de macarrón."
  },
  {
    "id": "j-j05",
    "code": "J05",
    "line": "Teen Girl",
    "name": "J-05 Meow Teen Girl",
    "inspiredBy": "Meow",
    "brandReference": "Katy Perry",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Gourmand",
      "Polvoso"
    ],
    "mainNotes": [
      "Pera",
      "Tangerina",
      "Gardenia",
      "Vainilla",
      "Almizcle",
      "Sándalo",
      "Ámbar"
    ],
    "occasion": [
      "Diario",
      "Regalo"
    ],
    "intensity": "Cálido",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "juvenil",
      "meow",
      "floral",
      "frutal",
      "gourmand"
    ],
    "description": "Inspirado en Meow de Katy Perry. Un aroma sumamente tierno y dulce con notas de pera y tangerina que se mezclan con vainilla cremosa, almizcle y sándalo."
  },
  {
    "id": "j-j06",
    "code": "J06",
    "line": "Teen Girl",
    "name": "J-06 Sweet Like Candy Teen Girl",
    "inspiredBy": "Sweet Like Candy",
    "brandReference": "Ariana Grande",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Frutal",
      "Gourmand"
    ],
    "mainNotes": [
      "Mora de zarza",
      "Bergamota",
      "Crema batida",
      "Malvavisco",
      "Vainilla",
      "Madera de cachemira"
    ],
    "occasion": [
      "Diario",
      "Regalo",
      "Citas o momentos especiales"
    ],
    "intensity": "Cálido",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen.jpg",
    "tags": [
      "teen",
      "juvenil",
      "sweet like candy",
      "floral",
      "frutal",
      "gourmand"
    ],
    "description": "Inspirado en Sweet Like Candy de Ariana Grande. Una explosión golosa de moras jugosas y crema batida mezcladas con esponjosos malvaviscos y vainilla."
  },
  {
    "id": "j-j07",
    "code": "J07",
    "line": "Teen Boy",
    "name": "J-07 Legacy Teen Boy",
    "inspiredBy": "Legacy",
    "brandReference": "Cristiano Ronaldo",
    "gender": "Hombre",
    "family": [
      "Amaderado",
      "Aromático"
    ],
    "aromaType": [
      "Fresco",
      "Maderoso",
      "Especiado"
    ],
    "mainNotes": [
      "Manzana verde",
      "Lavanda",
      "Romero",
      "Pimienta",
      "Vetiver",
      "Cedro"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Deportivo"
    ],
    "intensity": "Fresco",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen-boy.jpg",
    "tags": [
      "teen",
      "masculino",
      "deportivo",
      "limpio"
    ],
    "featured": false,
    "description": "Para los jóvenes decididos y llenos de energía. Un aroma fresco y limpio de lavanda, manzana crujiente y maderas masculinas de cedro."
  },
  {
    "id": "j-j08",
    "code": "J08",
    "line": "Teen Boy",
    "name": "J-08 Spirit of the Brave Teen Boy",
    "inspiredBy": "Spirit of the Brave",
    "brandReference": "Diesel",
    "gender": "Hombre",
    "family": [
      "Amaderado",
      "Aromático"
    ],
    "aromaType": [
      "Maderoso",
      "Fresco",
      "Especiado"
    ],
    "mainNotes": [
      "Bergamota",
      "Gálbano",
      "Ciprés",
      "Abeto",
      "Labdanum",
      "Habatonka"
    ],
    "occasion": [
      "Diario",
      "Oficina / trabajo",
      "Deportivo"
    ],
    "intensity": "Equilibrado",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen-boy.jpg",
    "tags": [
      "teen",
      "juvenil",
      "spirit of the brave",
      "amaderado",
      "aromático"
    ],
    "description": "Inspirado en Spirit of the Brave de Neymar Diesel. Un perfume con actitud fresca y maderosa, que combina ciprés verde y bergamota sobre un fondo de abeto."
  },
  {
    "id": "j-j09",
    "code": "J09",
    "line": "Teen Boy",
    "name": "J-09 Invictus Aqua Teen Boy",
    "inspiredBy": "Invictus Aqua",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Acuático"
    ],
    "aromaType": [
      "Fresco",
      "Acuático",
      "Cítrico"
    ],
    "mainNotes": [
      "Pomelo amargo",
      "Hojas de violeta",
      "Notas marinas",
      "Palo de rosa",
      "Ámbar gris",
      "Madera de ámbar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Fresco",
    "format": "Teen 50 ml",
    "priceKey": "teen50",
    "stock": "Disponible",
    "image": "/images/perfume-teen-boy.jpg",
    "tags": [
      "teen",
      "juvenil",
      "invictus aqua",
      "fougere",
      "acuático"
    ],
    "description": "Inspirado en Invictus Aqua de Paco Rabanne. Una oleada ultra fresca de notas marinas saladas y pomelo enérgico, ideal para días de calor y deporte."
  },
  {
    "id": "l-76",
    "code": "L76",
    "line": "Lavit Edición Carnaval",
    "name": "Lavit 76",
    "inspiredBy": "Cheirosa 76",
    "brandReference": "Sol de Janeiro",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Solar"
    ],
    "mainNotes": [
      "Flor de orquídea negra",
      "Cassis de medianoche",
      "Caramelo",
      "Sándalo cálido",
      "Pachulí",
      "Vainilla"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano"
    ],
    "intensity": "Cálido",
    "format": "Lavit / Body Splash",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit-76.png",
    "tags": [
      "body-splash",
      "verano",
      "fresco",
      "solar",
      "dulce"
    ],
    "featured": true,
    "description": "Un splash corporal irresistible y alegre con notas embriagadoras de orquídea negra, caramelo tibio y sándalo, evocando atardeceres de playa."
  },
  {
    "id": "l-59",
    "code": "L59",
    "line": "Lavit Edición Carnaval",
    "name": "Lavit 59",
    "inspiredBy": "Cheirosa 59",
    "brandReference": "Sol de Janeiro",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Fresco",
      "Solar"
    ],
    "mainNotes": [
      "Violeta de terciopelo",
      "Orquídea de vainilla",
      "Ámbar puro",
      "Sándalo cremoso",
      "Almizcle de piel"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Lavit / Body Splash",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit-59.png",
    "tags": [
      "body-splash",
      "relajante",
      "limpio",
      "orquidea"
    ],
    "featured": false,
    "description": "Un aroma brillante, dulce y aireado que combina la suavidad de las violetas con una cálida orquídea de vainilla y ámbar. Súper reconfortante."
  },
  {
    "id": "l-71",
    "code": "L71",
    "line": "Lavit Edición Carnaval",
    "name": "Lavit 71",
    "inspiredBy": "Cheirosa 71",
    "brandReference": "Sol de Janeiro",
    "gender": "Mujer",
    "family": [
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Gourmand"
    ],
    "mainNotes": [
      "Vainilla caramelizada",
      "Nuez de macadamia tostada",
      "Chocolate blanco",
      "Sal marina de coco",
      "Caramelo tibio"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Otoño / invierno"
    ],
    "intensity": "Cálido",
    "format": "Lavit / Body Splash",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit-71.png",
    "tags": [
      "body-splash",
      "gourmand",
      "galleta",
      "dulce-extremo"
    ],
    "featured": true,
    "description": "Una delicia gourmand absoluta. Huele a galletas recién horneadas con nueces tostadas, caramelo de sal marina y chocolate blanco cremoso."
  },
  {
    "id": "l-68",
    "code": "L68",
    "line": "Lavit Edición Carnaval",
    "name": "Lavit 68",
    "inspiredBy": "Cheirosa 68",
    "brandReference": "Sol de Janeiro",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Fresco",
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Fruta del dragón rosa",
      "Lichi",
      "Jazmín de Brasil",
      "Hibisco",
      "Vainilla sheer",
      "Almizcle solar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano"
    ],
    "intensity": "Fresco",
    "format": "Lavit / Body Splash",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit-68.png",
    "tags": [
      "body-splash",
      "fresco",
      "lavit",
      "sol de janeiro",
      "cheirosa 68"
    ],
    "description": "Inspirado en Cheirosa 68 de Sol de Janeiro. Transporta tus sentidos a los jardines abundantes frente al mar de Brasil. Notas de fruta del dragón, lichi y jazmín de agua."
  },
  {
    "id": "l-62",
    "code": "L62",
    "line": "Lavit Edición Carnaval",
    "name": "Lavit 62",
    "inspiredBy": "Cheirosa 62",
    "brandReference": "Sol de Janeiro",
    "gender": "Mujer",
    "family": [
      "Gourmand"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Gourmand"
    ],
    "mainNotes": [
      "Pistacho tostado",
      "Almendra",
      "Helotropo",
      "Pétalos de Jazmín",
      "Caramelo salado",
      "Sándalo",
      "Vainilla"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Otoño / invierno"
    ],
    "intensity": "Cálido",
    "format": "Lavit / Body Splash",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit-62.png",
    "tags": [
      "body-splash",
      "fresco",
      "lavit",
      "sol de janeiro",
      "cheirosa 62"
    ],
    "description": "Inspirado en Cheirosa 62 de Sol de Janeiro. El aroma icónico del verano brasileño. Una mezcla ultra adictiva de pistacho tostado, almendras dulces y caramelo salado."
  },
  {
    "id": "l-fos-210",
    "code": "L-FOS210",
    "line": "Lavit",
    "name": "Fruits of Summer Body Splash (210 ml)",
    "inspiredBy": "Fruits of Summer",
    "brandReference": "Escada",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Dulce", "Frutal", "Fresco"],
    "mainNotes": ["Fresas", "Piña", "Frambuesa", "Durazno", "Vainilla", "Almizcle"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Fresco",
    "format": "210 ml",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit/fruits-of-summer.png",
    "tags": ["lavit", "fruits of summer", "body splash", "210 ml", "fresco", "frutal"],
    "description": "Una deliciosa fragancia frutal inspirada en Escada, repleta de notas alegres de frutas de verano, bayas dulces y un fondo cálido y suave en presentación de 210 ml."
  },
  {
    "id": "l-fos-50",
    "code": "L-FOS50",
    "line": "Lavit",
    "name": "Fruits of Summer Body Splash (50 ml)",
    "inspiredBy": "Fruits of Summer",
    "brandReference": "Escada",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Dulce", "Frutal", "Fresco"],
    "mainNotes": ["Fresas", "Piña", "Frambuesa", "Durazno", "Vainilla", "Almizcle"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Fresco",
    "format": "50 ml",
    "priceKey": "lavitBodySplash50",
    "stock": "Disponible",
    "image": "/images/lavit/fruits-of-summer.png",
    "tags": ["lavit", "fruits of summer", "body splash", "50 ml", "fresco", "frutal"],
    "description": "Una deliciosa fragancia frutal inspirada en Escada, repleta de notas de frutas de verano y bayas dulces en una cómoda y práctica presentación de 50 ml."
  },
  {
    "id": "l-tc-210",
    "code": "L-TC210",
    "line": "Lavit",
    "name": "Tropical Caribbean Coconut Passion (210 ml)",
    "inspiredBy": "Coconut Passion",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": ["Floral", "Gourmand"],
    "aromaType": ["Dulce", "Cálido", "Solar"],
    "mainNotes": ["Bergamota", "Limón", "Naranja", "Pachulí", "Coco", "Caramelo", "Leche de coco", "Vainilla", "Sándalo", "Almizcle blanco", "Vaina de tonka"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Cálido",
    "format": "210 ml",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit/tropical-caribbean.png",
    "tags": ["lavit", "tropical caribbean", "coconut passion", "body splash", "210 ml", "dulce", "coco"],
    "description": "Fragancia corporal cálida e irresistible con ricas notas de coco, vainilla y un toque de caramelo y sándalo en su presentación de 210 ml."
  },
  {
    "id": "l-tc-50",
    "code": "L-TC50",
    "line": "Lavit",
    "name": "Tropical Caribbean Coconut Passion (50 ml)",
    "inspiredBy": "Coconut Passion",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": ["Floral", "Gourmand"],
    "aromaType": ["Dulce", "Cálido", "Solar"],
    "mainNotes": ["Bergamota", "Limón", "Naranja", "Pachulí", "Coco", "Caramelo", "Leche de coco", "Vainilla", "Sándalo", "Almizcle blanco", "Vaina de tonka"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Cálido",
    "format": "50 ml",
    "priceKey": "lavitBodySplash50",
    "stock": "Disponible",
    "image": "/images/lavit/tropical-caribbean.png",
    "tags": ["lavit", "tropical caribbean", "coconut passion", "body splash", "50 ml", "dulce", "coco"],
    "description": "Fragancia corporal cálida e irresistible con ricas notas de coco, vainilla y caramelo en su práctica presentación de viaje de 50 ml."
  },
  {
    "id": "l-fy-210",
    "code": "L-FY210",
    "line": "Lavit",
    "name": "Forever Young Black Raspberry (210 ml)",
    "inspiredBy": "Black Raspberry & Vanilla",
    "brandReference": "Bath & Body Works",
    "gender": "Mujer",
    "family": ["Frutal", "Gourmand"],
    "aromaType": ["Dulce", "Frutal"],
    "mainNotes": ["Frambuesa negra", "Mora silvestre", "Vainilla", "Sándalo", "Almizcle"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Equilibrado",
    "format": "210 ml",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit/forever-young.png",
    "tags": ["lavit", "forever young", "black raspberry", "body splash", "210 ml", "dulce", "frambuesa"],
    "description": "Una fragancia jugosa y dulce que combina la frambuesa negra y moras silvestres sobre una rica base de vainilla en formato de 210 ml."
  },
  {
    "id": "l-fy-50",
    "code": "L-FY50",
    "line": "Lavit",
    "name": "Forever Young Black Raspberry (50 ml)",
    "inspiredBy": "Black Raspberry & Vanilla",
    "brandReference": "Bath & Body Works",
    "gender": "Mujer",
    "family": ["Frutal", "Gourmand"],
    "aromaType": ["Dulce", "Frutal"],
    "mainNotes": ["Frambuesa negra", "Mora silvestre", "Vainilla", "Sándalo", "Almizcle"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Equilibrado",
    "format": "50 ml",
    "priceKey": "lavitBodySplash50",
    "stock": "Disponible",
    "image": "/images/lavit/forever-young.png",
    "tags": ["lavit", "forever young", "black raspberry", "body splash", "50 ml", "dulce", "frambuesa"],
    "description": "Una fragancia jugosa y dulce que combina la frambuesa negra y moras silvestres sobre una rica base de vainilla en formato de 50 ml."
  },
  {
    "id": "l-fg-210",
    "code": "L-FG210",
    "line": "Lavit",
    "name": "Fresh Garden Rock in Rio (210 ml)",
    "inspiredBy": "Rock in Rio",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Fresco", "Frutal"],
    "mainNotes": ["Mandarina", "Piña", "Papaya", "Flor de Loto", "Sándalo", "Coco"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Fresco",
    "format": "210 ml",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit/fresh-garden.png",
    "tags": ["lavit", "fresh garden", "rock in rio", "body splash", "210 ml", "fresco", "frutal"],
    "description": "Inspirada en la frescura de Rock in Rio. Con notas cítricas y exóticas de piña y papaya, combinadas con sándalo y coco en presentación de 210 ml."
  },
  {
    "id": "l-fg-50",
    "code": "L-FG50",
    "line": "Lavit",
    "name": "Fresh Garden Rock in Rio (50 ml)",
    "inspiredBy": "Rock in Rio",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Fresco", "Frutal"],
    "mainNotes": ["Mandarina", "Piña", "Papaya", "Flor de Loto", "Sándalo", "Coco"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Fresco",
    "format": "50 ml",
    "priceKey": "lavitBodySplash50",
    "stock": "Disponible",
    "image": "/images/lavit/fresh-garden.png",
    "tags": ["lavit", "fresh garden", "rock in rio", "body splash", "50 ml", "fresco", "frutal"],
    "description": "Inspirada en la frescura de Rock in Rio. Con notas cítricas y exóticas de piña y papaya, combinadas con sándalo y coco en presentación de 50 ml."
  },
  {
    "id": "l-fol-210",
    "code": "L-FOL210",
    "line": "Lavit",
    "name": "Fantasy of Love Pink Chiffon (210 ml)",
    "inspiredBy": "Pink Chiffon",
    "brandReference": "Bath & Body Works",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Dulce", "Frutal", "Fresco"],
    "mainNotes": ["Manzana roja", "Durazno", "Piña", "Flores de jazmín", "Lirio acuático", "Pétalos de rosa cristalizados", "Leche de coco", "Vainilla", "Sándalo cremoso", "Almizcle", "Tonka"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Equilibrado",
    "format": "210 ml",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit/fantasy-of-love.png",
    "tags": ["lavit", "fantasy of love", "pink chiffon", "body splash", "210 ml", "dulce", "vainilla"],
    "description": "Femenina y sofisticada mezcla de flores y frutas exóticas con una rica base de vainilla sheer, leche de coco y sándalo cremoso en formato de 210 ml."
  },
  {
    "id": "l-fol-50",
    "code": "L-FOL50",
    "line": "Lavit",
    "name": "Fantasy of Love Pink Chiffon (50 ml)",
    "inspiredBy": "Pink Chiffon",
    "brandReference": "Bath & Body Works",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Dulce", "Frutal", "Fresco"],
    "mainNotes": ["Manzana roja", "Durazno", "Piña", "Flores de jazmín", "Lirio acuático", "Pétalos de rosa cristalizados", "Leche de coco", "Vainilla", "Sándalo cremoso", "Almizcle", "Tonka"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Equilibrado",
    "format": "50 ml",
    "priceKey": "lavitBodySplash50",
    "stock": "Disponible",
    "image": "/images/lavit/fantasy-of-love.png",
    "tags": ["lavit", "fantasy of love", "pink chiffon", "body splash", "50 ml", "dulce", "vainilla"],
    "description": "Femenina y sofisticada mezcla de flores y frutas exóticas con una rica base de vainilla sheer, leche de coco y sándalo cremoso en formato de 50 ml."
  },
  {
    "id": "l-sr-210",
    "code": "L-SR210",
    "line": "Lavit",
    "name": "Sweet Romance Sheer Love (210 ml)",
    "inspiredBy": "Sheer Love",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Dulce", "Fresco", "Frutal"],
    "mainNotes": ["Papaya", "Toronja roja", "Limonada helada", "Mango", "Melón", "Flor de fresa", "Manzana verde", "Caramelo", "Sándalo blanco", "Almizcles suaves"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Fresco",
    "format": "210 ml",
    "priceKey": "lavitBodySplash210",
    "stock": "Disponible",
    "image": "/images/lavit/sweet-romance.png",
    "tags": ["lavit", "sweet romance", "sheer love", "body splash", "210 ml", "dulce", "fresco"],
    "description": "Una vibrante explosión frutal y floral con notas de papaya, mango, melón y suave sándalo blanco en su presentación de 210 ml."
  },
  {
    "id": "l-sr-50",
    "code": "L-SR50",
    "line": "Lavit",
    "name": "Sweet Romance Sheer Love (50 ml)",
    "inspiredBy": "Sheer Love",
    "brandReference": "Victoria's Secret",
    "gender": "Mujer",
    "family": ["Floral", "Frutal"],
    "aromaType": ["Dulce", "Fresco", "Frutal"],
    "mainNotes": ["Papaya", "Toronja roja", "Limonada helada", "Mango", "Melón", "Flor de fresa", "Manzana verde", "Caramelo", "Sándalo blanco", "Almizcles suaves"],
    "occasion": ["Diario", "Primavera / verano"],
    "intensity": "Fresco",
    "format": "50 ml",
    "priceKey": "lavitBodySplash50",
    "stock": "Disponible",
    "image": "/images/lavit/sweet-romance.png",
    "tags": ["lavit", "sweet romance", "sheer love", "body splash", "50 ml", "dulce", "fresco"],
    "description": "Una vibrante explosión frutal y floral con notas de papaya, mango, melón y suave sándalo blanco en su presentación de 50 ml."
  },
  {
    "id": "l-pack-lavit",
    "code": "L-PACK-LAVIT",
    "line": "Lavit",
    "name": "Pack Lavit (Body Splash + Hydra Cream)",
    "inspiredBy": "Pack Lavit",
    "brandReference": "Lavit Parfums",
    "gender": "Mujer",
    "family": ["Floral", "Frutal", "Gourmand"],
    "aromaType": ["Dulce", "Fresco", "Cálido"],
    "mainNotes": ["Fantasy of Love", "Tropical Caribbean", "Sweet Romance"],
    "occasion": ["Regalo", "Citas o momentos especiales"],
    "intensity": "Equilibrado",
    "format": "Pack Promocional",
    "priceKey": "lavitPack",
    "stock": "Disponible",
    "image": "/images/lavit/lavit-pack.png",
    "tags": ["lavit", "pack", "promocion", "body splash", "hydra cream", "regalo"],
    "description": "Pack Promocional Lavit: Incluye un Body Splash y una Crema Corporal Hydra Cream a elección entre los aromas Fantasy of Love, Tropical Caribbean o Sweet Romance."
  },
  {
    "id": "s-s01",
    "code": "S01",
    "line": "S-400",
    "name": "S-01 Woman",
    "inspiredBy": "Woman",
    "brandReference": "Ralph Laurent",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Maderoso"
    ],
    "aromaType": [
      "Floral",
      "Maderoso"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Madera de Cedro"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "woman",
      "femenino",
      "elegante",
      "floral",
      "maderoso"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Woman de Ralph Laurent. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s02",
    "code": "S02",
    "line": "S-400",
    "name": "S-02 Oscar De La Renta",
    "inspiredBy": "Oscar De La Renta",
    "brandReference": "Oscar de la Renta",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Clavel",
      "Nardo",
      "Ylang-Ylang",
      "Sándalo",
      "Lavanda",
      "Ámbar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "oscar de la renta",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Oscar De La Renta de Oscar de la Renta. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s03",
    "code": "S03",
    "line": "S-400",
    "name": "S-03 Chanel No. 5",
    "inspiredBy": "Chanel No. 5",
    "brandReference": "Chanel",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Aldehídico"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Aldehídos",
      "Ylang-Ylang",
      "Iris",
      "Jazmín",
      "Rosa de Grasse",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "chanel no. 5",
      "femenino",
      "elegante",
      "floral",
      "aldehídico"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Chanel No. 5 de Chanel. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s04",
    "code": "S04",
    "line": "S-400",
    "name": "S-04 Tresor",
    "inspiredBy": "Tresor",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Durazno maduro",
      "Damasco",
      "Rosa de Damasco",
      "Lichi",
      "Sándalo",
      "Vainilla"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "tresor",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Tresor de Lancome. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s05",
    "code": "S05",
    "line": "S-400",
    "name": "S-05 Carolina Herrera",
    "inspiredBy": "Carolina Herrera",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Floral"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "carolina herrera",
      "femenino",
      "elegante",
      "floral",
      "floral"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Carolina Herrera de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s06",
    "code": "S06",
    "line": "S-400",
    "name": "S-06 212 Heroes For Her",
    "inspiredBy": "212 Heroes For Her",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 heroes for her",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 Heroes For Her de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s07",
    "code": "S07",
    "line": "S-400",
    "name": "S-07 Anais - Anais",
    "inspiredBy": "Anais - Anais",
    "brandReference": "Cacharel",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Fresco"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Azucena",
      "Jacinto",
      "Madreselva",
      "Flor de azahar",
      "Jazmín",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "anais - anais",
      "femenino",
      "elegante",
      "floral",
      "fresco"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Anais - Anais de Cacharel. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s08",
    "code": "S08",
    "line": "S-400",
    "name": "S-08 O De Lancome",
    "inspiredBy": "O De Lancome",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Chypre"
    ],
    "aromaType": [
      "Cítrico",
      "Chypre",
      "Fresco"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Bergamota de Calabria",
      "Mandarina",
      "Pomelo rosa",
      "Nerolí",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "o de lancome",
      "femenino",
      "elegante",
      "cítrico",
      "chypre"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en O De Lancome de Lancome. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s09",
    "code": "S09",
    "line": "S-400",
    "name": "S-09 212 Carolina Herrera",
    "inspiredBy": "212 Carolina Herrera",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Floral"
    ],
    "aromaType": [
      "Floral"
    ],
    "mainNotes": [
      "Flor de Azahar",
      "Lirio",
      "Gardenia",
      "Jazmín",
      "Maderas blancas",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 carolina herrera",
      "femenino",
      "elegante",
      "floral",
      "floral"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 Carolina Herrera de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s10",
    "code": "S10",
    "line": "S-400",
    "name": "S-10 Eden",
    "inspiredBy": "Eden",
    "brandReference": "Cacharel",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Melón",
      "Durazno",
      "Loto",
      "Nenúfar",
      "Pachulí",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "eden",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Eden de Cacharel. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s11",
    "code": "S11",
    "line": "S-400",
    "name": "S-11 Can Can",
    "inspiredBy": "Can Can",
    "brandReference": "Paris Hilton",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "can can",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Can Can de Paris Hilton. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s12",
    "code": "S12",
    "line": "S-400",
    "name": "S-12 Olympea",
    "inspiredBy": "Olympea",
    "brandReference": "Paco Rabanne",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla salada",
      "Jazmín acuático",
      "Flor de jengibre",
      "Ámbar gris",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "olympea",
      "femenino",
      "elegante",
      "oriental",
      "floral"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Olympea de Paco Rabanne. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s13",
    "code": "S13",
    "line": "S-400",
    "name": "S-13 Ck One",
    "inspiredBy": "Ck One",
    "brandReference": "Calvin Klein",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Limón",
      "Bergamota",
      "Piña",
      "Té verde",
      "Jazmín",
      "Cedro"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "ck one",
      "femenino",
      "elegante",
      "cítrico",
      "maderoso"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Ck One de Calvin Klein. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s14",
    "code": "S14",
    "line": "S-400",
    "name": "S-14 J'adore",
    "inspiredBy": "J'adore",
    "brandReference": "Dior",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Fresco",
      "Sofisticado"
    ],
    "mainNotes": [
      "Pera jugosa",
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Melón",
      "Orquídea",
      "Mora silvestre"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "j'adore",
      "lujoso",
      "floral-rico",
      "elegante"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en J'adore de Dior. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s15",
    "code": "S15",
    "line": "S-400",
    "name": "S-15 Nina",
    "inspiredBy": "Nina",
    "brandReference": "Nina Ricci",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Limón de Amalfi",
      "Manzana caramelizada",
      "Praliné",
      "Peonía",
      "Madera de manzano"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "nina",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Nina de Nina Ricci. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s16",
    "code": "S16",
    "line": "S-400",
    "name": "S-16 Ralph",
    "inspiredBy": "Ralph",
    "brandReference": "Ralph Lauren",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Fresco",
      "Frutal",
      "Cítrico"
    ],
    "mainNotes": [
      "Manzana verde",
      "Fresia blanca",
      "Hojas de Mandarina",
      "Almizcle azul",
      "Iris blanco"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "ralph",
      "fresco",
      "juvenil",
      "limpio",
      "cítrico"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Ralph de Ralph Lauren. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s17",
    "code": "S17",
    "line": "S-400",
    "name": "S-17 Be Delicious",
    "inspiredBy": "Be Delicious",
    "brandReference": "Donna Karan",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Manzana verde",
      "Pepino fresco",
      "Toronja",
      "Lirio de los valles",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "be delicious",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Be Delicious de Donna Karan. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s18",
    "code": "S18",
    "line": "S-400",
    "name": "S-18 Lolita Lempicka",
    "inspiredBy": "Lolita Lempicka",
    "brandReference": "Lolita Empicka",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "lolita lempicka",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Lolita Lempicka de Lolita Empicka. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s19",
    "code": "S19",
    "line": "S-400",
    "name": "S-19 La Nuit Tresor",
    "inspiredBy": "La Nuit Tresor",
    "brandReference": "Lancome",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Vainilla pura"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "la nuit tresor",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en La Nuit Tresor de Lancome. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s20",
    "code": "S20",
    "line": "S-400",
    "name": "S-20 Tommy Girl",
    "inspiredBy": "Tommy Girl",
    "brandReference": "Tommy Hilfiger",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Verde"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Hojas de Violeta"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "tommy girl",
      "femenino",
      "elegante",
      "floral",
      "verde"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Tommy Girl de Tommy Hilfiger. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s21",
    "code": "S21",
    "line": "S-400",
    "name": "S-21 212 Vip",
    "inspiredBy": "212 Vip",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 vip",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 Vip de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s22",
    "code": "S22",
    "line": "S-400",
    "name": "S-22 Amor Amor",
    "inspiredBy": "Amor Amor",
    "brandReference": "Cacharel",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "amor amor",
      "femenino",
      "elegante",
      "oriental",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Amor Amor de Cacharel. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s23",
    "code": "S23",
    "line": "S-400",
    "name": "S-23 Halloween",
    "inspiredBy": "Halloween",
    "brandReference": "Jesús Del Pozo",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Frutal"
    ],
    "aromaType": [
      "Floral",
      "Frutal"
    ],
    "mainNotes": [
      "Violeta noble",
      "Notas marinas",
      "Plátano verde",
      "Magnolia",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "halloween",
      "femenino",
      "elegante",
      "floral",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Halloween de Jesús Del Pozo. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s24",
    "code": "S24",
    "line": "S-400",
    "name": "S-24 212 Sexy",
    "inspiredBy": "212 Sexy",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Pimienta rosa",
      "Mandarina",
      "Algodón de azúcar",
      "Gardenia",
      "Vainilla"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 sexy",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 Sexy de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s25",
    "code": "S25",
    "line": "S-400",
    "name": "S-25 Light Blue",
    "inspiredBy": "Light Blue",
    "brandReference": "Dolce & Gabbana",
    "gender": "Mujer",
    "family": [
      "Cítrico",
      "Maderoso"
    ],
    "aromaType": [
      "Cítrico",
      "Fresco",
      "Aireado"
    ],
    "mainNotes": [
      "Limón de Sicilia",
      "Manzana Granny Smith",
      "Cedro de Virginia",
      "Jazmín",
      "Bambú",
      "Ámbar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "light blue",
      "cítrico",
      "fresco",
      "limpio",
      "verano"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Light Blue de Dolce & Gabbana. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s26",
    "code": "S26",
    "line": "S-400",
    "name": "S-26 Acqua Di Gioia",
    "inspiredBy": "Acqua Di Gioia",
    "brandReference": "Armani",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Verde"
    ],
    "aromaType": [
      "Floral",
      "Fresco"
    ],
    "mainNotes": [
      "Jazmín Sambac",
      "Rosa de Damasco",
      "Nardo silvestre",
      "Peonía",
      "Almizcle blanco",
      "Hojas de Violeta"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "acqua di gioia",
      "femenino",
      "elegante",
      "floral",
      "verde"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Acqua Di Gioia de Armani. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s27",
    "code": "S27",
    "line": "S-400",
    "name": "S-27 La Vida es Bella",
    "inspiredBy": "La Vida es Bella",
    "brandReference": "Lancôme",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Dulce",
      "Floral",
      "Polvoso"
    ],
    "mainNotes": [
      "Iris Pallida",
      "Praliné dulce",
      "Vainilla pura",
      "Grosella negra",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "la vida es bella",
      "dulce",
      "alegre",
      "exitoso"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en La Vida es Bella de Lancôme. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s28",
    "code": "S28",
    "line": "S-400",
    "name": "S-28 Good Girl",
    "inspiredBy": "Good Girl",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Oriental",
      "Floral"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Floral"
    ],
    "mainNotes": [
      "Almendra dulce",
      "Nardo silvestre",
      "Haba Tonka",
      "Cacao oscuro",
      "Jazmín Sambac"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "good girl",
      "elegante",
      "sofisticado",
      "popular"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Good Girl de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s29",
    "code": "S29",
    "line": "S-400",
    "name": "S-29 My Way",
    "inspiredBy": "My Way",
    "brandReference": "Giorgio Armani",
    "gender": "Mujer",
    "family": [
      "Floral",
      "Oriental"
    ],
    "aromaType": [
      "Floral",
      "Oriental"
    ],
    "mainNotes": [
      "Flor de Azahar",
      "Nardo de la India",
      "Jazmín",
      "Vainilla Bourbon",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "my way",
      "femenino",
      "elegante",
      "floral",
      "oriental"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en My Way de Giorgio Armani. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s30",
    "code": "S30",
    "line": "S-400",
    "name": "S-30 212 VIP Rosé",
    "inspiredBy": "212 VIP Rosé",
    "brandReference": "Carolina Herrera",
    "gender": "Mujer",
    "family": [
      "Chypre",
      "Frutal"
    ],
    "aromaType": [
      "Frutal",
      "Fresco",
      "Floral"
    ],
    "mainNotes": [
      "Champagne Rosé",
      "Flor de Durazno",
      "Maderas Blancas",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-mujer.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 vip rosé",
      "festivo",
      "fresco",
      "alegre"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 VIP Rosé de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s100",
    "code": "S100",
    "line": "S-400",
    "name": "S-100 Phantom",
    "inspiredBy": "Phantom",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Lavanda enérgica",
      "Limón de Amalfi",
      "Vainilla cremosa",
      "Vetiver",
      "Madera de Cedro"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "phantom",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Phantom de Paco Rabanne. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s101",
    "code": "S101",
    "line": "S-400",
    "name": "S-101 Azzaro",
    "inspiredBy": "Azzaro",
    "brandReference": "Azzaro",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Anís estrellado",
      "Lavanda",
      "Albahaca",
      "Vetiver",
      "Sándalo",
      "Cuero"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "azzaro",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Azzaro de Azzaro. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s102",
    "code": "S102",
    "line": "S-400",
    "name": "S-102 Sauvage",
    "inspiredBy": "Sauvage",
    "brandReference": "Dior",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Maderoso"
    ],
    "aromaType": [
      "Fresco",
      "Cítrico",
      "Especiado"
    ],
    "mainNotes": [
      "Bergamota de Reggio",
      "Pimienta de Sichuan",
      "Ambroxan",
      "Lavanda",
      "Vetiver",
      "Pachulí"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "sauvage",
      "masculino",
      "imponente",
      "versátil",
      "fresco"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Sauvage de Dior. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s103",
    "code": "S103",
    "line": "S-400",
    "name": "S-103 Tommy",
    "inspiredBy": "Tommy",
    "brandReference": "Tommy Hilfiger",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Menta fresca",
      "Lavanda",
      "Manzana verde",
      "Flor de cactus",
      "Flor de algodonero"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "tommy",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Tommy de Tommy Hilfiger. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s104",
    "code": "S104",
    "line": "S-400",
    "name": "S-104 Paco Rabanne",
    "inspiredBy": "Paco Rabanne",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Lavanda",
      "Romero",
      "Miel",
      "Musgo de roble",
      "Ámbar",
      "Habatonka"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "paco rabanne",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Paco Rabanne de Paco Rabanne. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s105",
    "code": "S105",
    "line": "S-400",
    "name": "S-105 Carolina Herrera",
    "inspiredBy": "Carolina Herrera",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Maderoso"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "carolina herrera",
      "masculino",
      "varonil",
      "maderoso",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Carolina Herrera de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s106",
    "code": "S106",
    "line": "S-400",
    "name": "S-106 Agua Brava",
    "inspiredBy": "Agua Brava",
    "brandReference": "Puig",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Menta fresca"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "agua brava",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Agua Brava de Puig. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s107",
    "code": "S107",
    "line": "S-400",
    "name": "S-107 One Million",
    "inspiredBy": "One Million",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Frutal"
    ],
    "aromaType": [
      "Dulce",
      "Cálido",
      "Especiado"
    ],
    "mainNotes": [
      "Canela de Ceilán",
      "Cuero rubio",
      "Mandarina roja",
      "Menta fresca",
      "Rosa",
      "Ámbar"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "one million",
      "dulce",
      "audaz"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en One Million de Paco Rabanne. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s108",
    "code": "S108",
    "line": "S-400",
    "name": "S-108 Boss",
    "inspiredBy": "Boss",
    "brandReference": "Hugo Boss",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Manzana verde",
      "Ciruela",
      "Canela",
      "Madera de Caoba",
      "Vainilla",
      "Vetiver"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "boss",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Boss de Hugo Boss. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s109",
    "code": "S109",
    "line": "S-400",
    "name": "S-109 Polo Sport",
    "inspiredBy": "Polo Sport",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Aromático"
    ],
    "aromaType": [
      "Aromático",
      "Fougere"
    ],
    "mainNotes": [
      "Menta",
      "Aldehídos",
      "Lavanda",
      "Bergamota",
      "Pastos marinos",
      "Madera de pino"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "polo sport",
      "masculino",
      "varonil",
      "fougere",
      "aromático"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Polo Sport de Ralph Lauren. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s110",
    "code": "S110",
    "line": "S-400",
    "name": "S-110 212 Vip Men",
    "inspiredBy": "212 Vip Men",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Maderoso"
    ],
    "aromaType": [
      "Maderoso",
      "Oriental"
    ],
    "mainNotes": [
      "Maracuyá",
      "Jengibre",
      "Pimienta negra",
      "Vodka",
      "Ginebra",
      "Cuero"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 vip men",
      "masculino",
      "varonil",
      "oriental",
      "maderoso"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 Vip Men de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s111",
    "code": "S111",
    "line": "S-400",
    "name": "S-111 Xs Black Men",
    "inspiredBy": "Xs Black Men",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Frutal"
    ],
    "aromaType": [
      "Maderoso",
      "Frutal"
    ],
    "mainNotes": [
      "Madera de Cedro",
      "Sándalo",
      "Vetiver",
      "Pachulí",
      "Madera de Gaiac",
      "Pera jugosa"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "xs black men",
      "masculino",
      "varonil",
      "maderoso",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Xs Black Men de Paco Rabanne. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s112",
    "code": "S112",
    "line": "S-400",
    "name": "S-112 Acqua Di Gio",
    "inspiredBy": "Acqua Di Gio",
    "brandReference": "Giorgio Armani",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Cítrico"
    ],
    "aromaType": [
      "Maderoso",
      "Cítrico",
      "Fresco"
    ],
    "mainNotes": [
      "Notas marinas",
      "Limón",
      "Lima",
      "Jazmín",
      "Durazno",
      "Ámbar gris"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "acqua di gio",
      "masculino",
      "varonil",
      "maderoso",
      "cítrico"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Acqua Di Gio de Giorgio Armani. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s113",
    "code": "S113",
    "line": "S-400",
    "name": "S-113 212 For Men",
    "inspiredBy": "212 For Men",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Verde"
    ],
    "aromaType": [
      "Maderoso",
      "Fresco"
    ],
    "mainNotes": [
      "Hojas verdes",
      "Especias",
      "Pomelo",
      "Jengibre",
      "Salvia",
      "Sándalo"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "212 for men",
      "masculino",
      "varonil",
      "maderoso",
      "verde"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en 212 For Men de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s114",
    "code": "S114",
    "line": "S-400",
    "name": "S-114 Invictus",
    "inspiredBy": "Invictus",
    "brandReference": "Paco Rabanne",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fresco",
      "Acuático",
      "Dinámico"
    ],
    "mainNotes": [
      "Notas Marinas saladas",
      "Pomelo amargo",
      "Madera de Gaiac",
      "Laurel",
      "Ámbar gris"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "invictus",
      "deportivo",
      "juvenil",
      "fresco",
      "activo"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Invictus de Paco Rabanne. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s115",
    "code": "S115",
    "line": "S-400",
    "name": "S-115 Polo Blue Men",
    "inspiredBy": "Polo Blue Men",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Maderoso",
      "Frutal"
    ],
    "aromaType": [
      "Maderoso",
      "Frutal"
    ],
    "mainNotes": [
      "Melón de Cavaillon",
      "Pepino",
      "Mandarina",
      "Albahaca",
      "Salvia",
      "Almizcle"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "polo blue men",
      "masculino",
      "varonil",
      "maderoso",
      "frutal"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Polo Blue Men de Ralph Lauren. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s116",
    "code": "S116",
    "line": "S-400",
    "name": "S-116 Polo Red",
    "inspiredBy": "Polo Red",
    "brandReference": "Ralph Lauren",
    "gender": "Hombre",
    "family": [
      "Fougere",
      "Oriental"
    ],
    "aromaType": [
      "Fougere",
      "Oriental"
    ],
    "mainNotes": [
      "Lavanda francesa",
      "Romero",
      "Musgo",
      "Geranio",
      "Haba Tonka",
      "Vainilla pura"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "polo red",
      "masculino",
      "varonil",
      "fougere",
      "oriental"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Polo Red de Ralph Lauren. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  },
  {
    "id": "s-s117",
    "code": "S117",
    "line": "S-400",
    "name": "S-117 Bad Boy",
    "inspiredBy": "Bad Boy",
    "brandReference": "Carolina Herrera",
    "gender": "Hombre",
    "family": [
      "Oriental",
      "Especiado"
    ],
    "aromaType": [
      "Especiado",
      "Oriental"
    ],
    "mainNotes": [
      "Vainilla pura",
      "Ámbar",
      "Haba Tonka",
      "Canela",
      "Azafrán",
      "Pimienta negra"
    ],
    "occasion": [
      "Diario",
      "Primavera / verano",
      "Deportivo"
    ],
    "intensity": "Ligero",
    "format": "Colonia S-400",
    "priceKey": "coloniaS400",
    "stock": "Disponible",
    "image": "/images/perfume-hombre.jpg",
    "tags": [
      "colonia",
      "s-400",
      "fresco",
      "suave",
      "bad boy",
      "masculino",
      "varonil",
      "oriental",
      "especiado"
    ],
    "description": "Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en Bad Boy de Carolina Herrera. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."
  }
];

export const products = allProducts.filter(p => !['J', 'S', 'L'].some(prefix => p.code.startsWith(prefix)));
