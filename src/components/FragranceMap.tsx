import { useState, useMemo } from "react";
import { Sparkles, Eye, Check, ShoppingBag, Search } from "lucide-react";
import { Button } from "./ui/button";
import { products } from "../data/products";
import { Product } from "../types/product";
import { ProductDetailModal } from "./ProductDetailModal";

interface FragranceMapProps {
  onAddProduct: (product: Product) => void;
  initialGender?: "Mujer" | "Hombre";
}

const getQuadrantStyles = (gender: "Mujer" | "Hombre", quadrantId: string, code?: string) => {
  const isPremium = code?.startsWith("Q");

  if (isPremium) {
    return {
      cardBg: "bg-gradient-to-br from-[#FAF6EE] via-white to-[#FAF6EE]/60 hover:from-[#F6EEDC] hover:via-white hover:to-[#FAF6EE] shadow-[0_4px_25px_rgba(212,175,55,0.08)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.18)] transition-all duration-300",
      cardBorder: "border-[#D4AF37]/70 hover:border-[#D4AF37] ring-1 ring-[#D4AF37]/20 hover:ring-[#D4AF37]/40",
      codeBg: "bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-white shadow-sm font-semibold",
      textColor: "text-[#5C4017]",
      badgeBg: "bg-amber-50 text-[#8B6508] border-[#D4AF37]/30 font-semibold"
    };
  }

  if (gender === "Mujer") {
    switch (quadrantId) {
      case "q1": // Ligero & Fresco-Frutal (Orange/Amber)
        return {
          cardBg: "bg-gradient-to-br from-amber-50/20 to-orange-50/20 hover:from-amber-50/40 hover:to-orange-50/40",
          cardBorder: "border-orange-200/50 hover:border-orange-300/80 hover:shadow-md",
          codeBg: "bg-orange-600 text-white",
          textColor: "text-orange-950",
          badgeBg: "bg-orange-50 text-orange-700 border-orange-100/80"
        };
      case "q2": // Ligero & Floral-Verde (Green/Emerald)
        return {
          cardBg: "bg-gradient-to-br from-emerald-50/20 to-teal-50/20 hover:from-emerald-50/40 hover:to-teal-50/40",
          cardBorder: "border-emerald-200/50 hover:border-emerald-300/80 hover:shadow-md",
          codeBg: "bg-emerald-600 text-white",
          textColor: "text-emerald-950",
          badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100/80"
        };
      case "q3": // Intenso & Chypre-Floral (Pink/Rose)
        return {
          cardBg: "bg-gradient-to-br from-rose-50/20 to-pink-50/20 hover:from-rose-50/40 hover:to-pink-50/40",
          cardBorder: "border-rose-200/50 hover:border-rose-300/80 hover:shadow-md",
          codeBg: "bg-rose-600 text-white",
          textColor: "text-rose-950",
          badgeBg: "bg-rose-50 text-rose-700 border-rose-100/80"
        };
      case "q4": // Intenso & Cálido-Oriental (Purple/Violet)
        return {
          cardBg: "bg-gradient-to-br from-purple-50/20 to-violet-50/20 hover:from-purple-50/40 hover:to-violet-50/40",
          cardBorder: "border-purple-200/50 hover:border-purple-300/80 hover:shadow-md",
          codeBg: "bg-purple-600 text-white",
          textColor: "text-purple-950",
          badgeBg: "bg-purple-50 text-purple-700 border-purple-100/80"
        };
      default:
        return {
          cardBg: "bg-[#FAF9F6]/40 hover:bg-white hover:shadow-md",
          cardBorder: "border-slate-100 hover:border-[#C6B9A5]/30",
          codeBg: "bg-[#42362C] text-white",
          textColor: "text-[#42362C]",
          badgeBg: "bg-slate-100 text-slate-600 border-slate-200"
        };
    }
  } else {
    // Masculinas (Hombre)
    switch (quadrantId) {
      case "q1": // Ligero & Cítrico-Acuático (Cyan/Blue)
        return {
          cardBg: "bg-gradient-to-br from-cyan-50/20 to-blue-50/20 hover:from-cyan-50/40 hover:to-blue-50/40",
          cardBorder: "border-cyan-200/50 hover:border-cyan-300/80 hover:shadow-md",
          codeBg: "bg-cyan-600 text-white",
          textColor: "text-cyan-950",
          badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-100/80"
        };
      case "q2": // Ligero & Maderoso-Aromático (Emerald/Green)
        return {
          cardBg: "bg-gradient-to-br from-emerald-50/20 to-green-50/20 hover:from-emerald-50/40 hover:to-green-50/40",
          cardBorder: "border-emerald-200/50 hover:border-emerald-300/80 hover:shadow-md",
          codeBg: "bg-emerald-600 text-white",
          textColor: "text-emerald-950",
          badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100/80"
        };
      case "q3": // Intenso & Fougère-Especiado (Violet/Indigo)
        return {
          cardBg: "bg-gradient-to-br from-violet-50/20 to-indigo-50/20 hover:from-violet-50/40 hover:to-indigo-50/40",
          cardBorder: "border-violet-200/50 hover:border-violet-300/80 hover:shadow-md",
          codeBg: "bg-violet-600 text-white",
          textColor: "text-violet-950",
          badgeBg: "bg-violet-50 text-violet-700 border-violet-100/80"
        };
      case "q4": // Intenso & Oriental-Maderoso (Amber/Orange)
        return {
          cardBg: "bg-gradient-to-br from-amber-100/20 to-orange-50/20 hover:from-amber-100/40 hover:to-orange-50/40",
          cardBorder: "border-amber-200/50 hover:border-amber-300/80 hover:shadow-md",
          codeBg: "bg-amber-600 text-white",
          textColor: "text-amber-950",
          badgeBg: "bg-amber-50 text-amber-850 border-amber-200"
        };
      default:
        return {
          cardBg: "bg-[#FAF9F6]/40 hover:bg-white hover:shadow-md",
          cardBorder: "border-slate-100 hover:border-[#C6B9A5]/30",
          codeBg: "bg-[#42362C] text-white",
          textColor: "text-[#42362C]",
          badgeBg: "bg-slate-100 text-slate-600 border-slate-200"
        };
    }
  }
};

const olfactoryFamilies = [
  { id: "citrico", name: "CÍTRICO", color: "bg-[#95C15E]", text: "text-white", desc: "Las fragancias cítricas, antiguas y abundantes, son composiciones basadas en el limón, la bergamota, el pomelo o la mandarina, entre otros cítricos, que se suman a notas aromáticas y ácidas en el caso de las fragancias masculinas y a notas florales en el caso de los perfumes de mujer." },
  { id: "frutal", name: "FRUTAL", color: "bg-[#E61575]", text: "text-white", desc: "El grupo olfativo frutal presenta notas de las más diversas frutas, como melocotones, fresas, piñas, melón, sandía, naranjas, o sea todas las frutas que tienen su aroma característico en la pulpa. Las fragancias de este grupo olfativo se reconocen por ser alegres y vibrantes, y por esta razón se encuentran más en los perfumes femeninos joviales." },
  { id: "chypre", name: "CHYPRE", color: "bg-[#F2C89E]", text: "text-[#5C4017]", desc: "El nombre de este grupo olfativo proviene de la fragancia Coty Chipre, creada en 1917. Su agudo aroma está basado en la armonía entre el musgo de roble, labdanum, el pachulí y la bergamota." },
  { id: "floral", name: "FLORAL", color: "bg-[#F08619]", text: "text-white", desc: "Este amplio grupo olfativo abarca multitud de composiciones de corazón floral: flor recién cortada, flores con acordes acuáticos, verde o apolvados, además de las variedades floral-afrutada, floral-dulce y floral con aldehídos." },
  { id: "verde", name: "VERDE", color: "bg-[#8CBB57]", text: "text-white", desc: "Las fragancias de este grupo desprenden un inconfundible aroma a hojas tiernas y hierba recién cortada, al que en ocasiones se suman el de té verde y de frutas sin madurar. La nota verde infunde frescor y optimismo, evoca lo natural, lo libre y lo juvenil." },
  { id: "almizclado", name: "ALMIZCLADO", color: "bg-[#6A1A1A]", text: "text-white", desc: "Lo que conocemos como almizcle o musk, que encontramos en la mayoría de perfumes es un fijador que además tiene un olor muy característico. Es un tipo de aroma que se identifica como animal o amaderado." },
  { id: "maderoso", name: "MADEROSO", color: "bg-[#EE7D17]", text: "text-white", desc: "Una composición que contenga ricas notas amaderadas en el corazón del perfume suele acentuarse con más notas de madera de fondo. El sándalo (cálido y misterioso), el cedro (seco y brusco) y el vetiver, junto a otros tipos de madera exótica y balsámica, se acompañan por lo general de notas cítricas y aromáticas." },
  { id: "oriental", name: "ORIENTAL", color: "bg-[#FDC500]", text: "text-[#5C4017]", desc: "Las fragancias orientales, con el ámbar como nota dominante, forman un grupo específico gracias a su gran calidez y a su sensualidad. son ricas composiciones que incluyen sustancias embriagadoras e intensas como el almizcle, la vainilla, resinas y maderas inusuales, a menudo acompañadas por especias y flores exóticas." },
  { id: "fougere", name: "FOUGERE", color: "bg-[#61B291]", text: "text-white", desc: "Helecho en castellano, designa a aquellos perfumes que evocan el ambiente de un bosque, con acordes de cumarina con lavanda y musgo de encina. Sus aromas son húmedos, frescos, amaderados y verdes con tonos dulces y amargos simultáneamente." },
  { id: "aldehidico", name: "ALDEHÍDICO", color: "bg-[#3BBFE3]", text: "text-white", desc: "Son compuestos sintéticos que se emplean en la perfumería para crear fragancias con el tipo de olor a limpio o al jabón. El representante más glamoroso de este grupo es el icónico Chanel Nº5." },
  { id: "aromatico", name: "AROMÁTICO", color: "bg-[#3B98D5]", text: "text-white", desc: "Las notas aromáticas suelen ser mezclas de salvia, romero, comino, lavanda y otras plantas con un intenso aroma a hierba y a especias. A menudo se combinan con notas cítricas y especiadas. Las composiciones más frecuentes se encuentran en las fragancias para hombres." },
  { id: "especiado", name: "ESPECIADO", color: "bg-[#E32636]", text: "text-white", desc: "Muy rica en especias, éstas incluyen variedades calientes como la canela, clavo de olor y especias finas como el cardamomo y el cilantro. en cuanto al comino, es una especia un poco diferente, porque aporta una nota animal a las composiciones." }
];

const getFamilyColor = (familyStr: string) => {
  const firstWord = familyStr.split(" ")[0].toLowerCase();
  
  const mapping: Record<string, string> = {
    "cítrico": "bg-[#95C15E] text-white",
    "frutal": "bg-[#E61575] text-white",
    "chypre": "bg-[#F2C89E] text-[#5C4017]",
    "floral": "bg-[#F08619] text-white",
    "verde": "bg-[#8CBB57] text-white",
    "almizclado": "bg-[#6A1A1A] text-white",
    "maderoso": "bg-[#EE7D17] text-white",
    "oriental": "bg-[#FDC500] text-[#5C4017]",
    "fougere": "bg-[#61B291] text-white",
    "aldehídico": "bg-[#3BBFE3] text-white",
    "aromático": "bg-[#3B98D5] text-white",
    "especiado": "bg-[#E32636] text-white"
  };

  return mapping[firstWord] || "bg-slate-200 text-slate-700";
};

interface MapCardProps {
  eq: any;
  catalogProduct: Product | undefined;
  gender: "Mujer" | "Hombre";
  addedIds: Record<string, boolean>;
  onAddProduct: (product: Product) => void;
  setAddedIds: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  onViewDetails: () => void;
}

function MapCard({ eq, catalogProduct, gender, addedIds, onAddProduct, setAddedIds, onViewDetails }: MapCardProps) {
  const isPremium = eq.code.startsWith("Q");
  const [selectedSize, setSelectedSize] = useState<"100ml" | "50ml" | "20ml">("100ml");

  const pId = catalogProduct ? catalogProduct.id : `custom-${eq.code.toLowerCase()}`;
  const isAdded = addedIds[`${pId}${!isPremium ? `-${selectedSize}` : ""}`] || addedIds[pId];
  const cardStyles = getQuadrantStyles(gender, eq.quadrantId, eq.code);

  const handleAdd = () => {
    let p = catalogProduct;
    if (!p) {
      p = {
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
        format: isPremium ? (gender === "Mujer" ? "Red Parfums 100 ml" : "Black Parfums 100 ml") : "100 ml",
        priceKey: isPremium ? "redBlack100" : "perfume100",
        stock: "Consultar",
        image: isPremium
          ? (gender === "Mujer" ? "/images/perfume-red.png" : "/images/perfume-black.png")
          : (gender === "Mujer" ? "/images/perfume-mujer.jpg" : "/images/perfume-hombre.jpg"),
        tags: [eq.family.toLowerCase()],
        description: `Fragancia equivalente premium de alta concentración inspirada en la mítica ${eq.inspiredBy} de ${eq.brand}.`
      };
    }

    const productToCart = { ...p };
    if (!isPremium) {
      productToCart.format = selectedSize;
      productToCart.priceKey = selectedSize === "100ml" ? "perfume100" : selectedSize === "50ml" ? "perfume50" : "perfume20";
      productToCart.id = `${p.id}-${selectedSize}`;
    }

    onAddProduct(productToCart);
    setAddedIds(prev => ({ ...prev, [productToCart.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [productToCart.id]: false }));
    }, 2000);
  };

  return (
    <div className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${cardStyles.cardBg} ${cardStyles.cardBorder}`}>
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider ${cardStyles.codeBg}`}>
              {eq.code}
            </span>
            {isPremium && (
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-[9px] font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-2.5 h-2.5 text-amber-100" />
                ALTA GAMA
              </span>
            )}
          </div>
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${getFamilyColor(eq.family)} shadow-sm`}>
            {eq.family}
          </span>
        </div>
        <h4 className={`font-bold text-sm truncate ${cardStyles.textColor}`} title={eq.name}>
          {eq.name}
        </h4>
        <p className="text-xs text-slate-500 leading-snug mt-1">
          Inspirado en: <strong className="text-slate-700">{eq.inspiredBy}</strong> ({eq.brand})
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {!isPremium ? (
            <div className="flex bg-slate-100/80 rounded p-0.5 gap-0.5">
              <button 
                onClick={() => setSelectedSize("20ml")}
                className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm transition-colors ${selectedSize === "20ml" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                20ml
              </button>
              <button 
                onClick={() => setSelectedSize("50ml")}
                className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm transition-colors ${selectedSize === "50ml" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                50ml
              </button>
              <button 
                onClick={() => setSelectedSize("100ml")}
                className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm transition-colors ${selectedSize === "100ml" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                100ml
              </button>
            </div>
          ) : (
            <span className="text-[10px] text-[#8B6508] font-bold bg-[#FAF8F5] px-2 py-1 rounded border border-[#D4AF37]/30">
              Premium 100ml
            </span>
          )}
          
          <div className="flex gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              onClick={onViewDetails}
              className="h-7 w-7 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50"
            >
              <Eye className="w-3.5 h-3.5" />
            </Button>
            <Button
              size="sm"
              onClick={handleAdd}
              className={`h-7 px-2.5 rounded-full text-[10px] font-bold transition-all ${
                isAdded
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-[#42362C] hover:bg-[#705E49] text-white"
              }`}
            >
              {isAdded ? (
                <Check className="w-3 h-3 mr-1" />
              ) : (
                <ShoppingBag className="w-3 h-3 mr-1" />
              )}
              {isAdded ? "Añadido" : "Elegir"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FragranceMap({ onAddProduct, initialGender = "Mujer" }: FragranceMapProps) {
  const [gender, setGender] = useState<"Mujer" | "Hombre">(initialGender);
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
          color: "from-cyan-50 to-blue-50 hover:to-blue-100/50",
          textColor: "text-cyan-800",
          border: "border-cyan-200/60"
        },
        {
          id: "q2",
          name: "Ligero & Maderoso-Aromático",
          description: "Elegancia relajada para el día, oficina y deporte",
          families: ["Maderoso Frutal", "Maderoso Floral", "Maderoso Aromático", "Aromático"],
          color: "from-emerald-50 to-green-50 hover:to-green-100/50",
          textColor: "text-emerald-800",
          border: "border-emerald-200/60"
        },
        {
          id: "q3",
          name: "Intenso & Fougère-Especiado",
          description: "Aromas viriles, tradicionales y con presencia",
          families: ["Fougere Aromático", "Chypre Aromático"],
          color: "from-violet-50 to-indigo-50 hover:to-indigo-100/50",
          textColor: "text-violet-800",
          border: "border-violet-200/60"
        },
        {
          id: "q4",
          name: "Intenso & Oriental-Maderoso",
          description: "Seducción nocturna, cueros ahumados y vainillas ricas",
          families: ["Oriental Frutal", "Fougere Maderoso", "Fougere Oriental", "Chypre Maderoso", "Maderoso Oriental", "Oriental Especiado"],
          color: "from-amber-100/40 to-orange-50 hover:to-orange-100/50",
          textColor: "text-amber-900",
          border: "border-amber-200"
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
      { code: "F18", name: "F-18 Carolina Herrera", inspiredBy: "Carolina Herrera", brand: "Carolina Herrera", family: "Floral Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F20", name: "F-20 Eternity", inspiredBy: "Eternity", brand: "Calvin Klein", family: "Floral Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F26", name: "F-26 Paris", inspiredBy: "Paris", brand: "Yves Saint Laurent", family: "Floral Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F29", name: "F-29 212 Carolina Herrera", inspiredBy: "212 Carolina Herrera", brand: "Carolina Herrera", family: "Floral Floral", gender: "Mujer", quadrantId: "q3" },
      { code: "F47", name: "F-47 La Vida es Bella Rosé", inspiredBy: "La Vida es Bella Rosé", brand: "Lancôme", family: "Floral Chypre", gender: "Mujer", quadrantId: "q3" },

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
      { code: "F09", name: "F-09 Tresor", inspiredBy: "Tresor", brand: "Lancôme", family: "Floral Frutal", gender: "Mujer", quadrantId: "q4" },

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
      { code: "H07", name: "H-07 212 Heroes Men", inspiredBy: "212 Heroes Men", brand: "Carolina Herrera", family: "Fougere Frutal", gender: "Hombre", quadrantId: "q1" },

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

    return list.filter(item => item.gender === gender);
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

    return [...result].sort((a, b) => {
      const aIsPremium = a.code.startsWith("Q");
      const bIsPremium = b.code.startsWith("Q");
      if (aIsPremium && !bIsPremium) return -1;
      if (!aIsPremium && bIsPremium) return 1;
      return a.code.localeCompare(b.code);
    });
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
        intensity: code.startsWith("Q") ? "Intenso" : "Equilibrado",
        format: code.startsWith("Q") ? (gender === "Mujer" ? "Red Parfums 100 ml" : "Black Parfums 100 ml") : "100 ml",
        priceKey: code.startsWith("Q") ? "redBlack100" : "perfume100",
        stock: "Consultar",
        image: code.startsWith("Q")
          ? (gender === "Mujer" ? "/images/perfume-red.png" : "/images/perfume-black.png")
          : (gender === "Mujer" ? "/images/perfume-mujer.jpg" : "/images/perfume-hombre.jpg"),
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
                return (
                  <MapCard 
                    key={eq.code}
                    eq={eq}
                    catalogProduct={catalogProduct}
                    gender={gender}
                    addedIds={addedIds}
                    onAddProduct={onAddProduct}
                    setAddedIds={setAddedIds}
                    onViewDetails={() => handleViewDetails(eq.code)}
                  />
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

        {/* GLOSARIO DE FAMILIAS OLFATIVAS */}
        <div className="mt-12 bg-white rounded-2xl border border-[#C6B9A5]/20 p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#42362C]">Glosario de Familias Olfativas</h3>
            <p className="text-[#8C785C] text-sm mt-2">Descubre los ingredientes y la personalidad detrás de cada familia olfativa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {olfactoryFamilies.map((family) => (
              <div key={family.id} className="flex flex-col sm:flex-row gap-4 border-b border-slate-50 pb-4 sm:border-0 sm:pb-0">
                <div className={`shrink-0 sm:w-28 h-10 sm:h-auto py-2 sm:py-0 flex items-center justify-center rounded font-bold text-xs tracking-wider shadow-sm ${family.color} ${family.text}`}>
                  {family.name}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed text-justify">
                  {family.desc}
                </p>
              </div>
            ))}
          </div>
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
